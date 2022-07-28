/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 15:45:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-20 14:20:45
 * @FilePath: \dms-app-cli\src\components\verify\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-06-30 16:17:38
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/components/verify/utils/request.js
 * @Description: 编辑描述内容
 */
import { API_BASE_URL } from '@/setting/index.js'

let baseUrl = API_BASE_URL

export const myRequest = (option = {}) => {
  return new Promise((reslove, reject) => {
    const user = '/user'
    uni.request({
      url: baseUrl + user + option.url,
      data: option.data,
      method: option.method || 'GET',
      success: result => {
        reslove(result)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}
