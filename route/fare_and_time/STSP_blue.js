// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_blue_main_stop_name = ["Park 17<br />商場","馨園<br />宿舍","南科<br />實中","民生<br />水塔","陽光<br />大道","蓮潭<br />北二街","聯電<br />宿舍","臺鐵<br />南科站","南科<br />實中","社區<br />中心","育成<br />中心","聯電","聯電<br />P5廠","群創<br />D廠","迎曦湖","Park 17<br />商場"];
STSP_blue_main_stop_time_consume = [0, 4, 10, 3, 8, 9, 12, 7, 10, 13, 16, 17, 18, 20, 22, 25];
STSP_blue_important_stop = [0, 7, 9, 11]; // Park 17商場, 臺鐵南科站, 社區中心, 聯電
var skip_stop = 1; // 馨園宿舍
var skip_stop_2 = 2; // 南科實中
var skip_list_1 = [1, 2]; // 馨園宿舍, 南科實中
var skip_list_2 = [4, 5, 6]; // 陽光大道, 蓮潭北二街, 聯電宿舍
var skip_list_3 = [...skip_list_1, ...skip_list_2];
var stop_1 = 3; // 民生水塔
var TRA_NK = 7;
STSP_blue_time_go = [["06:30",skip_list_3],["06:54",skip_list_3],["07:13",[...skip_list_3,[TRA_NK+2,1,TRA_NK+3,1]]],["07:08",[...skip_list_2,[stop_1,10,TRA_NK+2,1,TRA_NK+3,1]]],["07:20",[...skip_list_2,[skip_stop_2,1,stop_1,10,TRA_NK+2,1,TRA_NK+3,1]]],
["07:46",[...skip_list_3]],["07:48",[...skip_list_1,[TRA_NK,11]]],["08:03",[...skip_list_3]],["08:19",[...skip_list_3,[TRA_NK+1,1]]],["08:25",[...skip_list_3]],["09:09",skip_list_3],
["09:37",skip_list_3],["10:42",skip_list_3],["11:26",skip_list_3],["12:23",skip_list_3],["13:33",skip_list_3],
["14:45",skip_list_3],["15:15",skip_list_3],["16:03",[skip_stop,...skip_list_2,[skip_stop_2,-5,stop_1,10]]],["16:35",skip_list_3],["17:00",0,TRA_NK,[skip_stop,...skip_list_2,[skip_stop_2,-5,stop_1,10,TRA_NK,1]]],
["17:00",0,TRA_NK,[skip_stop,...skip_list_2,[skip_stop_2,-5,stop_1,10,TRA_NK,1]]],["17:18",skip_stop_2,TRA_NK,[...skip_list_2,[stop_1,10]]],["17:18",skip_stop_2,TRA_NK,[...skip_list_2,[stop_1,10]]]
];

// The name of return stops are different
STSP_blue_main_stop_name_return = ["Park 17<br />商場","迎曦湖","群創<br />D廠","聯電<br />P5廠","瀚宇<br />彩晶","動物<br />中心","華園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","聯電宿舍","蓮潭<br />北二街","陽光<br />大道","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_blue_main_stop_time_consume_return = [0, 2, 4, 5, 8, 9, 12, 14, 18, 24, 26, 27, 21, 23, 26];
STSP_blue_important_stop_return = [0, 4, 6, 8]; // Park 17商場, 瀚宇彩晶, 華園宿舍, 臺鐵南科站
var LM_list = [9, 10, 11];
var return_stop_1 = 12;
STSP_blue_time_return = [["17:15",LM_list],["17:37",LM_list],["17:42",[[return_stop_1,11]]],["17:53",LM_list],["18:08",LM_list],["18:45",LM_list],["18:46",LM_list],["18:53",LM_list],["19:14",LM_list],["19:40",LM_list],
["20:09",LM_list],["20:39",LM_list],["21:05",LM_list]];