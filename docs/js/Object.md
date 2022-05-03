---
title: 对象方法
---

# 冻结对象

``` js

const options = {
    name : "小明",
    age: 18
}

options.name = "李名" //{name: '李名', age: 18}
Object.freeze(options); // 冻结对象
options.name = "李四" //{name: '李名', age: 18}

```

# 空值合并运算
``` js
const valueNull = null;

const a = valueNull ?? "hello"
a // hello

``` 