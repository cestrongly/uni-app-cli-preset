/**
 * @Author: cest
 * @Date: 2022-06-30 15:06:36
 * @LastEditTime: 2022-06-30 15:23:54
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/function/formatLocation.js
 * @Description: 经纬度格式化
 */

/**
 * @exports formatLocation - 经纬度格式化
 * @param {String} longitude - 经度 例如：E121° 47′
 * @param {String} latitude - 维度  例如： N31° 23′
 * @returns {Object} 返回格式化后的经纬度对象
 * {
 *   longitude, // - 经度 例如：121.47
 *   latitude // - 维度 例如： 31.23
 * }
 *
 */
export default (longitude, latitude) => {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}
