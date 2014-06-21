$(function() {  
  Date.format = 'yyyy/mm/dd'; 
$('#date').datePicker().val(new Date().asString()).trigger('change');  
//  $('#date').datePicker();  
});  
result="";
flag=false;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
var latlng = new google.maps.LatLng(22.996733,120.212465);
  var mapOptions = {
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directions_Panel"));
}

function calcRoute(locationa,locationb) {
//alert("display");
  var start = document.getElementById(locationa).value;
  var end = document.getElementById(locationb).value;
  if(getCookie(start)!=null) start = getCookie(start);
  if(getCookie(end)!=null) end = getCookie(end);
  var selectedMode = document.getElementById("mode").value;
  var request = {
    origin:start,
    destination:end,
	travelMode: google.maps.TravelMode[selectedMode],
	//provideRouteAlternatives: true,
	transitOptions: {
			departureTime: new Date(1337675679473) //arrivalTime date 物件?
		}	
	};
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
	else {
		alert(status+"\n you will get error message");
	}
  });
}
function show_result(now_time){
	times = now_time;
	var string=document.getElementById("directions_Panel").innerHTML;

	var walk_time_array = new Array();
	var walk_time = new RegExp('jstcache="50">(.*?)</span>','gi');
	var match = string.match(walk_time);
	if(match){ /*to catch out*/
		for (var i=0;i<match.length;i++){
			match[i].search(walk_time);
			var str = RegExp.$1;
			m=str.indexOf('分');
			n=str.indexOf('小時');
			if(m!=-1){//分
				if(n!=-1){//小時
					temp_hour=str.substring(2,n);//小時
					temp_hour = parseInt(temp_hour);
					str = str.substring(n,m);
					str = parseInt(str)+temp_hour
					//document.write(str+"分<br>");
				}
					str=str.substring(2,m)
					str=parseInt(str);
			}
			walk_time_array.push(str);
		}
	}
	var duration_time_array = new Array();
	var duration_time = new RegExp('"duration.text" jstcache="53">(.*?)</span>','gi');
	var match = string.match(duration_time);
	if(match){ /*to catch out*/
		for (var i=0;i<match.length;i++){
			match[i].search(duration_time);
			var str = RegExp.$1;
			m=str.indexOf('分');
			n=str.indexOf('小時');
			if(m!=-1){//分
				if(n!=-1){//小時
					temp_hour=str.substring(0,n);//小時
					temp_hour = parseInt(temp_hour);
					str = str.substring(n+2,m);
					str = parseInt(str)+temp_hour*60;
					//document.write(str+"分<br>");
				}
				else {
					str=str.substring(0,m)
					str=parseInt(str);
				}
			}
			duration_time_array.push(str);
		}
	}
	//alert(duration_time_array);
	var re = new RegExp('jstcache="38">[0-9]{3}(.*?)</td>','gi');//start and end point
	var match = string.match(re);
	if(match) {
		match[0].search(re);
		startpoint = RegExp.$1;
		match[1].search(re);
		endpoint = RegExp.$1;
	} //startpoint endpoint
	var routeArray = new Array(startpoint);
	
	var re2 = RegExp('jstcache="41">(.*?)</b>.*?jstcache="44"(.*?)</span>.*?jstcache="46">(.*?)</span>',"gi");
	var match = string.match(re2);
	var stopname = new Array();
	var transit_name = new Array(); //bus(橘幹) rail(自強/復興) or walk
	var statement = new Array(); //statement ex:
	var transit_way = new Array();
	if(match) { /*to catch out*/
		for (var i=0; i<match.length; i++){
			match[i].search(re2);
			var str = RegExp.$2;//ex: src="http://maps.gstatic.com/mapfiles/transit/iw/6/bus.png">紅幹線
			

			if(str.indexOf("rail")!=-1) {
				str=str.replace('src="http://maps.gstatic.com/mapfiles/transit/iw/6/rail.png">',"");
				transit_name.push(str);
				transit_way.push(2);
			}
			else if(str.indexOf("bus")!=-1) {
				str=str.replace('src="http://maps.gstatic.com/mapfiles/transit/iw/6/bus.png">',"")
				transit_name.push(str);
				transit_way.push(3);
			}
			else {
			//(str.indexOf("walk")!=-1) { or car
				transit_way.push(1);
				transit_name.push("walk");
			}
			stopname.push(RegExp.$1);
			statement.push(RegExp.$3);
		}
	}
	for(i=0;i<transit_name.length;i++){
		transit_name[i]=remove_tags(transit_name[i]);
		transit_name[i]=transit_name[i].replace(/\s+/gi,"");
	}
	//for(i=0;i<stopname.length;i++){
	//	stopname[i]=stopname[i].replace("興南客運","");
	//}
	result = "";
	//result=document.getElementById('date').value;
	result+='<table board="20"><tr><td colspan=4>起點：'+startpoint+"　　終點："+endpoint+'</td></tr>';
	for(i=0;i<transit_way.length;i++){
		result+="<tr>";
		if(transit_way[i]==1){
			result+="<td>"+times+"</td><td>"+statement[i]+"</td><td>約"+walk_time_array[i]+"分鐘</td>";
			times = get_time(times,walk_time_array[i]);
			result+="<td>"+times+"</td>";
		}
		else if(transit_way[i]==2) {
			//result+=(i+1);
		//	result+="<td>"+times+"</td>";
			if(stopname[i].indexOf('高鐵')==-1){
				if(i<transit_way.length-1){
					quest_rail(document.getElementById('date').value,translate_train(stopname[i]),translate_train(stopname[i+1]),"2",remove_Semicolon(times),"2359");}//quest_rail(document.getElementById('date').value,"1225","1228","2",remove_Semicolon(times),"2359");
				//result+="<td>"+times+"</td>";
				else {
				//	alert(endpoint.substr(endpoint.length-5,5));
					quest_rail(document.getElementById('date').value,translate_train(stopname[i]),translate_train(endpoint.substr(endpoint.length-5,5)),"2",remove_Semicolon(times),"2359");
				}
			}
			else{
				statement[i]=statement[i].replace('火車','高鐵');
				statement[i]=statement[i].slice(0,statement[i].indexOf(','));
				result+="<td>"+times+"</td><td>"+statement[i]+"</td><td>約"+duration_time_array[i]+"分鐘</td>";
				times = get_time(times,duration_time_array[i]);
				result+="<td>"+times+"</td>";
			}
		}
		else if(transit_way[i]==3) {
			if(i!=transit_way.length-1){
				businfo = get_bus_time(transit_name[i], stopname[i], stopname[i+1], times, false);//alert(get_bus_time("綠幹線", "火車站(北站)", "玉井站", "16:00", true));
				if(businfo==null){
					result+="<td>"+times+"</td><td><font color='red'>"+transit_name[i]+'</font> '+statement[i]+"<font color='green'>"+stopname[i+1]+"</font>"+"下車</td>"+"<td>約"+duration_time_array[i]+"分鐘</td>";
					times = get_time(times,duration_time_array[i]);
					result +="<td>"+times+"</td>";
				}
				else{
					result+="<td>"+businfo[0]+"</td><td><font color='red'>"+transit_name[i]+'</font> '+statement[i]+"<font color='green'>"+stopname[i+1]+"</font>"+"下車"+"<font color='red'>"+businfo[3]+"元</font></td>"+"<td>約"+businfo[2]+"分鐘</td>";
					times = businfo[1];
					result +="<td>"+times+"</td>";
				}
			}
		}
		result+="</tr>";
	}
	//document.write(result);
	routeArray.push(endpoint);
	result+="</table>";
	//now_time = times ;
	//document.write("<xmp>"+document.getElementById('date').value);
	//result+=document.getElementById('date').value.length;
	//document.getElementById('ro_plan').innerHTML=result;
	return result;
}
function quest_rail(searchdate,fromstation,tostation,trainclass,fromtime,totime)//need to remove ':' on time
{
	//var url ="http://twtraffic.tra.gov.tw/twrail/SearchResult.aspx?searchtype=0&searchdate=2014/06/11&fromstation=1227&tostation=1228&trainclass=2&fromtime=0600&totime=2359";
	var url = "http://twtraffic.tra.gov.tw/twrail/SearchResult.aspx?searchtype=0&searchdate="+searchdate+"&fromstation="+fromstation+"&tostation="+tostation+"&trainclass="+trainclass+"&fromtime="+fromtime+"&totime="+totime;
	var http_request=false;
	if(window.XMLHttpRequest){
		http_request=new XMLHttpRequest();
		if(http_request.overrideMimeType){
			http_request.overrideMimeType('text/xml');
		}
	}
	else if(window.ActiveXObject){
		try{ //6.0+
		http_request=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e){
			try{ //5.5+
				http_request=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){}
		}
	}
	if(!http_request){
		alert('Giving up :( Cannot create a XMLHTTP instance');
		return false;
	}
	var by_post='url='+url; //將變數放進字串
	http_request.onreadystatechange=show_area;
	http_request.open('POST','tools/parse_train.php',false);
	http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");  //**重要一定要加上
	http_request.send(by_post);
	
	function show_area(){
		if(http_request.readyState==4){
			if(http_request.status==200){
				var re = RegExp('<span.*?>(.*?)</span>','gi');//train_type
				var match = http_request.responseText.match(re);
				if(match) {
					match[0].search(re);
					car_type = RegExp.$1;				
				}
				var re = RegExp('<a.*?>(.*?)</a>','gi');//train_type
				var match = http_request.responseText.match(re);
				if(match) {
					match[0].search(re);
					car_num = RegExp.$1;				
				}				
				var re = RegExp('</font></td><td align="center" width="25"><font color="Black">-</font></td><td align="center" width="120"><font color="Black">(.*?)</font></td><td class="SearchResult_Time" align="center" width="65"><font color="Black">(.*?)</font></td><td class="SearchResult_Time" align="center" width="65"><font color="Black">(.*?)</font></td><td align="center" width="80"><font color="Black">(.*?)</font>','gi');//train_type
				var match = http_request.responseText.match(re);
				if(match) {
					match[0].search(re);
					from_to = RegExp.$1;
					start_time= RegExp.$2;
					stop_time = RegExp.$3;
					cost_time = RegExp.$4;
					times = stop_time;
				}
			//	document.write("<xmp>")
			//	document.write("cartype:"+car_type +"<br>car_num:"+car_num+"<br>方向:"+from_to+"<br>start_time:"+start_time+"<br><xmp>stop_time:"+stop_time+"</xmp><br>cost:"+cost_time);
				result+="<td>"+start_time+"</td><td>"+car_type+car_num+from_to+"</td><td>約"+cost_time+"</td><td>"+stop_time+"</td>"
				//result+="<td>"+remove_tags(http_request.responseText)+"</td>";
			}
		}
	}
}
function remove_tags(html){
	return html.replace(/<(?:.|\n)*?>/gm, '');
}
function remove_Semicolon(html){
	return html.replace(':','');
}
function translate_train(name)
{
	name=name.replace('火車站','');
	//alert(name);
	train_name= new Array("水上","南靖","後壁","新營","柳營","林鳳營","隆田","拔林","善化","新市","永康","台南","保安","中洲","長榮大學","沙崙","仁德","大橋","南科","嘉義");
	for(var i=0;i<train_name.length;i++){
		if(name==train_name[i]){//
			if(i<=13) return (i+1217);
			else if(i==14) return 5101;
			else if(i==15) return 5102;
			else if(i==16) return 1243;
			else if(i==17) return 1239;
			else if(i==18) return 1244;
			else if(i==19) return 1215;
			//else return 1228;
		}
	}
	for(var i=0;i<train_name.length;i++){
		if(name.indexOf(train_name[i].substr(train_name[i].length-2,2))!=-1){//
			if(i<=13) return (i+1217);
			else if(i==14) return 5101;
			else if(i==15) return 5102;
			else if(i==16) return 1243;
			else if(i==17) return 1239;
			else if(i==18) return 1244;
			else if(i==19) return 1215;
		}
	}
	
}
function show_map(number_of_map)
{
	document.getElementById('map_canvas').style.display = "";
	//document.getElementById('directions_Panel').style.display = "";
	if(number_of_map==0){
		calcRoute("location0","location1");
	}
	else if(number_of_map==1){
		calcRoute("location1","location2");
	}
	else if(number_of_map==2){
		calcRoute("location2","location3");
	}
}
function list_cookies()
{
	document.getElementById('cookies_list').innerHTML="";
	var test_cookies = showAllCookie();
	test_cookies = test_cookies.split(';');
	for (var i=0;i<test_cookies.length;i++){
		document.getElementById('cookies_list').innerHTML+="<option>"+test_cookies[i].substring(0,test_cookies[i].indexOf('='));	
	}
}
function onclick_event()
{
	times=document.getElementById('FromTimeSelect').value;
	document.getElementById('map_canvas').style.display = "none";
	document.getElementById('directions_Panel').style.display = "none";
	if(!flag){ time1 = new Date();
		flag=true;
	}
	else{
		time2= new Date();
		if(time2.getTime()-time1.getTime() >=30000){
			time1 = time2;
		}
		else {
			alert("you must wait for 30 second");
			return;
		}
	}	
	document.getElementById('ro_plan').innerHTML=document.getElementById('date').value;
	var i=0;
	var location = "location";
	for(var i=0;i<3;i++){
		if(document.getElementById('location'+(i+1)).value=='') {
			break;
		}
			setTimeout(function () {	
				calcRoute(location+i.toString(),location+(i+1).toString());
				i++;
			},i*300);
			setTimeout(function () {
				document.getElementById('ro_plan').innerHTML += show_result(times);
				times = get_time(times,parseInt(document.getElementById('staytime'+(i-1).toString()).value));


			},(i+1)*300);
	}

	i=0;
}
function add_option(n)
{
	var changeString = 'location'+n;
	document.getElementById(changeString).value = document.getElementById('cookies_list').value;
}