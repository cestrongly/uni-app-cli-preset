<!--
 * @Author: cest
 * @Date: 2022-07-02 12:33:28
 * @LastEditTime: 2022-07-03 00:36:07
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/CHANGELOG.md
 * @Description: 更新日志
-->
# Change Log

## 2022-7-3

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