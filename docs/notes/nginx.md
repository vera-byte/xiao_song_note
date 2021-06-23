---
title: Nginx笔记
---


> 修改Nginx记得重启Nginx

# Nginx代理
```conf
location /admin/ #代理名称
    {
        proxy_pass ip或域名;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        
        #缓存相关配置
        #proxy_cache cache_one;
        #proxy_cache_key $host$request_uri$is_args$args;
        #proxy_cache_valid 200 304 301 302 1h;
        
        #持久化连接相关配置
        proxy_connect_timeout 3000s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 3000s;
        # proxy_http_version 1.1;
        # proxy_set_header Upgrade $http_upgrade;
        # proxy_set_header Connection "upgrade";
        
        #        
        #expires 12h;
    }
     location /socket {  
         proxy_pass ip或域名;   
         proxy_connect_timeout 3600s; #配置点1 
         proxy_read_timeout 3600s; #配置点2,如果没效,可以考虑这个时间配置长一点 
         proxy_send_timeout 3600s; #配置点3 
         proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header REMOTE-HOST $remote_addr;
         #proxy_bind $remote_addr transparent;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
         rewrite /socket/(.*) /$1 break;
         proxy_redirect off;
     
     }
```

# Nginx自定义日志
``` conf
# mylog 自定义日志名称
log_format  mylog  
        '-----------------------------------------------------------------------------------------------------------------
        |请求IP（remote_addr）:             $remote_addr                    
        |户端用户名称（remote_user）:          $remote_user                  
        |标准格式下的本地时间（time_iso8601）:      $time_iso8601               
        |请求协议（request）:               $request                    
        |状态（status）:                  $status                      
        |发送客户端Body字节（body_bytes_sent）:      $body_bytes_sent            
        |记录从哪个页面链接访问过来的（http_referer）:  $http_referer            
        |记录客户端浏览器相关信息（http_user_agent）:      $http_user_agent         
        |(反向)记录客户端IP地址（http_x_forwarded_for）: "  $http_x_forwarded_for       
        |压缩（gzip_ratio）:              $gzip_ratio                  
        |请求时间（request_time）: $request_time                 
        |发送给客户端的总字节数（bytes_sent）:              $bytes_sent                  
        |请求的长度（request_length）:            $request_length              
        |日志写入时间（msec）:           $msec                        
        -------------------------------------------------------------------------------------------------------------------'


```
# 使用自定义日志

``` conf

server
    {
        # 将mylog 放到后面
        access_log  /www/wwwlogs/access.log mylog;
    }


```