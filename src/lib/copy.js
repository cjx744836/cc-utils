/*
* 复制内容
* @txt
* */
function copy(txt) {
  var dom = document.createElement('div');
  var selection = window.getSelection();
  var range = document.createRange();
  document.body.appendChild(dom);
  dom.innerText = txt;
  selection.removeAllRanges();
  range.selectNode(dom);
  selection.addRange(range);
  document.execCommand('copy');
  dom.remove();
}

export default copy;