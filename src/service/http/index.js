/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:49:00
 * @LastEditors: zhuangli.qin
 * @LastEditTime: 2022-06-16 11:00:39
 * @FilePath: \cedo-app-cli\src\service\http\index.js
 * @Description:
 * @Copyright (c) 2022 by cestrmail@163.com by zhuangli.qin, All Rights Reserved.
 */
import Request from '@/util/luch-request/luch-request' // 下载的插件
// import Request from 'luch-request' // 使用npm

// 引入配置
import config from './config/config'

const http = new Request()

// 初始化请求配置
http.setConfig(defaultConfig => {
  /* defaultConfig 为默认全局配置 */
  // defaultConfig.baseURL = config.baseUrl /* 根域名 */
  // 修改默认配置 用于处理拦截器
  // defaultConfig.custom = {...defaultConfig.custom,...config.custom}
  defaultConfig = {
    ...defaultConfig,
    ...config
  }
  return defaultConfig
})

require('./requestInterceptors')(http)

require('./responseInterceptors')(http)

// export http = http
export { http }
