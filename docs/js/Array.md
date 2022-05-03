---
title: 数组方法
---
# JavaScript Array every()
> 检查数组所有元素的某个值是否满足某个条件

``` js

const list = [{name:'张三',age:19},{name:'李四',age:19},{name:'王五',age:19}];
list.every((e)=>e.age==19); // 返回结果 True

list.every((e)=>e.age==9); // 返回结果 False

```
# 数组去重()


``` js
 const data = [2,3,2,2,2,4,5,6,7,43,2]
 [... new Set(data)] // (7) [2, 3, 4, 5, 6, 7, 43]

```
# 过滤数组中非真值
``` js 

const nums = [null , false , undefined ,2,3,5]
nums.filter(Boolean)// (3) [2, 3, 5]
```








[数组方法](https://juejin.cn/post/7028018256266919973)
