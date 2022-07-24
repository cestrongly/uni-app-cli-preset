<!--
 * @Author: cest
 * @Date: 2022-07-24 08:40:26
 * @LastEditTime: 2022-07-24 10:33:55
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/pages/color-ui/button/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.button
  cu-custom(bg-color="bg-gradual-blue" :is-back="true")
    block(slot="backText")
      | 返回
    block(slot="content")
      | 按钮
  view.cu-bar.bg-white.solid-bottom
    view.action
      text.cuIcon-title.text-blue
      | 按钮形状
    view.action
      navigator.action(url="design" hover-class="none")
        text.cuIcon-skinfill
        text.text-df 设计
  view.padding.flex.flex-wrap.justify-between.bg-white
    .item.flex.flex-direction.justify-center
      button.cu-btn 默认
      .padding-xs.text-sm button.cu-btn
    .item.flex.flex-direction.justify-center
      button.cu-btn.round 圆角
      .padding-xs.text-sm button.cu-btn.round
    .item.flex.flex-direction.justify-center
      button.cu-btn.cuIcon.self-center
        text.cuIcon-emojifill
      text.padding-xs.text-sm(white-space="pre")
        | button.cu-btn.cuIcon
        | &nbsp;&nbsp;&nbsp;&nbsp;text.cuIcon-emojifill
  view.cu-bar.margin-top.bg-white.solid-bottom
    view.action
      text.cuIcon-title.text-blue
      | 按钮尺寸
  view.padding.flex.flex-wrap.justify-between.align-center.bg-white
    .item.flex.flex-direction.justify-center
      button.cu-btn.round.sm 小尺寸
      .padding-xs.text-sm button.cu-btn.round.sm
    .item.flex.flex-direction.justify-center
      button.cu-btn.round 默认
      .padding-xs.text-sm button.cu-btn.round
    .item.flex.flex-direction.justify-center
      button.cu-btn.round.lg 大尺寸
      .padding-xs.text-sm button.cu-btn.round.lg
  view.cu-bar.margin-top.bg-white
    view.action
      text.cuIcon-title.text-blue
      | 按钮颜色
    view.action
      text.text-df.margin-right-sm 阴影
      switch(@change="SetShadow" :class="shadow?'checked':''" color="#39B54A")
  view.grid.col-1.padding-sm
    view.margin-tb-sm.text-center(v-for="(item,index) in ColorList" :key="index")
      .item.flex.flex-direction.justify-center
        button.cu-btn.round(:class="['bg-' + item.name , shadow?'shadow':'']")
          | {{ item.title }}
        .padding-xs.text-sm button.cu-btn.round.bg-{{item.name}}{{shadow?'.shadow':''}}
  view.cu-bar.margin-top.bg-white
    view.action
      text.cuIcon-title.text-blue
      | 镂空按钮
    view.action
      radio-group(@change="SetBorderSize")
        label.margin-left-sm
          radio.blue.radio(value="false" checked)
          text.margin-left-sm 细边框
        label.margin-left-sm
          radio.blue.radio(value="true")
          text.margin-left-sm 粗边框
  view.grid.col-1.padding-sm
    view.margin-tb-sm.text-center(v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'")
      .item.flex.flex-direction.justify-center
        button.cu-btn.round(:class="[boldBorderSize?'lines-' + item.name:'line-' + item.name, shadow?'shadow':'']")
          | {{ item.title }}
        .padding-xs.text-sm button.cu-btn.round.{{boldBorderSize?'lines-' + item.name:'line-' + item.name}}{{shadow?'.shadow':''}}
  view.cu-bar.margin-top.bg-white
    view.action
      text.cuIcon-title.text-blue
      | 块状按钮
  view.padding.flex.flex-direction
    .item.flex.flex-direction.justify-center
      button.cu-btn.bg-grey.lg 玄灰
      .padding-xs.text-sm.text-center button.cu-btn.bg-grey.lg
    .item.flex.flex-direction.justify-center
      button.cu-btn.bg-red.margin-tb-sm.lg 嫣红
      .padding-xs.text-sm.text-center button.cu-btn.bg-red.lg
  view.cu-bar.margin-top.bg-white
    view.action
      text.cuIcon-title.text-blue
      | 禁用状态 disabled
  view.padding
    .item.flex.flex-direction.justify-center
      button.cu-btn.block.bg-blue.margin-tb-sm.lg(disabled type)
        | 禁用状态 disabled
      .text-center.padding-xs.text-sm button.cu-btn.block.bg-blue.lg(disabled)
    .item.flex.flex-direction.justify-center
      button.cu-btn.block.line-blue.margin-tb-sm.lg(disabled)
        | 禁用状态 disabled
      .text-center.padding-xs.text-sm button.cu-btn.block.line-blue.lg(disabled)
  view.cu-bar.margin-top.bg-white
    view.action
      text.cuIcon-title.text-blue
      | 按钮加图标
  view.padding-xl
    .item.flex.flex-direction.justify-center
      button.cu-btn.block.line-orange.lg
        text.cuIcon-upload
        | 图标
      text.padding-xs.text-sm(white-space="pre")
        | button.cu-btn.block.line-orange.lg
        | &nbsp;&nbsp;&nbsp;&nbsp;text.cuIcon-upload
    .item.flex.flex-direction.justify-center
      button.cu-btn.block.bg-blue.margin-tb-sm.lg
        text.cuIcon-loading2.cuIconfont-spin
        | 加载
      text.padding-xs.text-sm(white-space="pre")
        | button.cu-btn.block.bg-blue.lg
        | &nbsp;&nbsp;&nbsp;&nbsp;text.cuIcon-loading2.cuIconfont-spin
    .item.flex.flex-direction.justify-center
      button.cu-btn.block.bg-black.margin-tb-sm.lg(loading)
        | 原生加载
      text.padding-xs.text-sm(white-space="pre")
        | button.cu-btn.block.bg-black.lg(loading)

</template>

<script>
import '@/util/color-ui/scss/modules/icon.scss'
import '@/util/color-ui/scss/modules/cu-btn.scss'
import '@/util/color-ui/scss/modules/cu-btn-line.scss'
import '@/util/color-ui/scss/modules/cu-btn-lines.scss'
import ColorList from '@/pages/color-ui/data/ColorList'
export default {
  components: {},
  data: () => ({
    shadow: false,
    boldBorderSize: false
  }),
  computed: {
    ColorList: () => ColorList
  },
  methods: {
    SetShadow(e) {
      this.shadow = e.detail.value
    },
    SetBorderSize(e) {
      this.boldBorderSize = e.detail.value === 'true'
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

<style scoped></style>
