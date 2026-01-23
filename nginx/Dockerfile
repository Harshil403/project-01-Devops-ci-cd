FROM public.ecr.aws/nginx/nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY nginx-main.conf /etc/nginx/nginx.conf

EXPOSE 80
