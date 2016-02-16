console.log('services.js');

foodApp.factory('FetchData',['$http',function($http){
	
	var self = this;
	
	var obj = {};
	
	obj.name = 'fetch data service';
	
	obj.getData = function(url){
		return $http.get(url);
	}
	
	
	
	return obj;
	
}]);