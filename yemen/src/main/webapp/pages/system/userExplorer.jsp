<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://www.winssage.com/jwtl/carapax" prefix="x"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<x:contentPage masterPageUrl="/pages/main/master.jsp?moduleName=system">
	<x:content contentPlaceHolderId="head">
	<title>用户列表页</title>
	<link rel="stylesheet" href="<c:url value='/pages/system/userExplorer.css'/>" />  
	</x:content> 
	<x:content contentPlaceHolderId="body">  
	<div class="gridtable" ng-app="myapp">
		<table ng-controller="userController" 
					class="kitty-table" id="userTable"> 
			<thead>
				<tr> 
					<th>ID</th>
					<th>名称</th>
					<th>登录名</th>
				</tr> 
			</thead>	
			<tbody>
				<tr ng-repeat='data in datas'>  
					<td>{{data.id}}</td>
					<td>{{data.name}}</td>
					<td>{{data.loginName}}</td> 
				</tr> 
			</tbody>
			<tfoot>
				<tr>
					<td colspan={{columnNum}}> 
					<input type="hidden" class="js-page-size" value="5" />
					<span class="page-info">第{{pageIndex+1}}页</span>
					<span class="page-info">共{{pageNum}}页</span>
					<span class="page-info">共{{dataNum}}条记录</span>					
					<a class="page-button" ng-click="first()">首页</a>
					<a class="page-button" ng-click="previous()">上一页</a> 
					<a class="page-button" ng-click="next()">下一页</a>
					<a class="page-button" ng-click="last()">尾页</a>
					</td>
				</tr>
			</tfoot> 
		</table>	
    </div>    
	<script src="<c:url value='/pages/system/userExplorer.js'/>"></script>	
	</x:content>
</x:contentPage>	