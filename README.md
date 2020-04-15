# api-serv-node10-sqlite

**Ссылка на уже развернутый APP**
http://90.188.237.123:5556




**В промышленном:** </br>

git clone https://github.com/malinichev/api-serv-node10-sqlite.git </br>

cd ./api-serv-node10-sqlite/react-app </br>

npm i </br>

npm run-script build </br>

cd .. </br>

npm i </br>

pm2 start app.js --watch </br>

PORT=5557 node app.js или так



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

npm i </br>

PORT=3001 node app.js </br>

