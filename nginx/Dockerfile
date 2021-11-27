FROM nginx:1.19-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir /etc/nginx/ssl

COPY ssl/ /etc/nginx/ssl

RUN chown -R root:root /etc/nginx/ssl
RUN chmod -R 600 /etc/nginx/ssl

EXPOSE 80