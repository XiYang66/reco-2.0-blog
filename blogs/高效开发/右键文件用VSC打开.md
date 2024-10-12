---
title: 右键文件用VSC打开
date: 2022-7-4
autoIgnore: true
tags:
 - 高效开发
categories: 
 - 高效开发
---

## 知晓查找VS code在你的电脑中位置

[![jJDtEt.md.png](https://s1.ax1x.com/2022/07/04/jJDtEt.md.png)](https://imgtu.com/i/jJDtEt)
>我的路径为`"D:\tool\Microsoft VS Code\Code.exe"`


## 在桌面上右键创建一个txt文本(名字随便)

将下列代码复制到其中
```
Windows Registry Editor Version 5.00
    
[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="D:\\tool\\Microsoft VS Code\\Code.exe"
    
[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\tool\\Microsoft VS Code\\Code.exe\" \"%1\""
    
Windows Registry Editor Version 5.00
    
[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="D:\\tool\\Microsoft VS Code\\Code.exe"
    
[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\tool\\Microsoft VS Code\\Code.exe\" \"%V\""
    
Windows Registry Editor Version 5.00
    
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="D:\\tool\\Microsoft VS Code\\Code.exe"
    
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\tool\\Microsoft VS Code\\Code.exe\" \"%V\""

```
将自己的VS code文件路径对应替换
[![jJrPat.md.png](https://s1.ax1x.com/2022/07/04/jJrPat.md.png)](https://imgtu.com/i/jJrPat)

>切记一定要将你自己路径的`\` 改为 `\\`


## 修改后缀

将替换路径的txt文件保存并修改为reg格式的文件
![图片](https://s1.ax1x.com/2022/07/04/jJrBi6.png)
双击运行,根据提示点确定



[该教程摘抄与](https://blog.csdn.net/BigFamer/article/details/125513859)
