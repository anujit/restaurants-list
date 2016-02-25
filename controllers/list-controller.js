foodApp.controller('ListCtrl',['FetchData','$location',function(fetchData,$location){
	console.log('list controller created');
	
	var self = this;
	
	self.city = 'Pune';
	
	var API_URL = 'https://developers.zomato.com/api/v2.1/search?lat=18.5203&lon=73.8567';

	var API_KEY = '53d958ae70927695fa9c76beae23046d';

	API_URL += '&apikey=' + API_KEY;

	var CO_ORDINATES = {
		latitutde : '18.5203',
		longitude : '73.8567'
	}
	
	
	//self.url = LIST_URL;
	self.url = API_URL;
	
	var list = fetchData.getData(self.url).then(function(data){
		self.restaurants = data.restaurants;

	});	
	
	self.getRating = function(user_rating){

		if(!user_rating) return '';
		
		var rating = user_rating.aggregate_rating != '0' ? user_rating.aggregate_rating : '';
		
		return rating;
	};
	
	self.addRestaurant = function(){
		//window.location.href = '#/add';
		$location.path('add');
	};
	
	self.addIssue = function(){
		$location.path('issue');
	};
	
}]);