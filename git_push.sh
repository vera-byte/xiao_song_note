#!/usr/bin/env sh
echo "添加文件到仓库"
git add .
echo "写入提交信息"
git commit -m "Updated $(date +'%Y-%m-%d %H:%M:%S')"
echo "提交仓库"
git push -u origin master
