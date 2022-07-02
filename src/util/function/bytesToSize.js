/**
 * @Author: cest
 * @Date: 2022-06-19 02:44:57
 * @LastEditTime: 2022-06-19 03:13:23
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/bytesToSize.js
 * @Description: JS数据容量单位转换(kb,mb,gb,tb)
 */

//  总结
//  先介绍下两种存储单位：位，字节
//  位："位(bit)"是电子计算机中最小的数据单位。每一位的状态只能是0或1。
//  字："字"由若干个字节构成，字的位数叫做字长，不同档次的机器有不同的字长。例如一台8位机，它的1个字就等于1个字节，字长为8位。
//  KB：是1024个字节
//  MB：是1024个KB
//  GB：是1024个MB
//  TB：是1024个GB

//  常用转换单位
//  1、位与字节转换
//  1 bit (比特或位) 等于0.125B  (byte字节)
//  1 B (byte字节)等于 8 bit (比特或位)

//  2、兆字节与千字节
//  1KB （kilobyte千字节）等于0.0009765625 MB（兆字节）
//  1MB（兆字节）等于1024KB （kilobyte千字节）

//  3、兆字节与吉字节
//  1MB（兆字节）等于0.0009765625 GB（吉字节）
//  1GB（吉字节）等于1024MB（兆字节）

/**
 * 数据容量单位转换
 *
 * @export bytesToSize
 * @param {number} [bytes=0] - 字节
 * @param {number} [k=1024] - 偏移量，默认值 1024,可选值 1000 | 1024
 * @return {string} 带有单位的容量值
 */
export default function bytesToSize(bytes = 0, k = 1024) {
  if (bytes === 0) {
    return '0 B'
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k))

  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}

// 示例：
// var size = '8164674'
// console.log(bytesToSize(parseInt(size))) // -> 7.79 MB
