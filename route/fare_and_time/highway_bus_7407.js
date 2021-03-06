highway_bus_7407_interval_name = ["新營","茄苳腳","鹽水","牛稠仔","厚生橋","義竹","角帶圍","新庄","東後寮","溪洲","牛挑灣<br />(國小)","竹仔腳","鴨母寮","朴子"];
highway_bus_7407_interval_stop = [
["新營站","圓環","三民路口","齊普","新營漁市場","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","鹽水","鹽水分駐所","鹽水國中"], // 鹽水
["岸內","義稠里","牛稠仔"], // 牛稠仔
["厚生橋"], // 厚生橋
["義竹國小","義竹","義竹加油站","義竹國中"], // 義竹
["角帶圍"], // 角帶圍
["新庄","農場口"], // 新庄
["東後寮"], // 東後寮
["南溪洲","溪洲"], // 溪洲
["後松華","梅華","東牛挑灣","前松華","松梅國小","松華里"], // 牛挑灣(國小)
["竹仔腳"], // 竹仔腳
["鴨母寮","朴子工業區","水蓮社區","橋頭"], // 鴨母寮
["朴子加油站","新榮路(蔡眼科)","朴子"] // 朴子
];
highway_bus_7407_fare = [
[25],
[25,25],
[25,25,25],
[29,25,25,25],
[32,25,25,25,25],
[35,25,25,25,25,25],
[41,25,25,25,25,25,25],
[46,31,25,25,25,25,25,25],
[51,36,27,25,25,25,25,25,25],
[58,42,33,29,25,25,25,25,25,25],
[64,49,40,36,32,30,25,25,25,25,25],
[72,56,47,43,39,37,31,26,25,25,25,25],
[75,60,51,46,42,40,34,29,25,25,25,25,25],
[88,73,64,60,56,54,48,42,37,31,25,25,25,25]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
highway_bus_7407_main_stop_name = ["新營站","鹽水","義竹","東後寮","梅華","松梅國小<br />(牛挑灣)","朴子"];
highway_bus_7407_main_stop_time_consume = [0, 18, 25, 34, 41, 44, 60];
highway_bus_7407_important_stop = [0, 1, 6]; // 新營站, 鹽水, 朴子
highway_bus_7407_time_go = [["06:00",['L']],["07:40"],["09:10"],["11:20"],["13:20"],["14:30"],["15:45"],["17:10"],["18:20"]];

highway_bus_7407_main_stop_name_return = ["朴子","梅華","松梅國小<br />(牛挑灣)","東後寮","義竹","鹽水","新營站"];
highway_bus_7407_main_stop_time_consume_return = [0, 14, 16, 21, 30, 37, 60];
highway_bus_7407_important_stop_return = [0, 5, 6]; // 朴子, 鹽水, 新營站
highway_bus_7407_time_return = [["06:00"],["07:10",['L']],["08:45"],["10:25"],["12:30"],["14:25"],["15:35"],["17:00"],["18:20"]];