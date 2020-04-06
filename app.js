const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
const fs = require('fs');
var path = require('path'); 
const sqlite3 = require('sqlite3').verbose();

const cors = require('cors');
const methodOverride = require('method-override');


const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const db = require('./models/db');
const config = require('./config/config');

const PORT = process.env.PORT || 5555

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static('./react-app/build'));


const params = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
};

var strategy = new Strategy(params, function(payload, done){
  db
    .getUserId(payload.id)
    .then((results)=>{
      if (results.length == 0) {
        return done(new Error('Юзер не найден'), null)
      } else {
        return done(null, {
          id: results._id
        })
      }
    })
    .catch((err)=>{
      return done(err);
    })
})

passport.use(strategy);

app.use('/', router);

app.use(function(req, res, next){
  const err = new Error('Ни хрена не найдено!');
  err.status = 404;
  next(err);   
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  })     
})

const pathDB = './db/userDb.db'



if (path.existsSync(pathDB)) { 
  var db = new sqlite3.Database(pathDB);
      db
        .run('CREATE TABLE users(_id TEXT NOT NULL, email TEXT NOT NULL, hash TEXT NOT NULL)')
        .close((err) => {
          if (err) {
            return console.error(err);
          }
        });
} 

// fs.access(pathDB, fs.F_OK, (err) => {
//     if (err) {
      
      
//     }
// });

const server = app.listen(PORT, function () {  
  console.log('Server start in: ' + server.address().port);
})