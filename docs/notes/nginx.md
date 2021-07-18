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
        #proxy_cache off;
        #proxy_cache_key $host$request_uri$is_args$args;
        #proxy_cache_valid 200 304 301 302 1h;
        
        #持久化连接相关配置
        # proxy_connect_timeout 3000s;
        # proxy_read_timeout 86400s;
        # proxy_send_timeout 3000s;
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

# Nginx自定义访问日志




``` conf
# mylog 自定义日志名称
log_format  mylog  
        '-------------------------------------------------------------------------------------------------------------------
|请求IP（remote_addr）:             $remote_addr      
|连接序列号（connection）:              $connection
|当前通过连接发出的请求数量（connection_requests）: $connection_requests
|户端用户名称（remote_user）:          $remote_user                  
|标准格式的本地时间（time_iso8601）:      $time_iso8601
|通用日志格式下的本地时间（time_local）:            $time_local   
|完整的原始请求行（request）:               $request          
|完整的请求地址（request_uri）:             $request_uri          
|响应状态码（status）:                  $status                      
|发送给客户端的字节数，不包括响应头的大小（body_bytes_sent）:      $body_bytes_sent            
|请求的referer地址（http_referer）:  $http_referer            
|记录客户端浏览器相关信息（http_user_agent）:      $http_user_agent         
|(反向)记录客户端IP地址（http_x_forwarded_for）: "  $http_x_forwarded_for       
|压缩（gzip_ratio）:              $gzip_ratio                  
|请求处理时长（request_time）: $request_time                 
|发送给客户端的总字节数（bytes_sent）:              $bytes_sent                  
|请求长度（包括请求行，请求头和请求体）（request_length）:            $request_length      
|如果请求是通过http流水线发送，则其值为"p"，否则为“."（pipe）:      $pipe        
|日志写入时间，单位为秒，精度是毫秒（msec）:           $msec                        
-------------------------------------------------------------------------------------------------------------------';


```
# 使用自定义日志

``` conf

server
    {
        # 将mylog 放到后面
        access_log  /www/wwwlogs/access.log mylog;
    }


```