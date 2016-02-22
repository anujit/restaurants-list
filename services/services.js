console.log('services.js');

foodApp.factory('FetchData',['$http','$q',function($http,$q){
	
	var self = this;
	
	var obj = {};
	
	obj.name = 'fetch data service';
	
	obj.getData = function(url){
		//return $http.jsonp(url + '&callback=JSON_CALLBACK');
		
		var deferred = $q.defer();
		
		$http.jsonp(url + '&callback=JSON_CALLBACK')
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(errorData){
			console.log('Cannot load ' + url + ' -- ',errorData);
		});
		
		return deferred.promise;
		
	}
	
	
	
	return obj;
	
}]);