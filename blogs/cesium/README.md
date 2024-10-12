---
title: cesium三维地图
date: 2022-8-16
tags:
 - cesium三维地图
categories: 
 - cesium三维地图
---

## 初步认识

cesium是GIS(地理信息系统)开发过程中一个框架，通过GIS那里拿地理相关的数据，将这个数据，经过一些前端的处理，在地图上(网页) 加载出来。<br>
展示三维立体效果，使页面上的地图不再是简单的平面效果，具有3D立体感，在以后的应用中有着更多高级的用法

## 使用vue-cli-plugin-cesium安装

> 需要用vue-cli搭建项目，因为他是基于 VueCLI 的扩展插件 [参考地址](https://blog.csdn.net/m0_46635519/article/details/124102504)

### 第一步

小黑本搭建vue`vue create hello-world`,安装的版本根据自己的使用情况

### 第二步

在vue项目文件夹中安装

```js
vue add vue-cli-plugin-cesium
npm i cesium@1.67.0 --save
npm i copy-webpack-plugin@5.1.1 --save -dev
yarn add webpack@4.42.0 -D
```

#### 安装过程

- 询问一
  - `Please choose a version of 'cesium' from this`
  - 在此选择想使用的 Cesium 版本
- 询问二
  - `Whether to import styles globally.
This operation will automatically import widgets.css in main.js`
  - 是否全局引入样式,该操作将自动在main.js引入widgets.css？
  - 此项默认为 yes，该操作将自动在 main.js 引入 widgets.css，即全局引入 Cesium 的 css 样式
- 询问三
  - `Whether to add sample components to the project components directory`
  - 是否添加示例组件到项目components目录
  - 此选项默认为 yes，该操作会自动在 src/components 文件夹下生成 CesiumExample 文件夹

### 第三步使用

  > 此时你的components文件中会出现一个叫`CesiumExample`的文件夹，在你想展示的页面中引用该组件即可
  
  ```js
<template>
  <div id="container" class="map">
    <CesiumViewer/>
  </div>
</template>

<script>
import CesiumViewer from '../../components/CesiumExample/No01-init.vue'
export default {
  name: 'SCesiumViewer',
  components:{
    CesiumViewer
  },
  data () {
    return {
      msg: '测试',
      pointInfo:{}
    }
  },
  ...
}
</script>

<style scoped>
  html,
  body,
  .map {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
  .box {
    height: 100%;
  }
</style>


```
