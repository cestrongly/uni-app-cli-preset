<!--
* @Author: zhuangli qin
* @Date: 2022-6-14 16:08:39
 * @LastEditors: cest
 * @LastEditTime: 2022-07-02 13:27:43
 * @FilePath: /uni-app-cli/src/pages/index/components/main.vue
* @Description: 表单：工单提交
-->

<template lang="pug">
view.u-page.bg-white(style='padding-bottom: 200px')
  //- Custom Head
  cu-custom(bgColor='bg-gradual-blue', :isBack='false')
    //- <block slot="backText">返回</block>
    block(slot='content')
      | {{ pageName }}
  //- BackTop 返回顶部
  //- <u-back-top :scroll-top="scrollTop"></u-back-top>
</template>

<script>


export default {
  components: {

  },
  name: 'Components',
  data () {
    return {
      pageName: '工单提交',
    }
  },
  methods: {}
}
</script>
