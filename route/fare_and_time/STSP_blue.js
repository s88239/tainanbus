// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_blue_main_stop_name = ["Park 17<br />商場","馨園<br />宿舍","南科<br />實中","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","育成<br />中心","聯電","群創<br />D廠","迎曦湖","Park 17<br />商場"];
STSP_blue_main_stop_time_consume = [0, 3, 8, 3, 7, 10, 13, 16, 17, 19, 21, 24];
STSP_blue_important_stop = [0, 4, 6, 8]; // Park 17商場, 臺鐵南科站, 社區中心, 聯電
var skip_stop = 1; // 馨園宿舍
var skip_stop_2 = 2; // 南科實中
var stop_1 = 3; // 民生水塔
var TRA_NK = 4;
STSP_blue_time_go = [["06:20",[skip_stop,skip_stop_2]],["06:40",[skip_stop,skip_stop_2]],["06:57",[[stop_1,8,TRA_NK+1,1]]],["07:10",[[stop_1,8,TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["07:12",[[stop_1,8,TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],
["07:48",[skip_stop,skip_stop_2,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["07:56",[skip_stop,skip_stop_2,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["07:58",[skip_stop,skip_stop_2,[TRA_NK+1,1,TRA_NK+2,2,TRA_NK+3,1]]],["08:21",[skip_stop,skip_stop_2,[TRA_NK+1,1]]],["08:25",[skip_stop,skip_stop_2,[TRA_NK+1,1]]],["09:05",[skip_stop,skip_stop_2]],
["09:23",[skip_stop,skip_stop_2]],["10:23",[skip_stop,skip_stop_2]],["11:05",[skip_stop,skip_stop_2]],["11:32",[skip_stop,skip_stop_2]],["12:11",[skip_stop,skip_stop_2]],["13:30",[skip_stop,skip_stop_2]],
["14:35",[skip_stop,skip_stop_2]],["15:22",[skip_stop,skip_stop_2]],["16:06",[skip_stop,[skip_stop_2,-3,stop_1,8]]],["16:35",[skip_stop,skip_stop_2]],["17:00",0,TRA_NK,[skip_stop,[skip_stop_2,-3,stop_1,8,TRA_NK,1]]],
["17:00",0,TRA_NK,[skip_stop,[skip_stop_2,-3,stop_1,8,TRA_NK,1]]],["17:20",skip_stop_2,TRA_NK,[[stop_1,8]]],["17:20",skip_stop_2,TRA_NK,[[stop_1,8]]]
];

// The name of return stops are different
STSP_blue_main_stop_name_return = ["Park 17<br />商場","迎曦湖","和鑫<br />光電","瀚宇<br />彩晶","動物<br />中心","華園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_blue_main_stop_time_consume_return = [0, 2, 4, 7, 8, 11, 13, 17, 20, 22, 25];
STSP_blue_important_stop_return = [0, 3, 5, 7]; // Park 17商場, 瀚宇彩晶, 華園宿舍, 臺鐵南科站
STSP_blue_time_return = [["17:10"],["17:38"],["17:41"],["17:50"],["18:05"],["18:20"],["18:25"],["18:59"],["19:20"],["19:50"],
["20:13"],["20:58"],["21:25"]];