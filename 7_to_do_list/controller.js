var app = angular.module('ToDoList', ['LocalStorageModule']);

app.controller('ToDoController', function($scope, localStorageService) {
		if (localStorageService.get('angular-toDoList')) {
			$scope.todo = localStorageService.get('angular-toDoList');
		} else {
			$scope.todo = [];
		}
		/*
			{
				descripcion: 'Terminar curso Angular',
				fecha: '03-03-2015 2:00pm'
			}
		*/
		$scope.$watchCollection('todo', function(newValue, oldValue) {
			localStorageService.set('angular-toDoList', $scope.todo);
		});
		$scope.addActividad = function() {
			$scope.todo.push($scope.newActividad);
			$scope.newActividad = {};
		}
		$scope.clean = function() {
			$scope.todo = [];
		}
	})