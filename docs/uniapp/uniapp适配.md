---
title: uniapp适配
---


> <font color="#80b3de">通常我们做适配会通过 ```css calc()计算属性去计算一些元素的宽高```但这样做会有很多问题存在,比如宽高计算不准确，还比如我们有时候不会写死一个元素但宽宽，用边距撑开，那么这种情况```calc()```计算属性就很难精准计算出元素所需要但宽高,js本身也提供了节点查询但Api,但这种方式在uniapp中并不是很好用，因为uniapp要去兼容各种平台。所兴Uniapp为我们提供了相关Api，那么接下来我们就用uniapp但Api来实现一下吧！😊</font>

``` js 

const query = uni.createSelectorQuery().in(this);
    query
        .select("类名 ID名 ···")
        .boundingClientRect((data) => {
            console.log("data: ", data);
        })
        .exec();


    // 打印出的结果
    bottom: 45
​
    // dataset: Object {  }
    // height: 45
    // id: ""
    // left: 0
    // right: 414
    // top: 0
    // width: 414

```
