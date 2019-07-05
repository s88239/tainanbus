brown_11_interval_name = ["學甲","宅子港","新芳里","紅茄萣","頂洲","頑皮世界"];
brown_11_interval_stop = [ // 2015.09.14 checked
["學甲(民權路)","學甲(中正路)","學甲","學甲國中","學甲工業區"], // 學甲
["德安寮","宅子港"], // 宅子港
["新芳里"], // 新芳里
["紅茄萣"], // 紅茄萣
["頂洲"], // 頂洲
["頑皮世界"] // 頑皮世界
];
brown_11_fare = [
[26],
[26,26],
[26,26,26],
[29,26,26,26],
[31,26,26,26,26],
[36,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_11_main_stop_name = ["學甲<br />(民權路)","新芳里","頂洲","頑皮世界"];
brown_11_main_stop_time_consume = [0, 15, 20, 25];
brown_11_important_stop = [0, 3]; // 學甲(民權路), 頑皮世界
var Syuejia = 0;
var Sinfang_Vil = 1;
var Dingjhou = 2;
var Wanpi_World = 3;
brown_11_time_go = [["06:15",['L',[Sinfang_Vil,-2,Dingjhou,-1,Wanpi_World,-2]]],["07:00",['L']],["10:40",['L']],["13:40",['L']],["17:00",['L']],["18:00",['L']]];
brown_11_time_return = [["06:35",['L',[Dingjhou,-2,Syuejia,2]]],["07:25",['L',[Dingjhou,-2,Syuejia,2]]],["11:05",['L',[Dingjhou,-2,Syuejia,2]]],["14:05",['L',[Dingjhou,-2,Syuejia,2]]],["17:25",['L',[Dingjhou,-2,Syuejia,2]]],["18:25",['L',[Dingjhou,-2,Syuejia,2]]]];