# 利用webhook实现自动化部署

```sh
#!/usr/bin/env sh
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

res=$(curl http://bt.metoyun.com:8888/hook?access_key=qUiYRYHR26YvmMZz7jxvDiDLfaOxmVKmHID4XticOUcEg0yk&param=aaa)

echo "😯-------发送WebHook-------"

echo $res

if [ "$res" == '{"code": 1}' ];then

echo "😏 $(date +'%Y-%m-%d %H:%M:%S')|生产环境部署请求已接受."

else

echo "😨 $(date +'%Y-%m-%d %H:%M:%S')|部署请求未收到正常回应,请检查配置!"

fi




```