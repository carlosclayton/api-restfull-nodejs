var express = require('express');
var router = express.Router();
var State = require('./../models/State');

router.get('/', function(req, res, next) {  
  State
  .simplePaginate({ page: req.query.page, withRelated: ['cities'] })
  .then(function(states) {    
    return res
    .status(200)    
    .json({
      code: 200,      
      data: states
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
      State
      .forge({id: req.params.id})
      .fetch({withRelated: ['cities']})
      .then(function(state) {    
        return res
        .status(200)
        .json({
          code: 200,      
          data: state
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
      State
      .forge(req.body)
      .save()
      .then(function(state) {    
        return res
        .status(200)
        .json({
          message: 'state created successfully',
          code: 200,      
          data: state
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
    State
    .forge({id: req.params.id})
    .fetch()
    .then(function (state) {
      state.save({
          name: req.body.name || state.get('name'),
      })
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'state update successfully',
              data: state  
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
    State
    .forge({id: req.params.id})
    .fetch()
    .then(function (state) {
      state.destroy()
      .then(function () {
        res
        .status(200)
        .json({
            code: 200,
            data: {
              message: 'State successfully deleted'
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
