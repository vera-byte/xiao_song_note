# linux 常用命令
``` shell
    sudo usermod -aG docker drone  # 使用超级管理员权限 把用户 drone 加入 docker 组
    sudo -H -u drone bash -c "docker ps"
```