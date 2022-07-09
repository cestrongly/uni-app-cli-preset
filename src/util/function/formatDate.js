/**
 * @Author: cest
 * @Date: 2022-06-30 14:20:34
 * @LastEditTime: 2022-07-09 15:17:22
 * @LastEditors: cest
 * @FilePath: /uni-app-preset/src/util/function/formatDate.js
 * @Description: 格式化时间
 */
export default (oldDate, fmt) => {
  let _fmt = fmt
  let date = new Date()
  if (typeof oldDate === 'string' || typeof oldDate === 'number') {
    date = new Date(+oldDate)
  } else {
    date = oldDate
  }
  if (/(y+)/.test(fmt)) {
    _fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      _fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return _fmt
}
