orange_3_interval_name = ["善化<br />轉運站","善化","烏橋","蘇厝","安定","港子尾","港口","六塊寮","中崙","和順","北安路","臺南"];
orange_3_interval_stop = [
["善化轉運站","樹人路口"], // 善化轉運站
["善化區公所","移民署","善化","三民路口","圓頂","西善化"], // 善化
["烏橋","西衛"], // 烏橋
["東蘇厝","蘇厝","真護宮"], // 蘇厝
["安定國小","安定區公所","安定","南安定","安定工業區"], // 安定
["港子尾"], // 港子尾
["港口北","中榮里口","許中營","中榮公園","港口","順程公司"], // 港口
["大同里","六塊寮"], // 六塊寮
["中崙"], // 中崙
["沙崙路口","北和順","和順國小","和順","安南醫院","中洲寮保安宮"], // 和順
["北安路四段","清虛宮","培安路口","長溪路口","安中路口","安通路口","聖安街口"], // 北安路
["福安宮","鄭子寮","國際城","六甲里西","西門路四段","小北商場","公園北路","臺南二中","臺南公園(北門路)","臺南火車站","臺南轉運站"] // 臺南
];
orange_3_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[29,26,26,26,26,26],
[39,34,28,26,26,26,26],
[44,39,33,28,26,26,26,26],
[49,44,38,32,26,26,26,26,26],
[56,52,45,40,32,27,26,26,26,26],
[72,67,61,55,47,43,33,28,26,26,26],
[88,83,77,72,63,59,49,44,39,32,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_3_main_stop_name = ["善化<br />轉運站","蘇厝","安定","許中營","港口","中崙","和順","安南<br />醫院","中洲寮<br />保安宮","安通<br />路口","臺南<br />火車站","臺南<br />轉運站"];
orange_3_main_stop_time_consume = [0, 12, 16, 23, 21, 25, 32, 35, 35, 45, 60, 65];
orange_3_important_stop = [0, 2, 7, 8, 10, 11]; // 善化轉運站, 安定, 安南醫院, 中洲寮保安宮, 臺南火車站, 臺南轉運站
var TRA_Shanhua = 0; // 善化轉運站
var Annan_Hospital = 7; // 安南醫院
var Syujhongying = 3; // 許中營
orange_3_time_go = [
["05:55",TRA_Shanhua,Annan_Hospital,[Syujhongying]],["06:10",[Annan_Hospital,[Syujhongying+1,5]]],["09:15",TRA_Shanhua,Annan_Hospital,[Syujhongying]],["10:30",[Syujhongying,Annan_Hospital]],
["12:15",TRA_Shanhua,Annan_Hospital,[Syujhongying]],["14:40",TRA_Shanhua,Annan_Hospital,[Syujhongying]],["15:45",[Annan_Hospital,[Syujhongying+1,5]]],
["17:15",TRA_Shanhua,Annan_Hospital,[Syujhongying]],["19:45",[Annan_Hospital,[Syujhongying+1,5]]]
];
orange_3_time_return = [
["06:30",Annan_Hospital,TRA_Shanhua,[Syujhongying]],["07:30",[Annan_Hospital,[Syujhongying,5]]],["09:55",Annan_Hospital,TRA_Shanhua,[Syujhongying]],["11:40",[Annan_Hospital,Syujhongying]],
["13:00",Annan_Hospital,TRA_Shanhua,[Syujhongying]],["15:30",Annan_Hospital,TRA_Shanhua,[Syujhongying]],["18:10",Annan_Hospital,TRA_Shanhua,[Syujhongying]],
["17:40",[Annan_Hospital,[Syujhongying,5]]],["21:20",[Annan_Hospital,[Syujhongying,5]]]
];