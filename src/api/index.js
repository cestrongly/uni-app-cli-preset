/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 14:53:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-20 09:41:11
 * @FilePath: \dms-app-cli\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-10 20:51:43
 * @LastEditors: zhuangli.qin
 * @LastEditTime: 2022-06-16 14:02:12
 * @FilePath: \cedo-app-cli\src\api\index.js
 * @Description: api 的抽象方法，定义常用的 get, post, upload 请求方法
 */

import { http } from '@/service/http'
export const get = (url, params, config = {}) => http.get(url, { params, ...config })
export const post = (url, data = {}, config = {}) => http.post(url, data, config)
// export const delete = (urldata = {}, config = {}) =>http.delete(url, data, config)
export const upload = (url, config = {}) => http.upload(url, config)
export const put = (url, data = {}, config = {}) => http.put(url, data, config)
