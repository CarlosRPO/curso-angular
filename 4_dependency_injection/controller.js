var app = angular.module('MyFirstApp',[]);

app.controller('FirstController', ["$scope",function(scp) {
	scp.nombre = 'Carlos';
	scp.nuevoComentario = {};
	scp.comentarios = [
		{
			texto: 'Buen tutorial',
			username: 'CarlosRPO'
		},
		{
			texto: 'Malísimo el tutorial',
			username: 'CarlosRPO'
		}
	];
	scp.agregarComentario = function() {
		scp.comentarios.push(scp.nuevoComentario);
		scp.nuevoComentario = {};
	};
}]);