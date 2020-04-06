FROM node:10

WORKDIR /api-serv

COPY react-app/package*.json ./react-app/ && react-app/public/ ./react-app/public/ && react-app/scr/ ./react-app/scr/

WORKDIR /api-serv/react-app


RUN npm install && npm run-script build && rm -r ./node_modules

WORKDIR /api-serv

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]