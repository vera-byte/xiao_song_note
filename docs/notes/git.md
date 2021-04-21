# Git 笔记
## 配置多个远程仓库
## 配置多个仓库的目的
### 一份代码提交到到多个仓库，多几份代码备份


--------
### 准备多个仓库地址
``` sh
GitHub 仓库地址
Gitee 仓库地址
Coding 仓库地址
GitLab 仓库地址
```
### 主仓库
``` sh
把GitHub上的库添加为默认远程库，这一步和一般操作没啥区别

git remote add origin 仓库地址

```
### 备份仓库
``` shll
备份库只push(提交)，不pull

git remote set-url --add origin 仓库地址
git remote set-url --add origin 仓库地址
git remote set-url --add origin 仓库地址

```