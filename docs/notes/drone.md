# drone ci 命令

###  Example Drone CI 部署命令

``` yml

---
kind: pipeline
type: docker # CI类型
name: default
steps:
  - name: submodules # 步骤 名称
    image: alpine/git # 镜像
    commands:
      - git submodule update --init --recursive  # 拉取git子模块
  - name: test_deploy
    image: docker
    environment:
      SSH_KEY:
        from_secret: test_ssh_key
      REMOTE_HOST:
        from_secret: test_remote_host
      FRP_TOKEN:
        from_secret: frp_token
      ALIYUN_ACCESS_KEY_ID:
        from_secret: aliyun_access_key_id
      ALIYUN_ACCESS_KEY_SECRET:
        from_secret: aliyun_access_key_secret
      PROXY_URL: xxx.com
      DOMAIN: xxx.com
    commands:
      - mkdir ~/.ssh && echo "$SSH_KEY" > ~/.ssh/id_ed25519 && chmod 0600 ~/.ssh/id_ed25519
      - ssh-keyscan -t ed25519 $REMOTE_HOST >> ~/.ssh/known_hosts
      - export DOCKER_HOST=ssh://drone@$REMOTE_HOST
      - docker compose -p test-web-app ps
      - docker compose -p test-web-app up -d --build
trigger:
  branch: # 触发分支
    - test

```