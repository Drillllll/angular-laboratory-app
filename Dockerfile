FROM nginx:1.23.3


ENV VERSION="0.0.1-SNAPSHOT"

ENV API_URL http://localhost:8080/api

EXPOSE 80

ADD dist/angular-laboratory-app /usr/share/nginx/html/
ADD docker/etc/nginx/templates/ /etc/nginx/templates/
