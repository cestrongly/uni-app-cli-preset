/**
 * @Author: cest
 * @Date: 2022-06-29 10:01:14
 * @LastEditTime: 2022-06-30 15:37:45
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/index.js
 * @Description: 编辑描述内容
 */

/**
 * sleep() 方法它能让我们的程序不那么着急的去执行下一步操作，而是延迟、等待一段时间
 *
 * @export {Function} sleep
 * @param {Number} time - 毫秒，默认值：2000ms
 * @return {Promise<T>} Promise<any> - 返回一个 Promise 对象
 */
export function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo')
    }, time ?? 2000)
  })
}

/*
示例：

sleep(500).then(() => {
  // 500 毫秒后执行...
})

// 使用 async await
await sleep(500)
// 500 毫秒后执行..

 */

/**
 * delay() 方法它能让我们的程序不那么着急的去执行下一步操作，而是延迟、等待一段时间
 *
 * @export {Function} sleep
 * @param {Number} time - 毫秒，默认值：1000ms
 * @return {Promise<T>} Promise<any> - 返回一个 Promise 对象
 */
export const delay = (time = 1000) => new Promise(resolve => setTimeout(() => resolve(true), time))

/**
 * 获取附件名称
 * @param url
 * @returns {string}
 */
export const getUrlName = url => {
  if (url.indexOf('/') > 0) {
    if (url.indexOf('?') > 0) {
      url = url.split('?')[0]
    }
    //如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
    const filename = url.substring(url.lastIndexOf('/') + 1, url.length)

    return filename
  }
}
// let url='http://qqUniApp.oss-cn-hangzhou.aliyuncs.com/no/bank.png',filename;

// console.log(filename)

/**
 *
 * @param {*} params
 * @param {*} key
 * @returns
 */
export function hasP(ps, key) {
  if(ps==''){
    return false
  }
  const index = ps.findIndex(item => item === key)
  const isAdmin = uni.getStorageSync('userInfo').admin
  console.log('isAdmin',isAdmin)
  if(isAdmin === true){
    return true
  }
  if (index === -1) {
    return false
  }
  return true
}

// 格式化时间
export const formatDate = './function/formatDate'

// 格式化文件大小
export const formatFileSize =  './function/formatFileSize'
