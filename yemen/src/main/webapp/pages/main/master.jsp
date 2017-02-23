<%@ page language="java" contentType="text/html; charset=utf-8" 
	pageEncoding="utf-8"%>
<%@ taglib uri="http://www.winssage.com/jwtl/carapax" prefix="x"%>	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<x:contentPlaceHolder id="head" />	
		<link rel="icon"  type="image/x-icon" href="<c:url value='/img/logo20.png'/>" />  
		<link rel="shortcut icon"  type="image/x-icon" href="<c:url value='/img/logo20.png'/>" />
		<link rel="stylesheet" href="<c:url value='/css/reset.css'/>" />	 
		<link rel="stylesheet" href="<c:url value='/css/common.css'/>" />	
		<link rel="stylesheet" href="<c:url value='/css/kitty-table.css'/>" />	
		<link rel="stylesheet" href="<c:url value='/pages/main/master.css'/>" />	
		<link rel="stylesheet" href="<c:url value='/css/zTreeStyle.css'/>" />   
		<script src="<c:url value='/js/jquery.min.js'/>" ></script>
		<script src="<c:url value='/js/common.js'/>"></script>
		<script src="<c:url value='/js/jquery.ztree.core-3.5.js'/>" ></script> 
		<script src="<c:url value='/js/jquery.ztree.exedit-3.5.js'/>" ></script> 
		<script src="<c:url value='/js/angular.1.4.6.min.js'/>"></script>
		<script src="<c:url value='/js/angularCommon.js'/>"></script>	 
		<script src="<c:url value='/pages/main/master.js'/>" ></script> 
	</head>
	<body> 
		<div class="wrapper">
			<div class="header">
				 
				<font class="logo-font">应用系统模板</font> 
				<span class="login-userinfo logout-font">
					欢迎：超级管理员/admin 
				</span>
				<div class="header-navbar">
					<span><a href=<c:url value="/index" />>首页</a></span>
					<span><a href=<c:url value="/user/browse" />>系统管理</a></span> 
				</div>
				<span class="logout-box"> 
					<a href=<c:url value="/login" /> class="logout-font underline">退出登录</a>
				</span>
			</div>
			<div class="content">
				<div class="secondary">
					<!-- 菜单的模块名称 -->
					<input type="hidden" id="moduleName" value="${param.moduleName}">				
					<div id="menuTree" class="ztree content-functions"> 
					</div>
				</div>
				<div class="primary">
					<x:contentPlaceHolder id="body" /> 
				</div>  
			</div>
			<div class="footer">
				© 2016 Winssage Lab, Inc. All Rights Reserved.建议使用IE9及以上浏览器
			</div>
		</div>   
		
	</body>
</html> 