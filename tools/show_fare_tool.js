var HIGHWAY_CARD_PRICE_RATIO = 0.87842; // Card price = Cash price * HIGHWAY_CARD_PRICE_RATIO
var HIGHWAY_CARD_PRICE_BASE = 22; // The card price for distance within 8 km
var HIGHWAY_CARD_PRICE_DISCOUNT = 0; // Discount for the highway bus of Hsinyin Bus

function create_select_menu(name_array, color_name, LINE_NAME, fare_type){ // print the fare menu
	var max_color_num = 4;
	if(color_name=='highway_bus' || color_name=='tour_bus' || color_name=='city_bus'){
		color_name = 'blue';
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
	document.write('<input type="button" value="查詢" onClick="query_fare(this.form, ' + LINE_NAME + '_fare, \'' + fare_type + '\')">');
	document.write('</form>');
}

function query_fare(theForm, fare_array, fare_type){
	var fd = parseInt(theForm.from.value,10);
	var td = parseInt(theForm.to.value,10);
	var price = (fd<=td)?fare_array[td][fd]:fare_array[fd][td];
	
	switch(fare_type){
		case '8km':
			card_price = price - 26;
			break;
		case '8km18':
			card_price = Math.round(price * HIGHWAY_CARD_PRICE_RATIO) - HIGHWAY_CARD_PRICE_DISCOUNT;
			break;
		case 'Kaohsiung':
			card_price = price;
			document.getElementById("card_adult").innerHTML = (card_price > 60) ? 60 : card_price; // 收費最高上限60元
			document.getElementById("card_half").innerHTML = Math.ceil(price / 2); // 半票不適用一卡通優惠
			break;
		case 'Highway': // estimated price for using RFID card by multiplying HIGHWAY_CARD_PRICE_RATIO
			card_price = Math.round(price * HIGHWAY_CARD_PRICE_RATIO);
			break;
		case 'highway': // real price for using RFID card
			card_price = (fd<td) ? fare_array[fd][td]: (fd==td) ? 22 : fare_array[td][fd];
			break;
		case '8050':
			card_price = (fd<td) ? fare_array[fd][td]: (fd==td) ? 22 : fare_array[td][fd];
			var citizen_card_price = card_price - HIGHWAY_CARD_PRICE_BASE;
			document.getElementById("card_adult").innerHTML = citizen_card_price;
			document.getElementById("card_half").innerHTML = Math.floor(citizen_card_price/2);
			break;
		default:
			card_price = price;
			break;
	}
	document.getElementById("cash_adult").innerHTML = price < 0 ? 'none' : price; // 現金全票
	document.getElementById("cash_half").innerHTML = price < 0 ? 'none' : Math.ceil(price/2); // 現金半票，無條件進位
	document.getElementById("RFID_adult").innerHTML = price < 0 ? 'none' : card_price; // 刷卡全票
	document.getElementById("RFID_half").innerHTML = price < 0 ? 'none' : Math.ceil(card_price/2); // 刷卡半票，無條件進位
}

function print_fare_table(interval_name, fare, color, fare_type){ // the function fo showing or hiding the fare table
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
			else{
				switch(fare_type) {
					case '8km':
						card_price = fare[j][i] - 26;
						break;
					case '8km18':
						card_price = Math.round(fare[j][i] * HIGHWAY_CARD_PRICE_RATIO) - HIGHWAY_CARD_PRICE_DISCOUNT;
						break;
					case 'Kaohsiung':
						card_price = fare[j][i];
						break;
					case '8050':
					case 'highway':
						card_price = fare[i][j];
						break;
					default:
						card_price = fare[j][i];
						break;
				}
				(fare[j][i] < 0) ? document.write('<td>-</td>') : document.write('<td>' + card_price + '</td>');
			}
		}
		document.write('</tr>');
	}
	document.write('</table>');
	document.write('<b>左方為現金價格，右方為刷電子票證價格</b><br /></div>');
}