---
title: Frps服务端/Frp客户端
---

# 安装frps服务端：

1. 新建一个存放目录
``` sh

 mkdir frps

```
2. 拉取一键搭建脚本
``` sh
wget --no-check-certificate https://raw.githubusercontent.com/clangcn/onekey-install-shell/master/frps/install-frps.sh -O ./install-frps.sh
```
3. 增加脚本权限
``` sh

 chmod 700 ./install-frps.sh

```
4. 安装
``` sh
 ./install-frps.sh install
 
```

> 之后他会让你输一些参数，全部参数都有默认值，直接回车就是输入默认值：

``` sh
Please input frps bind_port [1-65535](Default Server Port: 5443): #输入frp提供服务的端口，用于服务器端和客户端通信，默认即可
Please input frps vhost_http_port [1-65535](Default vhost_http_port: 80): #输入frp进行http穿透的http服务端口，建议选择其他端口，默认的80端口给Nignx，然后用Nginx代理frp的http端口
Please input frps vhost_https_port [1-65535](Default vhost_https_port: 443): #输入frp进行https穿透的https服务端口，同上面的80端口类似，建议分配其他端口，然后通过Nginx代理此端口
Please input frps dashboard_port [1-65535](Default dashboard_port: 6443):#输入frp的控制台服务端口，用于查看frp工作状态，默认即可

Please input dashboard_user (Default: admin):#登录控制台的用户名，默认即可
Please input dashboard_pwd (Default: arepR7VZ):#登录控制台的密码，如果记不住默认的建议修改


Please input privilege_token (Default: 9e2UAeWa6hxrwdc):#输入frp服务器和客户端通信的密码，默认是随机生成的，默认即可
Please input frps max_pool_count [1-200](Default max_pool_count: 50):#设置每个代理可以创建的连接池上限，默认50

```

``` sh
##### Please select log_level #####
1: info
2: warn
3: error
4: debug
#####################################################
Enter your choice (1, 2, 3, 4 or exit. default [1]): 默认即可
Please input frps log_max_days [1-30](Default log_max_days: 3 day): 默认即可
##### Please select log_file #####
1: enable
2: disable
#####################################################
Enter your choice (1, 2 or exit. default [1]):默认即可

安装完毕后会弹出以下内容，标明了具体信息，到此服务端操作全部完成。
==============================================
You Server IP      : X.X.X.X
Bind port          : 5443
KCP support        : true
vhost http port    : 8085
vhost https port   : 4435
Dashboard port     : 6443
token              : 9e2UAeWa6hxrwdc
tcp_mux            : true
Max Pool count     : 50
Log level          : info
Log max days       : 3
Log file           : enable
==============================================
frps Dashboard     : http://X.X.X.X:6443/
Dashboard user     : admin
Dashboard password : admin
==============================================


frps status manage : frps {start|stop|restart|status|config|version}
Example:
  start: frps start # 启动frps命令
   stop: frps stop # 停止frps命令
restart: frps restart # 重启frps命令

[root@root frps]#
 
```
> 至此，安装完成，可以访问ip地址+控制台端口查看（如果是阿里云腾讯云的服务器或者服务器已安装宝塔面板的，记得在安全组放行以上的配置的端口，否则无法访问），见下图



 

# Frp安装客户端：
> 下载客户端软件：
Mac版本
https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_darwin_amd64.tar.gz
 
> Win版本
https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_windows_386.zip
 
> Linux版本
https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz
 

```sh

下载完成后解压，找到 frpc.ini 文件
修改 frpc.ini 文件，假设 frps 所在的服务器的 IP 为 127.0.0.1，local_port 为本地机器上 web 服务对应的端口, 绑定自定义域名mock.test.com
以下为我本地的配置，可做参考：
[common]
server_addr = 127.0.0.1
server_port = 5443
token = 9e2UAeWa6hxrwdc

```


## 通过tcp的方式可以不使用域名的情况下进行内网穿透，直接访问http://127.0.0.1:8080即可
## tcp穿透需要设置remote_port（为将服务器的8080端口绑定到你的穿透服务，此处的8080端口也需要在防火墙中放开访问权限）
``` conf
[mock-tcp]
type = tcp
local_ip = 172.18.50.59
local_port = 8089
remote_port = 8080
# custom_domains = mock.frp.test.com

[mock-http]
type = http
local_ip = 172.18.50.59
local_port = 8089
custom_domains = mock.frp.test.com


[web]
type = http
local_ip = 172.18.50.59
local_port = 8091
custom_domains = api.frp.test.com

```

> 修改完成后，保存。然后启动 frpc

 

## 启动客户端：
``` sh
# liunx启动客户端命令： 
./frpc -c ./frpc.ini    ---- ini文件与执行文件在同一目录
# win启动客户端命令： 
frpc.exe -c ./frpc.ini

```
 

> 注意：frp.test.com这个二级域名需要提前在域名解析中进行A记录解析，见下图：
通过浏览器访问 http://mock.frp.test.com:8085 即可访问到处于内网机器上的 web 服务。
我们通过服务器控制台就可以看到有客户端已经连接了
到此就完成了frp的客户端搭建和连接，完成了内网穿透服务。

 

## 设置客户端自启动：

``` sh
# Linux下添加frp内网穿透工具开机启动

# 在/etc/rc.local里面添加/home/frp/frps -c /home/frp/frps.ini (文件的具体路径根据实际情况填写),终端里面输入下面的命令，或者把文件下载回本地修改后重新上传覆盖源文件。

vim /etc/rc.local
 

# Windows系统下添加frp内网穿透工具为开机启动项

# 因为Windows系统下从命令行启动frp内网穿透工具后，如果关闭命令行的黑窗口，frp内网穿透服务就停止了，并且任务栏上一直有个命令行窗口也很不方便，所以要开机后启动并且要隐藏frp内网穿透工具的窗口，方法是这样的：
# 新建一个文本文件，文件内写入如下内容，frp的文件路径根据自己的实际情况修改，然后重命名这个文本文件为frp.vbs ,注意txt的扩展名也要改为vbs，然后把这个frp.vbs放到Windows的启动目录里面。   
# Windows的启动目录位于“C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp”（如果找不到这个目录可以在CMD运行里面输入：     “shell:startup” 或者输入“%programdata%\Microsoft\Windows\Start Menu\Programs\Startup”）
set ws=WScript.CreateObject("WScript.Shell")
ws.Run "d:\frpc.exe -c d:\frpc_net.ini",0

```
 

## 自定义域名访问：

> 上面我们发现连接内网还是需要 输入 8085端口，而且域名是nginx上配置的三级域名，其实我们可以通过Nginx来反向代理一下，这样就可以自己的顶级域名，并通过80端口来访问了。
> 1、Nginx新建一个虚拟主机配置，或者直接改默认的主机配置也可以
> 在Nignx 的listen 后 增加 default_server 配置，用来监听默认情况下所有来自解析到该服务器的域名
> 然后在 server 段内增加 反向代理配置
> 在nginx子配置文件目录下新增一个名为：frps.conf文件
```vim frps.conf```
## frps内网穿透服务--测试服务为mock服务
``` conf
server{
    listen 80;
    listen 8086;
    listen 443 ssl http2;
    server_name mock.frp.test.com;
    location /{
       proxy_redirect off;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_read_timeout 300;
       proxy_pass http://127.0.0.1:8085;
       access_log /www/wwwlogs/access8085.log;
       error_log /www/wwwlogs/access_error8085.log;
    }
}
 

; 这样Nginx 将接管域名的绑定工作，监听到80端口的网站后，会将网站转发到 本机的frp 8085 端口

```

 

## frp进阶配置（未实际测试，摘抄于原作者）：

``` ini

; 1、转发 DNS 查询请求
; DNS 查询请求通常使用 UDP 协议，frp 支持对内网 UDP 服务的穿透，配置方式和 TCP 基本一致。
; 修改 frpc.ini 文件
  [common]
  server_addr = 180.28.83.22 #这里是服务器的IP
  server_port = 5443 #服务器的连接端口
  token = LnDeMkeiIedDeDw #服务器的连接Token
  
  [dns]
  type = udp
  local_ip = 8.8.8.8
  local_port = 53
  remote_port = 6000



;   2、转发 Unix域套接字
; 通过 tcp 端口访问内网的 unix域套接字(例如和 docker daemon 通信)。
; frps 的部署步骤同上。
; 启动 frpc，启用 unix_domain_socket 插件，配置如下：
  [common]
  server_addr = 180.28.83.22 #这里是服务器的IP
  server_port = 5443 #服务器的连接端口
  token = LnDeMkeiIedDeDw #服务器的连接Token
  
  [unix_domain_socket]
  type = tcp
  remote_port = 6000
  plugin = unix_domain_socket
 plugin_unix_path = /var/run/docker.sock
; 通过 curl 命令查看 docker 版本信息
curl http://x.x.x.x:6000/version
 
; 3、win系统远程桌面
; 通过tcp 来连接位于内网中的电脑，配置如下：
  [common]
  server_addr = 180.28.83.22 #这里是服务器的IP
  server_port = 5443 #服务器的连接端口
  token = LnDeMkeiIedDeDw #服务器的连接Token
  
  [dns]
  type = tcp
  local_ip = 127.0.0.1
  local_port = 3389
 remote_port = 33890
; 然后通过 mstsc -v 180.28.83.22:33890 就可以远程桌面到内网。


```
 

