yellow_6_interval_name = ["新營","埤寮","新厝","竹新里","新港東","頂長<br />短樹","菁寮","白沙屯","菁寮<br />國小","後壁<br />火車站"];
yellow_6_interval_stop = [ // 2016.1.3 checked
["新營站","三商","圓環(第一銀行)","文化中心","新營公所","新營高工","中正世家","電力公司","許丑"], // 新營
["埤寮"], // 埤寮
["新厝","竹新里","昭安宮"], // 新厝
["太安宮"], // 竹新里
["新港東"], // 新港東
["下長短樹","頂長短樹"], // 頂長短樹
["菁寮","西菁寮","新嘉里"], // 菁寮
["東新嘉","白沙屯"], // 白沙屯
["菁寮國小","菁豐里","後壁區公所"], // 菁寮國小
["後壁火車站"] // 後壁火車站
];
yellow_6_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[36,26,26,26,26],
[47,34,29,26,26,26],
[52,39,34,31,26,26,26],
[60,48,42,39,26,26,26,26],
[69,57,51,48,33,26,26,26,26],
[86,73,68,65,49,39,34,26,26,26]
];
yellow_6_holiday_interval_name = ["新營","埤寮","新港東","頂長<br />短樹","菁寮","白沙屯","菁寮<br />國小","後壁<br />火車站"];
yellow_6_holiday_fare = [
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
yellow_6_main_stop_name = ["新營","竹新里","菁寮","白沙屯","後壁火車站/<br />區公所(發車)"];
yellow_6_main_stop_time_consume = [0, 13, 20, 25, 40];
yellow_6_important_stop = [0, 2, 4]; // 新營, 菁寮, 後壁火車站
var skip_stop = 1; // 竹新里
var start_stop = 0; // 新營
var end_stop = 3; // 白沙屯
yellow_6_time_go = [["05:55",start_stop,end_stop,[skip_stop]],["06:45",start_stop,end_stop,[skip_stop]],
["08:00",[[skip_stop+1,11]]],["11:00",[[skip_stop+1,11]]],["13:05",[[skip_stop+1,11]]],["15:20",[skip_stop]],["17:40",[skip_stop]]];
yellow_6_time_return = [["06:20",end_stop,start_stop,[skip_stop]],["07:10",end_stop,start_stop,[skip_stop]],
["08:55",[[skip_stop,11]]],["11:55",[[skip_stop,11]]],["14:00",[[skip_stop,11]]],["16:05",[skip_stop]],["18:30",[skip_stop]]];
// holiday schedule
yellow_6_holiday_time_go = [["05:55",start_stop,end_stop,[skip_stop]],["06:45",start_stop,end_stop,[skip_stop]],
["08:00",[skip_stop]],["11:00",[skip_stop]],["13:05",[skip_stop]],["15:20",[skip_stop]],["17:40",[skip_stop]]];
yellow_6_holiday_time_return = [["06:20",end_stop,start_stop,[skip_stop]],["07:10",end_stop,start_stop,[skip_stop]],
["08:45",[skip_stop]],["11:45",[skip_stop]],["13:50",[skip_stop]],["16:05",[skip_stop]],["18:30",[skip_stop]]];