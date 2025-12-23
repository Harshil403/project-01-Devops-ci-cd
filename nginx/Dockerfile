FROM nginx:1.25-alpine

# Remove default config shipped with image
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy ONLY server block config
COPY default.conf /etc/nginx/conf.d/default.conf
