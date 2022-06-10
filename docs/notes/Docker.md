# Docker

## 常用命令
```shell
#进程守护启动 Docker
systemctl docker start
# 停止docker
sudo docker stop
# 重启Docker
systemctl restart docker.service
# 验证
docker info

```

## Docker国内镜像地址配置
```shell
# 编辑Docker 配置
vi /etc/docker/daemon.json
写入国内镜像地址
{
  "registry-mirrors": ["https://hub.daocloud.io"]
}
```