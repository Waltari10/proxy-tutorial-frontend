# Get Nginx image from Docker hub
FROM nginx
# Copy our configuration file to a folder in our Docker image where Nginx will use it
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
# Configure Nginx for Heroku
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'