import store from '@/store'
// 响应拦截器
// http.interceptors.response.use((response) => {
// 	/* 对响应成功做点什么 可使用async await 做异步操作*/
// 	// if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
// 	//    	return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
// 	// if (response.config.custom.verification) { // 演示自定义参数的作用
// 	//   	return response.data
// 	// }
// 	console.log(response)
// 	return response
// }, (response) => {
// 	/*  对响应错误做点什么 （statusCode !== 200）*/
// 	console.log(response)
// 	return Promise.reject(response)
// })

/**
 * 响应拦截
 * @param {Object} http
 */

module.exports = http => {
  http.interceptors.response.use(
    response => {
      /*  对响应成功做点什么 （statusCode === 200）可使用async await 做异步操作 */
      console.log('响应成功：', response)
      // 处理后端返回的接口状态码
      let { code, message } = response.data
      if (code !== 200) {
        // 401	Authentication	表示认证类型的错误，一般需要登录认证
        if (code === 401) {
          store.commit('logout')
          uni.reLaunch({
            url: '/pages/login/login'
          })
        } else if (response.data.code === 500) {
          message = '账号异常，请联系系统管理员。错误原因:' + response.data.message
        } else {
          message = '出现错误，请稍后再试.' + response.errMsg
        }

        // 自定义字段
        const custom = response.config?.custom
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast !== false) {
          uni.$u.toast(message)
        }
        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          return Promise.reject(response)
        } else {
          // 否则返回一个pending中的promise
          return new Promise(() => {})
        }
      }
      return response.data || {}
    },
    response => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      console.error('响应错误：response', response)
      uni.$u.toast(response?.errMsg ?? '请求超时')
      return Promise.reject(response)
    }
  )
}

const resolveStatCode = code => {
  errMsg = ''
  switch (code) {
    case '400':
      errMsg = '400（错误请求） 服务器不理解请求的语法'
      break
    case '401':
      errMsg = '401（身份验证错误） 此页要求授权'
      break
    case '403':
      errMsg = '403（禁止） 服务器拒绝请求'
      break
    case '404':
      errMsg = '404（未找到） 服务器找不到请求的网页'
      break
    case '405':
      errMsg = '405（方法禁用） 禁用请求中指定的方法'
      break
    case '406':
      errMsg = '406（不接受） 无法使用请求的内容特性响应请求的网页'
      break
    case '407':
      errMsg = '407（需要代理授权） 请求者必须授权使用代理'
      break
    case '408':
      errMsg = '408（请求超时） 服务器等候请求时发生超时'
      break
    case '409':
      errMsg = '409（冲突） 服务器在完成请求时发生冲突'
      break
    case '410':
      errMsg = '410（已删除）'
      break
    case '411':
      errMsg = '411（需要有效长度） 服务器不接受不含有效内容长度标头字段的请求'
      break
    case '412':
      errMsg = '412（未满足前提条件） 服务器未满足请求者在请求中设置的其中一个前提条件'
      break
    case '413':
      errMsg = '413（请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力'
      break
    case '414':
      errMsg = '414（请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理'
      break
  }
  // 4XXHTTP状态码表示请求可能出错，会妨碍服务器的处理。

  //       400（错误请求） 服务器不理解请求的语法。

  //       401（身份验证错误） 此页要求授权。您可能不希望将此网页纳入索引。

  //       403（禁止） 服务器拒绝请求。

  //       404（未找到） 服务器找不到请求的网页。例如，对于服务器上不存在的网页经常会返回此代码。

  //       例如：http://www.0631abc.com/20100aaaa，就会进入404错误页面

  //       405（方法禁用） 禁用请求中指定的方法。

  //       406（不接受） 无法使用请求的内容特性响应请求的网页。

  //       407（需要代理授权） 此状态码与 401 类似，但指定请求者必须授权使用代理。如果服务器返回此响应，还表示请求者应当使用代理。

  //       408（请求超时） 服务器等候请求时发生超时。

  //       409（冲突） 服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。服务器在响应与前一个请求相冲突的 PUT 请求时可能会返回此代码，以及两个请求的差异列表。

  //       410（已删除） 请求的资源永久删除后，服务器返回此响应。该代码与 404（未找到）代码相似，但在资源以前存在而现在不存在的情况下，有时会用来替代 404 代码。如果资源已永久删除，您应当使用 301 指定资源的新位置。

  //       411（需要有效长度） 服务器不接受不含有效内容长度标头字段的请求。

  //       412（未满足前提条件） 服务器未满足请求者在请求中设置的其中一个前提条件。

  //       413（请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。

  //       414（请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理。

  //       415（不支持的媒体类型） 请求的格式不受请求页面的支持。

  //       416（请求范围不符合要求） 如果页面无法提供请求的范围，则服务器会返回此状态码。

  //       417（未满足期望值） 服务器未满足"期望"请求标头字段的要求。

  //               500至505表示的意思是：服务器在尝试处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。

  //               500（服务器内部错误）  服务器遇到错误，无法完成请求。

  //               501（尚未实施） 服务器不具备完成请求的功能。例如，当服务器无法识别请求方法时，服务器可能会返回此代码。

  //               502（错误网关） 服务器作为网关或代理，从上游服务器收到了无效的响应。

  //               503（服务不可用） 目前无法使用服务器（由于超载或进行停机维护）。通常，这只是一种暂时的状态。

  //               504（网关超时）  服务器作为网关或代理，未及时从上游服务器接收请求。

  //               505（HTTP 版本不受支持） 服务器不支持请求中所使用的 HTTP 协议版本。
}
