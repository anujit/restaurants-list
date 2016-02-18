var foodApp = angular.module('foodApp',['ngRoute']);

(function(){
	console.log('Loading app.js...');	


	var LIST_URL = '/angular_poc/data/pune_listing.txt';

	var API_URL = 'https://developers.zomato.com/api/v2.1/search?lat=18.5203&lon=73.8567';

	var API_KEY = '53d958ae70927695fa9c76beae23046d';

	API_URL += '&apikey=' + API_KEY;

	var CO_ORDINATES = {
		latitutde : '18.5203',
		longitude : '73.8567'
	}

	var TEMPLATES = {
		listTemplate : '/restaurants-list/templates/list-template.html',
		addTemplate : '/restaurants-list/templates/add-template.html'
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
		
		//self.url = LIST_URL;
		self.url = API_URL;
		
		var list = fetchData.getData(self.url).then(function(data){
			self.restaurants = data.data.restaurants;
			console.log('Restaurants -- ', self.restaurants);
		});	
		
		self.getRating = function(user_rating){
			console.log(user_rating)
			if(!user_rating) return '';
			
			var rating = user_rating.aggregate_rating != '0' ? user_rating.aggregate_rating : '';
			
			return rating;
		};
		
		self.addRestaurant = function(){
			window.location.href = '#/add';
		};
	}]);
	
	foodApp.controller('AddCtrl',[function(){
		var self = this;
		
		self.submit = function(){
			console.log();
		}
	}]);
	
	foodApp.config(['$routeProvider',function($routeProvider){
		
		$routeProvider.when('/',{
			templateUrl : TEMPLATES.listTemplate,
			controller : 'ListCtrl as listCtrl'
		})
		.when('/add',{
			templateUrl : TEMPLATES.addTemplate,
			controller : 'AddCtrl as addCtrl'
		})
		.otherwise({redirectTo : '/'});
	}]);	
})()