# using node alpine as base image
FROM node:8.12-alpine

# working dir ./app
WORKDIR /app

# Install the prerequisites to install the web3 and other ethereum npm packages
RUN apk update && apk upgrade && apk add bash git openssh
RUN apk add --update python2 krb5 krb5-libs gcc make g++ krb5-dev

RUN git config --global url."https://".insteadOf git://

# Copy the package.json
COPY ./package.json .

# Install the dependencies
RUN npm install

# Copy the server and ethereum module
COPY . .

# set the default command
CMD ["npm","start"]