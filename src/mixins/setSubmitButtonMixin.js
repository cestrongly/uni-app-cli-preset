/**
 * @Author: cest
 * @Date: 2022-06-22 08:57:44
 * @LastEditTime: 2022-06-22 08:57:45
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/mixins/setSubmitButtonMixin.js
 * @Description: 编辑描述内容
 */
/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:48:59
 * @LastEditors: zhuangli.qin
 * @LastEditTime: 2022-06-16 17:04:07
 * @FilePath: /cedo-app-cli/src/components/cedo-application-add-form/mixins/setSubmitButtonMixin.js
 * @Description:
 */
export default {
  data() {
    return {
      // 提交按钮
      submitButton: {
        loading: false,
        loadingText: '正在提交',
        disabled: false
      }
    }
  },
  methods: {
    setSubmitButtonAsLoading() {
      this.submitButton.loading = true
      this.submitButton.disabled = true
    },
    setSubmitButtonAsavailable() {
      this.submitButton.loading = false
      this.submitButton.disabled = false
    }
  }
}
