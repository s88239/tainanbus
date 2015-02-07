yellow_6_interval_name = ["新營","埤寮","新港東","頂長<br />短樹","菁寮","白沙屯","菁寮<br />國小","後壁<br />火車站"];
yellow_6_interval_stop = [
["新營站","三商","圓環(第一銀行)","文化中心","新營公所","新營高工","中正世家","電力公司"], // 新營
["許丑","埤寮"], // 埤寮
["新港東"], // 新港東
["下長短樹","頂長短樹"], // 頂長短樹
["菁寮","西菁寮"], // 菁寮
["新嘉里","東新嘉","白沙屯"], // 白沙屯
["菁寮國小","菁豐里"], // 菁寮國小
["後壁火車站","後壁區公所"] // 後壁火車站
];
yellow_6_stop_time_consume = [0,2,3,4,6,7,8,9,10,12,14,16,18,20,21,24,25,30,31,40,40];
yellow_6_fare = [
[26],
[26,26],
[26,26,26],
[28,26,26,26],
[33,26,26,26,26],
[41,29,26,26,26,26],
[50,38,33,26,26,26,26],
[67,54,49,39,34,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_6_main_stop_name = ["新營","菁寮","白沙屯","後壁<br />火車站"];
yellow_6_main_stop_time_consume = [0, 20, 25, 40];
yellow_6_important_stop = [0, 2, 3]; // 新營, 白沙屯, 後壁火車站
yellow_6_time_go = [["06:00",0,2],["06:45",0,2],["08:40"],["11:00"],["13:05"],["15:20"],["17:40"]];
yellow_6_time_return = [["06:25",2,0],["07:10",2,0],["09:25"],["11:45"],["13:50"],["16:05"],["18:25"]];