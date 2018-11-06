var express = require('express');
var router = express.Router();
var User = require('./../models/User');

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var checkToken = require('../token');

var options = {
    page: {
        limit: 10
    },
    sort: ['-id']
};
 

router.get('/', checkToken,  function(req, res, next) {  
  User
  .forge()
  .simplePaginate({ page: req.query.page, withRelated: ['address', 'city'] })
  .then(function(users) {        
    return res
    .status(200)    
    .json({
      code: 200,      
      data: users
    })    
  }).catch(function(err) {
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


router.get('/:id', checkToken, function(req, res, next) {    
      User
      .forge({id: req.params.id})
      .fetch({withRelated: ['address', 'city']})
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


router.post('/', checkToken, function(req, res) {          
      var hashedPassword = bcrypt.hashSync(req.body.password, salt);
      
      User
      .forge({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
      })
      .save()    
      .then(function(user) {    
        if(req.body.city_id) user.city().attach(req.body.city_id)
        
        return res
        .status(200)
        .json({
          message: 'User successfully created',
          code: 200,      
          data: user         
        })    
    }).catch(function(err) {
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



router.put('/:id', checkToken, function (req, res) {
    
    
    User
    .forge({id: req.params.id})
    .fetch()
    .then(function (user) {
      if(req.body.city_id) user.city.attach(req.body.city_id)
      
      user.save({
          name: req.body.name || user.get('name'),
          email: req.body.email || user.get('email'),
          password: bcrypt.hashSync(req.body.password, salt) || bcrypt.hashSync(user.get('password'), salt)
      })
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'User update successfully',
              data: user  
            }
        });
      })
      .catch(function (err) {
        res
        .status(500)
        .json({
            code: 500,
            data: {
              message: err.sqlMessage  
            }
        });
      });
    })
    .catch(function (err) {
      res
      .status(500)
      .json({
            code: 500,
            data: {
              message: 'Sorry, ID not found. Try again...'   
            }
      });

    });
})


router.delete('/:id', checkToken, function (req, res) {
    User
    .forge({id: req.params.id})
    .fetch()
    .then(function (user) {
      user.destroy()
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'User deleted successfully '
            }         
          });              
      })
      .catch(function (err) {        
      res
      .status(500)
      .json({
            code: 500,
            data: {
              message: err.sqlMessage                
            }
        });
      });
    })
    .catch(function (err) {
      res
      .status(500)
      .json({
            code: 500,
            data: {
              message: 'Sorry, ID not found. Try again...'  
            }
        });
      });
  });

module.exports = router;
