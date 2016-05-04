app.controller('mainCTRL', ['$scope', function($scope){
	$scope.sidebar = false;
	$scope.sidebarOpenClose = function(){
		if($scope.sidebar){
			$scope.sidebar = false;
			return;
		}
		$scope.sidebar = true;
		
		
	};
}]);