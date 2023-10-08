var express = require('express');
var router = express.Router();



router.get('/about', (req, res) => {
  let userDescription = "I am Jimson James";  // Sample description
  res.render('about', {pageTitle:'About Me', description: userDescription });
});

module.exports = router;