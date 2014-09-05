orange_3_interval_name = ["善化<br />火車站","善化","烏橋","蘇厝","安定","港子尾","港口","六塊寮","中崙","和順","北安路","臺南"];
orange_3_interval_stop = [
["善化火車站"], // 善化火車站
["樹人路口","善化公所","善化","三民路口","圓頂","西善化"], // 善化
["烏橋","西衛"], // 烏橋
["東蘇厝","蘇厝","真護宮"], // 蘇厝
["安定國小","安定公所","安定","南安定","安定工業區"], // 安定
["港子尾"], // 港子尾
["港口北","中榮里口","港口","順程公司"], // 港口
["大同里","六塊寮"], // 六塊寮
["中崙","沙崙路口"], // 中崙
["北和順","和順國小","和順","安南醫院","中洲寮保安宮"], // 和順
["北安路四段","清虛宮","培安路口","長溪路口","安中路口","安通路口","聖安街口"], // 北安路
["福安宮","鄭子寮","國際城","六甲里西","小北商場","公園北路","臺南二中","臺南公園(北門路)","臺南火車站","臺南公園(公園路)"] // 臺南
];
orange_3_stop_time_consume = [0,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,30,30,31,34,35,37,39,40,41,43,44,45,46,47,49,51,52,53,58];
orange_3_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[29,26,26,26,26,26],
[35,30,26,26,26,26,26],
[40,35,29,26,26,26,26,26],
[44,40,34,28,26,26,26,26,26],
[52,47,41,36,28,26,26,26,26,26],
[68,63,57,51,43,38,33,28,26,26,26],
[84,79,73,67,59,54,49,44,39,32,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_3_main_stop_name = ["善化<br />火車站","蘇厝","安定","港口","中崙","和順","安南<br />醫院","中洲寮<br />保安宮","安通<br />路口","臺南<br />火車站","臺南公園<br />(公園路)"];
orange_3_main_stop_time_consume = [0, 12, 16, 21, 25, 29, 30, 30, 40, 53, 58];
orange_3_important_stop = [0, 2, 6, 7, 9, 10]; // 善化火車站, 安定, 安南醫院, 中洲寮保安宮, 臺南火車站, 臺南公園(公園路)
orange_3_time_go = [["06:00",[6,[9,7]]],["06:30",0,6],["09:15",0,6],["12:15",0,6],["14:40",0,6],["15:45",[6,[9,7]]],["17:15",0,6],["19:45",[6,[9,7]]]];
orange_3_time_return = [["07:00",6,0],["07:30",[6,[8,7]]],["09:55",6,0],["13:00",6,0],["15:30",6,0],["17:45",6,0],["17:40",[6,[8,7]]],["21:20",[6,[8,7]]]];