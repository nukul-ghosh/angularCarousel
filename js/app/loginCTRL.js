app.controller('loginCTRL', ['$scope', function($scope){
	$scope.loginForm = function(isValid){
		console.log(isValid);
	}
}]);