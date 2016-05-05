app.controller('mainCTRL', ['$scope', function($scope){
	$scope.headerTitle = "Login";
	$scope.sidebar = false;
	$scope.sidebarOpenClose = function(title){
		if($scope.sidebar){
			$scope.sidebar = false;
		} else {
			$scope.sidebar = true;	
		}
		if(title == "" || title == undefined){return}
		$scope.headerTitle = title;	
	};
}]);