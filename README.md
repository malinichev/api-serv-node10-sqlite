# api-serv-node10-sqlite

**в отладочном режиме, надо выполнить** </br>
git clone https://github.com/malinichev/api-serv-node10-sqlite.git </br>

nano ./api-serv-node10-sqlite/react-app/src/api/index.js </br>

Отредактировать там index.js </br>
let axiosInstance = axios.create({ </br>
    baseURL: './api',    <---------------путь поменять на http://<путь к вашему сайту>:3001/api </br>



cd ./api-serv-node10-sqlite/react-app </br>

npm i </br>

npm start </br>

cd .. </br>

npm install cors express jwt-simple method-override passport passport-jwt uuid </br>

npm install bcryptjs --build-from-source </br>

npm install bcrypt --build-from-source </br>

npm install sqlite3 --build-from-source </br>

PORT=3001 node app.js </br>


**В промышленном:** </br>

git clone https://github.com/malinichev/api-serv-node10-sqlite.git </br>

cd ./api-serv-node10-sqlite/react-app </br>

npm i </br>

npm run-script build </br>

cd .. </br>

npm install cors express jwt-simple method-override passport passport-jwt uuid </br>

npm install bcryptjs --build-from-source </br>

npm install bcrypt --build-from-source </br>

npm install sqlite3 --build-from-source </br>

pm2 start app.js --watch </br>

PORT=5557 node app.js или так
