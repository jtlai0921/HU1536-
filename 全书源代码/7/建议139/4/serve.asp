<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%
callback = Request.QueryString("jsonp")
	//使用ASP服务器技术获取查询字符串
Response.Write(callback & "('Hi，大家好，我是从服务器端过来的信息使者。')") 
	//然后向客户端响应一段JavaScript脚本字符串
%>
