# stage 1
FROM node:20-alpine as builder
WORKDIR /home/project
COPY ./package*.json .
RUN npm i
COPY . .
RUN npm run build

# stage 2
FROM nginx:1.25 as Final
WORKDIR /usr/share/nginx/html
COPY --from=builder /home/project/dist ./


