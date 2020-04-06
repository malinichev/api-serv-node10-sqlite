FROM node:10

WORKDIR /api-serv/react-app
# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /myapp && mv ./node_modules ./myapp

WORKDIR /api-serv/react-app/myapp

COPY . .

# Build the project and copy the files
CMD [ "npm", "run-script", "build" ]

WORKDIR /api-serv

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]