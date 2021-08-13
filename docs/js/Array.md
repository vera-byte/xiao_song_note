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