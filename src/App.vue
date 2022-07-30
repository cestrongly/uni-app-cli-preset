<!--
 * @Author: cest
 * @Date: 2022-07-09 13:14:15
 * @LastEditTime: 2022-07-30 09:00:27
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/App.vue
 * @Description: 编辑描述内容
-->
<script>
import Vue from 'vue'
export default {
  onLaunch: function () {
    console.log('App Launch')

    // #ifdef APP-NVUE
    // App nvue
    plus.screen.lockOrientation('portrait-primary')

    const appid = plus.runtime.appid
    if (appid && appid.toLocaleLowerCase() !== 'hbuilder') {
      uni.request({
        url: 'https://uniapp.dcloud.io/update', // 检查更新的服务器地址
        data: {
          appid: plus.runtime.appid,
          version: plus.runtime.version
        },
        success: res => {
          console.log('success', res)
          if (res.statusCode === 200 && res.data.isUpdate) {
            const openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android
            // 提醒用户更新
            uni.showModal({
              title: '更新提示',
              content: res.data.note ? res.data.note : '是否选择更新',
              success: showResult => {
                if (showResult.confirm) {
                  plus.runtime.openURL(openUrl)
                }
              }
            })
          }
        }
      })
    }

    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      fontFamily: 'texticons',
      src: "url('@/pages/news/static/text-icon.ttf')"
    })
    // #endif

    uni.getSystemInfo({
      success: function (e) {
        // #ifndef MP
        // 微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序

        // 手机状态栏的高度
        Vue.prototype.$StatusBarHeight = e.statusBarHeight
        // platform	客户端平台，值域为：ios、android、mac（3.1.10+）、windows（3.1.10+）、linux（3.1.10+）
        if (e.platform === 'android') {
          // 自定义导航栏--高度
          Vue.prototype.$CustomStatusBarHeight = e.statusBarHeight + 50
        } else {
          // 自定义导航栏--高度
          Vue.prototype.$CustomStatusBarHeight = e.statusBarHeight + 45
        }
        // #endif

        // #ifdef MP-WEIXIN
        // 微信小程序

        // 手机状态栏的高度
        Vue.prototype.$StatusBarHeight = e.statusBarHeight

        // getMenuButtonBoundingClientRect()
        // 在小程序平台，如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮。
        // 本API用于获取小程序下该菜单按钮的布局位置信息，方便开发者布局顶部内容时避开该按钮。
        // 坐标信息以屏幕左上角为原点。

        const custom = wx.getMenuButtonBoundingClientRect()
        Vue.prototype.$MenuButtonBoundingClientRect = custom
        // 自定义导航栏--高度
        Vue.prototype.$CustomStatusBarHeight = custom.bottom + custom.top - e.statusBarHeight + 4
        // #endif

        // #ifdef MP-ALIPAY
        // 支付宝小程序

        // 手机状态栏的高度
        Vue.prototype.$StatusBarHeight = e.statusBarHeight
        // 自定义导航栏--高度
        Vue.prototype.$CustomStatusBarHeight = e.statusBarHeight + e.titleBarHeight
        // #endif
      }
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>
