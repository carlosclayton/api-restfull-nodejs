var jwt = require('jsonwebtoken');
var config = require('./config');



// middleware check token
module.exports = function(req, res, next){
	   console.log('Check Token')
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
  })
  next()     
}
	

