	foodApp.controller('AddCtrl',[function(){
		var self = this;
		
		self.submit = function(){
			console.log('New review -- ', self.newReview);
		}
	}]);