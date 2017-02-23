//注意angular不能用jquery的初始化函数包起来    
var myapp = angular.module('myapp', []);  
myapp.controller('userController', function($scope,$http) {  
	var dataurl = GLOBAL.Dom.getContextPath()+"/user/getDataByPage"; 
	var userAppPageSize = $("#userTable .js-page-size").val(); 
	$scope.columnNum = $("#userTable thead tr th").length;
 	$http({
 		url:dataurl,
 		params:{pageIndex:0,pageSize:userAppPageSize}
 	}).success(function(data){
 		//将M绑定至VM
 		$scope.datas = data.users; 
 		//第几页
		$scope.pageIndex = 0;
		//总数
		$scope.dataNum = data.dataNum;
		//每页大小
		$scope.pageSize = userAppPageSize; 
		//共多少页
		$scope.pageNum = data.pageNum; 
		//获取完数据后，pager分页器的监听 
		Pager(dataurl,$scope,$http);		
 	});  	
});     
