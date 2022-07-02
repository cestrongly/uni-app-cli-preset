/**
 * @Author: cest
 * @Date: 2022-06-17 22:49:05
 * @LastEditTime: 2022-06-21 02:31:46
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/.eslintrc.js
 * @Description: ESLint configuration - 代码质量和纠错配置
 */

// # ESlint使用及配置
module.exports = {
  // ## 配置当前目录为 root
  //
  // ESLint检测配置文件步骤：
  // - 在要检测的文件同一目录里寻找 .eslintrc.* 和 package.json；
  // - 紧接着在父级目录里寻找，一直到文件系统的根目录；
  // - 如果在前两步发现有 root：true 的配置，停止在父级目录中寻找 .eslintrc；
  // - 如果以上步骤都没有找到，则回退到用户主目录 ~/.eslintrc 中自定义的默认配置；

  // > 通常我们都习惯把 ESLint 配置文件放到项目根目录，因此可以为了避免 ESLint 校验的时候往父级目录查找配置文件，所以需要在配置文件中加上 root: true。

  root: true,

  // ## env环境
  //
  // 一个环境定义了一组预定义的全局变量
  //
  // > 指定不同的环境可以给对应环境下提供预设的全局变量，比如说在 browser 环境下，可以使用 window 全局变量；在 node 环境下，可以使用 process 全局变量等。
  //
  // 可用的环境包括：
  // 可选配置项如下：
  //
  // - browser - 浏览器环境中的全局变量。
  // - node - Node.js 全局变量和 Node.js 作用域。
  // - commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
  // - shared-node-browser - Node.js 和 Browser 通用全局变量。
  // - es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
  // - 更多可见[官网](https://eslint.bootcss.com/docs/user-guide/configuring#specifying-environments)
  //
  // 这些环境并不是互斥的，所以可以同时定义多个。可以在源文件里、在配置文件中或使用 命令行 的 --env 选项来指定环境。

  env: {
    // node - Node.js 全局变量和 Node.js 作用域。
    node: true
  },

  // ## extends配置扩展
  //
  // 实际项目中配置rules的时候，不可能团队一条一条的去商议配置，太费精力了。通常的做法是使用业内大家普通使用的、遵循的编码规范；然后通过extends去引入这些规范。extends配置的时候接受字符串或者数组：
  // - eslint开头的：是ESLint官方的扩展；常见配置eslint:recommended、eslint:all
  // - plugin开头的：是插件类型扩展，可以省略包名的前缀 eslint-plugin-，
  //   比如 plugin:vue/essential，实际上使用的是eslint-config-vue插件，而essential是配置名，可见插件配置说明，如下图，包eslint-config-vue中定义了配置参数essential
  //
  // > extends可以理解为rules的快捷配置字段，一般先配置extends为业内通用规范，且数组是后面的会覆盖前面的，并自定义配置rules覆盖extends中不满足你想要规范的规则

  extends: [
    // 选择预设配置 - 基本
    // "plugin:vue/essential",
    // 选择预设配置 - 推荐
    // "plugin:vue/recommended",
    // 选择预设配置 - 强烈推荐
    'plugin:vue/strongly-recommended',
    // ESLint内置的推荐规则，属性启用一系列核心规则，这些规则报告一些常见问题，在 规则页面 中被标记为 [√]
    'eslint:recommended'
    // "airbnb-base",
  ],

  // ## parser解析器及解析参数
  //
  // 解析器将源代码转换为称为抽象语法树（AST）的数据格式，然后，插件使用这种数据格式围绕代码的外观或行为创建称为lint规则的断言。
  //
  // ESLint附带了一个内置的解析器（称为espree），因此如果你只编写标准JavaScript，就不需要自定义解析器了
  //
  // 如果我们想支持非标准JavaScript语法，我们需要做的就是为ESLint提供一个可供使用的替代解析器。
  // 根据工程的实际情况，对解析器进行设置，比如基于vue框架的工程需要用到能解析vue语法解析器；再比如使用到TypeScript的工程，需要配置能解析TypeScript的解析器
  //
  // > 这里可以类比webpack，自身只能处理js、及json文件，css、html等文件需要通过自定义loader处理来理解
  //
  // 常用解析器：
  // - @babel/eslint-parser：一个对Babel解析器的包装，使其能够与 ESLint 兼容
  // - @typescript-eslint/parser：TSLint被弃用后，将TypeScript转换成与estree兼容的形式，以便在ESLint中使用

  parserOptions: {
    parser: 'babel-eslint'
  },

  // ## rules规则
  //
  // ESLint 附带有大量的规则，要改变一个规则设置，你必须将规则ID设置为下列值之一：
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

  rules: {
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    // ESLint rules
    'no-empty': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: true
    //   }
    // ],
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-escape': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'import/no-absolute-path': 'off',
    'default-case': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'array-callback-return': 'off',
    'brace-style': 'off',
    'no-tabs': 'off',
    'guard-for-in': 'off',
    eqeqeq: 'off',
    'import/extensions': 'off',
    camelcase: 'off',
    'import/no-dynamic-require': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'func-names': 'off',
    'import/no-named-as-default': 'off',
    'no-empty-function': 'off'
  }
}

// # 总结： 为什么要用ESLint？
//
// 1、背景：
//
// 总结为两点：
// - 保持代码风格一致：
//   一千个程序员，就有一千种代码风格。在前端开发中，有几个至今还在争论的代码风格差异。如果一个工程代码风格不一样，可以想象随着项目迭代扩大，简直不忍直视
//   - 单引号还是双引号？
//   - 代码行结束是否需要分号？
//   - 两个空格还是四个空格？
// - 减少代码出错几率：
//   由于JavaScript 的灵活性，往往一段代码能有多种写法，这时候也会导致协同时差异。并且，有一些写法可能会导致不易发现的 bug，或者这些写法的性能不好，开发时也应该避免
//
// 为了解决这类静态代码问题，每个团队都需要一个统一的JavaScript代码规范，团队成员都遵守这份代码规范来编写代码。当然，靠人来保障代码规范是不可靠的，需要有对应的工具来保障，ESLint就是这个工具
//
// 2、为什么不是Prettier
//
// Prettier也可以保证代码风格一致。是的Prettier确实可以按照设置的规则对代码进行统一格式化，但是需要明确的一点是，Prettier只会在格式上对代码进行格式化，一些隐藏的代码质量问题Prettier是无法发现的，而ESLint可以。
//
// 3、目标
//
// 开发时提示，保存时自动修复，提交时检测
