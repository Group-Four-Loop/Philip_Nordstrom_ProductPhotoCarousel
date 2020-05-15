FROM node:8.17-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

# RUN npm global add nodemon

EXPOSE 1111

RUN npm run webpack

CMD [ "npm", "start" ]
