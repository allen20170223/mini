<%@ page language="java" contentType="text/html; charset=utf-8" 
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>登录</title>
		<link rel="icon"  type="image/x-icon" href="<c:url value='/img/logo20.png'/>" />  
		<link rel="shortcut icon"  type="image/x-icon" href="<c:url value='/img/logo20.png'/>" /> 			
		<link rel="stylesheet" href="<c:url value='/css/bootstrap.css'/>" />
		<link rel="stylesheet" href="<c:url value='/pages/main/login.css'/>" />
	</head>
	<body> 
		<div class="header">
			<div class="header-title">
				应用系统模板
			</div>
        </div>
        <div class="login-box">  
        	<div class="alert alert-info">
                                                请输入用户名密码！
            </div>
			<div class="alert alert-danger"> 
				用户名或密码有误！
			</div>      
			<div class="alert alert-warning"> 
				用户名或密码为空！
			</div>          	
            <form action="" name="loginForm" id="loginForm" method="post">
                <fieldset>
                    <div class="input-group input-group-lg"> 
                    	<span class="input-group-addon"><i class="glyphicon glyphicon-user red"></i></span>
                        <input type="text" class="form-control" name="loginName" id="loginName" placeholder="用户名"/>
                    </div> 
                    <br> 
                    <div class="input-group input-group-lg"> 
                    	<span class="input-group-addon"><i class="glyphicon glyphicon-lock red"></i></span>
                        <input type="password" class="form-control" name="password" id="password" placeholder="密码"/>
                    </div> 
                    <br> 
                    <div> 
                    	<input type="button" class="login-button" id="login" value="登录"/> 
                    </div>
                </fieldset>
            </form>            
        </div>  
		<script src="<c:url value='/js/common.js'/>" ></script>
		<script src="<c:url value='/js/jquery.min.js'/>" ></script>
		<script src="<c:url value='/js/jquery.form.js'/>" ></script>
		<script src="<c:url value='/pages/main/login.js'/>" ></script>
	</body>
</html> 