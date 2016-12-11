var UserController = {};
var models = require('../models');
var User = models.user;

UserController.getUserDetails = function(req , res){
	if(req.query.userId){}
	User.find({include: [
     { model: models.postHistory}
  ]}).then(function(users){
		return res.apiSuccess({user:users})
	})


}

module.exports = UserController;