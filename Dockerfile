FROM node:14.4.0-alpine3.12 AS builder
WORKDIR /app
COPY . .
ARG APKPROXY=http://mirrors.ustc.edu.cn/alpine
ARG IS_INTERNATIONAL=null
RUN sed -i "s+http://dl-cdn.alpinelinux.org/alpine+${APKPROXY}+g" /etc/apk/repositories && \
    apk add git && yarn install --registry http://registry.npmmirror.com  && \
    yarn run build-params $IS_INTERNATIONAL,umengId,umengWebId && yarn build

FROM nginx:1.19-alpine
RUN sed -i "11i \        if ($request_filename ~* index.html|.*\.ico$)\n\      {\n\      add_header Cache-Control "no-cache";\n\     }\n\"  /etc/nginx/conf.d/default.conf
RUN sed -i "19i \    location /pay-information { \n      rewrite ^/pay-information/(.*)$ /$1 break;\n      proxy_pass https://info.bianjie.ai;\n    }"  /etc/nginx/conf.d/default.conf
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/
