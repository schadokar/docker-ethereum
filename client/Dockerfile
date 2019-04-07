# using node alpine as base image
FROM node:alpine

# working dir ./app
WORKDIR /app

# Copy react package.json
COPY ./package.json .

# install dependencies
RUN npm install

# COPY client directory folder
COPY . .

# default command
CMD ["npm","start"]