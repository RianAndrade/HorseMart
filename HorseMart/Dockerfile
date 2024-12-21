FROM node:alpine

WORKDIR /HorseMart

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
