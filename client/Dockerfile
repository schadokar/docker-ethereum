# using node alpine as base image
FROM node:12-alpine as build

# working dir ./app
WORKDIR /app

# Copy react package.json
COPY ./package.json .

# install dependencies
RUN npm install --silent

# COPY client directory folder
COPY . .

# default command
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.21.6-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]