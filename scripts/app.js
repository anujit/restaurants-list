console.log('Loading app.js');

var foodApp = angular.module('foodApp',['ngRoute']);

var LIST_URL = '/angular_poc/data/pune_listing.txt';

var TEMPLATES = {
	listTemplate : '/angular_poc/templates/list-template.html'
}

foodApp.controller('MainCtrl',[function(){
	console.log('main controller created');
	
	var self = this;
	
	self.isAllowed = true;
	
}]);

foodApp.controller('ListCtrl',['FetchData',function(fetchData){
	console.log('list controller created');
	
	var self = this;
	
	self.city = 'Pune';
	
	self.url = LIST_URL;
	
	var list = fetchData.getData(self.url).then(function(data){
		self.restaurants = data.data.restaurants;
		console.log('Restaurants -- ', self.restaurants);
	});	
	
	self.getRating = function(user_rating){
		var rating = user_rating.aggregate_rating != '0' ? user_rating.aggregate_rating : '';
		
		return rating;
	};
}]);

foodApp.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.when('/',{
		templateUrl : TEMPLATES.listTemplate,
		controller : 'ListCtrl as listCtrl'
	})
	.when('/edit',{
		template : '<h5>Edit details</h5>'
	})
	.otherwise({redirectTo : '/'});
}]);