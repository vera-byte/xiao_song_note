FROM node:lts-alpine
WORKDIR /app
COPY  docs /app/docs
COPY  package.json /app/package.json
COPY  yarn.lock /app/yarn.lock
RUN cd /app && yarn && yarn build
# 删除源代码
RUN rm -rf /app/node_modules && rm -rf /app/yarn.lock && rm -rf /app/package.json

CMD [ "npx","http-server","--port","8080","/app/docs/.vuepress/dist" ]



