var app = angular.module("FinalApp");

app.controller("MainController", function($scope, $resource, PostResource, UserResource) {
	$scope.posts = PostResource.query();
	$scope.users = UserResource.query();

	$scope.removePost = function(post) {
		PostResource.delete({id: post.id}, function(data) {
			console.log(data);
		});
		$scope.posts = $scope.posts.filter(function(element) {
			return element.id !== post.id;
		});
	}
});

app.controller("PostController", function($scope, $routeParams, $location, PostResource) {
	$scope.title = "Actualizar Post";
	$scope.post = PostResource.get({id: $routeParams.id});

	$scope.savePost = function() {
		PostResource.update({id: $routeParams.id}, {data: $scope.post}, function(data) {
			console.log(data);
			$location.path("/");
		});
	}
});

app.controller("NewPostController", function($scope, $location, PostResource) {
	$scope.post = {};
	$scope.title = "Nuevo Post";
	
	$scope.savePost = function() {
		PostResource.save({data: $scope.post}, function(data) {
			console.log(data);
			$location.path("/");
		});
	}
});

app.controller("UserController", function($scope, $routeParams, UserResource) {
	$scope.user = UserResource.get({id: $routeParams.id});
});