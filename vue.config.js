/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:49:04
 * @LastEditors: cest
 * @LastEditTime: 2022-07-02 13:09:58
 * @FilePath: /uni-app-cli/vue.config.js
 * @Description:
 */

// const TransformPages = require('uni-read-pages')
// const devServerConfig = require('./src/configs/devServer')
// const pageConfig = require('./src/configs')
// const { webpack } = new TransformPages()

module.exports = {
  // lintOnSave配置
  // Type: boolean | 'warning' | 'default' | 'error'
  // Default: true

  lintOnSave: true

  // publicPath: pageConfig.appBasePath,
  // 配置路径别名
  // configureWebpack: {
  //   devServer: {
  //     // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
  //     disableHostCheck: true,
  //     // 环境配置
  //     port: devServerConfig.port,
  //     hot: true, // false防止开发模式白屏(使用路由缓存时)
  //     ...(devServerConfig.useProxy && devServerConfig.proxyURL
  //       ? {
  //           proxy: {
  //             /** 解决本地测试跨域问题 */
  //             [`${devServerConfig.proxyPath}`]: {
  //               target: devServerConfig.proxyURL,
  //               pathRewrite: {
  //                 [`^${devServerConfig.proxyPath}`]: ''
  //               }
  //             }
  //           }
  //         }
  //       : {})
  //   },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     ROUTES: webpack.DefinePlugin.runtimeValue(() => {
  //       const tfPages = new TransformPages({
  //         includes: ['path', 'name', 'aliasPath']
  //       })
  //       return JSON.stringify(tfPages.routes)
  //     }, true)
  //   })
  // ]
  // },
  // 指定需要编译的依赖
  // transpileDependencies: ['@dcloudio/uni-ui', 'z-paging', 'uview-ui']
}
