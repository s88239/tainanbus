function create_select_menu(name_array, max_color_num, LINE_NAME){ // print the fair menu
	var menu_name = ['from','to'];
	document.write('<form name="fair_menu">');
	for(var name_index = 0; name_index < menu_name.length ; ++name_index){
		document.write('<select name="' + menu_name[name_index] + '" class="get_fair">');
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
	document.write('<input type="button" value="查詢" onClick="query_fair(this.form, ' + LINE_NAME + '_fair)">');
	document.write('</form>');
}

function query_fair(theForm, fair_array){
	var fd = parseInt(theForm.from.value);
	var td = parseInt(theForm.to.value);
	var price = (fd<=td)?fair_array[td][fd]:fair_array[fd][td];
	//alert(fd + ' ' + td);
	//alert(fair_array[td][fd]+" "+fair_array[fd][td]);
	document.getElementById("cash_adult").innerHTML = price; // 現金全票
	document.getElementById("cash_half").innerHTML = Math.ceil(price/2); // 現金半票，無條件進位
	document.getElementById("RFID_adult").innerHTML = price-26; // 刷卡全票
	document.getElementById("RFID_half").innerHTML = Math.ceil((price-26)/2); // 刷卡半票，無條件進位
}

function create_time_schedule(main_stop_name, time_consume, important_stop, time, isReturn){
	document.write('<table><tr>');
	var start_idx = (isReturn==false) ? 0 : main_stop_name.length - 1;
	var end_idx = (isReturn==false) ? main_stop_name.length : -1;
	for(var i=start_idx; i!=end_idx; i=(isReturn==false)?(i+1):(i-1) ){
		document.write('<th>'+main_stop_name[i]+'</th>');
	}
	document.write('</tr>');
	for(var i=0; i<time.length; ++i){
		var special_tag = '';
		var start_stop = (isReturn==false) ? 0 : main_stop_name.length - 1;
		var end_stop = (isReturn==false) ? main_stop_name.length - 1 : 0;
		switch(time[i].length){
			case 1:
				break;
			case 2:
				special_tag = get_special_tag(time[i][1]);
				break;
			case 3:
				start_stop = time[i][1];
				end_stop = time[i][2];
				break;
			case 4:
				start_stop = time[i][1];
				end_stop = time[i][2];
				special_tag = get_special_tag(time[i][3]);
				break;
			default:
				//alert('array length error!');
				break;
		}
		document.write('<tr>');
		for(var j=start_idx; j!=end_idx; j=(isReturn==false)?(j+1):(j-1) ){
			document.write('<td>');
			if(isReturn==false && j<start_stop || isReturn==false && j>end_stop // not in the driving interval
			|| isReturn==true && j>start_stop || isReturn==true && j<end_stop) ; // do nothing
			else if(judge_important_stop(j, important_stop)==true){
				document.write('<font face="Arial Rounded MT Bold">' + special_tag + get_time(time[i][0], Math.abs(time_consume[j] - time_consume[start_stop]) ) + '</font>');
			}
			else document.write(get_time(time[i][0], Math.abs(time_consume[j] - time_consume[start_stop]) ) );
			document.write('</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}

function get_special_tag(arr){
	var special_event = ''; // initialize
	for(var j=0; j<arr.length; ++j){
		if(arr[j]=='W')
			special_event += '<font color="#0000FF">W</font>';
		else if(arr[j]=='L')
			special_event += '<font color="#FF0000">L</font>';
		else special_event += arr[j];
	}
	//alert(special_event);
	return special_event;
}
function judge_important_stop(idx, arr){
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
	hr_zero = (time_hr<10)? '0':'' ;
	min_zero = (time_min<10)?'0':'' ;
	new_time = hr_zero + time_hr + ':' + min_zero + time_min;
	return new_time;
}