var foodApp = angular.module('foodApp',['ngRoute']);

(function(){
	console.log('Loading app.js');	

	var TEMPLATES = {
		listTemplate : '/restaurants-list/templates/list-template.html',
		addTemplate : '/restaurants-list/templates/add-template.html'
	};
	
	foodApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		
		$routeProvider.when('/',{
			templateUrl : TEMPLATES.listTemplate,
			controller : 'ListCtrl as listCtrl'
		})
		.when('/add',{
			templateUrl : TEMPLATES.addTemplate,
			controller : 'AddCtrl as addCtrl'
		})
		.otherwise({redirectTo : '/'});
		
		$locationProvider.hashPrefix('!');
	}]);	
})();