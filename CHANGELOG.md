<!--
 * @Author: cest
 * @Date: 2022-07-02 12:33:28
 * @LastEditTime: 2022-07-25 07:52:42
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/CHANGELOG.md
 * @Description: 更新日志
-->
# Change Log

## 2022-7-24

更新：

- 【color-ui】
  - 更新按钮说明文档
  - 样式模块更名 line.scss -> cu-box-line.scss
  - 样式模块更名 lines.scss -> cu-box-lines.scss
  - 样式模块更名 box-shadow.scss -> cu-box-shadow.scss
  - 更新标签说明文档

## 2022-7-23 v1.2.0.20220723

累计更新（2022-7-16 ~ 2022-7-23）

主要更新：

- 新增图标字体库 iconfont-24gl-1.0-no-circle-no-squarel、iconfont-uview2
- 修改vuex modules 动态导入的实现方式，解决 modules 不同命名空间下不能重名的问题
- 修改根字体大小 12px
- 更名 colorui -> color-ui

- 更新【color-ui】说明文档与demo
  - 更新辅助布局说明文档
  - 更新背景说明文档
  - 更新文本说明文档
  - 更新图标说明文档

## 2022-7-23

- 删除样式 .test
- 新增样式模块 overflow
- 删除样式模块 cedo-item
- 重构 store string_map 与 types
- 新增图标库： iconfont-24gl-1.0-no-circle-no-squarel
- 新增图标字体库 iconfont-uview2
- 新增主题 变量
- 修改根字体大小 12px
- 删除不必要的文件

## 2022-7-17

- 更名 colorui -> color-ui
- 【color-ui】
  - 更新图标说明文档
  - 更新图标说明文档 优化排版

## 2022-7-16

- 【colorui】
  - 更新辅助布局说明文档
  - 更新背景说明文档
  - 更新文本说明文档

## 2022-7-15

- 【uni-app-cli-preset】 工程
  - 修改vuex modules 动态导入的实现方式，解决 modules 不同命名空间下不能重名的问题
  - scss 混入测试

## 2022-7-14

- 【colorui】
  - 更新 grid 布局 demo和 grid.scss 说明文档

## 2022-7-12 v1.1.0.20220712

更新：

- 累计更新（2022-7-3 v1.0.1-alpha.20220703 ~ 2022-7-10）
- 集成 z-paging

## 2022-7-10

更新：

- 【uni-app-cli-preset】 工程
  - 首页

    ![首页](./docs/screenshots/index_20220710210717.png '首页')
  - 新增 新闻/资讯类 App 模板

    - 新闻-首页

      ![新闻-首页](./docs/screenshots/news_index.png '新闻-首页')

    - 新闻-详情页

      ![新闻-详情页](./docs/screenshots/news_detail.png '新闻-详情页')
  - 修复 vscode 使用了 `@/*` 别名后，路径不提示的问题
  - 取消宽屏适配

## 2022-7-9

更新：

- 【uni-app-cli-preset】 工程
  - 修改 ESlint 规范为 standard
  - 更新说明文档，只保留使用 yarn 的说明
  - 升级脚手架 @dcloudio/uni-* 版本 2.0.0-32920211029004 -> 2.0.1-34920220630001

## 2022-7-8

更新：

- 【uni-app-cli-preset】 工程
  - 动画性能优化
  - ESlint 校验规则 全力全开

## 2022-7-5 v1.0.1-alpha.20220705

更新：

- 【uni-app-cli-preset】 工程
  - 修改 `Vue` 扩展属性的扩展规则
    - `Vue.prototype.StatusBar` -> `Vue.prototype.$StatusBar`
    - `Vue.prototype.Custom` -> `Vue.prototype.$Custom`
    - `Vue.prototype.CustomBar` -> `Vue.prototype.$CustomBar`
- 【colorui】库
  - 新增【Layout】页面
  - 编写 Flex 布局说明文档

## 2022-7-4 v1.0.1-alpha.20220704

更新：

- 【colorui】库
  - 新增【插件扩展】导航页面（组件）

## 2022-7-3 v1.0.1-alpha.20220703

更新：

- 【uni-app-cli-preset】 工程
  - 修复：README.md `更新记录` 链接不正确的问题
  - package.json
    - 新增对 stylus 语法支持
  - 新增配置文件.stylintrc - stylus 语法校验与代码格式风格设置  
- 【colorui】库
  - 新增 CuTabbar 组件
  - 新增【基础元素】导航页面（组件）
  - 新增【交互组件】导航页面（组件）

## 2022-7-3 v1.0.0.20220703

 更新：

- 【uni-app-cli-preset】 工程
  - colorui 移动到 util 目录
  - 修改 .gitignore文件
  - 修改 babel.config.js 文件
  - 修改 README.md 说明文档
  - main.js 删除冗余功能
  - pages.json 精简注释
  - manifest.json 修改微信小程序项目设置
  - package.json 删除不需要的依赖
    - 新增 postcss-comment 依赖项
  的 resolutions 字段用于解析选择性版本，可以 辑 yarn.lock 文件。 详细 <https://  cs/selective-version-resolutions>
    - 升级 vue-cli 版本： 4.5.0 -> 4.5.15
  件的业务处理
  - 目录更名
    - doc -> docs
    - project-doc ->project-docs
  - CHANGELOG.md 从 docs 目录转移到根目录
  - docs 目录：文件名变更 README.md -> index.md

## 2022-7-2

- 【uni-app-cli-preset】 工程
  - 删除无关组件与文件
  - 新增配置文件 `.editorconfig` - 编辑器代码风格配置
  - 新增配置文件 `.env[.*][.local]` - 编译环节配置
  - 新增配置文件 `.npmrc` - npm 镜像配置
  - 新增配置文件 `.prettierrc` - 代码格式化风格配置
  - 新增配置文件 `.yarnrc` - yarn 镜像配置
  - 新增目录 `doc` - 工程说明文档目录
  - 新增目录 `project-doc` - 创建项目说明文档目录
  - 新增目录 `assets` 资源文件目录
  - 新增目录 `assets/theme` 主题样式目录
  - 集成 `colorui` 库
  - 集成 `uview-ui` 框架
  - 集成 `luch-request` 库
  - 集成 `vuex`
  - 更新：工具包 `util`
    - 新增 Array 类的扩展方法
    - 新增常量目录 CONSTANT/
    - 新增 CONSTANT_MESSAGE 消息类
    - 新增 HTTP_RESPONSE_STATUS_CODES 响应状态码
    - 新增 DateUnit 类 - 把时间转换成有单位的字符串
    - 新增函数 bytesToSize - 数据容量单位转换(kb,mb,gb,tb)
    - 新增函数 formatDate - 日期格式化
    - 新增函数 formatLocation - 经纬度格式化
    - 新增函数 formatTime 时间格式化
    - 新增函数 replaceImg 替换图片
    - 新增插件 Handwriting 手写插件
    - 新增目录 uni 常用工具包
    - 新增目录 `regexp` - 正则表达式目录，用于存放常用的正则表达式
    - 新增文件 `index.js` - 用于导出常用函数
- 更新：uni.scss - 新增对 uview2.0 主题变量的支持

## 2022-5-29

- fix: 删除接口的文档

## 2002-5-26

- delete：删除了 unpackage 文件夹
- fix: 修改了测试生产的接口的配置
- feat: 基于 `Vue CLI` 项目脚手架搭建了 uni-app-cli-preset 工程化构建工具。集成 **uni-app + vue-cli + uview2.0 + vue-rouer + vuex + axios + request + tailwindcss + z-paging**
