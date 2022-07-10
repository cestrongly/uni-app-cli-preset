<!--
 * @Author: cest
 * @Date: 2022-07-09 13:14:15
 * @LastEditTime: 2022-07-10 16:34:44
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/App.vue
 * @Description: 编辑描述内容
-->
<script>
import Vue from 'vue'
export default {
  onLaunch: function () {
    console.log('App Launch')

    // #ifdef APP-NVUE
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
        Vue.prototype.$StatusBar = e.statusBarHeight
        if (e.platform === 'android') {
          Vue.prototype.$CustomBar = e.statusBarHeight + 50
        } else {
          Vue.prototype.$CustomBar = e.statusBarHeight + 45
        }
        // #endif

        // #ifdef MP-WEIXIN
        Vue.prototype.$StatusBar = e.statusBarHeight
        const custom = wx.getMenuButtonBoundingClientRect()
        Vue.prototype.$Custom = custom
        Vue.prototype.$CustomBar = custom.bottom + custom.top - e.statusBarHeight + 4
        // #endif

        // #ifdef MP-ALIPAY
        Vue.prototype.$StatusBar = e.statusBarHeight
        Vue.prototype.$CustomBar = e.statusBarHeight + e.titleBarHeight
        // #endif

        // console.log('Vue.prototype',this)
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

<style lang="scss">
@import '@/assets/theme/dark/index.scss';
@import '@/assets/theme/default/index.scss';
@import '@/util/colorui/index.scss';
@import '@/util/colorui/animation.css';
@import '@/uni_modules/uview-ui/index.scss';
@import '@/assets/scss/index.scss';
</style>
