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
	document.getElementById("cash_half").innerHTML = (price/2).toFixed(0); // 現金半票
	document.getElementById("RFID_adult").innerHTML = price-26; // 刷卡全票
	document.getElementById("RFID_half").innerHTML = ((price-26)/2).toFixed(0); // 刷卡半票
}