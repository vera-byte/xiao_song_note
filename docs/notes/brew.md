---
title: mac安装brew
---

一、自动脚本(全部国内地址)（在Mac os终端中复制粘贴回车下面脚本)
（已经安装过brew的请自行备份后，再运行下面的安装脚本！！！！！）

安装脚本：
``` sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
卸载脚本：
``` sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```


# 安装过程中出现错误解决方案

1. 回车执行等一段时间之后就会出现一条无法打开归档的报错信息:

``` sh
Error: Failure while executing; `tar --extract --no-same-owner --file /Users/Salinger/Library/Caches/Homebrew/downloads/5da338c344047ee06f60495e7def31345483e10f19246aad74dca7f5dcea962d--gdbm-1.20.catalina.bottle.tar.gz --directory /private/tmp/d20210624-13993-hs6cjj` exited with 1. Here's the output:
tar: Error opening archive: Failed to open '/Users/Salinger/Library/Caches/Homebrew/downloads/5da338c344047ee06f60495e7def31345483e10f19246aad74dca7f5dcea962d--gdbm-1.20.catalina.bottle.tar.gz'

原因：
这个错误真的困扰了我好久好久, 完全没有解决这个问题的头绪, 后来终于在一篇博文提到的 GitHub Homebrew 的讨论下找到了原因——

Bintray 要关闭了, 所以 Homebrew 的归档之后就没再往Bintray 那边传了, 而新版的 Homebrew 已经去除了Bintray相关，使用 ghcr.io 服务了.
正常情况下通过 Homebrew 官网提供的命令安装的用户是无感的, 但是由于国内特殊网络环境的问题, 我使用的是如上文所说的国内镜像, 而国内的镜像是依然指向 Bintray 的, 所以才会出现无法打开归档的错误. 要解决这个问题有两个解决方案:


# 临时解决方案
export HOMEBREW_BOTTLE_DOMAIN=''
#  通过更新profile文件永久修改设置: zsh是~/.zprofile文件，bash要修改~/.bash_profile文件. 如果你并不知道这俩是什么东西, 推荐使用方案1.
```
