FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./client/package*.json ./
RUN npm install
COPY ./client/ .

EXPOSE 3000

CMD [ "node", "./bin/www" ]