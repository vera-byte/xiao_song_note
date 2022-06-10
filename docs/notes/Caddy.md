# Caddy Http Service
> ## Caddy 首先是一个用Go实现的Web Server。
> 在追求性能的道路上，nginx已经一骑绝尘。这种情况下诞生的 Caddy有什么特性呢？
Caddy的作者Matt Holt有这样的理念： 其他Web Server为Web而设计，Caddy为human设计。一句话就是 Caddy主打易用性，使用配置简单。
Caddy有下面这些开箱即用的特性:
全自动支持HTTP/2协议，无需任何配置。
Caddy 使用 Let’s Encrypt 让你的站点全自动变成HTTPS，无需任何配置。
合理使用多核多核 得益于go的特性
完全支持IPv6环境
Caddy 对WebSockets有很好的支持
自动把Markdown转成 HTML
Caddy 对log格式的定义很容易
易于部署 得益于go的特性，caddy只是一个小小的二进制文件，没有依赖，很好部署
得益于Go的跨平台特性，Caddy很容易的支持了三大主流系统：Windows、 Linux、Mac
“几乎所有的功能在Caddy里的都是插件，HTTP服务器是插件，高级的TLS特性也是插件，每一行命令实现的功能都是一个插件”
> 

[See Caddy WebSite](https://caddyserver.com/)


## Caddy全局配置
``` Caddyfile


{
    阿里DNS 自动下发证书
	acme_dns alidns {
		access_key_id {$ALIYUN_ACCESS_KEY_ID}
		access_key_secret {$ALIYUN_ACCESS_KEY_SECRET}
	}

	log {
		level info
	}
}
Domain
{$DOMAIN} {
	reverse_proxy website Docker镜像
	tls {
        腾讯自动下发证书
        dns dnspod Appid,Dnspod密钥
    }
}

...

```

## 制作Caddy Docker 镜像
``` Dockerfile
FROM caddy:2-builder AS builder
ENV GOPROXY=https://goproxy.cn,direct
RUN xcaddy build \
    --with github.com/greenpau/caddy-trace \
    --with github.com/abiosoft/caddy-hmac \
    --with github.com/caddy-dns/cloudflare \
    --with github.com/caddy-dns/dnspod \
    --with github.com/caddy-dns/lego-deprecated \
    --with github.com/caddy-dns/alidns \
    --with github.com/lolPants/caddy-requestid \
    --with github.com/nicolasazrak/caddy-cache
FROM caddy:2
RUN apk add --update curl && rm -rf /var/cache/apk/*
COPY --from=builder /usr/bin/caddy /usr/bin/caddy
COPY Caddyfile Caddyfile
CMD [ "caddy","fmt","Caddyfile", "caddy", "run", "-config", "Caddyfile" ]

```


