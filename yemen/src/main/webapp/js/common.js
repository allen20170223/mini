/**
 * 公共组件，供page层调用  
 */

var GLOBAL={};
GLOBAL.namespace=function(str){
	var arr=str.split("."),o=GLOBAL;
	for (i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
		o[arr[i]]=o[arr[i]] || {};
		o=o[arr[i]];
	}
}

//Dom相关
GLOBAL.namespace("Dom");

//获取项目根目录
GLOBAL.Dom.getContextPath=function() { 
	var contextPath = document.location.pathname; 
	var index =contextPath.substr(1).indexOf("/"); 
	contextPath = contextPath.substr(0,index+1); 
	delete index; 
	return contextPath;    
}

//根据class属性值获取dom节点
GLOBAL.Dom.getElementsByClassName = function(str, root, tag) {
	if (root) {
		root = typeof root == "string" ? document.getElementById(root): root;
	} else {
		root = document.body;
	}
	tag = tag || "*";
	var els = root.getElementsByTagName(tag),arr = [];
	for (var i = 0,n = els.length; i <n; i++) {
		for (var j = 0, k = els[i].className.split(" "), l = k.length; j<l; j++) {
			if (k[j] == str) {
				arr.push(els[i]);
				break;
			}
		}
	}
	return arr;
}

//为dom元素添加某个class
GLOBAL.Dom.addClass=function(node,str){
	if(!new RegExp("(^|\\s+)"+str).test(node.className)){
		node.className=node.className+" "+str;
	}
}
  
//为dom元素移出某个class
GLOBAL.Dom.removeClass=function(node,str){
	node.className=node.className.replace(new RegExp("(^|\\s+)"+str),"");
}

//自定义方法，判断是否含有影响模糊查询的特殊字符%、_、[]、^
GLOBAL.Dom.islegal=function(str){ 
	var getValue = str.replace(/[ ]/g,""); 
	if(getValue.indexOf("%")>-1||getValue.indexOf("_")>-1||getValue.indexOf("[")>-1||getValue.indexOf("]")>-1||getValue.indexOf("^")>-1){
		return false;
	}else{
		return true;
	} 
}

//判断某字符串是否以某字符串结尾
String.prototype.endWith=function(endStr){
	var d=this.length-endStr.length;
	return (d>=0&&this.lastIndexOf(endStr)==d)
}

//获取文件路径最后的文件名，分windows和linux系统考虑
String.prototype.getfileUrlName=function(){
	var arr = ""; 
	if(this.indexOf("/")>-1){  
		arr = this.split('/');
		return arr[arr.length - 1];
	}else if(this.indexOf("\\")>-1){
		arr = this.split('\\');
		return arr[arr.length - 1];
	}else{
		return this.toString();
	} 
}

//获取文件路径的上一层路径，分windows和linux系统考虑
String.prototype.getUrlParentPath=function(){
	var arr = ""; 
	if(this.indexOf("/")>-1){  
//		console.log("/");
		arr = this.split('/');
		var laststr =  arr[arr.length - 2]+"/";
		var laststrIndex = this.lastIndexOf(laststr); 
		return this.substring(0,laststrIndex);
	}else if(this.indexOf("\\")>-1){
//		console.log("\\");
		arr = this.split('\\');
		var laststr =  arr[arr.length - 2]+"\\";
		var laststrIndex = this.lastIndexOf(laststr); 
		return this.substring(0,laststrIndex);
	}else{
		return this.toString();
	} 
}

//重置浏览器的导航区和工作区高度，使之相等
GLOBAL.Dom.resetScreen=function(){ 
	if($(".secondary").height()>$(".primary").height()){
		$(".primary").height($(".secondary").height());  
	}else if($(".secondary").height()<$(".primary").height()){
		$(".secondary").height($(".primary").height()); 
	}else{
		//当高度相等的时候，也不要忘了加高度
		$(".secondary").height($(".primary").height());
	}   
}

//兼容IE不支持Array.indexOf的处理
if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){              
        for(var i=0; i<this.length; i++)
        {
            if(this[i]==obj)
            {
                return i;
            }
        }
        return -1;
    }
}




