var express = require('express');
var router = express.Router();
var passport = require('passport');
var AuthFunctions = require('../lib/auth');
// var HomeController = require('../controller/home_controller').Home;

var path = require('path');


/* GET home page. */
router.get('/*' , function(req,res){
	res.sendFile(path.resolve('app/views/index.html'))
});

module.exports = router;
