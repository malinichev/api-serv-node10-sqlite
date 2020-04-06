const express = require('express');
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcryptjs');

const jwt = require('jwt-simple');

const config = require('../config/config');

var passport = require('passport');

var auth = passport.authenticate('jwt', {
  session: false
});

const isValidPassword = function(password, user) {
  return bcrypt.compareSync(password, user.hash);
}

router.get('/', (req, res, next)=>{
  res.render('../react-app/myapp/build/index.html');
})
router.get('/api', (req, res, next)=>{
  
  db
    .getAllUsers()
    .then((results)=>{
      res.json({users: results});
    })
    .catch((err)=>{
      next(err);
    })  
});

router.delete('/api/user/:idDelUser',auth, (req,res)=>{  //DELLL
  // console.log(req.params.idDelUser)
  db
    .delUserById(req.params.idDelUser)
    .then((results)=>{
      console.log(results)
      res.status(200).json(results);
    })
    .catch((err)=>{
      next(err);
    })  
});
router.post('/api/register', (req, res, next)=>{
  console.log(req.body.email)
  db
    .registerNewUser(req.body.email, req.body.pass)
    .then((el)=>{
      var payload ={
        id: el._id
      }
      var token = jwt.encode(payload, config.secret);
      res.json({
        _id:    el._id,
        email:  el.email,
        token:  token
      });
      // res.json({el});
    })
    .catch((err)=>{
      next(err);
    }) 
});
router.post('/api/login', (req, res, next)=>{
  
  db
    .getUser(req.body.dataOfLoginUser.email)
    .then((results)=>{
      if (isValidPassword(req.body.dataOfLoginUser.pass, results )) {
        var payload ={
          id: results._id
        }
        var token = jwt.encode(payload, config.secret);
        
        res.json({
          _id:    results._id,
          email:  results.email,
          token:  token
        });
      } else {
        const err = new Error('Не верный логин или пароль!');
        err.status = 400;
        next(err); 
      }
    })
    .catch((err)=>{
      next(err);
    })
});



module.exports = router;