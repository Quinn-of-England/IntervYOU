# Install Nginx with Specified Version
FROM nginx:1.19-alpine

# Copy Nginx Configurations
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Create and Copy SSL Certificate and Key to Container
RUN mkdir /etc/nginx/ssl
COPY ssl/ /etc/nginx/ssl

# Run Commands to Enable Using Certificate and HTTPS
RUN chown -R root:root /etc/nginx/ssl
RUN chmod -R 600 /etc/nginx/ssl