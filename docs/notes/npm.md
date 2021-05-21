# Npm笔记

## 常用命令

1.  添加用户


``` shell
npm adduser
```

2.  添加镜像

``` shell
//淘宝镜像
npm  config  set  registry  https://registry.npm.taobao.org 
```
3.  恢复镜像

``` shell
npm  config  delete  registry
或
npm  config  edit（手动删除）
```
4.  安装


``` shell
npm  -g  install  包名  #  全局安装
npm  install  #  根据package.json文件安装
npm  install  包名  #  本地安装，在npm运行目录下安装
npm  install  包名@1.x  #  安装指定版本
```

5.  卸载


``` shell
npm  uninstall  包名
```
6.  更新


``` shell
npm  -g  update  包名  #  全局更新
npm  update  包名  #  本地更新
```

7.  查看已安装的模块


``` shell
npm  ls
```


8.  生成符号链接


``` shell
1、在本地安装好的模块中，运行（添加本地模块到全局链接）：
npm  link
2、在要使用的本地目录中，运行（从全局中获取链接）：
npm  link  模块名
```

9.  执行脚本


``` shell
npm  run  在package.json的scripts中定义的脚本命令
```

10. 登录


``` shell
npm  login
```

11. 发布包


``` shell
npm  init
npm  publish
```

12. 撤销发布


``` shell
npm  -f  unpublish  dollarphpajax@*
```
