<template lang="pug">
.layout
  cu-custom(bgColor="bg-gradual-blue" :isBack="true")
    block(slot="backText")
      | 返回
    block(slot="content")
      | 布局
  scroll-view.bg-white.nav.text-center.fixed(scroll-x :style="[{ top: CustomBar + 'px' }]")
    .cu-item(:class="index == TabCur ? 'text-blue cur' : ''" v-for="(item, index) in tabNav" :key="index" @tap="tabSelect" :data-id="index")
      | {{ tabNav[index] }}
  //- Flex 布局
  block(v-if="TabCur == 0")
    .cu-bar.bg-white.solid-bottom.margin-top
      .action
        text.cuIcon-title.text-blue
        | 固定尺寸 .flex.flex-wrap
    .padding.bg-white
      .flex.flex-wrap
        .basis-xs.bg-blue.margin-xs.padding-sm.radius xs(20%)
        .basis-df.margin-xs.padding-sm .basis-xs(20%)
        .basis-sm.bg-blue.margin-xs.padding-sm.radius .basis-sm(40%)
        .basis-df
        .basis-df.bg-blue.margin-xs.padding-sm.radius .basis-df(50%)
        .basis-lg.bg-blue.margin-xs.padding-sm.radius .basis-lg(60%)
        .basis-xl.bg-blue.margin-xs.padding-sm.radius .basis-xl(80%)
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 比例布局 .flex
    .padding.bg-white
      .flex
        .flex-sub.bg-blue.padding-sm.margin-xs.radius .flex-sub 1
        .flex-sub.bg-blue.padding-sm.margin-xs.radius .flex-sub 1
      .flex.p-xs.margin-bottom-sm.mb-sm
        .flex-sub.bg-blue.padding-sm.margin-xs.radius  .flex-sub 1
        .flex-twice.bg-blue.padding-sm.margin-xs.radius .flex-twice 2
      .flex.p-xs.margin-bottom-sm.mb-sm
        .flex-sub.bg-blue.padding-sm.margin-xs.radius  .flex-sub 1
        .flex-twice.bg-blue.padding-sm.margin-xs.radius .flex-twice 2
        .flex-treble.bg-blue.padding-sm.margin-xs.radius .flex-treble 3
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 水平对齐(justify)
    .bg-white
      .padding-left.padding-right.padding-top
        | .flex.justify-start
      .flex.solid.margin.justify-start
        .bg-blue.padding-sm.margin-xs.radius start
        .bg-blue.padding-sm.margin-xs.radius start
        .bg-blue.padding-sm.margin-xs.radius start
      .padding-left.padding-right.padding-top
        | .flex.justify-end
      .flex.solid-bottom.padding.justify-end
        .bg-blue.padding-sm.margin-xs.radius end
        .bg-blue.padding-sm.margin-xs.radius end
        .bg-blue.padding-sm.margin-xs.radius end
      .padding-left.padding-right.padding-top
        | .flex.justify-center
      .flex.solid-bottom.padding.justify-center
        .bg-blue.padding-sm.margin-xs.radius center
        .bg-blue.padding-sm.margin-xs.radius center
        .bg-blue.padding-sm.margin-xs.radius center
      .padding-left.padding-right.padding-top
        | .flex.justify-between
      .flex.solid-bottom.padding.justify-between
        .bg-blue.padding-sm.margin-xs.radius between
        .bg-blue.padding-sm.margin-xs.radius between
        .bg-blue.padding-sm.margin-xs.radius between
      .padding-left.padding-right.padding-top
        | .flex.justify-around
      .flex.solid-bottom.padding.justify-around
        .bg-blue.padding-sm.margin-xs.radius around
        .bg-blue.padding-sm.margin-xs.radius around
        .bg-blue.padding-sm.margin-xs.radius around
      .padding-left.padding-right.padding-top
        | .flex.justify-evenly
      .flex.solid-bottom.padding.justify-evenly
        .bg-blue.padding-sm.margin-xs.radius evenly
        .bg-blue.padding-sm.margin-xs.radius evenly
        .bg-blue.padding-sm.margin-xs.radius evenly
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 垂直对齐(align)
    .bg-white
      .padding-left.padding-right.padding-top
        | .flex.align-start
      .flex.solid-bottom.padding.align-start
        .bg-blue.padding-lg.margin-xs.radius ColorUi
        .bg-blue.padding-sm.margin-xs.radius align-start
      .padding-left.padding-right.padding-top
        | .flex.align-end
      .flex.solid-bottom.padding.align-end
        .bg-blue.padding-lg.margin-xs.radius ColorUi
        .bg-blue.padding-sm.margin-xs.radius align-end
      .padding-left.padding-right.padding-top
        | .flex.align-center
      .flex.solid-bottom.padding.align-center
        .bg-blue.padding-lg.margin-xs.radius ColorUi
        .bg-blue.padding-sm.margin-xs.radius align-center
      .padding-left.padding-right.padding-top
        | .flex.align-stretch
      .flex.solid-bottom.padding.align-stretch
        .bg-blue.padding-lg.margin-xs.radius ColorUi
        .bg-blue.padding-sm.margin-xs.radius align-stretch
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 自身对齐(.self-[start|center|end|stretch])
    .bg-white
      .flex.flex-wrap.solid-bottom.padding
        .flex-sub.bg-blue.padding-lg.margin-xs.radius(style="height:100px") ColorUi
        .flex-sub.bg-blue.padding-sm.margin-xs.radius.self-start .self-start
        .flex-sub.bg-blue.padding-lg.margin-xs.radius(style="height:200px") ColorUi
        .flex-sub.bg-blue.padding-sm.margin-xs.radius.self-center .self-center
        .flex-sub.bg-blue.padding-lg.margin-xs.radius(style="height:300px") ColorUi
        .flex-sub.bg-blue.padding-sm.margin-xs.radius.self-end .self-end
        .flex-sub.bg-blue.padding-lg.margin-xs.radius(style="height:400px") ColorUi
        .flex-sub.bg-blue.padding-sm.margin-xs.radius.self-stretch .self-stretch
  //- Grid 布局
  block(v-if="TabCur == 1")
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 等分列
      .action
    .bg-white.padding
      .grid.margin-bottom.text-center(v-for="(item, index) in 5" :key="index" :class="'col-' + (index + 1)")
        .view.padding(:class="indexs % 2 == 0 ? 'bg-cyan' : 'bg-blue'" v-for="(item, indexs) in (index + 1) * 2" :key="indexs")
          | {{ indexs + 1 }}
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 等高布局
      .action
    .bg-white.padding
      .grid.col-4.grid-square
        .view.bg-img(v-for="(item, index) in avatar" :key="index")
          img.image(:src="avatar[index]")
          .cu-tag 6
          .text.cuIcon-pic 图标
  //- 辅助布局
  block(v-if="TabCur == 2")
    .cu-bar.bg-white.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 浮动 .cf
    .bg-white.padding
      .cf.padding-sm
        .bg-blue.radius.fl.padding-sm ColorUi .fl
        .bg-blue.radius.fr.padding-sm ColorUi .fr
    .cu-bar.bg-white.solid-bottom.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 内外边距
    .bg-white
      .padding.bg-gray {size}的尺寸有xs/sm/lg/xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 外边距 .margin[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-0 .margin-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-xs .margin-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-sm .margin-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin .margin
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lg .margin-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-xl .margin-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 水平方向外边距 .margin-lr[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lr-0 .margin-lr-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lr-xs .margin-lr-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lr-sm .margin-lr-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lr .margin-lr
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lr-lg .margin-lr-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-lr-xl .margin-lr-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 垂直方向外边距 .margin-tb[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-tb-0 .margin-tb-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-tb-xs .margin-tb-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-tb-sm .margin-tb-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-tb .margin-tb
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-tb-lg .margin-tb-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-tb-xl .margin-tb-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 上外边距 .margin-top[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-top-0 .margin-top-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-top-xs .margin-top-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-top-sm .margin-top-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-top .margin-top
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-top-lg .margin-top-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-top-xl .margin-top-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 右外边距 .margin-right[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-right-0 .margin-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-right-xs .margin-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-right-sm .margin-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-right .margin
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-right-lg .margin-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-right-xl .margin-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 下外边距 .margin-bottom[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-bottom-0 .margin-bottom-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-bottom-xs .margin-bottom-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-bottom-sm .margin-bottom-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-bottom .margin-bottom
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-bottom-lg .margin-bottom-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-bottom-xl .margin-bottom-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 外边距 .margin-left[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-left-0 .margin-left-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-left-xs .margin-left-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-left-sm .margin-left-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-left .margin-left
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-left-lg .margin-left-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.margin-left-xl .margin-left-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 内填充 .padding[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-0
            .content.bg-pink .padding-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-xs
            .content.bg-pink .padding-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-sm
            .content.bg-pink .padding-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding
            .content.bg-pink .padding
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lg
            .content.bg-pink .padding-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-xl
            .content.bg-pink .padding-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 水平方向内填充 .padding-lr[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lr-0
            .content.bg-pink .padding-lr-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lr-xs
            .content.bg-pink .padding-lr-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lr-sm
            .content.bg-pink .padding-lr-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lr
            .content.bg-pink .padding-lr
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lr-lg
            .content.bg-pink .padding-lr-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-lr-xl
            .content.bg-pink .padding-lr-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 垂直方向内填充 .padding-tb[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-tb-0
            .content.bg-pink .padding-tb-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-tb-xs
            .content.bg-pink .padding-tb-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-tb-sm
            .content.bg-pink .padding-tb-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-tb
            .content.bg-pink .padding-tb
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-tb-lg
            .content.bg-pink .padding-tb-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-tb-xl
            .content.bg-pink .padding-tb-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 上内填充 .padding-top[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-top-0
            .content.bg-pink .padding-top-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-top-xs
            .content.bg-pink .padding-top-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-top-sm
            .content.bg-pink .padding-top-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-top
            .content.bg-pink .padding-top
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-top-lg
            .content.bg-pink .padding-top-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-top-xl
            .content.bg-pink .padding-top-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 右内填充 .padding-right[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-right-0
            .content.bg-pink .padding-right-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-right-xs
            .content.bg-pink .padding-right-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-right-sm
            .content.bg-pink .padding-right-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-right
            .content.bg-pink .padding-right
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-right-lg
            .content.bg-pink .padding-right-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-right-xl
            .content.bg-pink .padding-right-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 下内填充 .padding-bottom[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-bottom-0
            .content.bg-pink .padding-bottom-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-bottom-xs
            .content.bg-pink .padding-bottom-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-bottom-sm
            .content.bg-pink .padding-bottom-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-bottom
            .content.bg-pink .padding-bottom
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-bottom-lg
            .content.bg-pink .padding-bottom-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-bottom-xl
            .content.bg-pink .padding-bottom-xl

      .flex.flex-wrap.padding.solid-top
        .padding-bottom-xs 左内填充 .padding-left[-0|xs|sm|lg|xl]
      .flex.flex-wrap.align-center.justify-evenly
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-left-0
            .content.bg-pink .padding-left-0
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-left-xs
            .content.bg-pink .padding-left-xs
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-left-sm
            .content.bg-pink .padding-left-sm
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-left
            .content.bg-pink .padding-left
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-left-lg
            .content.bg-pink .padding-left-lg
        .box.solid.line-red.margin-tb
          .inner-box.bg-blue.padding-left-xl
            .content.bg-pink .padding-left-xl
</template>

<script>
export default {
  components: {},
  data: () => ({
    TabCur: 0,
    tabNav: ['Flex布局', 'Grid布局', '辅助布局']
  }),
  computed: {
    CustomBar() {
      return this.$CustomBar
    },
    avatar() {
      return [
        'https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images',
        'http://api.mtyqx.cn/tapi/random.php',
        'https://api.ixiaowai.cn/api/api.php',
        'https://img.xjh.me/random_img.php?return=302&type=bg&ctype=acg'
      ]
    }
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
    console.log('onLoad:this', this)
    // debugger;
  },
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
// 列表
@import '@/util/colorui/scss/modules/nav.scss';
page {
  padding-top: 45px;
}
.box {
  overflow: hidden;
  .inner-box {
    box-sizing:border-box;
    display: flex;
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
