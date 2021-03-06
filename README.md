# vue_starbucks

> A Vue.js project

## 1、简介
项目介绍

    这个项目是基于 Vue.js 开发的PWA单页应用 
    
    
## 技术栈

**技术栈为Vue + Vue Router + Vuex + webpack + Swpie + bootstrap**
1.首先利用了Vue-Router的视图命名，构建了网页的左右布局。<br>
  左侧菜单(导航)部分，利用 v-show 判断当前路由地址，决定是否显示哪个层级的菜单。
  右侧内容主题部分， 利用 <router-view/>路由出口，将所有子路由，子孙路由的视图都渲染在这里。

因此在src/router/index.js 路由管理模块中
```
 只有一个顶级路由 '/'
 其他路由地址皆为它的子孙路由，因此html代码量减少非常之多，但是问题也在于，左侧菜单(导航栏)部分显得臃肿。
```
2.由于使用了keep-alive标签导致某些不需要的状态被保持，于是通过监听当前路由地址的变化，重置组件中部分数据，避免了重复渲染DOM也使组件中关键不被注销。
**Github_page地址(点击进入)[https://raotaohub.github.io/vue_starbucks/]**

- 首页

![首页](images/登录页.png)

- 商品

![商品](images/商品.png)

![商品](images/饮料.png)

![商品](images/饮料2.png)
    


## 本地运行

本地需要提前安装Node 、 npm(cnpm)

在本地创建一个文件夹 然后将项目文件克隆到该文件夹内 并输入以下命令

```
npm install

npm run dev
```
