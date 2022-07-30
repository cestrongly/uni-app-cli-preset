<!--
 * @Author: cest
 * @Date: 2022-07-02 12:33:28
 * @LastEditTime: 2022-07-30 09:20:29
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/util/color-ui/components/cu-custom.vue
 * @Description: 自定义头部
-->
<template lang="pug">
.cu-custom(:style="[{ height: CustomBar + 'px' }]")
  .cu-bar.fixed(:style="style" :class="[bgColor, bgImage? 'none-bg text-white bg-img' : '']")
    .action(@tap="backEventHandler" v-if="isBack")
      text.cuIcon-back
      //- 具名插槽 自定义导航栏--返回
      slot(name="backText")
    .content(:style="[{ top: StatusBar + 'px' }]")
      //- 具名插槽 自定义导航栏--标题
      slot(name="content")
    //- 具名插槽 自定义导航栏--右边
    slot(name="right")
</template>

<script>
export default {
  name: 'CuCustom',
  props: {
    // 自定义背景色
    bgColor: {
      type: String,
      default: ''
    },
    // 是否显示返回
    isBack: {
      type: [Boolean, String],
      default: false
    },
    // 自定义背景图片路径
    bgImage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    // 手机状态栏的高度
    StatusBar() {
      return this.$StatusBarHeight || 0
    },
    // 自定义导航栏--高度
    CustomBar() {
      return this.$CustomStatusBarHeight || 0
    },
    style() {
      const StatusBar = this.$StatusBarHeight
      const CustomBar = this.$CustomStatusBarHeight
      const {bgImage} = this
      let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`
      if (this.bgImage) {
        style = `${style}background-image:url(${bgImage});`
      }
      return style
    }
  },

  methods: {
    backEventHandler(e) {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>
