switch(route_type){
	case 'green':
		fare_table_color = '#3eb034';
		time_schedule_title_color = 'green';
		break;
	case 'blue':
		fare_table_color = '#0191d8';
		time_schedule_title_color = 'blue';
		break;
	case 'red':
		fare_table_color = '#FFCECD';
		time_schedule_title_color = 'red';
		break;
	case 'brown':
		fare_table_color = '#FFC78E';
		time_schedule_title_color = 'brown';
		break;
	case 'yellow':
		fare_table_color = '#FDFF73';
		time_schedule_title_color = 'orange';
		break;
	case 'orange':
		fare_table_color = '#FFC991';
		time_schedule_title_color = 'orange';
		break;
	default:
		fare_table_color = '#FFFFFF';
		time_schedule_title_color = 'purple';
}

function header_code(){
	document.write('<title>大台南公車 － ' + route_name + ' 路線資訊 | Tainan Bus for FUN</title>\
	<link rel="SHORTCUT ICON" href="../img/web_icon.ico">\
	<meta name="description" content="" />\
	<style type="text/css">\
	@import url("../css/table_style.css");\
	@import url("../css/default.css");\
	@import url("../css/fare_menu_style.css");\
	</style>\
	<script language="javascript" src="../tools/show_fare_tool.js"></script>\
	<script language="javascript" src="../tools/show_time_schedule_tool.js"></script>\
	<script language="javascript" src="../tools/msg.js"></script>\
	<script language="javascript" src="../tools/transfer_information.js"></script>\
	<script language="javascript" src="../route/fare_and_time/' + route_file_name +'.js"></script>');
}

function block_header(){
	document.write('<div id="header-wrapper">\
	<div id="header" class="container">\
		<div id="logo">\
			<h1><a href="../index.html">Tainan Bus for FUN</a></h1>\
			<p align="center">\
			<a href="index.html"><img src="../img/' + route_type + '_logo.png"></a>\
			</p>\
		</div>\
		<div id="menu">\
			<ul>\
				<li class="current_page_item"><a href="#route" accesskey="1" title="">路線圖</a></li>\
				<li><a href="#info" accesskey="2" title="">路線資訊</a></li>\
				<li><a href="#fare" accesskey="3" title="">票價表</a></li>\
				<li><a href="#time" accesskey="4" title="">時刻表</a></li>\
				<li><a href="#transfer" accesskey="5" title="">轉乘資訊</a></li>\
			</ul>\
		</div>\
	</div>\
</div>');
}

function block_route_map(announce_str){
	document.write('<div id="wrapper1">\
	<a name="route"></a>\
	<div id="banner">&nbsp;</div>\
	<div id="route">\
		<div class="title">\
			<h2>大台南公車 ─ ' + route_name + ' 路線圖</h2>\
			<span class="byline">Tainan Bus ' + route_name_en + ', Route Map</span>\
		</div>\
		<img src="../route/' + route_type + '/' + route_file_name + '.jpg">');

	if(announce_str!=null) Announcement(announce_str); // have something news to announce
	document.write('<p></p>\
		<a href="../TainanBusMap/show_map.php?route=' + route_file_name + '" target="_blank">\
			<img src="../img/google_map_logo.png"><br />\
			<strong><font color="green">查詢路線地圖 By Kagami</font></strong>\
		</a>\
	</div>\
</div>');
}

function block_route_info(route_interval, company_name, density, charging_method, link){
	document.write('<div id="wrapper2">\
	<a name="info"></a>\
	<div id="routeinfo" class="container">\
		<div class="title">\
			<h2>大台南公車 ─ ' + route_name + ' 路線資訊</h2>\
			<span class="byline">Tainan Bus ' + route_name_en + ', Route Information</span>\
		</div>\
		<div class="content">\
			<table border="0">\
				<tr>\
					<td>起迄點</td>\
					<td>');
	for(i = 0; i < route_interval.length; ++i){
		document.write(route_interval[i]);
		if(i < route_interval.length - 1 ) document.write(' ─ ');
	}
	document.write('</td>\
				</tr>\
				<tr>\
					<td>營運公司</td>\
					<td>' + company_name + '</td>\
				</tr>\
				<tr align="right">\
					<td>首／末班車發車時刻</td>\
					<td>\
					往 ' + route_interval[route_interval.length-1] + '：' + eval(route_file_name+'_time_go[0][0]') + '／' + eval(route_file_name+'_time_go['+route_file_name+'_time_go.length-1][0]') + '<br />\
					往 ' + route_interval[0] + '：' + eval(route_file_name+'_time_return[0][0]') + '／' + eval(route_file_name+'_time_return['+route_file_name+'_time_return.length-1][0]') +
					'</td>\
				</tr>\
				<tr>\
					<td>班距</td>\
					<td>固定班次 ' + density + '</td>\
				</tr>\
				<tr>\
					<td>收費方式</td>\
					<td>' + charging_method + '</td>\
				</tr>\
			</table>\
			<p>　</p>\
			<a href="' + link + '" class="button">公車動態資訊</a>\
		</div>\
	</div>\
</div>');
}

function block_fare(section_type, section_point){
	document.write('<div id="wrapper3">\
	<a name="fare"></a>\
	<div id="faretable" class="container">\
		<div class="title">\
			<h2>大台南公車 ─ ' + route_name + ' 票價表</h2>\
			<span class="byline">Tainan Bus ' + route_name_en + ', Bus Fare</span>\
		</div>\
		<div class="content">');

	if(section_type==0){ // charge by meter
		create_select_menu( eval( route_file_name + '_interval_stop'), route_type, route_file_name);
		document.write('<br/>\
				<table id="showfareInfo">\
					<tr>\
						<th></th><th>全票</th><th>半票</th>\
					</tr>\
					<tr>\
						<td><b>投現</b></td>\
						<td id="cash_adult">-</td>\
						<td id="cash_half">-</td>\
					</tr>\
					<tr>\
						<td><b>電子票證</b></td>\
						<td id="RFID_adult">-</td>\
						<td id="RFID_half">-</td>\
					</tr>\
				</table>\
				<p>　</p>');

		print_fare_table( eval(route_file_name + '_interval_name'), eval(route_file_name + '_fare'), fare_table_color);
	}
	else if(section_type==1){ // charge by one section
		document.write('<h1>全路線一段票</h1>\
			<br/>\
			<table>\
				<tr>\
					<th></th>\
					<th>全票</th><th>半票</th>\
				</tr>\
				<tr>\
					<td><b>投現</b></td>\
					<td>18</td><td>9</td>\
				</tr>\
				<tr>\
					<td><b>電子票證</b></td>\
					<td>18</td><td>9</td>\
				</tr>\
			</table>');
	}
	else if(section_type==2 || section_type==22){ // charge by two section
		document.write('<h1>兩段票收費</h1>\
			<h2><u>分段點：' + section_point + '</u></h2><br />\
			<table>\
				<tr>\
					<th></th>\
					<th>二段票</th><th>一段票</th>\
				</tr>\
				<tr>\
					<td><b>投現</b></td>\
					<td>');
		if(section_type==2) document.write('30');
		else document.write('36'); // doubling
		document.write('</td><td>18</td>\
				</tr>\
				<tr>\
					<td><b>電子票證</b></td>\
					<td>27</td><td>18</td>\
				</tr>\
			</table>');
	}
	document.write('<p>　</p>');

	if(section_type==0) document.write(MeteredMSG);
	else document.write(CitybusMSG);

	document.write(PromotionMSG + '<p>　</p>\
		</div>\
	</div>\
</div>');
}

function block_time_schedule(start_stop, end_stop, message){
	document.write('<div id="timetable">\
	<a name="time"></a>\
	<div class="title">\
		<h2>大台南公車 ─ ' + route_name + ' 時刻表</h2>\
		<span class="byline">Tainan Bus ' + route_name_en + ', Bus schedule</span>\
	</div>\
	<div class="content">\
		<h2><font color="' + time_schedule_title_color + '">' + start_stop + '-&gt;' + end_stop + '</font></h2>'
	+ create_time_schedule( eval(route_file_name + '_main_stop_name'), eval(route_file_name + '_main_stop_time_consume'),	eval(route_file_name + '_important_stop'), eval(route_file_name + '_time_go'), false)
	+ '<p>　</p>\
		<h2><font color="' + time_schedule_title_color + '">' + end_stop + '-&gt;' + start_stop + '</font></h2>'
	+ create_time_schedule( eval(route_file_name + '_main_stop_name'), eval(route_file_name + '_main_stop_time_consume'),	eval(route_file_name + '_important_stop'), eval(route_file_name + '_time_return'), true)
	+ '<p>' + TimeScheduleMSG + '<h3>' + message + '</h3></p></div>\
</div>');
}

function block_multiple_time_schedule(type_list, message){
	document.write('<div id="timetable">\
	<a name="time"></a>\
	<div class="title">\
		<h2>大台南公車 ─ ' + route_name + ' 時刻表</h2>\
		<span class="byline">Tainan Bus ' + route_name_en + ', Bus schedule</span>\
	</div>\
	<div class="content">');
	create_multiple_time_schedule(type_list);
	document.write('<br /><div id="time_schedule_panel" name="time_schedule_panel">'+ show_time_schedule('normal')+'</div>\
		<p>' + TimeScheduleMSG + '<h3>' + message + '</h3></p></div>\
	</div>');
	window.onload = function() { // solve the bug for refreshing input raidio still checked with previous action
		document.getElementById('multiple_type').reset();
	}
}

function block_transfer(transfer_stops){
	document.write('<div id="wrapper4">\
	<a name="transfer"></a>\
	<div id="transfer" class="container">\
		<div class="title">\
			<h2>大台南公車 ─ ' + route_name + ' 主要轉乘點資訊</h2>\
			<span class="byline">Tainan Bus ' + route_name_en + ', Transfer information</span>\
		</div>\
		<div class="content">\
			<table>' + transfer_stops + '</table>\
		</div>\
	</div>\
</div>');
}

function block_copyright(){
	document.write('<div id="copyright">' + copyrightMSG + '</div>');
}