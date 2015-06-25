var app = angular.module('MyFirstApp',[]);

app.controller('FirstController', function($scope) {
	$scope.nombre = 'Carlos';
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			texto: 'Buen tutorial',
			username: 'CarlosRPO'
		},
		{
			texto: 'Malísimo el tutorial',
			username: 'CarlosRPO'
		}
	];
	$scope.agregarComentario = function() {
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	};
});