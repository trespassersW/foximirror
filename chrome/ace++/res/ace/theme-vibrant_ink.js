define("ace/theme/vibrant_ink",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-vibrant-ink";
exports.cssText = "\
.ace-vibrant-ink .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-vibrant-ink .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-vibrant-ink .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-vibrant-ink .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-vibrant-ink .ace_scroller {\
  background-color: #0F0F0F;\
}\
\
.ace-vibrant-ink .ace_text-layer {\
  cursor: text;\
  color: #FFFFFF;\
}\
\
.ace-vibrant-ink .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace-vibrant-ink .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace-vibrant-ink .ace_marker-layer .ace_selection {\
  background: #6699CC;\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #404040;\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_active_line {\
  background: #333333;\
}\
\
.ace-vibrant-ink .ace_marker-layer .ace_selected_word {\
  border: 1px solid #6699CC;\
}\
       \
.ace-vibrant-ink .ace_invisible {\
  color: #404040;\
}\
\
.ace-vibrant-ink .ace_keyword {\
  color:#FF6600;\
}\
\
.ace-vibrant-ink .ace_constant {\
  color:#339999;\
}\
\
.ace-vibrant-ink .ace_constant.ace_numeric {\
  color:#99CC99;\
}\
\
.ace-vibrant-ink .ace_invalid {\
  color:#CCFF33;\
background-color:#000000;\
}\
\
.ace-vibrant-ink .ace_invalid.ace_deprecated {\
  color:#CCFF33;\
background-color:#000000;\
}\
\
.ace-vibrant-ink .ace_fold {\
    background-color: #FFCC00;\
    border-color: #FFFFFF;\
}\
\
.ace-vibrant-ink .ace_support.ace_function {\
  color:#FFCC00;\
}\
\
.ace-vibrant-ink .ace_string {\
  color:#66FF00;\
}\
\
.ace-vibrant-ink .ace_string.ace_regexp {\
  color:#44B4CC;\
}\
\
.ace-vibrant-ink .ace_comment {\
  color:#9933CC;\
}\
\
.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name {\
  font-style:italic;\
color:#99CC99;\
}\
\
.ace-vibrant-ink .ace_entity.ace_name.ace_function {\
  color:#FFCC00;\
}\
\
.ace-vibrant-ink .ace_markup.ace_underline {\
    text-decoration:underline;\
}";

var dom = require("ace/lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

