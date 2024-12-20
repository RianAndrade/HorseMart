FROM node:alpine

WORKDIR /HorseMart

COPY package*.json ./

RUN apk update
RUN apk add bash \
  git \
  gcc 


RUN npm install bootstrap
RUN npm install next

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
