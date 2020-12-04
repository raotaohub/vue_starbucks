# vue_starbucks_afresh

> A Vue.js project

## 1、简介
项目介绍

    这个项目基于 Vue.js 开发 ，引入了bootstrap作为CSS框架，为前后分离的单页应用，目前正在构建中…

## 技术栈

Vue + Vuex +Vue-Router 
首先利用了Vue-Router的视图命名，构建了网页的左右布局。
  左侧菜单(导航)部分，利用 v-show 判断当前路由地址，决定是否显示哪个层级的菜单。
  右侧内容主题部分， 利用 <router-view/>路由出口，将所有子路由，子孙路由的视图都渲染在这里。

因此在src/router/index.js 路由管理模块中
```
 只有一个顶级路由 '/'
 其他路由地址皆为它的子孙路由，因此html代码量减少非常之多，但是问题也在于，左侧菜单(导航栏)部分显得臃肿。
```

## 本地运行

本地需要提前安装Node 、 npm(cnpm)

在本地创建一个文件夹 然后将项目文件克隆到该文件夹内 并输入以下命令

```
npm install

npm run dev
```
