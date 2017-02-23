$("#login").click(
	function() { 
		if(checkForm()!=false){
			submitForm();
		}   
	}
);

//enter键的监听
document.onkeydown = function(event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode == 13) { 
		if(checkForm()!=false){
			submitForm();
		}   
	}
};

function checkForm(){
	var loginName = $("#loginName").val();
	var password = $("#password").val(); 
	if(loginName==''||password==''||loginName.trim().length==0){
		$('.alert').hide();
		$(".alert-warning").show();  
		return false;
	}   
}

function submitForm(){ 
	window.location.href=GLOBAL.Dom.getContextPath()+"/index"; 
//	$("#loginForm").ajaxSubmit({  
//		url: GLOBAL.Dom.getContextPath()+"/userLogin/validateUser",
//		type:'post',  
//		dataType: "text",
//		success: function (result) {   
//			console.log("result="+result);
//			if(result=="correct"){ 
//				console.log("登录成功");
//				window.location.href=GLOBAL.Dom.getContextPath()+"/index"; 
//			}else if(result=="notExistUser"||result=="wrongPassword"){
//				$('.alert').hide();
//				$(".alert-danger").show();  				
//			} 
//		},
//		error: function() { 
//		}		
//	});  
}
