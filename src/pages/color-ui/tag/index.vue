<!--
 * @Author: cest
 * @Date: 2022-07-24 14:33:24
 * @LastEditTime: 2022-07-24 14:55:07
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/pages/color-ui/tag/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.tag
  cu-custom(bg-color="bg-gradual-blue" :is-back="true")
    block(slot="backText")
      | 返回
    block(slot="content")
      | 标签
  view.cu-bar.bg-white.solid-bottom
    view.action
      text.cuIcon-title.text-blue
      | 标签形状
  view.padding.bg-white.solid-bottom
    view.cu-tag 默认
    view.cu-tag.round 椭圆
    view.cu-tag.radius 圆角
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 标签尺寸
  view.padding.bg-white
    view.cu-tag.radius.sm 小尺寸
    view.cu-tag.radius 普通尺寸
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 标签颜色
  view.padding-sm.flex.flex-wrap
    view.padding-xs(v-for="(item,index) in ColorList" :key="'bg_'+item.name+index" v-if="item.name!='gray'")
      view.cu-tag(:class="'bg-' + item.name")
        | {{ item.title }}
    view.padding-xs(v-for="(item,index) in ColorList" :key="index" v-if="item.name!='gray' && item.name!='black' && item.name!='white'")
      view.cu-tag.light(:class="'bg-' + item.name")
        | {{ item.title }}
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 镂空标签
  view.padding-sm.flex.flex-wrap
    view.padding-xs(v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'")
      view.cu-tag(:class="'line-' + item.name")
        | {{ item.title }}
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 胶囊样式
  view.padding
    view.cu-capsule
      view.cu-tag.bg-red
        text.cuIcon-likefill
      view.cu-tag.line-red 12
    view.cu-capsule.round
      view.cu-tag.bg-blue
        text.cuIcon-likefill
      view.cu-tag.line-blue 23
    view.cu-capsule.round
      view.cu-tag.bg-blue 说明
      view.cu-tag.line-blue 123
    view.cu-capsule.radius
      view.cu-tag.bg-grey
        text.cuIcon-likefill
      view.cu-tag.line-grey 23
    view.cu-capsule.radius
      view.cu-tag.bg-brown.sm
        text.cuIcon-likefill
      view.cu-tag.line-brown.sm 23
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 数字标签
  view.padding.flex.justify-between.align-center
    view.cu-avatar.xl.radius 港
      view.cu-tag.badge 99+
    view.cu-avatar.xl.radius(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)")
      view.cu-tag.badge 9
    view.cu-avatar.xl.radius
      view.cu-tag.badge 99
      text.cuIcon-people
    view.cu-avatar.xl.radius
      view.cu-tag.badge 99+
</template>

<script>
import '@/util/color-ui/scss/modules/icon.scss'
import '@/util/color-ui/scss/modules/cu-tag.scss'
import '@/util/color-ui/scss/modules/cu-box-line.scss'
import '@/util/color-ui/scss/modules/cu-avatar.scss'
import ColorList from '@/pages/color-ui/data/ColorList'
export default {
  components: {},
  data: () => ({}),
  computed: {
    ColorList: () => ColorList
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

<style scoped></style>
