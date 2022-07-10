<!--
 * @Author: cest
 * @Date: 2022-07-03 08:51:11
 * @LastEditTime: 2022-07-10 13:06:57
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/index/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.index.align-center.justify-center.text-content
  navigator.text-xl.animation-fade.text-red(url="/pages/colorui/index/index" open-type="navigate" hover-class="navigator-hover")
    | colorui 说明文档
  navigator.text-xl.animation-scale-up.text-orange(url="/pages/news/index" open-type="navigate" hover-class="navigator-hover")
    | 基于uni-app开发的新闻/资讯类App模板
  navigator.text-xl.animation-scale-down.text-yellow(url="/pages/test/index/index" open-type="navigate" hover-class="navigator-hover")
    | 单元测试导航
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
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

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  height: 100%;
}

.index:before{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .3;
  z-index: -1;
  content: "";
  position: fixed;
  background: url(https://api.paugram.com/wallpaper/) center/cover;
}
</style>
