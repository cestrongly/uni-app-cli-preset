<template lang="pug">
.text
  cu-custom(bg-color="bg-gradual-blue" :is-back="true")
    block(slot="backText")
      | 返回
    block(slot="content")
      | 文本
  view.cu-bar.bg-white.solid-bottom
    view.action
      text.cuIcon-title.text-blue
      | 文字大小
  view.bg-white.padding-lr
    view.solids-bottom.padding-xs
      view.padding
        .text-xsl .text-xsl 60
      view
        view.solid-bottom.text-xsl.padding
          text.cuIcon-roundcheckfill.text-green
        view.padding
          .text-xsl 用于图标、数字等特大显示
    view.solids-bottom.padding-xs
      view.padding
        .text-sl .text-sl 40
      view
        view.solid-bottom.text-sl.padding
          text.cuIcon-roundcheckfill.text-green
        view.padding
          .text-sl 用于图标、数字等较大显示
    view.solids-bottom.padding-xs
      view.padding
        .text-xxl .text-xxl 22
      view
        view.solid-bottom.text-xxl.padding
          text.text-price.text-red 80.00
        view.padding
          .text-xxl 用于金额数字等信息
    view.solids-bottom.padding-xs
      view.padding.text-xl .text-xl 18
      view
        view.solid-bottom.text-xl.padding
          text.text-black.text-bold 您的订单已提交成功！
        view.padding
          .text-xl 页面大标题，用于结果页等单一信息页
    view.solids-bottom.padding-xs
      view.padding
        .text-lg .text-lg 16
      view
        view.solid-bottom.text-lg.padding
          text.text-black ColorUI组件库
        view.padding
          .text-lg 页面小标题，首要层级显示内容
    view.solids-bottom.padding-xs
      view.padding.text-df .text-df 14
      view
        view.solid-bottom.text-df.padding 专注视觉的小程序组件库
        view.padding
          .text-df 页面默认字号，用于摘要或阅读文本
    view.solids-bottom.padding-xs
      view.padding.text-sm .text-sm 12
      view
        view.solid-bottom.text-sm.padding
          text.text-grey 衬衫的价格是9磅15便士
        view.padding.text-sm 页面辅助信息，次级内容等
    view.padding-xs
      view.padding.text-xs 10
      view
        view.solid-bottom.text-xs.padding
          text.text-gray 我于杀戮之中绽放 亦如黎明中的花朵
        view.padding.text-xs 说明文本，标签文字等关注度低的文字
  view.cu-bar.bg-black.solid-bottom.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 文字颜色
  view.grid.col-3.padding-sm.bg-black
    view.padding-sm(v-for="(item,index) in ColorList" :key="index")
      view.text-center(:class="'text-' + item.name")
        .text {{ item.title }}
        .text .text-{{ item.name}}
  view.cu-bar.bg-black.solid-bottom.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 文字阴影 .text-shadow.text-[color]
  view.grid.col-2.padding-sm.bg-black
    view.padding-sm(v-for="(item,index) in ColorList" :key="index")
      view.text-center.text-shadow(:class="'text-' + item.name")
        view.cuIcon-ellipse.text-xxl
        .text-xxl {{ item.title }}
        .text-xxl .text-{{ item.name}}
  view.cu-bar.bg-white.solid-bottom.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 文字截断 .text-cut
  view.padding.bg-white
    view.text-cut.padding.bg-grey.radius(style="width:220px")
      | 我于杀戮之中绽放 ,亦如黎明中的花朵
  view.cu-bar.bg-white.solid-bottom.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 文字对齐
  view.padding.bg-white
    view.text-left.padding .text-left 我于杀戮之中绽放 ,亦如黎明中的花朵
    view.text-center.padding .text-center 我于杀戮之中绽放 ,亦如黎明中的花朵
    view.text-right.padding .text-right 我于杀戮之中绽放 ,亦如黎明中的花朵
  view.cu-bar.bg-white.solid-bottom.margin-top
    view.action
      text.cuIcon-title.text-blue
      | 特殊文字
  view.padding.text-center
    view.padding-lr.bg-white
      view.solid-bottom.padding
        text.text-price 80.00
      view.padding .text-price 价格文本，利用伪元素添加"¥"符号
    view.padding-lr.bg-white.margin-top
      view.solid-bottom.padding
        text.text-Abc color Ui
      view.padding .text-Abc 英文单词首字母大写
    view.padding-lr.bg-white.margin-top
      view.solid-bottom.padding
        text.text-ABC color Ui
      view.padding .text-ABC 全部字母大写
    view.padding-lr.bg-white.margin-top
      view.solid-bottom.padding
        text.text-abc color Ui
      view.padding .text-abc 全部字母小写
</template>

<script>
import ColorList from "@/pages/colorui/data/ColorList";
export default {
  components: {},
  data: () => ({}),
  computed: {
    ColorList: () => ColorList,
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
};
</script>

<style lang="scss" scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.9);
}
//
// 内置图标
//

//
@import "@/util/colorui/scss/modules/icon.scss";
</style>
