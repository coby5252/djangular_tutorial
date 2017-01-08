(function(){
	'use strict';
	angular.module('scrumboard.demo', ['ngRoute'])
		.controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

	
	function ScrumboardController($scope, $http) {
		$scope.add = function(list, title) {
			var card = {
				list: list.id,
				title: title
				};

				$http.post('/scrumboard/cards/', card).then(function(response) {
					list.cards.push(response.data);
				}, 
				function() {
					alert('no can do, buckaroo');
				});
			};

		$scope.login = function() {
			$http.post('/auth_api/login/',
				{username: 'coby', password: 'P@s5w0rd1'});
		};

		$scope.data = {};
		$http.get('/scrumboard/lists/').then(function(response) {
			$scope.data = response.data;
		})
	}
}());