FROM node:21-alpine
ENV PORT=3000
COPY package*.json .
RUN npm i
COPY . .
CMD ["npm", "start"]