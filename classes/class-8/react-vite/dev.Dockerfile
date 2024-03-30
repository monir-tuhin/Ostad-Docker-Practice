FROM node:20-alpine as builder
WORKDIR /home/project
COPY ./package*.json .
RUN npm i
COPY . .
RUN npm install -g vite
CMD ["vite","--host"]