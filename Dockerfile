FROM node:10.15.3-alpine

ENV APP /viluma
RUN mkdir -p $APP
WORKDIR $APP
ENV PATH $APP/node_modules/.bin:$PATH

COPY package.json $APP/package.json
COPY yarn.lock $APP/yarn.lock
COPY src $APP/src
COPY public $APP/public
COPY .env $APP/.env


RUN yarn install
RUN yarn build