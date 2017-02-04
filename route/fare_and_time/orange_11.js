orange_11_interval_name = ["下營","中營","麻豆","安業","謝厝寮","後營","西港","海寮","管寮","南安","港口","六塊寮","中崙","和順","北安路","臺南"];
orange_11_interval_stop = [ // 2017.02.04 checked
["下營公所","下營廟前","下營衛生所","給水站","右武衛公園"], // 下營
["中營路口","中營"], // 中營
["關帝廟","麻豆監理站","小埤頭","新樓醫院","麻豆轉運站","圓環","電姬戲院","麻豆分局","巷口","黎明中學","後寮","四六廍"], // 麻豆
["東勢","派出所","南安業"], // 安業
["後壁寮","謝厝寮"], // 謝厝寮
["太西","後營"], // 後營
["西港里","西港國中","西港","南西港"], // 西港
["海寮"], // 海寮
["管寮"], // 管寮
["南安宮","油車","安定納骨塔"], // 南安
["港口西","順程公司"], // 港口
["大同里","六塊寮"], // 六塊寮
["中崙"], // 中崙
["沙崙路口","北和順","和順國小","和順","安南醫院","中洲寮保安宮"], // 和順
["北安路四段","清虛宮","培安路口","長溪路口","安中路口","安通路口","聖安街口"], // 北安路
["福安宮","鄭子寮","國際城","六甲里西","小北商場","公園北路","臺南二中","臺南公園(北門路)","臺南火車站","臺南公園(公園路)"] // 臺南
];
orange_11_fare = [
[26],
[26,26],
[40,29,26],
[53,42,26,26],
[57,47,26,26,26],
[63,53,26,26,26,26],
[72,62,33,26,26,26,26],
[82,71,42,29,26,26,26,26],
[87,77,48,34,30,26,26,26,26],
[92,81,52,39,34,28,26,26,26,26],
[96,86,57,43,39,33,26,26,26,26,26],
[101,91,62,49,44,38,29,26,26,26,26,26],
[106,95,66,53,49,43,34,26,26,26,26,26,26],
[114,103,74,61,56,50,41,32,26,26,26,26,26,26],
[129,119,90,76,72,66,57,47,42,37,33,28,26,26,26],
[145,135,106,92,88,82,73,63,58,53,49,44,39,32,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_11_main_stop_name = ["下營<br />公所","中營","麻豆<br />轉運站","黎明<br />中學","西港","南安宮","中崙","和順","安南<br />醫院","安通<br />路口","臺南<br />火車站","臺南公園<br />(公園路)"];
orange_11_main_stop_time_consume = [0, 8, 25, 32, 45, 58, 65, 69, 70, 80, 95, 100];
orange_11_important_stop = [0, 2, 4, 8, 10, 11]; // 下營公所, 麻豆轉運站, 西港, 安南醫院, 臺南火車站, 臺南公園(公園路)
var Hsiaying = 0; // 下營公所
var start_stop = 2; // 麻豆轉運站
var end_stop = 4; // 西港
var AnNan_hospital = 8; // 安南醫院
orange_11_time_go = [["05:45",start_stop,end_stop],["05:50",[AnNan_hospital]],["06:30",start_stop,end_stop],["06:35",Hsiaying,AnNan_hospital],["08:30",start_stop,end_stop],["09:40",[AnNan_hospital]],
["10:40",start_stop,end_stop],["10:50",Hsiaying,AnNan_hospital],["12:30",start_stop,end_stop],["13:45",start_stop,end_stop],["14:50",[AnNan_hospital]],["17:00",start_stop,end_stop],["16:50",Hsiaying,AnNan_hospital],["18:35",start_stop,end_stop],
["19:15",start_stop,end_stop],["21:00",start_stop,end_stop],["22:05",start_stop,end_stop]];
orange_11_time_return = [["06:15",end_stop,start_stop],["06:55",end_stop,start_stop],["08:00",AnNan_hospital,Hsiaying],["09:00",end_stop,start_stop],["08:45",[AnNan_hospital]],["11:15",end_stop,start_stop],
["12:25",AnNan_hospital,Hsiaying],["13:10",end_stop,start_stop],["12:35",[AnNan_hospital]],["14:15",end_stop,start_stop],["17:20",end_stop,start_stop],["17:35",[AnNan_hospital]],["18:45",AnNan_hospital,Hsiaying],["19:45",end_stop,start_stop],
["20:40",end_stop,start_stop],["21:40",end_stop,start_stop],["22:40",end_stop,start_stop]];