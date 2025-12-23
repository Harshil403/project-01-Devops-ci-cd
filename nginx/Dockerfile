#FROM nginx:1.25-alpine

FROM nginx:alpine

#Remove any existing configs (safety)
RUN rm -f /etc/nginx/conf.d/*

# Copy ONLY the server config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

