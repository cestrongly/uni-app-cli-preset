/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:49:00
 * @LastEditors: cest
 * @LastEditTime: 2022-07-09 01:51:13
 * @FilePath: /uni-app-cli/src/setting/index.js
 * @Description: 配置文件，主要配置api接口baseURL，等等
 */

// 从配置文件里读取环境变量
// 环境变量文件位置：/
//   - .env - 公用环境变量
//   - .env.local - 公用本地化环境变量
//   - .env.development - 开发模式下的环境变量
//   - .env.development.local - 开发模式下的环境变量 本地化，不用提交到 svn 和 git
//   - .env.production - 生产模式下的变量环境
//   - .env.production.local - 生产模式下的变量环境
// 优先级：
//   开发模式 development
//   .env.development.local > .env.development > .env.local > .env
//   生产模式 production
//   .env.production > .env.production.local > .env.local > .env

const env = process.env

// OSS 路径
export const BASE_OSS_PATH = env.VUE_APP_BASE_OSS_PATH || 'https://wl-app.oss-cn-shenzhen.aliyuncs.com/cedo-pro'
// api 接口
export const API_BASE_URL = env.VUE_APP_API_BASE_URL || `http://120.79.78.90:9000`
// 二维码有效期 单位:分钟/min
export const EXPORT_CONST_CODE_VALID = env.VUE_APP_EXPORT_CONST_CODE_VALID || 10
