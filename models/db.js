// const uuidv4 = require('uuid/v4');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const pathDB = './db/userDb.db'




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
    
    var registerUser = {
                email: emailOfNewUser,
                password: passwordOfNewUser
    }
   
    var db = new sqlite3.Database(pathDB); 
    db.get(`SELECT email FROM users WHERE email  = ?;`,[registerUser.email], (err, foundEmail) => {
      if (err) {
        return reject(err);
      }
      if(foundEmail===undefined){
        const saltRounds = 10;
        bcrypt.hash(registerUser.password, saltRounds, function(err, hash) {
          // Store hash in password DB.
            if (err){
              return reject( err);
            }
            var db = new sqlite3.Database(pathDB);
            var newUserId = uuidv4();
            db.run(`INSERT INTO users(_id, email, hash)
                VALUES("${newUserId}", "${registerUser.email}", "${hash}");`, function(err) {
                  if (err) {
                    return reject(err.message);
                  }                  
                    return resolve( {
                        _id:  newUserId,
                      email:  registerUser.email                      
                    });
                })
             
              .close();
        })    
      }else{ 
        return reject( 'Пользователь с таким именем есть!');
      }
    })
    .close()
         
  });
}

module.exports.getUser = function(emailOfLoginUser) {
  // console.log(emailOfLoginUser)
  return new Promise((resolve, reject)=>{
    var db = new sqlite3.Database(pathDB); 
    db.get(`SELECT _id, email, hash FROM users WHERE email  = ?;`,[emailOfLoginUser], (err, foundLoginUserEmailInDB) => {
      
      if (err) {
         return reject(err);
      }
      if(foundLoginUserEmailInDB!==undefined){
        return resolve(foundLoginUserEmailInDB)
      }else{ 
        return reject( "Не верный логин или пароль!")
      }
    })
    .close()
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
            .run(`DELETE FROM users WHERE _id  = ?`,idOfDeletedUser, (err) => {
                if (err){
                  throw reject(err);
                }
                return resolve({_id:idOfDeletedUser});
                
  
            })
            .close((err) => {
                if (err) {
                  return reject(err.message);
                }
              });  
    })
  });
};