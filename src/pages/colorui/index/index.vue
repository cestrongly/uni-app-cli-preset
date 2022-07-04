<!--
 * @Author: cest
 * @Date: 2022-07-03 09:00:23
 * @LastEditTime: 2022-07-04 22:13:15
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/colorui/index/index.vue
 * @Description: 首页
-->
<template lang="pug">
.index
  CuBasics(v-if="currentPageName == 'basics'")
  CuComponent(v-if="currentPageName == 'component'")
  CuPlugin(v-if="currentPageName == 'plugin'")
  CuTabbar(
    :isDark="isDark"
    @changeItem="changeItem")
</template>

<script>
import CuTabbar from './components/cu-tabbar'
import CuBasics from './components/cu-basics'
import CuComponent from './components/cu-component'
import CuPlugin from './components/cu-plugin'
export default {
  components: { CuTabbar, CuBasics, CuComponent, CuPlugin },
  data: () => ({
    currentPageName: 'basics'
  }),
  computed: {
    isDark() {
      return this.currentPageName === 'plugin'
    }
  },
  methods: {
    changeItem(context) {
      console.log('changeItem:', context)
      const { item } = context
      this.currentPageName = item.imgClass
      console.log('currentPageName:', this.currentPageName)
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {}
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}
</script>

<style lang="scss" scoped>
.logo {
  width: 200rpx;
  height: 200rpx;
  background-image: url('@/pages/colorui/static/logo.png');
  background-size: 100%;
}
</style>

<style lang="stylus">
.cu-tabbar
  &__img
    background-size 100%
    width 50rpx
    height 50rpx
    display inline-block
    &.basics
      background-image url('@/pages/colorui/static/tabbar/basics.png')
      &_cur
        background-image url(@/pages/colorui/static/tabbar/basics_cur.png)
    &.component
      background-image url('@/pages/colorui/static/tabbar/component.png')
      &_cur
        background-image url(@/pages/colorui/static/tabbar/component_cur.png)
    &.plugin
      background-image url('@/pages/colorui/static/tabbar/plugin.png')
      &_cur
        background-image url(@/pages/colorui/static/tabbar/plugin_cur.png)
</style>
