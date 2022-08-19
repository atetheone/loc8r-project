FROM node:14-alpine
RUN apk add --no-cache python3 g++ make
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]