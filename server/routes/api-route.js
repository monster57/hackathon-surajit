var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/home' , function(req,res){
    return res.apiSuccess("this is home route");
});

module.exports = router;
