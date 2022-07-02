/**
 * @Author: cest
 * @Date: 2022-06-30 15:30:06
 * @LastEditTime: 2022-06-30 15:33:43
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/function/formatTime.js
 * @Description: 时间格式化
 *
 * @example -示例：
 *
 * formatTime(100) -> '00:01:40'
 * formatTime(10000) -> '02:46:40'
 * formatTime(100000) -> '27:46:40'
 */

export default time => {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return [hour, minute, second]
    .map(function (n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    })
    .join(':')
}
