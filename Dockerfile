FROM nginx:1.19

WORKDIR /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build  /usr/share/nginx/html/
EXPOSE 8019
CMD ["nginx", "-g", "daemon off;"]
