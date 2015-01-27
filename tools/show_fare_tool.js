function create_select_menu(name_array, color_name, LINE_NAME){ // print the fare menu
	switch(color_name){
		case 'green':
		case 'blue':
		case 'orange':
			max_color_num = 6;
			break;
		case 'red':
		case 'yellow':
			max_color_num = 4;
			break;
		case 'brown':
			max_color_num = 5;
			break;
		default:
			max_color_num = 0;
	}
	var menu_name = ['from','to'];
	document.write('<form name="fare_menu">');
	for(var name_index = 0; name_index < menu_name.length ; ++name_index){
		document.write('<select name="' + menu_name[name_index] + '" class="' + color_name + '_fare">');
		for(var i = 0, color_index = 1; i < name_array.length; ++i, ++color_index ){
			for(var j = 0; j < name_array[i].length; ++j){
				document.write('<option value="' + i + '" class="option' + color_index + '"');
				if( name_index==0&&i==0&&j==0 // first stop in from menu
				|| name_index==menu_name.length-1&&i==name_array.length-1&&j==name_array[i].length-1 ) // end stop in to menu
					document.write(' selected');
				document.write('>' + name_array[i][j] + '</option>');
			}
			if(color_index==max_color_num) color_index = 0;
		}
		document.write("</select>");
	}
	document.write('<input type="button" value="查詢" onClick="query_fare(this.form, ' + LINE_NAME + '_fare)">');
	document.write('</form>');
}

function query_fare(theForm, fare_array){
	var fd = parseInt(theForm.from.value,10);
	var td = parseInt(theForm.to.value,10);
	var price = (fd<=td)?fare_array[td][fd]:fare_array[fd][td];
	document.getElementById("cash_adult").innerHTML = price < 0 ? 'none' : price; // 現金全票
	document.getElementById("cash_half").innerHTML = price < 0 ? 'none' : Math.ceil(price/2); // 現金半票，無條件進位
	document.getElementById("RFID_adult").innerHTML = price < 0 ? 'none' : price-26; // 刷卡全票
	document.getElementById("RFID_half").innerHTML = price < 0 ? 'none' : Math.ceil((price-26)/2); // 刷卡半票，無條件進位
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