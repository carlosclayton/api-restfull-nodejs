var express = require('express');
var router = express.Router();
var Address = require('./../models/Address');

router.get('/', function(req, res, next) {  
  Address
  .forge()
  .simplePaginate({ page: req.query.page, withRelated: ['user']})
  .then(function(address) {        
    return res
    .status(200)    
    .json({
      code: 200,      
      data: address
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


router.get('/:id', function(req, res, next) {    
      Address
      .forge({id: req.params.id})
      .fetch({withRelated: ['user']})
      .then(function(address) {    
        return res
        .status(200)
        .json({
          code: 200,      
          data: address
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


router.post('/', function(req, res) {          
      Address
      .forge(req.body)
      .save()
      .then(function(Address) {    
        return res
        .status(200)
        .json({
          message: 'Address successfully created',
          code: 200,      
          data: Address
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



router.put('/:id', function (req, res) {
    Address
    .forge({id: req.params.id})
    .fetch()
    .then(function (Address) {
      Address.save({
          name: req.body.name || Address.get('name'),
          email: req.body.email || Address.get('email'),
          password: req.body.password || Address.get('password')
      })
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'Address update successfully',
              data: Address  
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


router.delete('/:id',function (req, res) {
    Address
    .forge({id: req.params.id})
    .fetch()
    .then(function (Address) {
      Address.destroy()
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'Address deleted successfully '
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
