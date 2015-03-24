//= require ueditor_rails/_config.js
//= require ueditor/ueditor.all.js
//= require ueditor/lang/zh-cn/zh-cn.js
//= require ueditor/kityformula-plugin/addKityFormulaDialog.js
//= require ueditor/kityformula-plugin/getKfContent.js
//= require ueditor/kityformula-plugin/defaultFilterFix.js
//= require_self

$(function() {
  if(window.UEDITOR_FIELDS !== undefined) {
    for(var i in window.UEDITOR_FIELDS) {
      var f = window.UEDITOR_FIELDS[i];
      UE.getEditor(f['id'], f['opt']);
    }
  }
});
