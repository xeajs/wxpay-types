// 添加油猴脚本便捷操作
// 先多次调用 aaa, 展开所有的隐藏类型项
// 在调用 bbb 获取html结构，粘贴到 config/fill.yml
// 执新脚本生成类型文件

window.aaa = function aaa() {
  var list = document.querySelectorAll('.field-header.folded')
  if (!list.length) return
  list.forEach((el) => el.click())
  return document.querySelectorAll('.field-header.folded').length
}

window.bbb = function bbb() {
  var list = document.querySelectorAll('.field-header__icon.active')
  var str = ''
  list.forEach((el) => {
    var typeName = el.parentNode.parentNode.parentNode.querySelector('.field-tags').innerText
    var typeHtml = el.parentNode.parentNode.querySelector('.field-list').outerHTML.replaceAll(':', encodeURIComponent(':'))
    if (/array/.test(typeName)) {
      typeName = typeName.replace(/array|\[|\]/g, '')
    }
    str += typeName + ': ' + typeHtml + '\n'
  })
  console.log(str)
}
