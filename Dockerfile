FROM debian:jessie

ENV NGINX_VERSION 1.10.2-1~jessie

RUN apt-get update && \
    apt-get install -y curl --no-install-recommends && \
    curl -sSL "http://nginx.org/keys/nginx_signing.key" | apt-key add - && \
    echo "deb http://nginx.org/packages/debian/ jessie nginx" > /etc/apt/sources.list.d/nginx.list && \
    echo "deb-src http://nginx.org/packages/debian/ jessie nginx" >> /etc/apt/sources.list.d/nginx.list && \
    apt-get update && \
    apt-get install -y nginx=$NGINX_VERSION --no-install-recommends && \
    apt-get purge -y --auto-remove curl && \
    rm -rf /var/lib/apt/lists/*

RUN rm -rf /etc/nginx/*

COPY nginx /etc/nginx

COPY target /var/www

CMD [ "nginx", "-c", "/etc/nginx/nginx.conf" ]

EXPOSE 80
