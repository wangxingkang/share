title: 技术文章写作
speaker: 王幸康
prismTheme: solarizedlight

<slide class="bg-black aligncenter" image="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/3d19ee419134532dcd66f0b8c1366765.jpeg  .dark">

# 技术文章写作 {.text-landing.text-shadow}

<br />

[:fa-github: Github](https://github.com/wangxingkang/share){.button.ghost.animated.flipInX.delay-1200}

<slide :class="size-60 aligncenter">

## 涉及的技术和工具

---

- 书写格式：Markdown  {.animated.fadeInUp}
- 配套工具：图床  {.animated.fadeInUp.delay-400}
- 配套工具：录屏生成Gif  {.animated.fadeInUp.delay-800}

<slide :class="size-60 aligncenter">

## Markdown

---

Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 `.md` 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用。

```md {.animated.fadeInUp}
// 标题
# 一级标题

## 二级标题

// 粗体
**bold text**

// 代码
`code`
```

学习网站 [Markdown 语法教程](https://markdown.com.cn/)

<slide :class="aligncenter">

## 免费图床搭建

---

- [PicGo](https://picgo.github.io/PicGo-Doc/zh/) 支持多个图床的图床工具   {.animated.fadeInUp}
- [Github](https://github.com) 图片存储地址   {.animated.fadeInUp.delay-400}
- [jsdelivr](https://www.jsdelivr.com/) 免费的CDN服务   {.animated.fadeInUp.delay-400}

<slide :class="size-70">

## 图片存储

`本图床使用Github作为免费的图片资源存储地址，下面介绍具体的步骤`

:::gallery

![](https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210318234246.png)

## 创建仓库

---

![](https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210318234246.png)

## 创建访问令牌

---

![](https://source.unsplash.com/IFxjDdqK_0U/800x600)

## 占个位

:::

创建访问令牌，操作路径 点击头像 >> Settings >> Developer settings >> Personal access tokens

<slide :class="size-60">

## 设置PicGo

`本图床使用Github作为免费的图片资源存储地址，下面介绍具体的步骤`

- 下载安装PicGo，请安照官网进行[安装](https://picgo.github.io/PicGo-Doc/zh/guide/#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)，这里不再累述。

- 设置PicGo

![](https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210320084131.png)

自定义域名请设置为  `https://cdn.jsdelivr.net/gh/{Github 用户名}/{仓库名称}@latest/` 

<slide :class="size-70 aligncenter">

## Giphy Capture 

录屏，制作GIF软件

![](https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210416164233.png)

<slide :class="size-70 aligncenter">

## 示例

![](https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210416170937.gif)
