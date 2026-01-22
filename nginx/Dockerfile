FROM public.ecr.aws/nginx/nginx:alpine

# Remove default configs
RUN rm -rf /etc/nginx/conf.d/*

# Copy Nginx config
COPY nginx-main.conf /etc/nginx/nginx.conf

# Copy TLS certificates
COPY certs /etc/nginx/certs

EXPOSE 80
EXPOSE 443
