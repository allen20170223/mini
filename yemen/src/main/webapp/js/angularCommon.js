//公用分页监听
function Pager(url,$scope,$http){ 
	var pageSize = $scope.pageSize;
	$scope.first=function(){
		$http({
			url:url,
			params:{pageIndex:0,pageSize:pageSize}
		}).success(function(data){
			$scope.datas = data.users;
			$scope.pageIndex = 0;
		}); 	 
	}
	$scope.previous=function(){
		var pageIndex = $scope.pageIndex -1;
		$http({
			url:url,
			params:{pageIndex:pageIndex,pageSize:pageSize}
		}).success(function(data){
			$scope.datas = data.users;
			$scope.pageIndex = pageIndex;
		}); 	
	}		
	$scope.next=function(){
		var pageIndex = $scope.pageIndex +1;
		$http({
			url:url,
			params:{pageIndex:pageIndex,pageSize:pageSize}
		}).success(function(data){
			$scope.datas = data.users;
			$scope.pageIndex = pageIndex;
		}); 	
	}	
	$scope.last=function(){
		var pageIndex = parseInt($scope.dataNum/pageSize);
		$http({
			url:url,
			params:{pageIndex:pageIndex,pageSize:pageSize}
		}).success(function(data){
			$scope.datas = data.users;
			$scope.pageIndex = pageIndex;
		}); 	
	}		
}