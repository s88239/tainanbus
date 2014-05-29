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
var js_name = ['green','blue','red','brown','orange','yellow','city_bus_'];
var js_bus_num = [[1,7,10,17,20,27], // green
[1,3,10,13,20,25], // blue
[1,4,10,14], // red
[1,5,10,12,20,20], // orange
[1,3,10,11], // brown
[1,7,9,15,20,20], // yellow
[0,3,5,7,9,11,14,15,18,18,20,21,88,88,99,99] // city bus
];
// load all js file that stores the bus information
for(var i=0; i<js_name.length; ++i){
	if(i<6) loadScript('route/fare_and_time/' + js_name[i] + '.js'); // load 六幹線
	for(var j=0; j<js_bus_num[i].length; j+=2){
		for(var k=js_bus_num[i][j]; k<=js_bus_num[i][j+1]; ++k){
			//alert(js_name[i] + k);
			if( i== 6 ) // just load city_bus
			loadScript('route/fare_and_time/' + js_name[i] + k + '.js'); // load 支線
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
			route = 'city_bus_';
	}
	if(!isNaN(theRoute)) route += theRoute;
	else if(!isNaN(theRoute.substring(1,theRoute.length))) route += theRoute.substring(1,theRoute.length);
	//alert(theRoute);
	//alert(route);
	interval_stop_name = eval(route+'_interval_stop');
	interval_time_consume = eval(route+'_interval_time_consume');
	// find_match_time
	start_stop = replace_stop_name(start_stop);
	end_stop = replace_stop_name(end_stop);
	//alert(start_stop);
	//alert(end_stop);
	// find the index of the stop
	for(var i=0; i<interval_stop_name.length; ++i){
		for(var j=0; j<interval_stop_name[i].length; ++j){
			if(interval_stop_name[i][j].indexOf(start_stop)>=0){
				start_idx = [i,j];
			}
			if(interval_stop_name[i][j].indexOf(end_stop)>=0){
				end_idx = [i,j];
			}
		}
	}
	//alert('start:'+start_idx);
	//alert('end:'+end_idx);
	if(start_idx[0] < end_idx[0] || start_idx[0]==end_idx[0] && start_idx[1] < end_idx[1]){
		//alert('go');
		time_table = eval(route+'_time_go');
	}
	else{
		//alert('return');
		time_table = eval(route+'_time_return');
	}
	var temp = '';
	for(var i=0; i<time_table.length; ++i){
		if( !isArrive ){
			target_time = get_time(time_table[i][0],interval_time_consume[start_idx[0]]);
			if(target_time >= time ) break;
		}
		else{
			target_time = temp;
			//alert(time_table[i][0]+' '+interval_time_consume[end_idx[0]]);
			temp = get_time(time_table[i][0],interval_time_consume[end_idx[0]]);
			if(temp > time) break;
		}
		//document.write(target_time+'<br />')
	}
	//alert(target_time);
	//alert(eval(route+'_main_stop_name'));
	if(isNaN(theRoute)){
		fare_table = eval(route+'_fare');
		fare = (start_idx[0]<=end_idx[0]) ? fare_table[end_idx[0]][start_idx[0]] : fare_table[start_idx[0]][end_idx[0]];
	}
	else fare = 18;
	
	return (!isArrive)?[target_time, get_time(target_time, interval_time_consume[end_idx[0]] - interval_time_consume[start_idx[0]]), fare]
	 : [get_time(target_time, interval_time_consume[start_idx[0]] - interval_time_consume[end_idx[0]]), target_time, fare];
	// such as ["06:10","10:05", 30]
}

function replace_stop_name(stop){
	stop = stop.replace('台南','臺南');
	stop = stop.replace('台灣','臺灣');
	if(stop=='火車站(北站)' || stop=='火車站(南站)') stop = '臺南火車站';
	if(stop.length==3 &&stop.charAt(stop.length-1)=='站') stop = stop.substring(0,stop.length-1); // replace XX站 to XX
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