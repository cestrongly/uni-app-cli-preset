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
        .flex-sub.bg-blue.padding-sm.margin-xs.radius  flex-sub 1
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
        | 浮动
    .bg-white.padding
      .cf.padding-sm
        .bg-blue.radius.fl.padding-sm ColorUi fl
        .bg-blue.radius.fr.padding-sm ColorUi fr
    .cu-bar.bg-white.solid-bottom.margin-top.solid-bottom
      .action
        text.cuIcon-title.text-blue
        | 内外边距
    .bg-white
      .padding.bg-gray {size}的尺寸有xs/sm/df/lg/xl
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 外边距
        .basis-df.padding-bottom-xs 内边距
        .basis-df .margin-{size}
        .basis-df .padding-{size}
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 水平方向外边距
        .basis-df.padding-bottom-xs 水平方向内边距
        .basis-df .margin-lr-{size}
        .basis-df .padding-lr-{size}
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 垂直方向外边距
        .basis-df.padding-bottom-xs 垂直方向内边距
        .basis-df .margin-tb-{size}
        .basis-df .padding-tb-{size}
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 上外边距
        .basis-df.padding-bottom-xs 上内边距
        .basis-df .margin-top-{size}
        .basis-df .padding-top-{size}
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 右外边距
        .basis-df.padding-bottom-xs 右内边距
        .basis-df .margin-right-{size}
        .basis-df .padding-right-{size}
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 下外边距
        .basis-df.padding-bottom-xs 下内边距
        .basis-df margin-bottom-{size}
        .basis-df .padding-bottom-{size}
      .flex.flex-wrap.padding.solid-top
        .basis-df.padding-bottom-xs 左外边距
        .basis-df.padding-bottom-xs 左内边距
        .basis-df .margin-left-{size}
        .basis-df .padding-left-{size}
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
    avatar(){
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

<style>
	page {
		padding-top: 45px;
	}
</style>
