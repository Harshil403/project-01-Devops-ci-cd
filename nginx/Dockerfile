FROM nginx:alpine

# Remove all default configs
RUN rm -rf /etc/nginx/conf.d/*

# Replace the MAIN nginx config
COPY nginx-main.conf /etc/nginx/nginx.conf

EXPOSE 80

