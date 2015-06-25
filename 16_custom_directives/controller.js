angular.module("CustomDirective", [])
	.controller("AppCtrl", function($scope, $http) {
		$http.get("https://api.github.com/users/codigofacilito/repos")
			.success(function(data) {
				$scope.repos = data;
			})
			.error(function(error) {
				console.log(error);
			})
	})
	.directive("backImg", function() {
		return function(scope, element, attrs) {
			attrs.$observe("backImg", function(value) {
				element.css({
					"background" : "url(" +  value + ")",
					"background-size" : "cover",
					"background-position" : "center"
				});
			});
		}
	});