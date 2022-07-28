/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-06-30 16:31:03
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/components/verify/utils/ase.js
 * @Description: 编辑描述内容
 */
import CryptoJS from '@/util/cryptojs'
/**
 * @word 要加密的内容
 * @keyWord String  服务器随机返回的关键字
 *  */
export function aesEncrypt(word,keyWord="XwKsGlMcdPMEhR1B"){
  var key = CryptoJS.enc.Utf8.parse(keyWord);
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  return encrypted.toString();
}
