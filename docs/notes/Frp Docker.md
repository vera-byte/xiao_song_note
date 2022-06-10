# Frp Docker 镜像
[Frp Docker Hub](https://hub.docker.com/r/snowdreamtech/frpc)

> ## FRP （高性能反向代理应用）
> 利用处于防火墙后的机器，对外网环境提供 http 或 https 服务。
对于 http, https 服务支持基于域名的虚拟主机，支持自定义域名绑定，使多个域名可以共用一个80端口。
利用处于防火墙后的机器，对外网环境提供 tcp 和 udp 服务，例如在家里通过 ssh 访问处于公司局部环境的主机。
## Frps配置
``` ini
; Frps ini 服务端配置
[common]
# 绑定
bind_port = 7000
# 启用面板
kcp_bind_port = 7000
# 服务token(根据实际情况修改),相当于连接密码,建议设置
token = {{ .Envs.FRP_TOKEN }}
vhost_http_port = 80
vhost_https_port = 443

bind_port = 7100
dashboard_port = 7101
# 面板登录名和密码
dashboard_user = xxx
dashboard_pwd = xxxxx
# 使用http代理并使用7102端口进行穿透
vhost_http_port = 7102
# 使用https代理并使用7103端口进行穿透
vhost_https_port = 7103


```
## Frps 服务端Docker镜像制作
``` Dockerfile

FROM snowdreamtech/frps
ADD frps.ini /etc/frp/frps.ini


```


## Frp 客户端Docker制作
``` Dockerfile
    FROM snowdreamtech/frpc
    ADD frps.ini /etc/frp/frpc.ini
```
## frpc ini 客户端配置
``` ini

[common]
server_addr = 服务器公网ip
server_port = Frps 端口

# 远程控制
[mstsc]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 13389


```