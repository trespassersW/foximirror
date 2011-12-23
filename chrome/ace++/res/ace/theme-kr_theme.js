define("ace/theme/kr_theme",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-kr-theme";
exports.cssText = "\
.ace-kr-theme .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-kr-theme .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-kr-theme .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-kr-theme .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-kr-theme .ace_scroller {\
  background-color: #0B0A09;\
}\
\
.ace-kr-theme .ace_text-layer {\
  cursor: text;\
  color: #FCFFE0;\
}\
\
.ace-kr-theme .ace_cursor {\
  border-left: 2px solid #FF9900;\
}\
\
.ace-kr-theme .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FF9900;\
}\
 \
.ace-kr-theme .ace_marker-layer .ace_selection {\
  background: rgba(170, 0, 255, 0.45);\
}\
\
.ace-kr-theme .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-kr-theme .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 177, 111, 0.32);\
}\
\
.ace-kr-theme .ace_marker-layer .ace_active_line {\
  background: #38403D;\
}\
\
.ace-kr-theme .ace_marker-layer .ace_selected_word {\
  border: 1px solid rgba(170, 0, 255, 0.45);\
}\
       \
.ace-kr-theme .ace_invisible {\
  color: rgba(255, 177, 111, 0.32);\
}\
\
.ace-kr-theme .ace_keyword {\
  color:#949C8B;\
}\
\
.ace-kr-theme .ace_constant {\
  color:rgba(210, 117, 24, 0.76);\
}\
\
.ace-kr-theme .ace_invalid {\
  color:#F8F8F8;\
background-color:#A41300;\
}\
\
.ace-kr-theme .ace_support {\
  color:#9FC28A;\
}\
\
.ace-kr-theme .ace_fold {\
    background-color: #949C8B;\
    border-color: #FCFFE0;\
}\
\
.ace-kr-theme .ace_support.ace_function {\
  color:#85873A;\
}\
\
.ace-kr-theme .ace_string.ace_regexp {\
  color:rgba(125, 255, 192, 0.65);\
}\
\
.ace-kr-theme .ace_comment {\
  font-style:italic;\
color:#706D5B;\
}\
\
.ace-kr-theme .ace_variable {\
  color:#D1A796;\
}\
\
.ace-kr-theme .ace_variable.ace_language {\
  color:#FF80E1;\
}\
\
.ace-kr-theme .ace_meta.ace_tag {\
  color:#BABD9C;\
}\
\
.ace-kr-theme .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace-kr-theme .ace_markup.ace_list {\
  background-color:#0F0040;\
}";

var dom = require("ace/lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

