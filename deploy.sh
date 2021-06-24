#!/usr/bin/env sh
###
 # @Author: your name
 # @Date: 2021-05-21 16:22:32
 # @LastEditTime: 2021-06-24 15:04:24
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /note/deploy.sh
### 
# 确保脚本抛出遇到的错误
set -e

echo "😀-------正在打包项目···-------"

vuepress build docs

echo "👏-------添加文件到仓库-------"

git add .

echo "😯-------写入提交信息-------"

git commit -m "Updated $(date +'%Y-%m-%d %H:%M:%S')"

echo "😸提交仓库"

git push -u origin master

echo "🤤$(date +'%Y-%m-%d %H:%M:%S')|开始到生产环境部署"

res=$(curl http://bt.metoyun.com:8800/hook?access_key=3sShKfntwHBrrfzo8XsRPiIaxqFR2f1icvtLNDgOX3bS30gC&param=aaa)

echo "😯-------发送WebHook-------"

echo $res

if [ "$res" == '{"code": 1}' ];then

echo "😏 $(date +'%Y-%m-%d %H:%M:%S')|生产环境部署请求已接受."

else

echo "😨 $(date +'%Y-%m-%d %H:%M:%S')|部署请求未收到正常回应,请检查配置!"

fi


