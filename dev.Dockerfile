FROM node:current-alpine
WORKDIR /base
COPY package.json ./
COPY yarn.lock ./
RUN yarn

EXPOSE 3000
CMD yarn dev

