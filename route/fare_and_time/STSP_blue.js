// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_blue_main_stop_name = ["Park 17<br />商場","南科<br />實中","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","育成<br />中心","聯電","群創<br />D廠","迎曦湖","Park 17<br />商場"];
STSP_blue_main_stop_time_consume = [0, 5, 3, 7, 10, 13, 16, 17, 19, 21, 24];
STSP_blue_important_stop = [0, 3, 5, 7]; // Park 17商場, 臺鐵南科站, 社區中心, 聯電
var skip_stop = 1; // 南科實中
var TRA_NK = 3;
STSP_blue_time_go = [["06:20",[skip_stop]],["06:40",[skip_stop]],["07:05",[skip_stop,[TRA_NK+1,1]]],["07:18",[skip_stop,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["07:20",[skip_stop,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],
["07:48",[skip_stop,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["07:56",[skip_stop,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["07:58",[skip_stop,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["08:21",[skip_stop,[TRA_NK+1,1]]],["08:25",[skip_stop,[TRA_NK+1,1]]],["09:05",[skip_stop]],
["09:23",[skip_stop]],["10:37",[skip_stop]],["11:05",[skip_stop]],["11:32",[skip_stop]],["12:11",[skip_stop]],["13:30",[skip_stop]],
["14:35",[skip_stop]],["15:22",[skip_stop]],["16:06",[[skip_stop+1,5]]],["16:35",[skip_stop]],["17:00",0,TRA_NK,[[skip_stop+1,5,TRA_NK,1]]],
["17:00",0,TRA_NK,[[skip_stop+1,5,TRA_NK,1]]],["17:20",skip_stop,TRA_NK,[[skip_stop+1,5]]],["17:20",skip_stop,TRA_NK,[[skip_stop+1,5]]]
];

// The name of return stops are different
STSP_blue_main_stop_name_return = ["Park 17<br />商場","迎曦湖","和鑫<br />光電","瀚宇<br />彩晶","動物<br />中心","華園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_blue_main_stop_time_consume_return = [0, 2, 4, 7, 8, 11, 13, 17, 20, 22, 25];
STSP_blue_important_stop_return = [0, 3, 5, 7]; // Park 17商場, 瀚宇彩晶, 華園宿舍, 臺鐵南科站
STSP_blue_time_return = [["17:10"],["17:38"],["17:41"],["17:50"],["18:05"],["18:20"],["18:25"],["18:59"],["19:20"],["19:50"],
["20:13"],["20:58"],["21:25"]];