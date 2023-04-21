---
title: 'blog note'
date: '2023-04-21'
description: '记录静态博客搭建过程中遇到的问题'
---

**`AnimatePresence`与`motion`配合使用时，路由切换没有展示退出动画**

原因：`framer motion`是通过监控 React 组件的在 DOM 树上的挂在与卸载来控制动画的展示效果，当路由切换时，组件可以监控到新组件的载入，但没法监控到旧组件的卸载。在`nextJS`中，可以在`_app.js`中使用如下代码通知组件的卸载。

```javascriptreact
<AnimatePresence>
  <Component {...pageProps} key={router.pathname} />
</AnimatePresence>
```

> 通过 Key 值的刷新来控制组件的卸载。
