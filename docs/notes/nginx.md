---
title: Nginx笔记
---

# Nginx代理
```ini
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