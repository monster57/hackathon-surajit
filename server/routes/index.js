var express = require('express');
var router = express.Router();
// var HomeController = require('../controller/home_controller').Home;

var path = require('path');


/* GET home page. */
router.get('/*' , function(req,res){
	res.sendFile(path.resolve('server/app/views/index.html'))
});

module.exports = router;
