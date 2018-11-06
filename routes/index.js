var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/show', function(req, res, next) {
  res.send('Conteúdo da rota show');
});


router.get('/params/:params', function(req, res, next) {
  res.json({
  	params: req.params,
  	host: req.hostname,
  	headers: req.headers
  })
});


router.post('/form', function(req, res, next) { 
  res.json({
  	form: req.body
  })
});


module.exports = router;


