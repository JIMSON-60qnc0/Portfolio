var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/about', (req, res) => {
  let userDescription = "I am Jimson James";  // Sample description
  res.render('about', {pageTitle:'About Me', description: userDescription });
});

module.exports = router;