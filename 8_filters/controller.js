var app = angular.module("MyApp", []);

app.controller("FiltersController", function($scope) {
	$scope.myHtml = "<p>Hola Mundo</p>";
	$scope.myJson = {};
	$scope.myJson.title = "Hola";
	$scope.myJson.body 	= "Hola Mundo";
	$scope.costo = 2;
});

app.filter("removeHtml", function() {
	return function(texto) {
		return String(texto).replace(/<[^>]+>/gm, '');
	}
});