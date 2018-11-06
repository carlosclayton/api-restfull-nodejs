
var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config');
var router = express.Router();
var User = require('./../models/User');


router.post('/accesstoken', function(req, res) {

      User
      .forge({
          email: req.body.email
      })
      .fetch()
      .then(function(user) {  
          if(bcrypt.compareSync(req.body.password, user.get('password'))){
              var token = jwt.sign({ id: user.get('id') }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });

              return res
                .status(200)
                .json({
                  token: token
                })                         
          }else{
            return res
            .status(500)
            .json({
              data: {
                message: 'Failed to authenticate token.'  
              }
            })
          }
      })
      .catch(function(err) {
        return res
        .status(500)
        .json({
          code: 500,
          data: {
            message: err.sqlMessage  
          }
        })
      })
})


router.get('/me', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token){ 
    return res
          .status(401)
          .json({ 
            code: 401,
            auth: false, 
            message: 'No token provided.' 
          });
  }
  
  jwt
  .verify(token, config.secret, function(err, decoded) {
    if (err) {
      return res
      .status(500)
      .json({ 
        code: 500,
        message: 'Failed to authenticate token.' 
      });
    }
    
    User
      .forge({id: decoded.id})
      .fetch()
      .then(function(user) {    
        return res
        .status(200)
        .json({
          code: 200,      
          data: user
        })    
      })
      .catch(function(err) {
        return res
        .status(500)
        .json({
          code: 500,
          data: {
            message: err.sqlMessage  
          }
        })
      });
  });
});

module.exports = router;
