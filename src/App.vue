<!--
 * @Author: cest
 * @Date: 2022-06-20 08:11:56
 * @LastEditTime: 2022-07-05 20:45:23
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/App.vue
 * @Description: 编辑描述内容
-->
<script>
import Vue from 'vue'
export default {
  onLaunch: function () {
    uni.getSystemInfo({
      success: function (e) {
        // #ifndef MP
        Vue.prototype.$StatusBar = e.statusBarHeight
        if (e.platform == 'android') {
          Vue.prototype.$CustomBar = e.statusBarHeight + 50
        } else {
          Vue.prototype.$CustomBar = e.statusBarHeight + 45
        }
        // #endif

        // #ifdef MP-WEIXIN
        Vue.prototype.StatusBar = e.statusBarHeight
        let custom = wx.getMenuButtonBoundingClientRect()
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
