/**
 * @Author: cest
 * @Date: 2022-07-02 12:33:34
 * @LastEditTime: 2022-07-08 23:21:29
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/store/mutations.js
 * @Description: 编辑描述内容
 */
export default {
  // 登录
  login(state, userInfo) {
    // debugger
    uni.setStorageSync('userInfo', userInfo.info)
    uni.setStorageSync('token', userInfo.token)
    uni.setStorageSync('permissions', userInfo.permissions)
    state.userInfo = userInfo.info
    state.token = userInfo.token
    state.permissions = userInfo.permissions
  },
  //更新用户信息
  updateInfo(state, userInfo) {
    uni.setStorageSync('userInfo', userInfo)
    state.userInfo = userInfo
  },
  // 退出
  logout(state) {
    uni.removeStorageSync('userInfo')
    uni.removeStorageSync('token')
    uni.removeStorageSync('permissions')
    state.userInfo = undefined
    state.token = undefined
    state.permissions = undefined
  },
  // 返回上一页 页面数据重新获取
  getBackData() {
    var pages = getCurrentPages() //当前页面栈
    if (pages.length > 1) {
      var beforePage = pages[pages.length - 2] //获取上一个页面实例对象
      beforePage.$vm.callback ? beforePage.$vm.callback() : () => {}
    }
  }
}
