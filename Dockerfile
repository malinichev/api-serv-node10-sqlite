FROM node:10

WORKDIR /api-serv/react-app

COPY package*.json ./
 
RUN npm install && npm run-script build && rm -r ./node_modules

WORKDIR /api-serv

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]