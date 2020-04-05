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
  
  db
    .delUserById(req.params.idDelUser)
    .then((results)=>{
      res.json({DelIsOk: results});
    })
    .catch((err)=>{
      next(err);
    })  
});
router.post('/api/register', (req, res, next)=>{
  db
    .registerNewUser(req.body.email, req.body.pass)
    .then((el)=>{

      res.json({results: el});
    })
    .catch((err)=>{
      next(err);
    }) 
});
router.post('/api/login', (req, res, next)=>{
  // console.log(req.body.email,'emmmmm')
  db
    .getUser(req.body.email)
    .then((results)=>{
      if (isValidPassword(req.body.pass, results )) {
        var payload ={
          id: results._id
        }
        var token = jwt.encode(payload, config.secret);
        res.json({token: token});
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