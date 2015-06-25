angular.module("MyApp",[])
	.controller("MyController", function($scope) {
		$scope.nombre = "Carlos";
		/*setTimeout(function() {
			$scope.$apply(function() {
				$scope.nombre = "Código Facilito";
			});
		}, 2000);*/
		document.querySelector("#myButton").addEventListener("click", function() {
			$scope.$apply(function() {
				$scope.nombre = "Código Facilito";
			});
		});
	});