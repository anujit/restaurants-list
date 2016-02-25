var foodApp = angular.module('foodApp',['ngRoute']);

(function(){
	console.log('Loading app.js');

	var TEMPLATES = {
		listTemplate : '/restaurants-list/templates/list-template.html',
		addTemplate : '/restaurants-list/templates/add-template.html',
		issueTemplate : '/restaurants-list/templates/issue-template.html',
		reposTemplate : '/restaurants-list/templates/repos-template.html'
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
		.when('/issue',{
			templateUrl : TEMPLATES.issueTemplate,
			controller : 'IssueCtrl as issueCtrl'
		})
		.when('/add-issue',{
			templateUrl : TEMPLATES.addIssueTemplate,
			controller : 'AddIssueCtrl as addIssueCtrl'
		})
		.when('/:user/repos',{
			templateUrl : TEMPLATES.reposTemplate,
			controller : 'ReposCtrl as reposCtrl'
		})
		.otherwise({redirectTo : '/'});

		$locationProvider.hashPrefix('!');
	}]);
})();
