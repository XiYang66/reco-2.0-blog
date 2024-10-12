---
title: cesium配置
date: 2022-8-16
tags:
 - cesium三维地图
categories: 
 - cesium三维地图
---


## 基本配置

### 在main.js中引入cesium

安装完搭建cesium的插件后main.js中默认会引入他的全局样式(不用管)
``` js
...
const cesium = require("cesium/Cesium.js");
Vue.prototype.cesium = cesium
...
```
此时我们就可以在任意组件this出cesium的实例了

### 配置token

在官网中注册一个token[官网](https://cesium.com/learn/)<br/>
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93f53b11c7046a283ca0f2405081008~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)
<br/>
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5bfd721aa9542b494840147ef62f13c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?
)

然后在我们的`components/CesiumExample/No01-init`中配置我们token（这个组件就是安装`vue add vue-cli-plugin-cesium`自己创建出来的）

```js
<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>
export default {
  ...
  mounted () {
    this.init()
  },
  // Vue方法定义
  methods: {
    // 地图初始化
    init() {
       const Cesium = this.cesium
       Cesium.Ion.defaultAccessToken = 'your token'
       this.viewer = new Cesium.Viewer('cesiumContainer')
    }
  }
}
</script>

```


## Cesium地图展示简单配置
可参考[API](http://cesium.xin/cesium/cn/Documentation1.95/index.html)进行个性化配置


```js
  this.viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮。
    geocoder: false, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
    navigationHelpButton: false, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
    homeButton: false, // 如果设置为false，将不会创建右上角主页(房子)按钮。
    sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
    animation: false, // 如果设置为false，将不会创建左下角动画小部件。
    timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件。
    fullscreenButton: false, // 如果设置为false，将不会创建右下角全屏按钮。
    scene3DOnly: true, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
    shouldAnimate: false, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel 。
    // ps. Viewer＃clockViewModel 是用于控制当前时间的时钟视图模型。我们这里用不到时钟，就把shouldAnimate设为false
    infoBox: false, // 是否显示点击要素之后显示的信息
    sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
    requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源吧
    fullscreenElement: document.body, // 全屏时渲染的HTML元素 暂时没发现用处，虽然我关闭了全屏按钮，但是键盘按F11 浏览器也还是会进入全屏
    selectionIndicator: false, // Cesium 关闭点击绿色框
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      //高德镜像地形地图
      url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    }),
  })
  this.viewer._cesiumWidget._creditContainer.style.display = 'none' // 隐藏版权
  // 再加上高德影像注记地图
  this.viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: 'http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',
    })
  )
```
## 初始位置

``` js
  // 设置初始位置  Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result)
  const boundingSphere = new Cesium.BoundingSphere(Cesium.Cartesian3.fromDegrees(120.55538, 31.87532,100),15000)//地图坐标信息等....   球有多大

  // 定位到初始位置
  this.viewer.camera.flyToBoundingSphere(boundingSphere, {
    // 定位到初始位置的过渡时间，设置成0，就没有过渡，类似一个过场的动画时长
    duration: 1,
  })
```
