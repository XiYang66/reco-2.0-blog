---
title: 部署github
date: 2022-6-28
tags:
 - 博客搭建
categories: 
 - 博客搭建
---

## 前言
本人因为英语水平不好，对github不太了解导致就一个上传github部署博客上线卡啦好几天。
这里一步一步对博客进行配置

## 第一步在配置密钥
1.在github设置中配置密钥<br>
![密钥](https://s1.ax1x.com/2022/06/28/jZDkuj.png)<br>
2.新建密钥<br>
[![jZDUPK.md.png](https://s1.ax1x.com/2022/06/28/jZDUPK.md.png)](https://imgtu.com/i/jZDUPK)<br>
3.先空着一会输入密钥<br>
[![jZDcIP.md.png](https://s1.ax1x.com/2022/06/28/jZDcIP.md.png)](https://imgtu.com/i/jZDcIP)<br>
4.在小黑本中输入<br>
``` javascript
ssh-keygen -t rsa -C "邮箱" 
```
</br>

可以看到一个代码小图片，那就说明成功了
![dd](https://s1.ax1x.com/2022/06/28/jZsVhV.png)
接下来输入
``` javascript
cat ~/.ssh/id_rsa.pub
```

复制出来的编码粘贴到咱们github的密钥key中保存即可
[![jZsNcD.md.png](https://s1.ax1x.com/2022/06/28/jZsNcD.md.png)](https://imgtu.com/i/jZsNcD)



## 第二步 创建一个github仓库
仓库名为:用户名.github.io<br>
![d](https://s1.ax1x.com/2022/06/28/jZ6VQU.png)<br>

[![jZ67XF.md.png](https://s1.ax1x.com/2022/06/28/jZ67XF.md.png)](https://imgtu.com/i/jZ67XF)<br>
>因为我创建过啦，所以提醒报错

## 第三步 配置自动脚本
我们打包好的项目会生成在一个public(或者别的名字)这个文件就是我们打好的包上传服务器就可以跑起来。上传github或git配合脚本上传我们只需要一串代码就可以更新我们的博客

1.在根目录下创建deploy.sh脚本文件
``` javascript
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# git命令
git init
git add -A
git commit -m '上传博客'


# 上传 这里自行更换自己的用户名和仓库名字
git push -f git@github.com:XiYang66/xiyang66.github.io.git master:gh-pages

cd -
```
2.在package.json中scripts加入此配置
``` javascript
 "deploy": "start deploy.sh",
```
3.启动

``` javascript
 npm run deploy
```


> github刷新看效果
