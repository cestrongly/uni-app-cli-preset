<!--
 * @Author: cest
 * @Date: 2022-07-03 08:51:11
 * @LastEditTime: 2022-07-12 20:12:50
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/index/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.index.align-center.justify-center.text-content
  .bg-img.animation-fade(:style="backgroundImage")
  .bg-color
  navigator.text-xl.animation-fade.text-red(url="/pages/color-ui/index/index" open-type="navigate" hover-class="navigator-hover")
    | colorui 说明文档
  navigator.text-xl.animation-scale-up.text-orange(url="/pages/news/index" open-type="navigate" hover-class="navigator-hover")
    | 新闻/资讯类 App 模板
  navigator.text-xl.animation-scale-down.text-yellow(url="/pages/test/index/index" open-type="navigate" hover-class="navigator-hover")
    | 单元测试导航
  navigator.text-xl.animation-slide-top.text-olive(url="/pages/z-paging/index/index" open-type="navigate" hover-class="navigator-hover")
    | z-paging
</template>

<script>
const IMG_API = `https://api.yimian.xyz/img`
export default {
  components: {},
  data: () => ({

  }),
  computed: {
    backgroundImage()  {
      let _backgroundImage = `background-image: url(${IMG_API}/?type=moe&display=750-1080x*&range=100&R18=true)`
      /* #ifdef H5 */
      _backgroundImage = `background-image: url(${IMG_API}/?type=moe&R18=true&display=true)`
      /* #endif */
      return _backgroundImage
      }
  },
  methods: {},
  watch: {},
  async created() {

  },

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

.bg-color {
  position: static;
}
.bg-color::after {
  content: "";
  border-radius: inherit;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.bg-img{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 0;
  content: "";
  position: fixed;
  /* background: url(https://api.paugram.com/wallpaper/) center/cover; */
}
</style>
