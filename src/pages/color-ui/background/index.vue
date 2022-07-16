<template lang="pug">
.background
  cu-custom(bg-color="bg-gradual-blue" :is-back="true")
    block(slot="backText")
      | 返回
    block(slot="content")
      | 背景
  view.cu-bar.bg-white.solid-bottom
    view.action
      text.cuIcon-title.text-blue
      | 深色背景
  .grid.col-3.padding-sm
    .view.padding-sm(v-for="(item,index) in ColorList" :key="index")
      .view.padding.radius.text-center.shadow-blur(:class="'bg-' + item.name")
        .view.text-lg {{ item.title }}
        .view.margin-top-sm .bg-{{ item.name }}
  view.cu-bar.bg-white.solid-bottom
    view.action
      text.cuIcon-title.text-blue
      | 淡色背景
  .grid.col-3.bg-white.padding-sm
    .view.padding-sm(v-for="(item,index) in ColorList" :key="index" v-if="index<12")
      .view.padding.radius.text-center.light(:class="'bg-' + item.name")
        .view.text-lg {{ item.title }}
        .view.margin-top-sm .bg-{{ item.name }}
  view.cu-bar.bg-white.solid-bottom.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 渐变背景
  .grid.col-2.padding-sm
    .view.padding-sm
      .view.bg-gradual-red.padding.radius.text-center.shadow-blur
        .view.text-lg 魅红 .bg-gradual-red
        .view.margin-top-sm.text-Abc #f43f3b - #ec008c
    view.padding-sm
      view.bg-gradual-orange.padding.radius.text-center.shadow-blur
        view.text-lg 鎏金 .bg-gradual-orange
        view.margin-top-sm.text-Abc #ff9700 - #ed1c24
    view.padding-sm
      view.bg-gradual-green.padding.radius.text-center.shadow-blur
        view.text-lg 翠柳 .bg-gradual-green
        view.margin-top-sm.text-Abc #39b54a - #8dc63f
    view.padding-sm
      view.bg-gradual-blue.padding.radius.text-center.shadow-blur
        view.text-lg 靛青 .bg-gradual-blue
        view.margin-top-sm.text-Abc #0081ff - #1cbbb4
    view.padding-sm
      view.bg-gradual-purple.padding.radius.text-center.shadow-blur
        view.text-lg 惑紫 .bg-gradual-purple
        view.margin-top-sm.text-Abc #9000ff - #5e00ff
    view.padding-sm
      view.bg-gradual-pink.padding.radius.text-center.shadow-blur
        view.text-lg 霞彩 .bg-gradual-pink
        view.margin-top-sm.text-Abc #ec008c - #6739b6
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 图片背景 .bg-img.bg-mask
  view.bg-img.bg-mask.flex.align-center(style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414upx;")
    view.padding-xl.text-white
      view.padding-xs.text-xxl.text-bold 钢铁之翼
      view.padding-xs.text-lg Only the guilty need fear me.

  .cu-bar.bg-white.margin-top
    .action
      .cuIcon-title.text-blue 视频背景 .bg-video.bg-mask
  .bg-video.bg-mask.flex.align-center(style="height: 422upx;")
    video(
      src="https://yz.lol.qq.com/v1/assets/videos/aatrox-splashvideo.webm"
      autoplay
      loop
      muted
      :show-play-btn="false"
      :controls="false"
      objectFit="cover")
    cover-view(class="padding-xl text-white ")
      cover-view.padding-xs.text-xxl.text-bold 暗裔剑魔
      cover-view.padding-xs 我必须连同希望一起毁坏……

  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 透明背景(文字层)
  view.grid.col-2
    view.bg-img.padding-bottom-xl(style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 207upx;")
      view.bg-shadeTop.padding.padding-bottom-xl 上面开始
    view.bg-img.padding-top-xl.flex.align-end(style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 207upx;")
      view.bg-shadeBottom.padding.padding-top-xl.flex-sub 下面开始
</template>

<script>

import ColorList from '@/pages/color-ui/data/ColorList'

export default {
  components: {},
  data: () => ({}),
  computed: {
    ColorList:() => ColorList
  },
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
  onUnload() {},
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
//
// 内置图标
//

//
@import '@/util/color-ui/scss/modules/icon.scss';
</style>
