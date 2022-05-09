# Git
## 配置多个远程仓库



## 准备多个仓库地址

``` sh

GitHub 仓库地址
Gitee 仓库地址
Coding 仓库地址
GitLab 仓库地址

```

## 主仓库

``` sh

把GitHub上的库添加为默认远程库，这一步和一般操作没啥区别

git remote add origin 仓库地址

```

## 备份仓库

``` sh

备份库只push(提交)，不pull

git remote set-url --add origin 仓库地址
git remote set-url --add origin 仓库地址
git remote set-url --add origin 仓库地址

```


# 项目中同步官方库
``` sh
# 查看库信息
git remote -v

# 添加对应的上游仓库信息
git remote add upstream 仓库地址




# 从上游仓库fetch分支信息和提交点
git fetch upstream
# 切换分支到本地
git checkout master
# 合并上游master分支到本地master
git merge upstream/master --allow-unrelated-histories
# 提交更新master
git push

```


# 分支合并
开发分支（dev）上的代码达到上线的标准后，要合并到 master 分支
``` sh
git checkout dev
git pull
git checkout master
git merge dev
git push -u origin master


```
当master代码改动了，需要更新开发分支（dev）上的代码
``` sh
git checkout master
git pull
git checkout dev
git merge master
git push -u origin dev
```

# 回退命令
``` sh

$ git reset --hard HEAD^ 回退到上个版本
$ git reset --hard HEAD~3 回退到前3次提交之前，以此类推，回退到n次提交之前
$ git reset --hard commit_id 退到/进到 指定commit的sha码

强推到远程：

$ git push origin HEAD --force
```


# GIT 子模块

## 添加 Submodule
```sh
# 添加 Submodule
git submodule add <repo> [<dir>] [-b <branch>] [<path>]

# 示例：
git submodule add git@codehub.***.***.com:****/WEB-INF.git

```
## 拉取包含submodule的仓库
``` sh

git clone <repo> [<dir>] --recursive

示例：
git clone git@codehub.***.***.com:****/WEB-INF.git --recursive


```

## 获取远端Submodule更新

``` sh

git submodule update --remote


```

## 推送更新到子库
``` sh

git push --recurse-submodules=check


```


### 删除 Submodule

1. 删除“.gitsubmodule”中对应submodule的条目。
2. 删除“.git/config”中对应submodule的条目。
3. 执行命令，删除子模块对应的文件夹。
``` sh

git rm --cached {submodule_path}    #注意更换为您的子模块路径

```


# Git tag

``` sh 
# 如果我们要查看所有标签可以使用以下命令：
git tag

# 如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。
git tag -a v0.9(tagName) 85fc7e7(commit id)

# 指定标签信息命令：
git tag -a <tagname> -m "runoob.com标签"

# PGP签名标签命令：
git tag -s <tagname> -m "runoob.com标签"

```