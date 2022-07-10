<!--
 * @Author: cest
 * @Date: 2022-07-03 09:00:23
 * @LastEditTime: 2022-07-10 17:58:46
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
