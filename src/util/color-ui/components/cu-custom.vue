<!--
 * @Author: cest
 * @Date: 2022-07-02 12:33:28
 * @LastEditTime: 2022-07-09 02:25:09
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/util/color-ui/components/cu-custom.vue
 * @Description: 自定义头部
-->
<template>
  <view>
    <view
      class="cu-custom"
      :style="[{ height: CustomBar + 'px' }]"
    >
      <view
        class="cu-bar fixed"
        :style="style"
        :class="[bgImage != '' ? 'none-bg text-white bg-img' : '', bgColor]"
      >
        <view
          class="action"
          @tap="BackPage"
          v-if="isBack"
        >
          <text class="cuIcon-back" />
          <slot name="backText" />
        </view>
        <view
          class="content"
          :style="[{ top: StatusBar + 'px' }]"
        >
          <slot name="content" />
        </view>
        <slot name="right" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  name: 'CuCustom',
  computed: {
    StatusBar() {
      return this.$StatusBar
    },
    CustomBar() {
      return this.$CustomBar
    },
    style() {
      const StatusBar = this.$StatusBar
      const CustomBar = this.$CustomBar
      const {bgImage} = this
      let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`
      if (this.bgImage) {
        style = `${style}background-image:url(${bgImage});`
      }
      return style
    }
  },
  props: {
    bgColor: {
      type: String,
      default: ''
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    }
  },
  methods: {
    BackPage() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style></style>
