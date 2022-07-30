<!--
 * @Author: cest
 * @Date: 2022-07-30 09:21:47
 * @LastEditTime: 2022-07-30 09:54:47
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/util/color-ui/components/cu-nav/cu-nav.vue
 * @Description: 自定义导航栏
-->

<template lang="pug">
.cu-nav(:style="[{ height: CustomBar + 'px' }]")
  .cu-nav__body.fixed(:style="NavBodyStyle" :class="[bgColor, bgImageUrl? 'none-bg text-white bg-img' : '']")
    .back(@tap="backEventHandler" v-if="showBack")
      text.cuIcon-back
      //- 具名插槽 自定义导航栏--返回
      slot(name="backText")
    .title(:style="[{ top: StatusBar + 'px' }]")
      //- 具名插槽 自定义导航栏--标题
      slot(name="content")
    .right
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
