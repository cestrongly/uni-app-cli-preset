<!--
 * @Author: cest
 * @Date: 2022-07-30 09:21:47
 * @LastEditTime: 2022-08-01 08:44:47
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/util/color-ui/components/cu-nav/cu-nav.vue
 * @Description: 自定义导航栏
-->

<template lang="pug">
.cu-nav(:style="[{ height: CustomStatusBarHeight + 'px' }]")
  .cu-nav__body.fixed.flex.justify-center.align-center(:style="NavBodyStyle" :class="[bgColor, bgImageUrl? 'none-bg text-white bg-img' : '']")
    .back.margin-lr-sm.text-df(@tap="backEventHandler" v-if="showBack")
      //- .icon.icon-ba.cuIcon-back
      //- 具名插槽 自定义导航栏--返回
      slot(name="backText")
    .title.text-df(:style="[{ top: StatusBarHeight + 'px' }]")
      //- 具名插槽 自定义导航栏--标题
      slot(name="content")
    .right.margin-lr-sm
      //- 具名插槽 自定义导航栏--右边
      slot(name="right")
</template>

<script>
export default {
  props: {
    // 自定义背景色
    bgColor: {
      type: String,
      default: ''
    },
    // 是否显示返回
    showBack: {
      type: [Boolean, String],
      default: false
    },
    // 自定义背景图片路径
    bgImageUrl: {
      type: String,
      default: ''
    },
    // 自定义返回功能
    backFunction: {
      type: Function,
      default: function () {}
    }
  },
  data() {
    return {}
  },
  computed: {
    // 手机状态栏的高度
    StatusBarHeight() {
      return this.$StatusBarHeight || 0
    },
    // 自定义导航栏--高度
    CustomStatusBarHeight() {
      return this.$CustomStatusBarHeight || 0
    },
    // 自定义导航栏--样式
    NavBodyStyle() {
      let style = `height:${this.CustomStatusBarHeight}px;padding-top:${this.StatusBarHeight}px;`
      if (this.bgImageUrl) {
        style = `${style}background-image:url(${this.bgImageUrl});`
      }
      return style
    }
  },

  methods: {
    backEventHandler(e) {
      console.log('backEventHandler e',e)
      console.log('backEventHandler backFunction',this.backFunction)
      if (typeof this.backFunction === 'function') {
        this.backFunction()
      } else {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './stylus'
</style>
