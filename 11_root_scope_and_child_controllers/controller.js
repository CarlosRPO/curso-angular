angular.module('MyFirstApp',[])
	.run(function($rootScope) {
		$rootScope.nombre = "Código Facilito";
	})
	.controller('FirstController', function($scope) {
		$scope.nombre = "Carlos";
		setTimeout(function() {
			$scope.$apply(function() {
				$scope.nombre = "Restrepo";
			})
		}, 2000);
	})
	.controller("ChildController", function($scope) {});