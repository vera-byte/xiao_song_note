FROM node:lts-alpine
WORKDIR /app
WORKDIR /source
COPY  docs /source/docs
COPY  package.json /source/package.json
COPY  yarn.lock /source/yarn.lock
RUN cd /source && yarn && yarn build

COPY /docs/.vuepress/dist /app
# 删除源代码
RUN rm -rf source

CMD [ "npx","http-server","--port","8080","/app" ]



