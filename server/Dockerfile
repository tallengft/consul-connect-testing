FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./server/package*.json ./
RUN npm install
COPY ./server/ .

EXPOSE 3000

CMD [ "node", "./bin/www" ]