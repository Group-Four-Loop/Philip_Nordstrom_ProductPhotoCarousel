FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY . /src/app

RUN npm install

# RUN npm global add nodemon

EXPOSE 1234

# RUN npm run webpack

# yum mongo
# asyncronouse statemenet, also weirdness w layering


# CMD [ "npm", "start" ]
