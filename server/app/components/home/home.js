angular.module("tracker").controller("homeCtrl" , [
	"$scope" , "data", "auth" , "$state",
	 function($scope, data, auth, $state){
	 	$scope.registrationData = {};
	 	$scope.register = function(registrationData){
	 			console.log(registrationData);
	 		auth.register(registrationData).success(function(response){
	 			$state.go("login");
	 		})
	 		.error(function(){
	 			
	 		})
	 	}
	}

]);