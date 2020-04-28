---
title: setInterval()方法实现斗鱼自动发弹幕
date: 2020-3-30
categories: frontEnd
tags:
- JaveScript
---
## setInterval()方法实现斗鱼自动发弹幕
### 定义：
::: tip
* setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

* setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
:::

### 语法:
1. setInterval（代码串/函数，时间间隔），括号里的两个参数都是必须存在。
2.  setInterval(function, milliseconds, param1, param2, ...)，param1，param2是可选参数，可以传给执行函数
### 实现自动发弹幕的代码如下：
```js
    const area = document.getElementsByClassName('ChatSend-txt')[0];
    const btn = document.getElementsByClassName('ChatSend-button')[0];
    let obj
    function start() {
      obj = setInterval(function () {
        area.value = '666'
        btn.click()
      }, 3000)
    }
    start()
    function stop() {
      clearInterval(obj)
    } 
```
### 使用步骤如下：
1.  按F12打开开发者模式
2.  ![avatar](./img/1.png)
3.  如果想停止自动弹幕，输入stop()即可，或者刷新网页。
#### ps: 如果你够无聊的话，可以实现限时发弹幕
```js
    setTimeout(function stop() {
      clearInterval(obj)
    },10000, obj)
    stop()
```
### setInterval()和setTimeout()区别
* setInterval()以指定时间为周期循环执行。
* setTimeout()只在指定时间后执行一次。






