title_name = '大台南公車';
title_name_en = 'Tainan Bus';
map_display = true;

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
		time_schedule_title_color = '#888917';
		break;
	case 'orange':
		fare_table_color = '#FFC991';
		time_schedule_title_color = '#FA8000';
		break;
	default:
		fare_table_color = '#FFFFFF';
		time_schedule_title_color = 'purple';
}

function header_code(){
	document.write('<title>' + title_name + ' － ' + route_name + ' 路線資訊 | Tainan Bus for FUN</title>\
	<link rel="SHORTCUT ICON" href="../img/web_icon.ico">\
	<meta name="description" content="" />\
	<link href="../css/bus_button.css" rel="stylesheet" />\
	<link href="../css/table_style.css" rel="stylesheet" />\
	<link href="../css/default.css" rel="stylesheet" />\
	<link href="../css/fare_menu_style.css" rel="stylesheet" />\
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
			<h2>' + title_name + ' ─ ' + route_name + ' 路線圖</h2>\
			<span class="byline">' + title_name_en + ' ' + route_name_en + ', Route Map</span>\
		</div>\
		<img src="../route/' + route_type + '/' + route_file_name + '.jpg">');

	var news_20160501 = '<h1>【105年5月1日大台南公車優惠新制】</h1><br />\
<p align="left">◎台南市65歲以上市民須使用「市民卡敬老卡」；身心障礙市民須使用「市民卡愛心卡」刷卡乘車才享有免費優惠（持身分證或身心障礙手冊仍需購買半票）。</p>\
<p align="left">◎台南市民搭乘台灣好行觀光公車 88, 99路使用「市民卡」刷卡乘車可享有半價優惠（未使用市民卡照原價計費）。</p>\
<p align="left">◎台南市民搭乘市區公車0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21, 77路使用「市民卡」刷卡乘車可享有半價優惠（本項優惠至105年底止，未使用市民卡照原價計費）。</p>';

	if(announce_str!=null) Announcement(news_20160501+announce_str); // have something news to announce
	else Announcement(news_20160501);

	if(map_display){
		document.write('<p></p><a href="../TainanBusMap/show_map.php?route=' + route_file_name + '" target="_blank">\
			<img src="../img/map_query_logo.png" alt="' + route_name + '地圖查詢" title="' + route_name + '地圖查詢"></a>');
	}
	document.write('</div>\
</div>');
}

function block_route_info(route_interval, company_name, density, charging_method, button_arr, info_type_list){
	document.write('<div id="wrapper2">\
	<a name="info"></a>\
	<div id="routeinfo" class="container">\
		<div class="title">\
			<h2>' + title_name + ' ─ ' + route_name + ' 路線資訊</h2>\
			<span class="byline">' + title_name_en + ' ' + route_name_en + ', Route Information</span>\
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
					<td>');
	if(info_type_list==undefined){
		document.write('往 ' + route_interval[route_interval.length-1] + '：' + eval(route_file_name +'_time_go[0][0]') + '／' + eval(route_file_name +'_time_go['+route_file_name +'_time_go.length-1][0]') + '<br />\
					往 ' + route_interval[0] + '：' + eval(route_file_name +'_time_return[0][0]') + '／' + eval(route_file_name +'_time_return['+route_file_name +'_time_return.length-1][0]') );
	}
	else{
		for(i = 0; i < info_type_list.length; ++i){
			type = (info_type_list[i][1]=='normal') ? '' : '_'+info_type_list[i][1];
			document.write('<div align="center"><font color="#FFFFFF">' + info_type_list[i][0] + '</font></div>\
						往 ' + route_interval[route_interval.length-1] + '：' + eval(route_file_name + type +'_time_go[0][0]') + '／' + eval(route_file_name + type +'_time_go['+route_file_name + type +'_time_go.length-1][0]') + '<br />\
						往 ' + route_interval[0] + '：' + eval(route_file_name + type +'_time_return[0][0]') + '／' + eval(route_file_name + type +'_time_return['+route_file_name + type +'_time_return.length-1][0]') );
		}
	}
	var button_showing_value = '公車動態資訊';
	var button_showing_url = button_arr;
	if( Array.isArray(button_arr) ){
		button_showing_url = button_arr[0];
		button_showing_value = button_arr[1];
	}
	document.write('</td>\
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
			<a href="' + button_showing_url + '" class="button">' + button_showing_value + '</a>\
		</div>\
	</div>\
</div>');
}

function block_fare(section_type, additional_message, section_point){
	document.write('<div id="wrapper3">\
	<a name="fare"></a>\
	<div id="faretable" class="container">\
		<div class="title">\
			<h2>' + title_name + ' ─ ' + route_name + ' 票價表</h2>\
			<span class="byline">' + title_name_en + ' ' + route_name_en + ', Bus Fare</span>\
		</div>\
		<div class="content">');

	if(section_type%10==0){ // charge by meter
		switch(section_type){
			case 0: // 8km free
				charge_type = '8km';
				break;
			case 10: // highway bus
				charge_type = 'highway';
				break;
			case 20: // Kaohsiung City Bus
				charge_type = 'Kaohsiung';
				break;
		}
		create_select_menu( eval( route_file_name + '_interval_stop'), route_type, route_file_name, charge_type);
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
		print_fare_table( eval(route_file_name + '_interval_name'), eval(route_file_name + '_fare'), fare_table_color, charge_type);
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
	else if(section_type%10==2){ // charge by two section
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

		//----- 二段票現金收費價格歧異 -----//
		if( Math.floor(section_type/10)==0 ) document.write('30'); // section_type = 2。e.g. 1、10、11路
		else document.write('36'); // section_type = 12、22，分別為17及99路

		document.write('</td><td>18</td>\
				</tr>\
				<tr>\
					<td><b>電子票證</b></td>\
					<td>');

		//----- 二段票電子票證收費價格歧異 -----//
		if( Math.floor(section_type/10)==1 ) document.write('36'); // section_type = 12。e.g. 17路
		else document.write('27'); // section_type = 2、22，分別為1、10、11路及99路

		document.write('</td><td>18</td>\
				</tr>\
			</table>');
	}
	document.write('<p>　</p>');
	if(section_type==10 || section_type==20){ // section_type = 10 is highway bus; section_type = 20 is Kaohsiung City Bus
		document.write('<h3><font color="red">本路線非大台南公車，無法享有八公里免費及轉乘優惠</font></h3>\
			<h2>使用電子票證時，上下車皆須刷卡</h2><br />');
		if(section_type==20) document.write('<h1>本路線使用一卡通收費最高上限為60元</h1>'); // Kaohsiung City Bus
		else document.write('<h3>本路線票價已採用2015.2.14最新公路總局公告之費率計算</h3>'); // highway bus
	}
	else{
		if(section_type==0) document.write(MeteredMSG); // Tainan Bus and charge by meter
		else document.write(CitybusMSG); // Tainan Bus and charge by section
		document.write(PromotionMSG); // print the promotion message of Tainan Bus
	}
	if(additional_message) document.write(additional_message); // print additional message
	document.write('<p>　</p></div>\
	</div>\
</div>');
}

function block_time_schedule(start_stop, end_stop, message){
	document.write('<div id="timetable">\
	<a name="time"></a>\
	<div class="title">\
		<h2>' + title_name + ' ─ ' + route_name + ' 時刻表</h2>\
		<span class="byline">' + title_name_en + ' ' + route_name_en + ', Bus schedule</span>\
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
		<h2>' + title_name + ' ─ ' + route_name + ' 時刻表</h2>\
		<span class="byline">' + title_name_en + ' ' + route_name_en + ', Bus schedule</span>\
	</div>\
	<div class="content">');
	create_multiple_time_schedule(type_list);
	document.write('<br /><div id="time_schedule_panel" name="time_schedule_panel">'+ show_time_schedule(type_list[0][1])+'</div>' // show the first type of time schedule
	+ '<p>' + TimeScheduleMSG + '<h3>' + message + '</h3></p></div>\
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
			<h2>' + title_name + ' ─ ' + route_name + ' 主要轉乘點資訊</h2>\
			<span class="byline">' + title_name_en + ' ' + route_name_en + ', Transfer information</span>\
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