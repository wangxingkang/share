title: 前端团队规范实践
speaker: 王幸康
prismTheme: solarizedlight
plugins:
  - echarts

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 前端团队规范实践 {.text-landing.text-shadow}

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-90">

:::card

## 遵循的一些开发原则 

<br />

* 约定大于配置 {.animated.fadeInUp}
* 拥抱开源社区，使用成熟的技术方案 {.animated.fadeInUp.delay-400}
* 技术栈的一致性 {.animated.fadeInUp.delay-800}

---

![](https://source.unsplash.com/rCOWMC8qf8A/)

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-50 aligncenter">

## 团队使用的一些库

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-50 aligncenter">

## 代码风格类

---
* [ESLint](https://github.com/eslint/eslint) JS、TS代码检查 {.animated.fadeInUp}
* [StyleLint](https://github.com/stylelint/stylelint) 样式文件(Less、Sass、Css)代码检查 {.animated.fadeInUp.delay-400}
* [Prettier](https://www.npmjs.com/package/prettier) 代码美化 {.animated.fadeInUp.delay-800}
* [CommitLint](https://github.com/conventional-changelog/commitlint) 提交信息格式检查 {.animated.fadeInUp.delay-1200}
* [ImportSort](https://github.com/renke/import-sort) 对导入进行排序  {.animated.fadeInUp.delay-1600}

---

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-50 aligncenter">

## 测试

---
* [Jest](https://github.com/facebook/jest) 测试框架 {.animated.fadeInUp}
* [react-testing-library](https://github.com/testing-library/react-testing-library) 简单而完整的React DOM测试实用程序 {.animated.fadeInUp.delay-400}
---

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-50 aligncenter">

## 技术栈

---
* [TypeScript](https://github.com/microsoft/TypeScript) 语言 {.animated.fadeInUp}
* [React](https://github.com/facebook/react) 框架 {.animated.fadeInUp.delay-400}
* [Umi](https://github.com/umijs/umi) 可插拔的企业级 react 应用框架 {.animated.fadeInUp.delay-800}
* [Dva](https://github.com/dvajs/dva) 基于Redux数据流方案 {.animated.fadeInUp.delay-1200}
* [AntDesign](https://github.com/ant-design/ant-design) 组件库 {.animated.fadeInUp.delay-1600}
* [BizCharts](https://github.com/alibaba/BizCharts) 基于G2和React的强大数据可视化库 {.animated.fadeInUp.delay-2s}
---

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-70 aligncenter">

#### 那么如何把控整个团队的代码质量和一致性呢？

下面着重介绍在这方面的一些实践和思考 {.lightSpeedIn.animated.slow}

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-90">

:::card

## 遇到的问题 

新开始一个项目，为了代码质量管控和团队风格一致性，需要配合各种lint工具，这样的话每个项目都会拥有一份配置，一旦团队项目数目过多，去保证每个项目的配置一致，依赖一致，将会比较麻烦。

* 配置文件过多 {.animated.fadeInUp}
* 依赖过多 {.animated.fadeInUp.delay-400}
* 团队很难做到完全统一 {.animated.fadeInUp.delay-800}

---

![](https://source.unsplash.com/jzTQVxCyKYs)

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-90">

:::card

## 解决方案

社区解决方案

* 使用抽取配置为单独的npm包 缺点<无法解决安装众多依赖的问题> {.animated.fadeInUp}
* 通过项目模板创建项目 缺点<模板升级不好对历史项目进行修改，无法解决安装众多依赖的问题> {.animated.fadeInUp.delay-400}

Walrus解决方案

* 开发命令行工具 {.animated.fadeInUp}
* 内置所有配置以及依赖 {.animated.fadeInUp.delay-400}
---

![](https://source.unsplash.com/pT9TTuuzivQ)

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide>

## 优势

:::column
### **插件化**

walrus是一个插件注册中心，所有的功能都是通过插件实现。

---
### **开箱即用**

只需`@walrus/cli`一个依赖就可以，无需安装jest、eslint、stylelint、commitlint以及其插件。

---
### **约定大于配置**

规范无需太多讨论，遵守就可以了，目标是尽量做到零配置。

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-30 aligncenter">

### 安装

---

```
// npm 
npm install ---save --dev @walrus/cli

// yarn
yarn add --dev @walrus/cli

// global 
npm install -g @walrus/cli
```

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-30 aligncenter">

### 提供的命令

---

```
# 封装Eslint
$ walrus lint

# 封装Prettier
$ walrus prettier

# 封装Jest
$ walrus test

# 封装commitlint
$ walrus commitlint

# 封装stylelint
$ walrus stylelint
```

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-90">

:::card

内置插件 

* [@walrus/plugin-jest](https://github.com/walrusjs/walrus/blob/master/packages/walrus-plugin-jest/README.md) {.animated.fadeIn}
* [@walrus/plugin-eslint](https://github.com/walrusjs/walrus/blob/master/packages/walrus-plugin-eslint/README.md) {.animated.fadeIn.delay-400}
* [@walrus/plugin-prettier](https://github.com/walrusjs/walrus/blob/master/packages/walrus-plugin-prettier/README.md) {.animated.fadeIn.delay-800}
* [@walrus/plugin-stylelint](https://github.com/walrusjs/walrus/blob/master/packages/walrus-plugin-stylelint/README.md) {.animated.fadeIn.delay-1200}
* [@walrus/plugin-commitlint](https://github.com/walrusjs/walrus/blob/master/packages/walrus-plugin-commitlint/README.md) {.animated.fadeIn.delay-1600}

<br />
<br />

其他插件

* [@walrus/plugin-replace](https://github.com/walrusjs/walrus-plugin-replace) 替换文本插件 {.animated.fadeIn.delay-2s}
* [@walrus/plugin-release](https://github.com/walrusjs/walrus-plugin-release) 项目发布插件 {.animated.fadeIn.delay-2400}
* ... {.animated.fadeIn.delay-2800}

---

![](https://source.unsplash.com/fIq0tET6llw)

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide class="fullscreen">

:::card

![](https://source.unsplash.com/a0TJ3hy-UD8)

---

## 谁在使用

* [react-admin-template](https://github.com/ts-react/react-admin-template) star(107) {.animated.fadeIn}
* [ant-design-plus](https://github.com/alitajs/ant-design-plus) star(51) {.animated.fadeIn.delay-400}
* [gesture-password](https://github.com/alitajs/gesture-password) star(16) {.animated.fade.delay-800}
* [pansy](https://github.com/walrusjs/pansy) star(14)  {.animated.fade.delay-1200}
* ... {.animated.fade.delay-1600}

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-60">

## 规划

---

:::shadowbox

## 整合husky

现在walrus还需借助husky去整合到业务流中，需要在package.json做一些配置，整合husky后即可省去这些配置

---

## 开发vscode插件

现在walrus还未增加对IDE的支持

:::

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-90 aligncenter">

## Walrus不仅是一个工具，更是一个社区

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}

<slide :class="size-60 aligncenter">

## 谢谢观赏

:::footer

[:fa-github: Github](https://github.com/wangxingkang){.alignright}
