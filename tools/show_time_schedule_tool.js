function change_time_schedule_type(type){
	document.getElementById('time_schedule_panel').innerHTML = show_time_schedule(type, 'message');
}

function create_multiple_time_schedule(type_list){
	document.write('<div class="radio-toolbar"><form id="multiple_type">');
	for(var i=0; i<type_list.length; ++i){
    	document.write('<input type="radio" id="radio' + i + '" name="radios" onClick="change_time_schedule_type(\'' + type_list[i][1] + '\');"');
    	if(i==0) document.write(' checked');
    	document.write('>\n<label for="radio' + i + '">');
    	switch(type_list[i][0]){
    		case '平日班表':
    			document.write('<font color="#0000AA">平日班表</font>');
    			break;
    		case '假日班表':
    			document.write('<font color="#CC0000">假日班表</font>');
    			break;
    		default:
    			document.write('<font color="green">' + type_list[i][0] + '</font>');
    			break;
    	}
    	document.write('</label>\n');
	}
	document.write('</form></div>');
}

function create_time_schedule(main_stop_name, time_consume, important_stop, time, isReturn){ // print the time schedule
	var time_schedule_string = '<table><tr>';
	var start_idx = (isReturn==false) ? 0 : main_stop_name.length - 1;
	var end_idx = (isReturn==false) ? main_stop_name.length : -1;
	for(var i=start_idx; i!=end_idx; i=(isReturn==false)?(i+1):(i-1) ){
		time_schedule_string += '<th>' + main_stop_name[i] + '</th>';
	}
	time_schedule_string += '</tr>';
	for(var i=0; i<time.length; ++i){
		var special_event = ['',[-1,0],[]];
		var start_stop = (isReturn==false) ? 0 : main_stop_name.length - 1;
		var end_stop = (isReturn==false) ? main_stop_name.length - 1 : 0;
		switch(time[i].length){
			case 1: // format: [time]
				break;
			case 2: // format: [time, others]
				special_event = get_special_tag(time[i][1]);
				break;
			case 3: // format: [time, start_stop, end_stop]
				start_stop = time[i][1];
				end_stop = time[i][2];
				break;
			case 4: // format: [time, start_stop, end_stop , others]
				start_stop = time[i][1];
				end_stop = time[i][2];
				special_event = get_special_tag(time[i][3]);
				break;
			default:
				//alert('array length error!');
				break;
		}
		time_schedule_string += '<tr>';
		var special_tag = special_event[0]; // store real special tag to special_tag
		var stop_offset = special_event[1]; // store offset event
		if( special_event.length==3 ){ // special_event is an array storing forbidden stop
			forbidden = special_event[2]; // store those stops in the array named 'forbidden'
		}
		else forbidden = []; // otherwise, be a empty array

		for(var j=start_idx; j!=end_idx; j=(isReturn==false)?(j+1):(j-1) ){
			time_schedule_string += '<td>';
			if(isReturn==false && j<start_stop || isReturn==false && j>end_stop // not in the driving interval
			|| isReturn==true && j>start_stop || isReturn==true && j<end_stop) continue; // do nothing
			var k=0;
			time_consume_offset = time_consume[start_stop];
			for(k=0; k<stop_offset.length; k+=2){
				if(stop_offset[k]==-1) break;
				if(j>=stop_offset[k]&&isReturn==false) // have offset since stop No. stop_offset[0]
					{time_consume_offset -= stop_offset[k+1];
						//document.write('g'+k+'<br />');
					}
				else if( j<=stop_offset[k]&&isReturn==true )
					{time_consume_offset += stop_offset[k+1];
						//document.write('b'+k+'<br />');
					}
				//document.write('oo ' + k +'= ' + time_consume_offset +'<br />');
			}
			//document.write('oo = ' + time_consume_offset +'<br />');
			if( judge_important_stop(j, forbidden)==true ){ // encounter forbidden stop, print '-' instead of time to skip
				time_schedule_string += '-';
			}
			else if( j==start_stop || judge_important_stop(j, important_stop)==true){ // it's important stop, change its font face, and add the special tag at the front of its time
				time_schedule_string += '<font face="Arial"><strong>' + special_tag + get_time(time[i][0], Math.abs(time_consume[j] - time_consume_offset) ) + '</strong></font>';
				//document.write('c = '+time_consume[j]+' o = ' + time_consume_offset)
			}
			else{ // general case, just print its time
				time_schedule_string += get_time(time[i][0], Math.abs(time_consume[j] - time_consume_offset) );
				//document.write('c2 = '+time_consume[j]+' o2 = ' + time_consume_offset)
			}
			time_schedule_string += '</td>';
		}
		time_schedule_string += '</tr>';
	}
	time_schedule_string += '</table>';
	return time_schedule_string;
}

function get_special_tag(arr){ // add some tags of special events
	var special_event = ''; // initialize
	var skip_stop_array = [];
	var offset = [-1,0]; // [since_stop, offset_min]
	var count = 0;
	for(var j=0; j<arr.length; ++j){
		if(arr[j]=='W') // drive in weekdays
			special_event += '<font color="#0000FF">W</font>';
		else if(arr[j]=='L' || arr[j]=='H') // use low floor bus or only drive on holiday
			special_event += '<font color="#FF0000">' + arr[j] + '</font>';
		else if(arr[j]=='S') // drive in school day
			special_event += '<font color="green">' + arr[j] + '</font>';
		else if(Array.isArray(arr[j])==true) // have offset since some important stop
			offset = arr[j];
		else if( !isNaN(arr[j]) ) skip_stop_array[count++] = arr[j];
		else special_event = arr[j];
	}
	return skip_stop_array.length==0 ? [special_event, offset] : [special_event, offset, skip_stop_array];
}

function judge_important_stop(idx, arr){ // find the index matching the important stop or not
	for(var i=0; i<arr.length; ++i){
		if(idx==arr[i]) return true;
	}
	return false;
}

function get_time(time_str, offset){ // get the time of the stop
	time_split = time_str.split(':');
	time_hr = parseInt(time_split[0],10);
	time_min = parseInt(time_split[1],10);
	time_min += offset;
	if(time_min>=60){
		time_hr = (time_hr+Math.floor(time_min/60))%24;
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

function show_time_schedule(type){
	type = (type=='normal') ? '' : '_'+type;
	str = '<h2><font color="' + time_schedule_title_color + '">' + route_start_stop + ' → ' + route_end_stop + '</font></h2>'
	+ create_time_schedule( eval(route_file_name + '_main_stop_name'), eval(route_file_name + '_main_stop_time_consume'), eval(route_file_name + '_important_stop'), eval(route_file_name + type + '_time_go'), false)
	+ '<p>　</p><h2><font color="' + time_schedule_title_color + '">' + route_end_stop + ' → ' + route_start_stop + '</font></h2>'
	+ create_time_schedule( eval(route_file_name + '_main_stop_name'), eval(route_file_name + '_main_stop_time_consume'), eval(route_file_name + '_important_stop'), eval(route_file_name + type + '_time_return'), true);
	return str;
}