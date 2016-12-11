var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var DatabaseController = require("../controller/database_controller");
var UserController = require("../controller/user_controller");

var upload = multer({ dest: './uploads' })

router.get('/home' , function(req,res){
	return res.apiSuccess("this is home route");
});

router.post('/update/database',[upload.single('avatar'), DatabaseController.createTable]);
router.get('/user/find' , UserController.getUserDetails)

module.exports = router;
