angular.module("tracker" , ['ui.router'])
.config(
	[
		'$urlRouterProvider',
		'$stateProvider',
		'$locationProvider',
		function ($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: '/components/home/home.html',
			controller: 'homeCtrl',
			resolve:{
				data:["$http", function($http){
					return $http.get("/api/home")
				}]
			}
		})
		.state('login',{
			url:"/login",
			templateUrl:'/components/login/login.html',
			controller:'loginCtrl',
			resolve:{}
		})
}]);





