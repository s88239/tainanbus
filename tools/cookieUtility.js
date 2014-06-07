// 與 cookie 相關的各種函數
// Set cookie
function setCookie(name, value) {
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : null;

	document.cookie = escape(name) + "=" + escape(value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	((path == null) ? "" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == null) ? "" : ("; secure=" + secure));
}

// Delete cookie entry
function delCookie(name) {
	var expDate = new Date();
	expDate.setTime(expDate.getTime()-1);	// 設定 Cookie 的失效時間比目前時間還早
	document.cookie = escape(name) + "=; expires=" + expDate.toGMTString();	// 重新設定 Cookie
//	alert(document.cookie);
}

// Get cookie by name
function getCookie(name) {
	var arg = escape(name) + "=";
	var nameLen = arg.length;
	var cookieLen = document.cookie.length;
	var i = 0;
   
	while (i < cookieLen) {
		var j = i + nameLen;
		if (document.cookie.substring(i, j) == arg)
			return getCookieValueByIndex(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

// Show the cookie string
function showAllCookie() {
	alert(document.cookie);
}

function getCookieValueByIndex(startIndex) {
	var endIndex = document.cookie.indexOf(";", startIndex);
	if (endIndex == -1) 
		endIndex = document.cookie.length;
	return unescape(document.cookie.substring(startIndex, endIndex));
}

// List all name/value pairs in a table
function listCookie() {
	document.writeln("<p><b>原始 Cookie 字串：<p></b><center><font color=green>" + document.cookie + "</font></center>");
	document.writeln("<p><b>拆解後的 name/value：</b>");
	document.writeln("<table border=1 align=center>");
	document.writeln("<tr><th>Name<th>Value");
	cookieArray = document.cookie.split(";");
	for (var i=0; i<cookieArray.length; i++) {
		thisCookie = cookieArray[i].split("=");
		cookieName = unescape(thisCookie[0]);
		cookieValue = unescape(thisCookie[1]);
		document.writeln("<tr><td><font color=red>"+cookieName+"</font><td><font color=green>"+cookieValue+"</font>");
	}
	document.writeln("</table>");
}