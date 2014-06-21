function loadScript(url)//, callback) // load the js file dynamically, and then use the function 'callback'
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    //script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var js_name = ['green','blue','red','brown','orange','yellow','city_bus','tour_bus','hsr_shuttle'];
var js_bus_num = [[1,7,10,17,20,27], // green
[1,3,10,13,20,25], // blue
[1,4,10,14], // red
[1,5,10,12,20,20], // orange
[1,3,10,11], // brown
[1,7,9,15,20,20], // yellow
[0,3,5,7,9,11,14,15,18,18,20,21], // city bus
[88,88,99,99], // tour bus
[7651,7651,7658,7658] // hsr shuttle
];
// load all js file that stores the bus information
for(var i=0; i<js_name.length; ++i){
	if(i<6) loadScript('route/fare_and_time/' + js_name[i] + '.js'); // load 六幹線
	for(var j=0; j<js_bus_num[i].length; j+=2){
		for(var k=js_bus_num[i][j]; k<=js_bus_num[i][j+1]; ++k){
			//alert(js_name[i] + k);
			//if( i== 6 ) // just load city_bus
			loadScript('route/fare_and_time/' + js_name[i] + '_' + k + '.js'); // load 支線
			//document.write('route/fare_and_time/' + js_name[i] + '_' + k + '.js<br />');
		}
	}
}
function get_bus_time(theRoute, start_stop, end_stop, time, isArrive){
	switch(theRoute.charAt(0)){
		case '綠':
			route = 'green';
			break;
		case '藍':
			route = 'blue';
			break;
		case '紅':
			route = 'red';
			break;
		case '棕':
			route = 'brown';
			break;
		case '橘':
			route = 'orange';
			break;
		case '黃':
			route = 'yellow';
			break;
		default:
			if(theRoute=='7651'||theRoute=='7658') route = 'hsr_shuttle_' + theRoute; // hsr shuttle
			else if(theRoute=='88'||theRoute=='99') route = 'tour_bus_' + theRoute; // tour bus
			else if(!isNaN(theRoute)) route = 'city_bus' + '_' + theRoute; // city_bus
			else return null; // route not found
	}
	if(!isNaN(theRoute.substring(1,theRoute.length))) route = route + '_' +theRoute.substring(1,theRoute.length);
	if(!check_valid_bus(route)) return null;
	//alert(theRoute);
	//alert(route);
	interval_stop_name = eval(route+'_interval_stop');
	//alert(interval_stop_name);
	stop_time_consume = eval(route+'_stop_time_consume');
	//alert(stop_time_consume);
	// find_match_time
	start_stop = replace_stop_name(start_stop);
	end_stop = replace_stop_name(end_stop);
	//alert(start_stop);
	//alert(end_stop);
	// find the index of the stop
	var start_idx = null;
	var end_idx = null;
	var count = 0;
	for(var i=0; i<interval_stop_name.length; ++i){
		for(var j=0; j<interval_stop_name[i].length; ++j, ++count){
			//alert('replace='+replace_stop_name(interval_stop_name[i][j])+' compare='+start_stop);
			if(replace_stop_name(interval_stop_name[i][j])==start_stop){
				start_idx = [i,j,count]; // idx format: [interval, order in interval, index of total stops]
			}
			if(replace_stop_name(interval_stop_name[i][j])==end_stop){
				end_idx = [i,j,count]; // idx format: [interval, order in interval, index of total stops]
			}
		}
	}
	if(start_idx==null || end_idx==null) return null; // the stop not found
	//alert('start:'+start_idx);
	//alert('end:'+end_idx);
	if( start_idx[2] < end_idx[2] ){
		//alert('go');
		time_table = (theRoute==88||theRoute==99)?eval(route+'_holiday_time_go') : eval(route+'_time_go');
	}
	else{
		//alert('return');
		time_table = (theRoute==88||theRoute==99)?eval(route+'_holiday_time_return') : eval(route+'_time_return');
	}
	//alert(time_table);
	var temp = '';
	for(var i=0; i<time_table.length; ++i){
		if( !isArrive ){ // find the time after the specified time
			offset_time = (start_idx[2] < end_idx[2])?stop_time_consume[start_idx[2]]:stop_time_consume[stop_time_consume.length-1]-stop_time_consume[start_idx[2]];
			target_time = get_time(time_table[i][0],offset_time); // get the time of bus arriving in the specified stop
			if(target_time >= time ) break;
		}
		else{ // find the time before the specified time
			offset_time = (start_idx[2] < end_idx[2])?stop_time_consume[end_idx[2]]:stop_time_consume[stop_time_consume.length-1]-stop_time_consume[end_idx[2]];
			target_time = temp;
			//alert(time_table[i][0]+' '+stop_time_consume[end_idx[0]]);
			temp = get_time(time_table[i][0],offset_time); // get the time of bus arriving in the specified stop
			if(temp > time) break;
		}
		//document.write(target_time+'<br />')
	}
	//alert(target_time);

	// get the bus fare
	if(isNaN(theRoute)){
		fare_table = eval(route+'_fare');
		fare = (start_idx[0]<=end_idx[0]) ? fare_table[end_idx[0]][start_idx[0]] : fare_table[start_idx[0]][end_idx[0]];
	}
	else if(interval_stop_name.length==2 && start_idx[0]!=end_idx[0]) fare = 36; // 二段票
	else fare = 18;
	
	if(start_idx[2] < end_idx[2] ) return (!isArrive)?[target_time, get_time(target_time, stop_time_consume[end_idx[2]] - stop_time_consume[start_idx[2]]), Math.abs(stop_time_consume[end_idx[2]] - stop_time_consume[start_idx[2]]), fare]
	 : [get_time(target_time, stop_time_consume[start_idx[2]] - stop_time_consume[end_idx[2]]), target_time, Math.abs(stop_time_consume[end_idx[2]] - stop_time_consume[start_idx[2]]), fare];
	else return (!isArrive)?[target_time, get_time(target_time, stop_time_consume[start_idx[2]] - stop_time_consume[end_idx[2]]), Math.abs(stop_time_consume[end_idx[2]] - stop_time_consume[start_idx[2]]), fare]
	 : [get_time(target_time, stop_time_consume[end_idx[2]] - stop_time_consume[start_idx[2]]), target_time, Math.abs(stop_time_consume[end_idx[2]] - stop_time_consume[start_idx[2]]), fare];
	// such as ["06:10","10:05", 30]
}
var replace_str_arr = [['[台灣好行]',''],['台南','臺南'],['台灣','臺灣'],['南台','南臺'],['台電','臺電'],['關廟站','關廟'],['、',''],
['[新營]',''],['(新營)',''],['[興南]',''],['(興南)',''],
['南靖(新營)','南靖火車站'], // 黃9
['(新孝路口)',''],['西區公所','協和里'],['溪子墘社區','溪子墘'],['元寶樂園','十二佃橋'] // 藍23
];
function replace_stop_name(stop){ // handle the exception
	for(var i=0; i<replace_str_arr.length; ++i){
		if(stop.indexOf(replace_str_arr[i][0]) >=0 ){
			//document.write('i='+i+' ,name='+replace_str_arr[i][0]+'<br />');
			stop = stop.replace(replace_str_arr[i][0],replace_str_arr[i][1]);
		}
	}
	if(stop=='火車站(北站)' || stop=='火車站(南站)') stop = '臺南火車站';
	else if((stop.indexOf('新營客運')==0 || stop.indexOf('興南客運')==0)&&stop.charAt(stop.length-1)=='站') stop = stop.substring(4,stop.length);
	return stop;
}

function get_time(time_str, offset){ // get the time of the stop
	time_split = time_str.split(':');
	time_hr = parseInt(time_split[0]);
	time_min = parseInt(time_split[1]);
	time_min += offset;
	if(time_min>=60){
		time_hr += Math.floor(time_min/60);
		time_min %= 60;
	}
	else if(time_min < 0){
		time_hr -= Math.ceil(-time_min/60);
		time_min = 60 + (time_min % 60);
	}
	hr_zero = (time_hr<10)? '0':'' ;
	min_zero = (time_min<10)?'0':'' ;
	new_time = hr_zero + time_hr + ':' + min_zero + time_min;
	return new_time;
}

function check_valid_bus(bus_line){
	for(var i=0; i<js_name.length; ++i){
		if(i<6 && bus_line==js_name[i] ) return true; // 六幹線
		for(var j=0; j<js_bus_num[i].length; j+=2){
			for(var k=js_bus_num[i][j]; k<=js_bus_num[i][j+1]; ++k){
				//alert(js_name[i] + k);
				//if( i== 6 ) // just load city_bus
				my_bus = js_name[i] + '_' + k ;
				if( bus_line == my_bus) return true; // 支線
				//document.write('route/fare_and_time/' + js_name[i] + '_' + k + '.js<br />');
			}
		}
	}
	return false;
}