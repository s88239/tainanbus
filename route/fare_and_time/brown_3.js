brown_3_interval_name = ["新營","茄苳腳","鹽水","太子宮","角帶里","姑爺","竹埔","南港里"];
brown_3_interval_stop = [ // 2015.09.14 checked
["新營站","中營興業里","圓環(第一銀行)","新營醫院","民治市政中心","新營高工","中正世家","電力公司","新營體育場","育德工家","新北里","營新醫院","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","護庇宮","鹽水","鹽水地政事務所","新太、四維路口"], // 鹽水
["太子宮","太北里","南太子宮","太子國中"], // 太子宮
["角帶里"], // 角帶里
["姑爺","桐寮里"], // 姑爺
["北竹埔","竹埔","南竹埔","竹埔國小"], // 竹埔
["下林里","南港里"] // 南港里
];
brown_3_fare = [
[26],
[26,26],
[35,26,26],
[49,26,26,26],
[55,29,26,26,26],
[58,32,26,26,26,26],
[64,38,29,26,26,26,26],
[70,44,34,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_3_main_stop_name = ["新營站","民治<br />市政中心","統聯<br />客運","鹽水","太子宮","桐寮里","竹埔","南港里"];
brown_3_main_stop_time_consume = [0, 6, 15, 22, 29, 34, 37, 40];
brown_3_important_stop = [0, 3, 7]; // 新營站, 鹽水, 南港里
var Minjhih_Civic_Center = 1; // 民治市政中心
var Ubus = 2; // 統聯客運
var Yanshuei = 3; // 鹽水
var Taizih_Temple = 4; // 太子宮
var Tongliao_Vil = 5; // 桐寮里
var Jhupu = 6; // 竹埔
var Nangang_Vil = 7; // 南港里
brown_3_time_go = [["05:50",['L',[Ubus,-2,Jhupu,1,Nangang_Vil,1]]],
["10:00",[[Ubus,2,Tongliao_Vil,-1,Nangang_Vil,-1]]],
["12:25"],
["17:30",['L',[Ubus,7,Yanshuei,3,Taizih_Temple,1,Jhupu,1]]]];
brown_3_time_return = [["06:40",['L',[Ubus,3,Minjhih_Civic_Center,7]]],
["10:50",[[Jhupu,-1,Yanshuei,-2,Ubus,2,Minjhih_Civic_Center,1]]],
["13:15",[[Jhupu,-1,Yanshuei,-1,Ubus,1,Minjhih_Civic_Center,1]]],
["18:30",['L',[Jhupu,-1,Yanshuei,-1,Ubus,1,Minjhih_Civic_Center,1]]]];