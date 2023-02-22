FROM node:14.4.0-alpine3.12 AS builder
WORKDIR /app
COPY . .
ARG IS_INTERNATIONAL=null
ARG UMENG_ID
ARG UMENG_WEB_ID
ARG APKPROXY=http://mirrors.ustc.edu.cn/alpine
RUN sed -i "s+http://dl-cdn.alpinelinux.org/alpine+${APKPROXY}+g" /etc/apk/repositories && \
    apk add git && \
    npm config set registry https://registry.npm.taobao.org  && \
    npm install && npm run build-params $IS_INTERNATIONAL,$UMENG_ID,$UMENG_WEB_ID && npm run build

FROM nginx:1.19-alpine
RUN sed -i "11i \        if (\$request_filename ~* index.html|.*\\\.ico$)\n        {\n          add_header Cache-Control "no-cache";\n        }"  /etc/nginx/conf.d/default.conf

RUN sed -i "21i \    location /pay-information { \n      rewrite ^/pay-information/(.*)$ /$1 break;\n      proxy_pass https://info.bianjie.ai;\n    }"  /etc/nginx/conf.d/default.conf
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/