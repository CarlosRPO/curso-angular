var app = angular.module('ToDoList', ['LocalStorageModule']);

app.service("ToDoService", function(localStorageService) {
	this.key = "angular-toDoList";

	if (localStorageService.get(this.key)) {
		this.activities = localStorageService.get(this.key);
	} else {
		this.activities = [];
	}

	this.add = function(newActivity) {
		this.activities.push(newActivity);
		this.updateLocalStorage();
	};

	this.updateLocalStorage = function() {
		localStorageService.set(this.key, this.activities);
	};

	this.clean = function() {
		this.activities = [];
		this.updateLocalStorage();
		return this.getAll();
	};

	this.getAll = function() {
		return this.activities;
	};

	this.removeItem = function(item) {
		this.activities = this.activities.filter(function(activity) {
			return activity !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	};
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