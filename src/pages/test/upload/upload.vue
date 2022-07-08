<!--
 * @Author: cest
 * @Date: 2022-06-15 20:34:29
 * @LastEditTime: 2022-07-09 02:01:13
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/test/upload/upload.vue
 * @Description: 上传图片功能测试
-->
<template>
  <view class="u-page bg-white">
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
    <view class="padding">
      <view class="u-demo-block">
        <text class="u-demo-block__title">
          基础用法
        </text>
        <view class="u-demo-block__content">
          <view class="u-page__upload-item">
            <u-upload
              :file-list="fileList1"
              @afterRead="afterRead"
              @delete="deletePic"
              name="1"
              multiple
              :max-count="10"
            />
          </view>
        </view>
      </view>
      <view class="u-demo-block">
        <text class="u-demo-block__title">
          上传信息
        </text>
        <view class="u-demo-block__content">
          <view
            class="u-page__upload-item"
            v-for="(item, index) in fileList1"
            :key="index"
          >
            <view class="u-block__section">
              <view
                v-for="(key, index2) in Object.keys(item)"
                :key="index2"
              >
                <view v-if="key === 'data' && item[key] !== null">
                  <view>返回结果：</view>
                  <view
                    v-for="(property, index3) in Object.keys(item[key])"
                    :key="index3"
                  >
                    <text class="text-blue">
                      {{ property }}:
                    </text>
                    <text
                      class="text-pink"
                      style="word-break: break-all"
                    >
                      {{ item[key][property] }}
                    </text>
                  </view>
                </view>
                <view v-else>
                  <text class="text-blue">
                    {{ key }}:
                  </text>
                  <text
                    class="text-pink"
                    style="word-break: break-all"
                    v-if="key === 'size'"
                  >
                    {{ bytesToSize(item[key]) }}
                  </text>
                  <text
                    class="text-pink"
                    style="word-break: break-all"
                    v-else
                  >
                    {{ item[key] }}
                  </text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { API_BASE_URL } from '@/setting'
import HTTP_RESPONSE_STATUS_CODES from '@/util/CONSTANT/HTTP_RESPONSE_STATUS_CODES'
import store from '@/store'
import bytesToSize from '@/util/function/bytesToSize'
export default {
  data() {
    return {
      pageName: '上传图片功能测试',
      fileList1: [],
      // 上传任务
      uploadTask: {}
    }
  },
  created() {},
  methods: {
    bytesToSize,
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1)
    },
    // 新增图片
    async afterRead(event) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      const lists = [].concat(event.file)
      let fileListLen = this[`fileList${event.name}`].length
      lists.map(item => {
        const newItem =this[`fileList${event.name}`].push({
          ...item,
          status: 'uploading',
          message: '上传中'
        })
        return newItem

      })

      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i])

        const item = this[`fileList${event.name}`][fileListLen]
        this[`fileList${event.name}`].splice(
          fileListLen,
          1,
          // Object.assign(item, {
          //   // status: 'success',
          //   status: 'failed',
          //   message: '上传失败',
          //   url: result
          // })
          Object.assign(item, result)
        )
        fileListLen++
      }
    },
    async uploadFilePromise(file) {
      // console.log('file:', file)
      return new Promise((resolve, reject) => {
        this.uploadTask = uni.uploadFile({
          // url: 'http://www.example.com/upload', // 仅为示例，非真实的接口地址
          url: `${API_BASE_URL}/user/system/res-attachment/upload`,
          filePath: file.url,
          header: { Authorization: 'Bearer ' + store.state.token },
          name: 'file',
          formData: {
            uid: new Date().getTime(),
            fileName: this.$u.guid(),
            fileSize: file.size
          },
          success: res => {
            console.log('res:', res)
            const data = JSON.parse(res.data)
            const code = data.code
            const statusCode = HTTP_RESPONSE_STATUS_CODES.find(item => item.code === code.toString())
            console.log('status_code:', statusCode)
            if (code === 200) {
              resolve({
                status: 'success',
                message: '上传成功',
                data: data.data
              })
            } else {
              reject(new Error({
                status: 'failed',
                message: '上传失败',
                errMsg: data.message,
                data: null
              }))
            }

            // setTimeout(() => {
            //   resolve(res.data.data)
            // }, 1000)
          },
          fail: res => {
            console.log('upload fail:', res)
            reject(new Error({
              status: 'failed',
              message: '上传失败',
              errMsg: res.errMsg,
              data: null
            }))
          },
          complete(res) {
            console.log('upload complete:', res)
          }
        })

        this.uploadTask.onProgressUpdate(res => {
          console.log('上传信息', res)
          console.log('上传进度' + res.progress)
          console.log('已经上传的数据长度' + res.totalBytesSent)
          console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend)

          // 测试条件，取消上传任务。
          if (res.progress > 50) {
            // this.uploadTask.abort()
          }
        })
      })
      // try {
      //   const res = await upload({
      //     uid: new Date().getTime(),
      //     fileName: 'test',
      //     fileSize: file.size,
      //     file: `(二进制)`
      //   })
      // } catch (e) {
      //   //TODO handle the exception
      //   console.log('upload err:', e)
      // }
    }
  }
}
</script>

<style lang="scss" scoped></style>
