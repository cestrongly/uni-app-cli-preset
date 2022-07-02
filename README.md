
# cedo-app-cli

**开箱即用！！基于 ```uni-app cli``` 模式集成最佳实践脚手架**

- ui 库使用 [uview](https://v2.uviewui.com/) (已配置全自动按需导入)
- css框架使用 [color-ui](-) 框架)
- 请求使用 [luch-request](-) 的方式(添加了 uniapp 适配器支持)
- 路由使用 [uni-simple-router](https://hhyang.cn/v2/) (同 vue-router 的 api 无须重新阅读文档,配置了路由自动生成)
- 使用了 [z-paging](https://z-paging.zxlee.cn/) (这个是下拉刷新置顶的功能，自动请求列表，虚拟列表)

@[TOC]

## 目录

- [上手指南](#上手指南)
  - [运行本项目](#运行项目)
    - [任意编辑器直接运行本项目](#任意编辑器直接运行本项目)
    - [在HBuilderX中运行本项目](#在HBuilderX中运行本项目)
  - [打包发行](#打包发行)
    - [任意编辑器发行本项目](#任意编辑器发行本项目)
    - [在HBuilderX中发行本项目](#在HBuilderX中发行本项目)
- [文件目录说明](#文件目录说明)
- [使用到的框架和库](#使用到的框架和库)
- [版本控制](#版本控制)
- [作者](#作者)
- [鸣谢](#鸣谢)

### 上手指南

#### 运行项目

##### 任意编辑器直接运行本项目

1. 安装依赖
2. 运行项目

    使用 npm

    ```sh
    npm install
    npm run serve # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
    ```

    使用 yarn

    ```sh
    yarn
    yarn serve # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
    ```

##### 在HBuilderX中运行本项目

1. 将项目拖动到 HBuilder 中
2. 点击项目 src 目录中的任意文件
3. 点击编辑器上方点击运行选择需要运行的环境

#### 打包发行

##### 任意编辑器发行本项目

1. 安装依赖
2. 打包项目

    使用 npm

    ```sh
    npm install
    npm run build # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
    ```

    使用 yarn

    ```sh
    yarn
    yarn build # 默认为H5环境 更多环境命令请参考 package.json 中的 scripts字段
    ```

##### 在HBuilderX中发行本项目

1. 将项目拖动到 HBuilder 中
2. 点击项目 src 目录中的任意文件
3. 点击编辑器上方点击发行选择需要打包的环境

### 微信小程序

  ```sh
  # npm
  npm run build:mp-weixin
  npm run dev:mp-weixin
  
  # yarn
  yarn build:mp-weixin
  yarn dev:mp-weixin
  
  # 监听文件变化且启用压缩
  yarn build:mp-weixin -watch
  # vue3项目
  yarn build:mp-weixin -w
  
  ```

### 文件目录说明

```h
filetree
├── /dist                           // 打包生成的静态资源文件，用于生产部署。
├── /node_modules                   // 存放npm命令下载的开发环境和生产环境的依赖包。
├── /public/                        // 存放在该文件夹的东西不会被打包影响，而是会原封不动的输出到dist文件夹中
│  ├── /index.html                  // 入口模板文件
├── /src/                           // 存放项目源码及需要引用的资源文件。
│  ├── /assets/                     // 存放项目中需要用到的资源文件，css、js、images等。
│  ├── /components/                 // 存放vue开发中一些公共组件：header.vue、footer.vue等。
│  ├── /configs/                    // 全局配置文件
│  ├── /directives/                 // 全局指令注册
│  ├── /icons/                      // 存放图标的地方
│  ├── /pages/                      // 存在vue页面组件的文件夹。
│  ├── /plugins/                    // 项目常用的插件集合
│  ├── /requests/                   // 接口配置
│  ├── /router/                     // 路由配置
│  ├── /static/                     // 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
│  ├── /store/                      // 存放 vuex 为vue专门开发的状态管理器。
│  ├── /styles/                     // 存放全局样式
│  ├── /utils/                      // 存放vue开发过程中一些公共的.js方法。
├── App.vue                         // 项目入口文件
├── ext.json                        // 小程序作为第三方开发需要用到的配置文件 动态切换appid等功能
├── main.js                         // 入口文件
├── manifest.json                   // uniapp 管理各个环境下的的配置
├── pages.json                      // 页面和路由配置文件
├── uni.scss                        // uni.scss是一个特殊文件，在代码中无需 import 这个文件即可在scss代码中使用这里的样式变量
├── .gitignore                      // git 忽略文件配置
├── babel.config.js                 // 对 js 文件进行编译转换增强的配置文件
├── LICENSE                         // MIT许可证
├── package.json                    // 包管理配置文件
├── postcss.config.js               // 对 css 文件进行编译转换增强的配置文件
├── README.md
├── tailwind.config.js              // tailwindcss的配置文件
├── jsconfig.json                   // JavaScript语言服务的配置文件 代码提示 文件索引等问题
├── vue.config.js                   // vuecli配置文件
└── yarn.lock                       // yarn锁定依赖版本
```

### 使用到的框架和库

- [uniapp](https://uniapp.dcloud.io/)
- [Vue-CLI](https://cli.vuejs.org)
- [uview2](https://www.uviewui.com/)
- [vuex](https://vuex.vuejs.org/zh/)
- [uni-simple-router](https://hhyang.cn/v2/)
- [z-paging](https://z-paging.zxlee.cn/) 具体的配置请到官网去查看，本次架构搭建，只是一个实例，需要更多个性化的，请您移步到原作者文档上（文档很优化，不懂还可以请教原作者）

### 关键字

- vue （vue 框架）
- uview （ui 组件库）
- axios （请求接口）
- vuex （管理器）
- uni-simple-router （路由：vue-router 同理）
- z-paging (分页上下拉刷新)

### 版本控制

  该项目使用 Git 进行版本管理。

### 作者 _Cest_

### 鸣谢

- 感谢 [z-paging](https://z-paging.zxlee.cn/) 提供的上下拉分页组件适配器
- 感谢 [uniapp](https://uniapp.dcloud.io/)
- 感谢 [Vue-CLI](https://cli.vuejs.org)
- 感谢 [uview](https://www.uviewui.com/)
- 感谢 [vuex](https://vuex.vuejs.org/zh/)
- 感谢 [uni-simple-router](https://hhyang.cn/v2/)
