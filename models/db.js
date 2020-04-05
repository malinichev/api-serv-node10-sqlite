// const uuidv4 = require('uuid/v4');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const pathDB = './db/userDb.db'

function checkIsEmailNew(newUser,resolve,reject){
  var db = new sqlite3.Database(pathDB); 
    db.get(`SELECT email FROM users WHERE email  = ?;`,[newUser.email], (err, foundEmail) => {
      if (err) {
        return reject(err);
      }
      if(foundEmail===undefined){
        const saltRounds = 10;
        bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
          // Store hash in password DB.
            if (err){
              return reject( err);
            }
            var db = new sqlite3.Database(pathDB);
            db.run(`INSERT INTO users(_id, email, hash)
                VALUES("${uuidv4()}", "${newUser.email}", "${hash}");`)
              .each(`SELECT _id, email, hash FROM users`, (err, foundStoredinDBEmailin) => {
                  if (err){
                    return reject( err);
                  }
                    return resolve( foundStoredinDBEmailin);
              })
              .close();
        })    
      }else{ 
        return resolve( {err:'Пользователь с таким именем есть!'});
      }
    })
    .close()
}
function ckeckIfWeHaveEmailInDB(emailOfLoginUser, resolve, reject) {
  var db = new sqlite3.Database(pathDB); 
    db.get(`SELECT _id, hash FROM users WHERE email  = ?;`,[emailOfLoginUser], (err, foundLoginUserEmailInDB) => {
      console.log()
      if (err) {
         return reject(err);
      }
      if(foundLoginUserEmailInDB!==undefined){
        return resolve(foundLoginUserEmailInDB)
      }else{ 
        return reject( {
              status: 400,
              message:"Не верный логин или пароль!"
          })
      }
    })
    .close()
}


module.exports.getAllUsers = function() {
  
  return new Promise((resolve, reject)=>{
    var db = new sqlite3.Database(pathDB);

    db
      .all(`SELECT _id, email FROM users`, (err, rows) => {
            if (err) {
              throw err;
            }
           return resolve(rows);
           
      })
      .close((err) => {
        if (err) {
          return reject(err);
        }
      });
  });
}


module.exports.registerNewUser = function(emailOfNewUser, passwordOfNewUser) {
  
  return new Promise((resolve, reject)=>{
    
    var newUser = {
                email: emailOfNewUser,
                password: passwordOfNewUser
    }
   
    checkIsEmailNew(newUser,resolve,reject)
         
  });
}

module.exports.getUser = function(emailOfLoginUser) {
  
  return new Promise((resolve, reject)=>{
    ckeckIfWeHaveEmailInDB(emailOfLoginUser, resolve, reject)
  })
}

module.exports.getUserId = function(userId) {
  return new Promise((resolve, reject) => {
    var db = new sqlite3.Database(pathDB);
    var _id = userId;
    db.serialize(() => {
        db
            .each(`SELECT _id FROM users WHERE _id  = ?`,[_id], (err, row) => {
                if (err){
                throw err;
                }
                resolve(row);
  
            })
            .close((err) => {
                if (err) {
                  return reject(err.message);
                }
              });  
    })
  });
};
module.exports.delUserById = function(idOfDeletedUser) {
  return new Promise((resolve, reject) => {
    var db = new sqlite3.Database(pathDB);
    
    db.serialize(() => {
        db
            .run(`DELETE FROM users WHERE _id  = ?`,idOfDeletedUser, (err,id) => {
                if (err){
                  throw err;
                }
                resolve(`Row(s) deleted ${idOfDeletedUser}`);
                
  
            })
            .close((err) => {
                if (err) {
                  return reject(err.message);
                }
              });  
    })
  });
};