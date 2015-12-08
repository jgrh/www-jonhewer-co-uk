FROM debian:jessie

ENV BUILD_DEPS curl
ENV NGINX_VERSION 1.8.1-1~jessie

USER root

RUN apt-get update && \
    apt-get install -y $BUILD_DEPS --no-install-recommends && \
    curl -sSL "http://nginx.org/keys/nginx_signing.key" -o nginx.key && \
    apt-key add nginx.key && \
    rm nginx.key && \
    echo "deb http://nginx.org/packages/debian/ jessie nginx" > /etc/apt/sources.list.d/nginx.list && \
    echo "deb-src http://nginx.org/packages/debian/ jessie nginx" >> /etc/apt/sources.list.d/nginx.list && \
    apt-get update && \
    apt-get install -y nginx=$NGINX_VERSION --no-install-recommends && \
    rm -rf /etc/nginx/* && \
    apt-get purge -y --auto-remove $BUILD_DEPS && \
    rm -rf /var/lib/apt/lists/*

COPY nginx /etc/nginx
COPY target /var/www

CMD [ "nginx", "-c", "/etc/nginx/nginx.conf" ]

EXPOSE 80
