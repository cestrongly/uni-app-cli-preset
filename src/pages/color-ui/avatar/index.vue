<!--
 * @Author: cest
 * @Date: 2022-07-30 10:34:13
 * @LastEditTime: 2022-07-30 11:10:28
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/pages/color-ui/avatar/index.vue
 * @Description: 头像说明文档
-->
<template lang="pug">
cu-theme
  cu-nav(bg-color="bg-gradual-blue" :showBack="true")
    block(slot="backText")
      | 返回
    block(slot="content")
      | 头像
  view.cu-bar.bg-white
    view.action
      text.cuIcon-title.text-blue
      | 头像形状
  view.padding
    view.cu-avatar.round(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)")
    view.cu-avatar.radius.margin-left(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);")
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 头像尺寸
  view.padding
    view.cu-avatar.sm.round.margin-left(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)")
    view.cu-avatar.round.margin-left(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);")
    view.cu-avatar.lg.round.margin-left(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);")
    view.cu-avatar.xl.round.margin-left(style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);")
  view.padding
    view.cu-avatar.sm.round.margin-left.bg-red A
    view.cu-avatar.round.margin-left.bg-red B
    view.cu-avatar.lg.round.margin-left.bg-red C
    view.cu-avatar.xl.round.margin-left.bg-red D
  view.padding
    view.cu-avatar.sm.round.margin-left.bg-red 蔚
    view.cu-avatar.round.margin-left.bg-red 蓝
    view.cu-avatar.lg.round.margin-left.bg-red
      text wl
    view.cu-avatar.xl.round.margin-left.bg-red
      text.avatar-text 网络
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 内嵌文字(图标)
  view.padding
    view.cu-avatar.radius
      text.cuIcon-people
    view.cu-avatar.radius.margin-left
      text 港
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 头像颜色
  view.padding-sm
    view.cu-avatar.round.lg.margin-xs(:class="'bg-' + item.name" v-for="(item,index) in ColorList" :key="index")
      text.avatar-text {{ item.name }}
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 头像组
  view.padding
    view.cu-avatar-group
      view.cu-avatar.round.lg(v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]")
  view.cu-bar.bg-white.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 头像标签
  view.padding
    view.cu-avatar.round.lg.margin-left(v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]")
      view.cu-tag.badge(:class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'")
</template>

<script>
import '@/util/color-ui/scss/modules/icon.scss'
import '@/util/color-ui/scss/modules/cu-avatar.scss'
import ColorList from '@/pages/color-ui/data/ColorList'
export default {
  components: {},
  data: () => ({
    avatar: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
				],
  }),
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
