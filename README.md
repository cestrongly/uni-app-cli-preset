
# uni-app-cli-preset

[更新记录](./CHANGELOG.md)

**开箱即用！！基于 ```uni-app cli``` 模式集成最佳实践脚手架**

- 集成多平台快速开发的 UI 框架，[uView UI](https://www.uviewui.com) 2.0 版

  `uView UI` 是全面兼容 nvue 的 uni-app 生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水

- 集成 [ColorUI](https://github.com/weilanwl/ColorUI)

  `ColorUI` 是一个 Css 类的 UI 组件库！不是一个 Js 框架。相比于同类小程序组件库，ColorUI 更注重于视觉交互！
  
  - 源代码：[GitHub](https://github.com/weilanwl/ColorUI)

  - [ColorUI 使用文档]('http://docs.xzeu.com/#/info/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/%E5%BF%AB%E9%80%9F%E5%B8%83%E7%BD%B2')

  - [ColorUI群资源](https://www.yuque.com/colorui)

  **注：本脚手架集成的 `color-ui` 并不是原作者的源。**
  
      为了适应项目的开发需求，基于 `color-ui` 进行二次开发的 sass 版本 `color-ui-sass`
      其功能上保持不变。

- 集成 [luch-request](https://github.com/lei-mu/luch-request)
  
  `luch-request` 是一个基于 Promise 开发的 uni-app 跨平台、项目级别的请求库，它有更小的体积，易用的api，方便简单的自定义能力。

  - 源代码：[GitHub](https://github.com/lei-mu/luch-request)

  - [官网&使用文档]('https://www.quanzhan.co/luch-request/')

## 上手指南

1. 安装依赖

   - 使用 npm

      ```bash
      npm install
      ```

    - 使用 yarn

      ```bash
      yarn
      ```

2. 运行项目

    - 使用 npm

      ```bash
      # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
      npm run serve 
      ```

    - 使用 yarn

      ```bash
      # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
      yarn serve 
      ```

3. 打包发行

    - 使用 npm

      ```bash
      npm run build # 默认为H5环境 更多环境命令请参考 package.json 中的scripts字段
      ```

    - 使用 yarn

      ```bash
      yarn build # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
      ```

## 微信小程序

- 运行微信小程序

  - 使用 npm

    ```bash
    npm run dev:mp-weixin
    # 或者
    npm run dev
    ```

  - 使用 yarn

    ```bash
    yarn build:mp-weixin
    # 或者
    yarn dev
    ```

- 打包发行微信小程序

  - 使用 npm

    ```bash
    npm run build:mp-weixin
    # 或者
    npm run prod  
    ```

  - 使用 yarn

    ```bash
    yarn build:mp-weixin
    # 或者
    yarn prod  
      ```

## 文件目录说明

```tree
root
├── /doc/               // 用于存放 cli 工程构建的说明文档 
├── /project-doc/       // 用户存放项目的说明文档目录
├── /public/            // 存放在该文件夹的东西不会被打包影响，而是会原封不动的输出到dist文件夹中
│  └── /index.html      // 入口模板文件
├── /src/               // 存放项目源码及需要引用的资源文件
│  ├── /api/            // 存放项目中接口文件
│  ├── /assets/         // 存放项目中需要用到的资源文件，css、js、images等
│  ├── /components/     // 存放 vue 开发中一些公共组件：header.vue、footer.vue等
│  ├── /directives/     // 全局指令注册
│  ├── /mixins/         // 存放全局混入业务代码
│  ├── /pages/          // 存在vue页面组件的文件夹。
│  ├── /plugins/        // 项目常用的插件集合
│  ├── /service/        // requests 实例配置
│  ├── /router/         // 路由配置
│  ├── /static/         // 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
│  ├── /store/          // 存放 vuex 为 vue 专门开发的状态管理器
│  ├── /uni_modules/    // 存放符合 uni-app 的插件模块化规范开发的插件。比如 uView2.0
│  ├── /util/           // 存放 vue 开发过程中一些公共的 js 方法
│  ├── App.vue          // 项目入口文件
│  ├── main.js          // 入口文件
│  ├── manifest.json    // uniapp 管理各个环境下的的配置
│  ├── pages.json       // 页面和路由配置文件
│  └── uni.scss         // uni.scss 是一个特殊文件，在代码中无需 import 这个文件即可在 scss 代码中使用这里的样式变量
├── .editorconfig       // 统一团队代码风格的配置文件
├── .env[.development|production][.local]      // vue-cli 环境变量设置
├── .eslintignore       // eslint 忽略文件配置
├── .eslint             // eslint 文件配置
├── .gitignore          // git 忽略文件配置
├── .npmrc              // npm 镜像配置文件
├── .prettierrc.js      // prettier 统一代码格式化风格配置文件
├── .yarnrc             // yarn 镜像配置文件
├── babel.config.js     // 对 js 文件进行编译转换增强的配置文件
├── jsconfig.json       // JavaScript 语言服务的配置文件。比如：代码提示、文件索引等问题
├── LICENSE             // MIT 许可证
├── package.json        // 包管理配置文件
├── postcss.config.js   // 对 css 文件进行编译转换增强的配置文件
├── README.md           // uni-app-cli-preset 说明文档 
├── vue.config.js       // vue-cli 配置文件
└── yarn.lock           // yarn 锁定依赖版本
```

## 使用到的框架和库

- [vue](https://cn.vuejs.org/)
- [vuex](https://vuex.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)
- [uview](https://www.uviewui.com/)
- [ColorUI](https://github.com/weilanwl/ColorUI)
- [luch-request](https://github.com/lei-mu/luch-request)

## 关键字

- vue （vue 框架）
- uview （ui 组件库）
- vuex （管理器）

## 版本控制

  该项目使用 Git 进行版本管理。

## 作者

- _Cest_
- _wangProgrammer_ itwangyang@foxmail.com

## 鸣谢

- 感谢 [Vue-CLI](https://cli.vuejs.org)
- 感谢 [vue](https://cn.vuejs.org/)
- 感谢 [vuex](https://vuex.vuejs.org/zh/)
- 感谢 [uniapp](https://uniapp.dcloud.io/)
- 感谢 [uview](https://www.uviewui.com/)
- 感谢 [ColorUI](https://github.com/weilanwl/ColorUI)
- 感谢 [luch-request](https://github.com/lei-mu/luch-request)
