define("ace/theme/tomorrow_night_eighties",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night-eighties";
exports.cssText = "\
.ace-tomorrow-night-eighties .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-tomorrow-night-eighties .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-tomorrow-night-eighties .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-tomorrow-night-eighties .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-tomorrow-night-eighties .ace_scroller {\
  background-color: #2D2D2D;\
}\
\
.ace-tomorrow-night-eighties .ace_text-layer {\
  cursor: text;\
  color: #CCCCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_cursor {\
  border-left: 2px solid #CCCCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #CCCCCC;\
}\
 \
.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection {\
  background: #515151;\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #6A6A6A;\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_active_line {\
  background: #393939;\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_selected_word {\
  border: 1px solid #515151;\
}\
       \
.ace-tomorrow-night-eighties .ace_invisible {\
  color: #6A6A6A;\
}\
\
.ace-tomorrow-night-eighties .ace_keyword, .ace-tomorrow-night-eighties .ace_meta {\
  color:#CC99CC;\
}\
\
.ace-tomorrow-night-eighties .ace_keyword.ace_operator {\
  color:#66CCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_constant.ace_language {\
  color:#F99157;\
}\
\
.ace-tomorrow-night-eighties .ace_constant.ace_numeric {\
  color:#F99157;\
}\
\
.ace-tomorrow-night-eighties .ace_constant.ace_other {\
  color:#CCCCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_invalid {\
  color:#CDCDCD;\
background-color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated {\
  color:#CDCDCD;\
background-color:#CC99CC;\
}\
\
.ace-tomorrow-night-eighties .ace_support.ace_constant {\
  color:#F99157;\
}\
\
.ace-tomorrow-night-eighties .ace_fold {\
    background-color: #6699CC;\
    border-color: #CCCCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_support.ace_function {\
  color:#6699CC;\
}\
\
.ace-tomorrow-night-eighties .ace_storage {\
  color:#CC99CC;\
}\
\
.ace-tomorrow-night-eighties .ace_storage.ace_type,  .ace-tomorrow-night-eighties .ace_support.ace_type{\
  color:#CC99CC;\
}\
\
.ace-tomorrow-night-eighties .ace_variable {\
  color:#6699CC;\
}\
\
.ace-tomorrow-night-eighties .ace_variable.ace_parameter {\
  color:#F99157;\
}\
\
.ace-tomorrow-night-eighties .ace_string {\
  color:#99CC99;\
}\
\
.ace-tomorrow-night-eighties .ace_comment {\
  color:#999999;\
}\
\
.ace-tomorrow-night-eighties .ace_variable {\
  color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_meta.ace_tag {\
  color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name {\
  color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_function {\
  color:#6699CC;\
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading {\
  color:#99CC99;\
}";

    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});

