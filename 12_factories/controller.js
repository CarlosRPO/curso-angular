var app = angular.module('ToDoList', ['LocalStorageModule']);

app.factory("ToDoService", function(localStorageService) {
	var toDoService = {};
	toDoService.key = "angular-toDoList";

	if (localStorageService.get(toDoService.key)) {
		toDoService.activities = localStorageService.get(toDoService.key);
	} else {
		toDoService.activities = [];
	}

	toDoService.add = function(newActivity) {
		toDoService.activities.push(newActivity);
		toDoService.updateLocalStorage();
	};

	toDoService.updateLocalStorage = function() {
		localStorageService.set(toDoService.key, toDoService.activities);
	};

	toDoService.clean = function() {
		toDoService.activities = [];
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	};

	toDoService.getAll = function() {
		return toDoService.activities;
	};

	toDoService.removeItem = function(item) {
		toDoService.activities = toDoService.activities.filter(function(activity) {
			return activity !== item;
		});
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	};

	return toDoService;
});

app.controller('ToDoController', function($scope, ToDoService) {
	$scope.todo = ToDoService.getAll();

	$scope.addActividad = function() {
		ToDoService.add($scope.newActividad);
		$scope.newActividad = {};
	};

	$scope.removeActividad = function(actividad) {
		$scope.todo = ToDoService.removeItem(actividad);
	};

	$scope.clean = function() {
		$scope.todo = ToDoService.clean();
	};
})