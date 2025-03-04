FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /var/www/html/docker-node-app

COPY . /var/www/html/docker-node-app

CMD ["node", "/var/www/html/docker-node-app/server.js"]