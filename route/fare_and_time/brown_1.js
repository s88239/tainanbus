brown_1_interval_name = ["新營","茄苳腳","鹽水","後寮","番子寮","孫厝寮","羊稠厝","頂洲","紅茄萣","新芳里","紅茄里","北紅茄萣","新渡子頭","渡子頭","南鯤鯓","雙春","雙春濱海<br />遊憩區"];
brown_1_interval_stop = [ // 2017.12.08 checked
["新營站","中營興業里","第一市場","中山路","圓環(第一銀行)","新營醫院","齊普","新營魚市場","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","護庇宮","鹽水","鹽水地政事務所","月津國小","鹽水壽園"], // 鹽水
["後寮"], // 後寮
["番子寮"], // 番子寮
["孫厝寮","南孫厝寮"], // 孫厝寮
["羊稠厝"], // 羊稠厝
["頑皮世界","頂洲"], // 頂洲
["紅茄萣"], // 紅茄萣
["新芳里"], // 新芳里
["紅茄里"], // 紅茄里
["北紅茄萣"], // 北紅茄萣
["新渡仔頭"], // 新渡子頭
["渡仔頭","新圍"], // 渡子頭
["南鯤鯓"], // 南鯤鯓
["橋北","永春","雙春"], // 雙春
["雙春濱海休憩園區","蚵寮","小蚵寮","北門橋頭","北門","北門區公所","西山","北門國中"] // 雙春濱海遊憩區
];
brown_1_fare = [
[26],
[26,26],
[29,26,26],
[38,26,26,26],
[44,26,26,26,26],
[50,30,26,26,26,26],
[54,34,26,26,26,26,26],
[59,39,31,26,26,26,26,26],
[63,43,35,26,26,26,26,26,26],
[66,46,37,28,26,26,26,26,26,26],
[69,49,40,31,26,26,26,26,26,26,26],
[72,52,43,34,27,26,26,26,26,26,26,26],
[77,57,48,39,33,27,26,26,26,26,26,26,26],
[81,61,53,43,37,31,27,26,26,26,26,26,26,26],
[92,72,63,54,47,42,38,33,26,26,26,26,26,26,26],
[101,81,72,63,56,51,47,42,37,35,32,29,26,26,26,26],
[109,89,80,71,64,59,55,50,45,43,40,37,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_1_main_stop_name = ["新營站","第一市場","鹽水","頑皮世界","新芳里","南鯤鯓","北門國中","雙春","雙春濱海<br />休憩園區"];
brown_1_main_stop_time_consume = [0, 4, 22, 34, 39, 52, 60, 57, 60];
brown_1_important_stop = [0, 2, 3, 5, 8]; // 新營站, 鹽水, 頑皮世界, 南鯤鯓, 雙春濱海休憩園區
var Sinying = 0; // 新營
var First_Market = 1; // 第一市場
var Yanshuei = 2; // 鹽水
var Wanpi_World = 3; // 頑皮世界
var Sinfang_Vil = 4; // 新芳里
var Nankunshen = 5; // 南鯤鯓
var beimen_juniorhigh = 6; // 北門國中
var Shuangchun = 7; // 雙春
var Shuangchun_Area = 8; // 雙春濱海休憩園區
brown_1_time_go = [["06:20",Sinying,beimen_juniorhigh,[[Yanshuei,-1,Nankunshen,1]]],["07:20",[beimen_juniorhigh,[Yanshuei,-1,Wanpi_World,1,Shuangchun,-1,Shuangchun_Area,1]]],["09:45",[beimen_juniorhigh,[Wanpi_World,1,Nankunshen,1,Shuangchun,-1,Shuangchun_Area,4]]],["10:20",[beimen_juniorhigh,[Yanshuei,-1,Nankunshen,1,Shuangchun_Area,5]]],["11:05",Sinying,beimen_juniorhigh],["11:45",[beimen_juniorhigh,[Wanpi_World,1,Nankunshen,1,Shuangchun,-1,Shuangchun_Area,4]]],["14:25",[beimen_juniorhigh,[Wanpi_World,1,Sinfang_Vil,1,Nankunshen,1,Shuangchun_Area,2]]],["16:05",Sinying,beimen_juniorhigh,[[Wanpi_World,1,Sinfang_Vil,1,beimen_juniorhigh,-2]]],["17:50",[beimen_juniorhigh,[First_Market,1,Yanshuei,4,Wanpi_World,4,Sinfang_Vil,1,Nankunshen,3,Shuangchun,-1,Shuangchun_Area,3]]]];
brown_1_time_return = [["05:50",Shuangchun,Sinying,[beimen_juniorhigh,[Sinfang_Vil,1,Wanpi_World,3,Yanshuei,4]]],["07:25",beimen_juniorhigh,Sinying,[[Nankunshen,-1,Sinfang_Vil,1,Yanshuei,1,First_Market,-1]]],["08:35",[beimen_juniorhigh,[Yanshuei,1,First_Market,2,Sinying,2]]],["11:00",[beimen_juniorhigh,[Nankunshen,1,Yanshuei,2,Sinying,2]]],["11:35",[beimen_juniorhigh,[Nankunshen,1,Yanshuei,2,Sinying,2]]],["12:10",beimen_juniorhigh,Sinying,[[Nankunshen,-1,Sinfang_Vil,1,Wanpi_World,1,Yanshuei,1,First_Market,-1,Sinying,-1]]],["13:00",[beimen_juniorhigh,[Nankunshen,1,Yanshuei,2,Sinying,2]]],["15:40",[beimen_juniorhigh,[Nankunshen,1,Sinfang_Vil,1,Yanshuei,3]]],["17:10",beimen_juniorhigh,Sinying,[[Nankunshen,1,Yanshuei,1,First_Market,6,Sinying,2]]]];