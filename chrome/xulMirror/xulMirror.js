//*****************************************//
var {classes: Cc, interfaces: Ci, utils: Cu, results: Cr} = Components;

//Form elements
var codebox = null;


function doOnload(){
	wrap = $("wrap")
	gBrowser = $("content")
	content = gBrowser.contentWindow
	
	// sadia must inspect content
	shadia.defWindow = gBrowser

	Firebug.Ace.initialize({
		win2: {id:"code", starter:FBL.bind(xulMirror.initialize, xulMirror)}
	})

}

function doOnUnload(){
	Firebug.Ace.shutdown()
	xulMirror.shutdown()
}

toggleOrient = function(){
	var or = wrap.style.MozBoxOrient=='horizontal'?'vertical':'horizontal'
	wrap.style.MozBoxOrient=or
	wrap.children[1].setAttribute("orient",or)
	wrap.children[1].firstChild.removeAttribute("height")
	wrap.children[1].firstChild.removeAttribute("width")
}


/**======================-==-======================*/

var codeCache = {}, sessions = {}, Templates = {}, gTemplate, gTemplateName
var contentTypes = {
	getContextMenuItems: function(_, target){
		var id = target.id
		var selectedContentType = 'text/html'
		
	}
}

xulMirrorDataSource = function(a, query, ext, editGlue){
	return codeCache[a] || (codeCache[a] = sessions[a].getValue())
}

xulMirror = {
	initialize: function(aceWindow) {
		codebox = Firebug.Ace.win2.editor
		
		codebox.addCommands({
			execute: updatePreview
		})

		preprocessTemplates()
		
		
		for each(var i in ["main", "binding", "overlay"]) {
			sessions[i] = aceWindow.createSession("", '', "text/xml")
			sessions[i].autocompletionType = 'xul';
			sessions[i].on("change", onChange)
		}

		loadTemplate(gTemplateName)
	
		// make sure editGlue is initialized
		$shadia.editGlue.setDataSource("xulMirror", xulMirrorDataSource)

		tabSelect('main')
		updatePreview()
		codebox.focus()
		content.location = 'edit:@xulMirror`main.xul'
	},
	//* * * * * * * * * * * * * * * * * * * * * * * * *

	shutdown: function() {
		$shadia.editGlue.removeDataSource("xulMirror")
		if(currentTemplateChanged() && gTemplateName[gTemplateName.length-1]!='\u2217')
			gTemplateName += '\u2217'
		
		saveTemplates()
	},

};
//-----------------------------------------------------------------------------
function tabSelect(id){
	codebox.setSession(sessions[id])
	gSessionId = id
}

var changeTimeout = null, gSessionId = null, gAutoUpdate = true
onChange = function(){
	codeCache[gSessionId] = ''
	if(!gAutoUpdate)
		return


	clearTimeout(changeTimeout)
	changeTimeout = setTimeout(updatePreview, 700, null)
	return
}
updatePreview_inBrowser = function(){
	content.location = 'edit:@xulMirror`main.xul'
}
var dWin
updatePreview_detached = function(){
	if(!dWin || dWin.closed){
		dWin = $shadia.openWindow('edit:@xulMirror`main.xul')
	}else
		dWin.location = 'edit:@xulMirror`main.xul'
}
updatePreview = updatePreview_inBrowser
toggleDetach = function(button){
	if(updatePreview == updatePreview_inBrowser){
		updatePreview = updatePreview_detached
		button.label = 'undetach'
		$("split").setAttribute("state", "collapsed")
		$("codebox").appendChild(button.parentNode)
	}else{
		$("split").setAttribute("state", "")
		updatePreview = updatePreview_inBrowser
		button.label = 'detach'
		$("contentbox").appendChild(button.parentNode)
	}
	updatePreview()
}
//-----------------------------------------------------------------------------

preprocessTemplates = function(){
	var file = Firebug.Ace.getUserFile("foxiMirror")
	file.append("xulMirrorTemplate.json")
	if(file.exists())
		var txt = readEntireFile(file)
	
	if(txt){
		gTemplateName = txt.substring(0, txt.indexOf("\n")).trim()
	}else{
		var href = location.href
		href = href.slice(0, href.lastIndexOf('/') + 1) + "templates.json"
		var txt = makeReq(href)
		gTemplateName = "template1"
	}
	
	var a = txt.split(/!@!===/)

	for(var i = 1; i < a.length; i++){
		var s = a[i]
		if(!s)
			continue;
		var i1 = s.indexOf('{')
		var i2 = s.lastIndexOf('}')
		
		var body = s.substring(i1 + 1, i2).trim()
		var name = s.substring(0, i1).trim()
		
		i1 = name.lastIndexOf('.')
		var type = name.substr(i1 + 1)
		name = s.substring(0, i1)

		if(!Templates[name])
			Templates[name] = {}
		Templates[name][type] = body
	}
}
currentTemplateChanged = function(){
	var t = Templates[gTemplateName]
	if(!t)
		return true
	
	for(var i in sessions){
		if(t[i] != sessions[i].getValue())
			return true		
	}
	return false
}
updateCurrentTemplate = function(){
	var t = Templates[gTemplateName] = {}
	
	for(var i in sessions){
		t[i] = sessions[i].getValue()		
	}
}
packTemplate = function(name){
	var t = Templates[name]
	var ans = "\n"
	for(var i in t){
		var val = t[i]
		if(val)
			ans += '!@!===' + name + '.' + i + "    {\n\n" +
				val + "\n\n\n}\n"
	}
	return ans
}
loadTemplate =  function(name){
	gTemplate = Templates[name]
	gTemplateName = name
	
	winTitle.update(name)
	for(var i in sessions){
		codeCache[i] = gTemplate[i] || ""
		sessions[i].setValue(codeCache[i])
		winTitle.track(sessions[i])
	}
}
saveTemplates = function(){
	updateCurrentTemplate()
	
	var t = gTemplateName		
	for (var i in Templates){
		t += packTemplate(i)
	}
	file = Firebug.Ace.getUserFile("foxiMirror")
	file.append("xulMirrorTemplate.json")
	writeToFile(file, t)
}
cleanupDirtyState = function(){
	delete Templates[gTemplateName]
	gTemplateName = winTitle.clearName(gTemplateName)
	winTitle.update(gTemplateName)
	delete Templates[gTemplateName]
	
	for(var i in sessions){
		winTitle.track(sessions[i])
	}
}
deleteTemplete = function(name){
	name = prompt('are yo sure you want to delete', name)
	if(!name)
		return
		
	delete Templates[name]
	if(gTemplateName == name){
		for(var i in Templates)
			break				
		gTemplateName = i || 'newTemplate'
		
		loadTemplate(gTemplateName)
	}
	saveTemplates()
	
}

// save and load
Firebug.Ace.savePopupShowing = function(popup) {
	FBL.eraseNode(popup)
	FBL.createMenuItem(popup, {
		label: 'save File As',
			command: function(){
				Firebug.Ace.saveFile(codebox)
			}
		});
	FBL.createMenuItem(popup, {
		label: 'save "' + gTemplateName + '"',
			command: function(){
				cleanupDirtyState()
				saveTemplates()
			}
		});
	FBL.createMenuItem(popup, {
		label: 'save "' + gTemplateName  + '" As',
			command: function(){
				var newName = prompt('enter name')
				gTemplateName = newName.trim()
				saveTemplates()
			}
		});
	FBL.createMenuItem(popup, {
		label: 'delete "' + gTemplateName + '""',
			command: function(){
				deleteTemplete(gTemplateName)
			}
		});
}

Firebug.Ace.loadPopupShowing = function(popup) {
	FBL.eraseNode(popup)
	for(var i in Templates){
		FBL.createMenuItem(popup, {
			label: i,
			command: function(){
				loadTemplate(this.label)
				updatePreview()
				var a = this.parentNode.querySelectorAll("[checked]")
				dump(a.length)
				for(var i = a.length; i--;){
					if(a[i] != this)
						a[i].removeAttribute("checked")
				}				
			},
			type: 'checkbox',
			checked: i == gTemplateName
		});
	}
	FBL.createMenuItem(popup, "-")
	FBL.createMenuItem(popup, {
		label: 'new Template',
			command: function(){
				var newName = prompt('enter name')				
				gTemplateName = newName.trim()
				Templates[gTemplateName] = {}
				loadTemplate(gTemplateName)
				saveTemplates()
			}
		});
	FBL.createMenuItem(popup, {
		label: 'load File',
			command: function(){
				Firebug.Ace.loadFile(codebox)
			}
		});
}



winTitle = {
	update: function(name){
		document.title = 'XULMirror - ' + name
	},
	clearName: function(name){
		if(name[name.length-1]=='\u2217'){
			name = name.slice(0, -1)
		}
		
		return name
	},
	track: function(session){
		var l = function(){
		
			session.removeEventListener(l)
			winTitle.update(winTitle.clearName(gTemplateName)+'\u2217')
		}
		session.on("change", l)
	},
}



