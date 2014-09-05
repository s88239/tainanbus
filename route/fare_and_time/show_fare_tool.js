function create_select_menu(name_array, max_color_num, LINE_NAME){ // print the fare menu
	var menu_name = ['from','to'];
	document.write('<form name="fare_menu">');
	for(var name_index = 0; name_index < menu_name.length ; ++name_index){
		document.write('<select name="' + menu_name[name_index] + '" class="get_fare">');
		for(var i = 0, color_index = 1; i < name_array.length; ++i, ++color_index ){
			for(var j = 0; j < name_array[i].length; ++j){
				document.write('<option value="' + i + '" class="option' + color_index + '"');
				if(name_index==menu_name.length-1&&i==name_array.length-1&&j==name_array[i].length-1) // select the last stop
					document.write(' selected');
				document.write('>' + name_array[i][j] + '</option>');
			}
			if(color_index==max_color_num) color_index = 0; // up to the number of color,, set zero to reuse colors
		}
		document.write("</select>");
	}
	document.write('<input type="button" value="查詢" onClick="query_fare(this.form, ' + LINE_NAME + '_fare)">');
	document.write('</form>');
}

function query_fare(theForm, fare_array){
	var fd = parseInt(theForm.from.value);
	var td = parseInt(theForm.to.value);
	var price = (fd<=td)?fare_array[td][fd]:fare_array[fd][td];
	//alert(fd + ' ' + td);
	//alert(fare_array[td][fd]+" "+fare_array[fd][td]);
	document.getElementById("cash_adult").innerHTML = price < 0 ? 'none' : price; // 現金全票
	document.getElementById("cash_half").innerHTML = price < 0 ? 'none' : Math.ceil(price/2); // 現金半票，無條件進位
	document.getElementById("RFID_adult").innerHTML = price < 0 ? 'none' : price-26; // 刷卡全票
	document.getElementById("RFID_half").innerHTML = price < 0 ? 'none' : Math.ceil((price-26)/2); // 刷卡半票，無條件進位
}

function create_time_schedule_go(stop_name, time_consume, select_stop_index, important_stop, time){ // print the time schedule for going
	document.write('<table><tr>');
	var index_x = 0, index_count = stop_name[0].length;
	for(var i=0; i < select_stop_index.length; ++i ){
		while(index_count - 1 < select_stop_index[i] && index_x < stop_name.length){
			++index_x;
			index_count += stop_name[index_x].length;
		}
		//document.write(index_x+", index_count="+index_count+", selected="+select_stop_index[i]+", y="+(select_stop_index[i]-index_count+stop_name[index_x].length)+"<br />");
		document.write('<th>'
			+ break_string_with_newline(stop_name[index_x][select_stop_index[i]-index_count+stop_name[index_x].length])
			+ '</th>');
	}
	document.write('</tr>');
	for(var i=0; i<time.length; ++i){
		var special_event = ['',[-1,0],[]];
		var start_stop = 0, end_stop = select_stop_index.length - 1;
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
		document.write('<tr>');
		var special_tag = special_event[0]; // store real special tag to special_tag
		var stop_offset = special_event[1]; // store offset event
		if( special_event.length==3 ){ // special_event is an array storing forbidden stop
			forbidden = special_event[2]; // store those stops in the array named 'forbidden'
		}
		else forbidden = []; // otherwise, be a empty array

		for(var j=0; j < select_stop_index.length; ++j){
			document.write('<td>');
			var k=0;
			time_consume_offset = time_consume[select_stop_index[start_stop]];
			for(k=0; k<stop_offset.length; k+=2){
				if(stop_offset[k]==-1) break;
				if(j>=stop_offset[k]) // have offset since stop No. stop_offset[0]
				{
					time_consume_offset -= stop_offset[k+1];
					//document.write('g'+k+'<br />');
				}
				//document.write('oo ' + k +'= ' + time_consume_offset +'<br />');
			}
			//document.write('oo = ' + time_consume_offset +'<br />');
			if( judge_important_stop(j, forbidden)==true ){ // encounter forbidden stop, print '-' instead of time to skip
				document.write('-');
			}
			else if( j==start_stop || judge_important_stop(select_stop_index[j], important_stop)==true){ // it's important stop, change its font face, and add the special tag at the front of its time
				document.write('<font face="Arial Rounded MT Bold">' + special_tag + get_time(time[i][0], Math.abs(time_consume[select_stop_index[j]] - time_consume_offset) ) + '</font>');
				//document.write('c = '+time_consume[j]+' o = ' + time_consume_offset)
			}
			else{ // general case, just print its time
				document.write(get_time(time[i][0], Math.abs(time_consume[select_stop_index[j]] - time_consume_offset) ) );
				//document.write('c2 = '+time_consume[j]+' o2 = ' + time_consume_offset)
			}
			document.write('</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}

function create_time_schedule_return(stop_name, time_consume, select_stop_index, important_stop, time){ // print the time schedule for returning
	document.write('<table><tr>');
	var index_x = stop_name.length - 1;
	var index_count = 0;
	for(var i=0; i < stop_name.length - 1; ++i ){ // sumation
		index_count += stop_name[i].length;
	}
	//document.write("index_count="+index_count+" sumation!!<br />");
	for(var i = select_stop_index.length - 1; i>=0; --i){
		while(index_count - 1 >= select_stop_index[i] && index_x >= 0){
			index_count -= stop_name[index_x - 1].length;
			--index_x;
		}
		//document.write(index_x+", index_count="+index_count+", selected="+select_stop_index[i]+", y="+(select_stop_index[i]-index_count+stop_name[index_x].length)+"<br />");
		document.write('<th>'
			+ break_string_with_newline(stop_name[index_x][select_stop_index[i]-index_count])
			+ '</th>');
	}
	document.write('</tr>');
	for(var i=0; i<time.length; ++i){
		var special_event = ['',[-1,0],[]];
		var start_stop = select_stop_index.length - 1, end_stop = 0;
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
		document.write('<tr>');
		var special_tag = special_event[0]; // store real special tag to special_tag
		var stop_offset = special_event[1]; // store offset event
		if( special_event.length==3 ){ // special_event is an array storing forbidden stop
			forbidden = special_event[2]; // store those stops in the array named 'forbidden'
		}
		else forbidden = []; // otherwise, be a empty array

		for(var j=select_stop_index.length-1; j >= 0; --j){
			document.write('<td>');
			var k=0;
			time_consume_offset = time_consume[select_stop_index[start_stop]];
			for(k=0; k<stop_offset.length; k+=2){
				if(stop_offset[k]==-1) break;
				if(j<=stop_offset[k]) // have offset since stop No. stop_offset[0]
				{
					time_consume_offset += stop_offset[k+1];
				}
			}
			if( judge_important_stop(j, forbidden)==true ){ // encounter forbidden stop, print '-' instead of time to skip
				document.write('-');
			}
			else if( j==start_stop || judge_important_stop(select_stop_index[j], important_stop)==true){ // it's important stop, change its font face, and add the special tag at the front of its time
				document.write('<font face="Arial Rounded MT Bold">' + special_tag + get_time(time[i][0], Math.abs(time_consume[select_stop_index[j]] - time_consume_offset) ) + '</font>');
			}
			else{ // general case, just print its time
				document.write(get_time(time[i][0], Math.abs(time_consume[select_stop_index[j]] - time_consume_offset) ) );
			}
			document.write('</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}

function create_time_schedule(main_stop_name, time_consume, important_stop, time, isReturn){ // print the time schedule
	document.write('<table><tr>');
	var start_idx = (isReturn==false) ? 0 : main_stop_name.length - 1;
	var end_idx = (isReturn==false) ? main_stop_name.length : -1;
	for(var i=start_idx; i!=end_idx; i=(isReturn==false)?(i+1):(i-1) ){
		document.write('<th>'+main_stop_name[i]+'</th>');
	}
	document.write('</tr>');
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
		document.write('<tr>');
		var special_tag = special_event[0]; // store real special tag to special_tag
		var stop_offset = special_event[1]; // store offset event
		if( special_event.length==3 ){ // special_event is an array storing forbidden stop
			forbidden = special_event[2]; // store those stops in the array named 'forbidden'
		}
		else forbidden = []; // otherwise, be a empty array

		for(var j=start_idx; j!=end_idx; j=(isReturn==false)?(j+1):(j-1) ){
			document.write('<td>');
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
				document.write('-');
			}
			else if( j==start_stop || judge_important_stop(j, important_stop)==true){ // it's important stop, change its font face, and add the special tag at the front of its time
				document.write('<font face="Arial Rounded MT Bold">' + special_tag + get_time(time[i][0], Math.abs(time_consume[j] - time_consume_offset) ) + '</font>');
				//document.write('c = '+time_consume[j]+' o = ' + time_consume_offset)
			}
			else{ // general case, just print its time
				document.write(get_time(time[i][0], Math.abs(time_consume[j] - time_consume_offset) ) );
				//document.write('c2 = '+time_consume[j]+' o2 = ' + time_consume_offset)
			}
			document.write('</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}

function break_string_with_newline(str){
	if(str.length<4) return str;
	return str.substring(0,str.length/2) + '<br />' +  str.substring(str.length/2, str.length);
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
function print_fare_table(interval_name, fare, color){ // the function fo showing or hiding the fare table
	// print the button with the function showing or hiding
	document.write('<input type="button" onClick="document.getElementById(\'fare_table\').style.display = ');
	document.write('(document.getElementById(\'fare_table\').style.display==\'none\')?\'block\':\'none\'" ');
	document.write('value="顯示/隱藏票價表格" style="background-color:#c00; color:#fff;">')
	// print the fare table without showing
	document.write('<div id="fare_table" style="display:none;"><table style="background-color: '+color+';">');
	for(var i=0; i<interval_name.length; ++i){
		document.write('<tr>');
		for(var j=0; j<interval_name.length; ++j){
			if(i==j) document.write('<th>' + interval_name[i] + '</th>');
			else if(fare[i][j]<0) document.write('<td>-</td>' );
			else if( i>j ) fare[i][j] < 0 ? document.write('<td>-</td>') : document.write('<td>' + fare[i][j] + '</td>');
			else fare[j][i] < 0 ? document.write('<td>-</td>') : document.write('<td>' + (fare[j][i] - 26) + '</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
	document.write('<b>左方為現金價格，右方為刷卡價格</b><br /></div>');
}