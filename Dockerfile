FROM node:lts-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

ENV PORT 6854

EXPOSE 6854

CMD ["yarn", "prod"]