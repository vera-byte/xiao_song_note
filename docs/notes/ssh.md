---
title: ssh
---

# SSH 公钥生成

>1.如果通过上面的方式找不到公钥，你就需要先生成公钥了，命令： ssh-keygen
2.接着会确认存放公钥的地址，默认就是上面说的路径，直接enter键确认
3.接着会要求输入密码和确认密码，如果不想设置密码直接不输入内容 按enter键

``` sh
ssh-keygen
# 执行后通过相关提示生成公钥


```

# 查看SSH 公钥方法

``` sh

cat  ~/.ssh id_rsa.pub 
```