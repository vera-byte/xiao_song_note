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