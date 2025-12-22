FROM nginx:1.25-alpine

# REMOVE default config files
RUN rm -f /etc/nginx/conf.d/*

# Copy ONLY server config
COPY nginx.conf /etc/nginx/conf.d/default.conf
