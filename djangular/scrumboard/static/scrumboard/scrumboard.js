(function(){
	"use strict";

	angular.module("scrumboard.demo", []).controller("ScrumboardController", ["$scope", ScrumboardController]);

	function ScrumboardController($scope) {

		$scope.addCard = function(List, title) {
			var card = {
				title: title
			};

			List.cards.push(card);
		}

		$scope.clearPage = function() {
			var input = document.getElementsByTagName("input");
			for(var i = 0; i < input.length; i++) {
				input[i].value = "";
			}
		}

		$scope.data = [
			{
				name: 'List 1',
				cards: [
					{
						title: "Card 1"
					},
					{
						title: "Card 2"
					}
				]
			},
			{
				name: 'List 1',
				cards: [
					{
						title: "Card 1"
					},
					{
						title: "Card 2"
					}
				]
			},
			{
				name: 'List 1',
				cards: [
					{
						title: "Card 1"
					},
					{
						title: "Card 2"
					}
				]
			}
		]
	}


}());