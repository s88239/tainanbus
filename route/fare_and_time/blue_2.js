blue_2_interval_name = ["佳里","佳里興","大灣","學甲","東中洲","溪底寮","三寮灣","蘆竹溝","三寮灣","北門","南鯤鯓"];
blue_2_interval_stop = [
["佳里站","佳里公園"], // 佳里
["蕭壠文化園區","北門農工","奇美佳里分院","佳里興","佳里興北"], // 佳里興
["營頂","溪州","大灣","清濟宮"], // 大灣
["中華、華宗路口","東寮","學甲區公所","學甲","學甲市場","西學甲","下溪洲"], // 學甲
["光華","東中洲"], // 東中洲
["西廍","二重港","溪底寮","文山派出所"], // 溪底寮
["東三寮灣","三寮灣"], // 三寮灣
["蘆竹溝"], // 蘆竹溝
["三寮灣","東三寮灣"],
["文山派出所","北門國中","西保宮","溪仔寮","泰安宮","井仔腳","西山"], // 溪底寮
["北門區公所","北門","北門橋頭"], // 北門
["小蚵寮","蚵寮","南鯤鯓"] // 南鯤鯓
];
blue_2_fare = [
[26],
[26,26],
[26,26,26],
[27,26,26,26],
[36,26,26,26,26],
[45,34,27,26,26,26],
[53,42,35,26,26,26,26],
[59,48,41,32,26,26,26,26],
[53,42,35,26,26,26,26,26,26],
[45,34,27,26,26,26,26,26,26,26],
[56,45,38,29,26,26,26,26,26,26,26],
[66,55,48,39,29,26,29,34,29,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
blue_2_main_stop_name = ["佳里站","奇美<br />佳里分院","大灣","學甲","東中洲","溪底寮","北門國中","井仔腳","北門","南鯤鯓"];
blue_2_main_stop_time_consume = [0, 5, 10, 15, 20, 24, 27, 30, 37, 45];
blue_2_important_stop = [0, 3, 7, 9]; // 佳里站, 學甲, 井仔腳, 南鯤鯓
var Beimen_Junior_High_School = 6;
var Jingzihjiao = 7;
var Beimen = 8;
var Nankunshen = 9;
blue_2_time_go = [["05:50",['繞',Jingzihjiao]],["06:30",['繞',Jingzihjiao]],["08:00"],["09:10"],["11:00"],["12:10"],["13:20"],["14:30"],
["15:50",[Jingzihjiao,[Beimen,-7,Nankunshen,-3]]],["17:30"],["18:30"],["19:50",[Jingzihjiao,[Beimen,-2,Nankunshen,-3]]],["20:30",[Jingzihjiao,[Beimen,-7,Nankunshen,-3]]],["21:10",[Jingzihjiao,[Beimen,-7,Nankunshen,-3]]],["22:00",[Jingzihjiao,[Beimen,-7,Nankunshen,-3]]]];
blue_2_time_return = [["06:35",[Jingzihjiao,[Beimen_Junior_High_School,-5]]],["07:15",[Jingzihjiao,[Beimen_Junior_High_School,-5]]],["08:45"],["09:55"],["11:45"],["12:55"],["14:05"],["15:15"],
["16:45",['繞',Jingzihjiao]],["18:15"],["19:15"],["20:30",[Jingzihjiao,[Beimen,-3,Beimen_Junior_High_School,-7]]],["21:10",[Jingzihjiao,[Beimen,-3,Beimen_Junior_High_School,-7]]],["22:00",[Jingzihjiao,[Beimen,-3,Beimen_Junior_High_School,-7]]],["22:35",[Jingzihjiao,[Beimen,-3,Beimen_Junior_High_School,-7]]]];