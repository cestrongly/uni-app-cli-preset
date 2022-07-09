/**
 * @Author: cest
 * @Date: 2022-06-30 15:30:06
 * @LastEditTime: 2022-07-09 15:09:51
 * @LastEditors: cest
 * @FilePath: /uni-app-preset/src/util/function/formatTime.js
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
  const hour = parseInt(time / 3600)
  let _time = time % 3600
  const minute = parseInt(_time / 60)
  _time = time % 60
  const second = _time

  return [hour, minute, second]
    .map(function (n) {
      const _n = n.toString()
      return _n[1] ? _n : '0' + _n
    })
    .join(':')
}
