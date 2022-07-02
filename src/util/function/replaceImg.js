/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-06-30 15:58:15
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/function/replaceImg.js
 * @Description: 替换图片
 */
export default ({ str, width = 200, height = 300 }) => {
  str = str.replace(/(<img[^>]*>)|(<img[^>]*><\/img>)/g, function (match, capture) {
    if (match.indexOf('style') < 0) {
      // 没有style 就添加一个
      return match.replace(/<\s*img/, '<img style=""')
    } else {
      // 有style 就不做处理 直接返回
      return match
    }
  })
  console.log('增加style=""后的html字符串：' + str)
  str = str.replace(/<img[^>]*>/gi, function (match, capture) {
    return match.replace(
      /style\s*?=\s*?([‘"])[\s\S]*?\1/gi,
      'style="width:100%;height:auto;margin:0 auto; display:block;"'
    ) // 替换style
  })
  console.log('htmlstr', str)
  return str
}
