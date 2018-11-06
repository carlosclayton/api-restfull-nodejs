var express = require('express');
var router = express.Router();
var City = require('./../models/City');

router.get('/', function(req, res, next) {  
  City
  .simplePaginate({ page: req.query.page, withRelated: ['state', 'users'] })
  .then(function(cities) {    
    return res
    .status(200)    
    .json({
      code: 200,      
      data: cities
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
      City
      .forge({id: req.params.id})
      .fetch({withRelated: ['state', 'users']})
      .then(function(city) {    
        return res
        .status(200)
        .json({
          code: 200,      
          data: city
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
      City
      .forge(req.body)
      .save()
      .then(function(city) {    
        return res
        .status(200)
        .json({
          message: 'city created successfully',
          code: 200,      
          data: city
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
    City
    .forge({id: req.params.id})
    .fetch()
    .then(function (city) {
      city.save({
          name: req.body.name || city.get('name'),
      })
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'city update successfully',
              data: city  
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
    City
    .forge({id: req.params.id})
    .fetch()
    .then(function (city) {
      city.destroy()
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'City successfully deleted'
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
