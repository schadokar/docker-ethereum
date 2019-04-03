FROM node:alpine
WORKDIR /app
RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN apk add --update python krb5 krb5-libs gcc make g++ krb5-dev
COPY ./package.json .
RUN npm install

COPY . .

CMD ["npm","start"]