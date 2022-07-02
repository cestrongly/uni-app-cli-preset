/**
 * @Author: cest
 * @Date: 2022-06-10 20:51:43
 * @LastEditTime: 2022-06-30 16:11:27
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/HTTP_response_status_codes.js
 * @Description: HTTP_RESPONSE_STATUS_CODES HTTP 响应状态码
 */

// HTTP 响应状态码用来表明特定 HTTP 请求是否成功完成。 响应被归为以下五大类：

// 信息响应 (100–199)
// 成功响应 (200–299)
// 重定向消息 (300–399)
// 客户端错误响应 (400–499)
// 服务端错误响应 (500–599)
export default [
  // 信息响应
  {
    code: '100',
    message: 'Continue',
    desc: '这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它'
  },
  {
    code: '101',
    message: 'Switching Protocols',
    desc: '该代码是响应客户端的 Upgrade (en-US) 请求头发送的， 指明服务器即将切换的协议'
  },
  { code: '102', message: 'Processing (WebDAV)', desc: '此代码表示服务器已收到并正在处理该请求，但当前没有响应可用' },
  {
    code: '103',
    message: 'Early Hints',
    desc: '此状态代码主要用于与 Link 链接头一起使用，以允许用户代理在服务器准备响应阶段时开始预加载 preloading 资源'
  },
  // 成功响应
  { code: '200', message: 'OK', desc: '请求成功。成功的含义取决于 HTTP 方法：' },
  // GET: 资源已被提取并在消息正文中传输。
  // HEAD: 实体标头位于消息正文中。
  // PUT or POST: 描述动作结果的资源在消息体中传输。
  // TRACE: 消息正文包含服务器收到的请求消息。
  {
    code: '201',
    message: 'Created',
    desc: '该请求已成功，并因此创建了一个新的资源。这通常是在 POST 请求，或是某些 PUT 请求之后返回的响应'
  },
  {
    code: '202',
    message: 'Accepted',
    desc: '请求已经接收到，但还未响应，没有结果。意味着不会有一个异步的响应去表明当前请求的结果，预期另外的进程和服务去处理请求，或者批处理'
  },
  {
    code: '203',
    message: 'Non-Authoritative Information',
    desc: '服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。当前的信息可能是原始版本的子集或者超集。例如，包含资源的元数据可能导致原始服务器知道元信息的超集。使用此状态码不是必须的，而且只有在响应不使用此状态码便会返回200 OK的情况下才是合适的'
  },
  {
    code: '204',
    message: 'No Content',
    desc: '对于该请求没有的内容可发送，但头部字段可能有用。用户代理可能会用此时请求头部信息来更新原来资源的头部缓存字段'
  },
  { code: '205', message: 'Reset Content', desc: '告诉用户代理重置发送此请求的文档' },
  {
    code: '206',
    message: 'Partial Content',
    desc: '当从客户端发送Range范围标头以只请求资源的一部分时，将使用此响应代码'
  },
  { code: '207', message: 'Multi-Status (WebDAV)', desc: '对于多个状态代码都可能合适的情况，传输有关多个资源的信息' },
  {
    code: '208',
    message: 'Already Reported (WebDAV)',
    desc: '在 DAV 里面使用 <dav:propstat> 响应元素以避免重复枚举多个绑定的内部成员到同一个集合'
  },
  {
    code: '226',
    message: 'IM Used (HTTP Delta encoding)',
    desc: '服务器已经完成了对资源的GET请求，并且响应是对当前实例应用的一个或多个实例操作结果的表示'
  },
  // 重定向消息
  {
    code: '300',
    message: 'Multiple Choice',
    desc: '请求拥有不只一个的可鞥响应。用户带来或者用户应当从中选择一个。 (没有标准化的方法来选择其中一个响应，但是建议使用指向可能性的 HTML 链接，以便用户可以选择。)'
  },
  { code: '301', message: 'Moved Permanently', desc: '请求资源的 URL 已永久更改。在响应中给出了新的 URL' },
  {
    code: '302',
    message: 'Found',
    desc: '此响应代码表示所请求资源的 URI 已 暂时 更改。未来可能会对 URI 进行进一步的改变。因此，客户机应该在将来的请求中使用这个相同的 URI'
  },
  {
    code: '303',
    message: 'See Other',
    desc: '服务器发送此响应，以指示客户端通过一个 GET 请求在另一个 URI 中获取所请求的资源'
  },
  {
    code: '304',
    message: 'Not Modified',
    desc: '这是用于缓存的目的。它告诉客户端响应还没有被修改，因此客户端可以继续使用相同的缓存版本的响应'
  },
  {
    code: '305',
    message: 'Use Proxy Deprecated',
    desc: '在 HTTP 规范中定义，以指示请求的响应必须被代理访问。由于对代理的带内配置的安全考虑，它已被弃用'
  },
  { code: '306', message: 'unused', desc: '此响应代码不再使用；它只是保留。它曾在 HTTP/1.1 规范的早期版本中使用过' },
  {
    code: '307',
    message: 'Temporary Redirect',
    desc: '服务器发送此响应，以指示客户端使用在前一个请求中使用的相同方法在另一个 URI 上获取所请求的资源。这与 302 Found HTTP 响应代码具有相同的语义，但用户代理 不能 更改所使用的 HTTP 方法：如果在第一个请求中使用了 POST，则在第二个请求中必须使用 POST'
  },
  {
    code: '308',
    message: 'Permanent Redirect',
    desc: '这意味着资源现在永久位于由Location: HTTP Response 标头指定的另一个 URI。 这与 301 Moved Permanently HTTP 响应代码具有相同的语义，但用户代理不能更改所使用的 HTTP 方法：如果在第一个请求中使用 POST，则必须在第二个请求中使用 POST'
  },
  // 客户端错误响应
  {
    code: '400',
    message: 'Bad Request',
    desc: '由于被认为是客户端错误（例如，错误的请求语法、无效的请求消息帧或欺骗性的请求路由），服务器无法或不会处理请求'
  },
  {
    code: '401',
    message: 'Unauthorized',
    desc: '虽然 HTTP 标准指定了"unauthorized"，但从语义上来说，这个响应意味着"unauthenticated"。也就是说，客户端必须对自身进行身份验证才能获得请求的响应'
  },
  {
    code: '402',
    message: 'Payment Required Experimental',
    desc: '此响应代码保留供将来使用。创建此代码的最初目的是将其用于数字支付系统，但是此状态代码很少使用，并且不存在标准约定'
  },
  {
    code: '403',
    message: 'Forbidden',
    desc: '客户端没有访问内容的权限；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。与 401 Unauthorized 不同，服务器知道客户端的身份'
  },
  {
    code: '404',
    message: 'Not Found',
    desc: '服务器找不到请求的资源。在浏览器中，这意味着无法识别 URL。在 API 中，这也可能意味着端点有效，但资源本身不存在。服务器也可以发送此响应，而不是 403 Forbidden，以向未经授权的客户端隐藏资源的存在。这个响应代码可能是最广为人知的，因为它经常出现在网络上'
  },
  {
    code: '405',
    message: 'Method Not Allowed',
    desc: '服务器知道请求方法，但目标资源不支持该方法。例如，API 可能不允许调用DELETE来删除资源'
  },
  {
    code: '406',
    message: 'Not Acceptable',
    desc: '当 web 服务器在执行服务端驱动型内容协商机制后，没有发现任何符合用户代理给定标准的内容时，就会发送此响应'
  },
  { code: '407', message: 'Proxy Authentication Required', desc: '类似于 401 Unauthorized 但是认证需要由代理完成' },
  {
    code: '408',
    message: 'Request Timeout',
    desc: '此响应由一些服务器在空闲连接上发送，即使客户端之前没有任何请求。这意味着服务器想关闭这个未使用的连接。由于一些浏览器，如 Chrome、Firefox 27+ 或 IE9，使用 HTTP 预连接机制来加速冲浪，所以这种响应被使用得更多。还要注意的是，有些服务器只是关闭了连接而没有发送此消息'
  },
  { code: '409', message: 'Conflict', desc: '当请求与服务器的当前状态冲突时，将发送此响应' },
  {
    code: '410',
    message: 'Gone',
    desc: '当请求的内容已从服务器中永久删除且没有转发地址时，将发送此响应。客户端需要删除缓存和指向资源的链接。HTTP 规范打算将此状态代码用于“有限时间的促销服务”。API 不应被迫指出已使用此状态代码删除的资源'
  },
  {
    code: '411',
    message: 'Length Required',
    desc: '服务端拒绝该请求因为 Content-Length 头部字段未定义但是服务端需要它'
  },
  { code: '412', message: 'Precondition Failed', desc: '客户端在其头文件中指出了服务器不满足的先决条件' },
  {
    code: '413',
    message: 'Payload Too Large',
    desc: '请求实体大于服务器定义的限制。服务器可能会关闭连接，或在标头字段后返回重试 Retry-After'
  },
  { code: '414', message: 'URI Too Long', desc: '客户端请求的 URI 比服务器愿意接收的长度长' },
  { code: '415', message: 'Unsupported Media Type', desc: '服务器不支持请求数据的媒体格式，因此服务器拒绝请求' },
  {
    code: '416',
    message: 'Range Not Satisfiable',
    desc: '无法满足请求中 Range 标头字段指定的范围。该范围可能超出了目标 URI 数据的大小'
  },
  { code: '417', message: 'Expectation Failed', desc: '此响应代码表示服务器无法满足 Expect 请求标头字段所指示的期望' },
  { code: '418', message: "'I'm a teapot", desc: '服务端拒绝用茶壶煮咖啡。笑话，典故来源茶壶冲泡咖啡' },
  {
    code: '421',
    message: 'Misdirected Request',
    desc: '请求被定向到无法生成响应的服务器。这可以由未配置为针对请求 URI 中包含的方案和权限组合生成响应的服务器发送'
  },
  { code: '422', message: 'Unprocessable Entity (WebDAV)', desc: '请求格式正确，但由于语义错误而无法遵循' },
  { code: '423', message: 'Locked (WebDAV)', desc: '正在访问的资源已锁定' },
  { code: '424', message: 'Failed Dependency (WebDAV)', desc: '由于前一个请求失败，请求失败' },
  { code: '425', message: 'Too Early Experimental', desc: '表示服务器不愿意冒险处理可能被重播的请求' },
  {
    code: '426',
    message: 'Upgrade Required',
    desc: '服务器拒绝使用当前协议执行请求，但在客户端升级到其他协议后可能愿意这样做。 服务端发送带有Upgrade (en-US) 字段的 426 响应 来表明它所需的协议（们）'
  },
  {
    code: '428',
    message: 'Precondition Required',
    desc: "源服务器要求请求是有条件的。此响应旨在防止'丢失更新'问题，即当第三方修改服务器上的状态时，客户端 GET 获取资源的状态，对其进行修改并将其 PUT 放回服务器，从而导致冲突"
  },
  { code: '429', message: 'Too Many Requests', desc: '用户在给定的时间内发送了太多请求（"限制请求速率"）' },
  {
    code: '431',
    message: 'Request Header Fields Too Large',
    desc: '服务器不愿意处理请求，因为其头字段太大。在减小请求头字段的大小后，可以重新提交请求'
  },
  {
    code: '451',
    message: 'Unavailable For Legal Reasons',
    desc: '用户代理请求了无法合法提供的资源，例如政府审查的网页'
  },
  // 服务端错误响应
  { code: '500', message: 'Internal Server Error', desc: '服务器遇到了不知道如何处理的情况' },
  {
    code: '501',
    message: 'Not Implemented',
    desc: '服务器不支持请求方法，因此无法处理。服务器需要支持的唯二方法（因此不能返回此代码）是 GET and HEAD'
  },
  {
    code: '502',
    message: 'Bad Gateway',
    desc: '此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应'
  },
  {
    code: '503',
    message: 'Service Unavailable',
    desc: '服务器没有准备好处理请求。常见原因是服务器因维护或重载而停机。请注意，与此响应一起，应发送解释问题的用户友好页面。这个响应应该用于临时条件和如果可能的话，HTTP 标头 Retry-After 字段应该包含恢复服务之前的估计时间。网站管理员还必须注意与此响应一起发送的与缓存相关的标头，因为这些临时条件响应通常不应被缓存'
  },
  { code: '504', message: 'Gateway Timeout', desc: '当服务器充当网关且无法及时获得响应时，会给出此错误响应' },
  { code: '505', message: 'HTTP Version Not Supported', desc: '服务器不支持请求中使用的 HTTP 版本' },
  {
    code: '506',
    message: 'Variant Also Negotiates',
    desc: '服务器存在内部配置错误：所选的变体资源被配置为参与透明内容协商本身，因此不是协商过程中的适当终点'
  },
  {
    code: '507',
    message: 'Insufficient Storage (WebDAV)',
    desc: '无法在资源上执行该方法，因为服务器无法存储成功完成请求所需的表示'
  },
  { code: '508', message: 'Loop Detected (WebDAV)', desc: '服务器在处理请求时检测到无限循环' },
  { code: '510', message: 'Not Extended', desc: '服务器需要对请求进行进一步扩展才能完成请求' },
  {
    code: '511',
    message: 'Network Authentication Required',
    desc: '指示客户端需要进行身份验证才能获得网络访问权限'
  }
]
