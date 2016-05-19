var express = require('express');
var router = express.Router();
var database= require('../public/javascripts/db');


//connect to the database
database.connect(function(err,client){
  if(err) console.log("error connecting to database");
  console.log("databes is successfully connected");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
