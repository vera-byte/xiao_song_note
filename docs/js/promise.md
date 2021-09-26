---
title: Promise
---

``` js
const mypromise = new Promise((resolve,reject)=>{
    resolve("成功")
    reject("失败")
})

mypromise().then(res=>{
    console.log("promise成功")
}).catch(error=>{
    console.log("promise失败")
})

```