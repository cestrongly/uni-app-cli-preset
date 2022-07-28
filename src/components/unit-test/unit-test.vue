<!--
 * @Author: cest
 * @Date: 2022-06-17 23:02:14
 * @LastEditTime: 2022-06-21 02:45:56
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/pages/components/unit-test/unit-test.vue
 * @Description: 编辑描述内容
-->
<template>
  <view class="u-block">
    <view
      class="flex justify-center align-center"
      style="height: 150px;"
    >
      <view @click="go('pages/test/index/index')">
        <u-button>单元测试入口</u-button>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'UnitTest',
  props: {
  },
  data () {
    return {}
  },
  methods: {
    go (url) {
      this.$u.route(url)
    }
  }
}
</script>

<style>
</style>
