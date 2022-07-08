<!--
 * @Author: cest
 * @Date: 2022-06-15 20:34:29
 * @LastEditTime: 2022-07-09 02:02:03
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/test/change-theme/change-theme.vue
 * @Description: 切换主题
-->
<template>
  <view
    class="u-page bg-color"
    :class="theme"
  >
    <!-- Custom Head -->
    <cu-custom
      bg-color="bg-gradual-blue"
      :is-back="true"
    >
      <block slot="backText">
        返回
      </block>
      <block slot="content">
        {{ pageName }}
      </block>
    </cu-custom>
    <view class="u-block">
      <view class="u-block__title">
        切换主题
      </view>
      <view class="u-block__section">
        <u-switch
          v-model="value"
          @change="asyncChangeEventHandler"
        /> {{ value }}
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data () {
    return {
      pageName: '切换主题',
      value: false,
      theme: 'default'
    }
  },
  created () {

  },
  methods: {
    asyncChangeEventHandler (e) {
      this.value = e


      if (this.value) {
        this.theme = 'dark'

        uni.setBackgroundColor({
          backgroundColor: '#222222',
          backgroundColorTop: '#222222',
          backgroundColorBottom: '#222222'

        });



         uni.setNavigationBarColor({
          backgroundColor: '#ffffff',	// HexColor	#F7F7F7	导航栏背景颜色（同状态栏背景色）	APP与H5为#F7F7F7，小程序平台请参考相应小程序文档
          frontColor: '#ffffff' // 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
        })


        uni.setBackgroundTextStyle({
          textStyle: 'light' // 下拉背景字体、loading 图的样式为 light
        })
      } else {
        this.theme = 'default'
        uni.setBackgroundColor({
          backgroundColor: '#ffffff',
          backgroundColorTop: '#ffffff',
          backgroundColorBottom: '#ffffff',

        });

        uni.setNavigationBarColor({
          backgroundColor: '#222222',	// HexColor	#F7F7F7	导航栏背景颜色（同状态栏背景色）	APP与H5为#F7F7F7，小程序平台请参考相应小程序文档
          frontColor: '#ffffff' // 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
        })

        uni.setBackgroundTextStyle({
          textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
        })

      }
    }
  }
}
</script>
