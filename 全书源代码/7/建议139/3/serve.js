/*遍历客户端交互页面的所有<script>标签，找到src属性包含"script异步通信之参
数传递_serve.js"的标签，并匹配出来该URL的参数，从中筛选出附带回调函数名称的
参数，然后利用这个回调函数执行服务器端传递的信息

*/
var js = "serve.js";
	// 匹配的JavaScript文件名称
var r = new RegExp(js + "(\\?(.*))?$");	// 定义匹配参数的正则表达式
var script = document.getElementsByTagName("script");
	// 获取客户端交互页面中包含的所有script元素
for (var i = 0; i < script.length; i ++ ){ // 遍历所有script元素
   var s = script[i];
   if(s.src && s.src.match(r)){ 			// 判断是否存在参数
      var oo = s.src.match(r)[2];
      if (oo && (t = oo.match(/([^&=]+)=([^=&]+)/g))) {
	// 匹配出所有参数
         for (var l = 0; l < t.length; l ++ ) {		// 遍历所有参数
            r = t[l];
            var c = r.match(/([^&=]+)=([^=&]+)/);	// 匹配每个参数
            if (c && (c[2]=="callback")){
			// 如果参数名称为callback，则说明该参数值是传递过来的客户端互页面中定义的回调函数名称字符串
               var f = eval(c[2]); 				// 激活回调函数名称字符串
               f("Hi，大家好，我是从服务器端过来的信息使者."); 
               // 调用该回调函数，向客户端响应信息
            }
         }
      }
   }
}
