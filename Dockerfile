FROM node:8.17-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

# RUN npm global add nodemon

EXPOSE 1234

# RUN npm run webpack

# yum mongo
# asyncronouse statemenet, also weirdness w layering


CMD [ "npm", "start" ]
