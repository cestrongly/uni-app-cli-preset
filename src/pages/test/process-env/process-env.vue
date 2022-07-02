<!--
 * @Author: cest
 * @Date: 2022-06-15 20:34:29
 * @LastEditTime: 2022-07-02 13:35:32
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/test/process-env/process-env.vue
 * @Description: 编辑描述内容
-->
<template>
  <view class="u-page">
    <!-- Custom Head -->
    <cu-custom bgColor="bg-gradual-blue"
               :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">{{ pageName }}</block>
    </cu-custom>
    <view class="u-block">
      <view class="u-block__title">环境变量</view>
      <view class="u-block__section">
        <view v-for="(key, index) in Object.keys(this.env)"
              :key="index">
          <text class="text-blue">{{ key }}: </text>
          <text class="text-pink">{{ env[key] }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      pageName: '环境变量测试',
      // 环境变量
      env: {}
    }
  },
  created () {
    console.log('process.env:', process.env)
    this.env = process.env
  },
  methods: {}
}
</script>
