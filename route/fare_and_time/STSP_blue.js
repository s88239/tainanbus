// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_blue_main_stop_name = ["Park 17<br />商場","馨園<br />宿舍","南科<br />實中","民生<br />水塔","陽光<br />大道","蓮潭<br />北二街","聯電<br />宿舍","臺鐵<br />南科站","南科<br />實中","社區<br />中心","育成<br />中心","聯電","群創<br />D廠","迎曦湖","Park 17<br />商場"];
STSP_blue_main_stop_time_consume = [0, 3, 8, 3, 8, 9, 12, 7, 10, 13, 16, 17, 19, 21, 24];
STSP_blue_important_stop = [0, 7, 9, 11]; // Park 17商場, 臺鐵南科站, 社區中心, 聯電
var skip_stop = 1; // 馨園宿舍
var skip_stop_2 = 2; // 南科實中
var skip_list_1 = [1, 2]; // 馨園宿舍, 南科實中
var skip_list_2 = [4, 5, 6]; // 陽光大道, 蓮潭北二街, 聯電宿舍
var skip_list_3 = [...skip_list_1, ...skip_list_2];
var stop_1 = 3; // 民生水塔
var TRA_NK = 7;
STSP_blue_time_go = [["06:20",skip_list_3],["06:40",skip_list_3],["06:57",[...skip_list_2,[stop_1,8]]],["07:12",[...skip_list_2,[stop_1,8,TRA_NK+2,1,TRA_NK+3,1]]],["07:16",[...skip_list_2,[stop_1,8,TRA_NK+2,1,TRA_NK+3,1]]],
["07:38",[...skip_list_1,[TRA_NK,11]]],["07:56",[...skip_list_3]],["08:03",[...skip_list_3]],["08:19",[...skip_list_3,[TRA_NK+1,1]]],["08:25",[...skip_list_3]],["09:09",skip_list_3],
["09:30",skip_list_3],["10:34",skip_list_3],["11:24",skip_list_3],["12:11",skip_list_3],["13:30",skip_list_3],
["14:39",skip_list_3],["15:15",skip_list_3],["16:01",[skip_stop,...skip_list_2,[skip_stop_2,-3,stop_1,8]]],["16:35",skip_list_3],["17:00",0,TRA_NK,[skip_stop,...skip_list_2,[skip_stop_2,-3,stop_1,8,TRA_NK,1]]],
["17:00",0,TRA_NK,[skip_stop,...skip_list_2,[skip_stop_2,-3,stop_1,8,TRA_NK,1]]],["17:18",skip_stop_2,TRA_NK,[...skip_list_2,[stop_1,8]]],["17:18",skip_stop_2,TRA_NK,[...skip_list_2,[stop_1,8]]]
];

// The name of return stops are different
STSP_blue_main_stop_name_return = ["Park 17<br />商場","迎曦湖","群創<br />D廠","瀚宇<br />彩晶","動物<br />中心","華園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","聯電宿舍","蓮潭<br />北二街","陽光<br />大道","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_blue_main_stop_time_consume_return = [0, 2, 4, 7, 8, 11, 13, 17, 23, 25, 26, 20, 22, 25];
STSP_blue_important_stop_return = [0, 3, 5, 7]; // Park 17商場, 瀚宇彩晶, 華園宿舍, 臺鐵南科站
var LM_list = [8, 9, 10];
var return_stop_1 = 11;
STSP_blue_time_return = [["17:15",LM_list],["17:35",LM_list],["17:40",[[return_stop_1,11]]],["17:50",LM_list],["18:03",LM_list],["18:20",LM_list],["18:27",LM_list],["18:57",LM_list],["19:17",LM_list],["19:44",LM_list],
["20:17",LM_list],["20:44",LM_list],["21:16",LM_list]];