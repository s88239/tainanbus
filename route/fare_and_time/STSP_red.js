// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_red_main_stop_name = ["Park 17<br />商場","馨園<br />宿舍","南科<br />實中","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","晶圓<br />S1廠","東捷<br />科技","應材製<br />造中心","廣停3","南科健康<br />生活館","台灣<br />康寧","住華<br />科技","晶電<br />S3廠","Park 17<br />商場"];
STSP_red_main_stop_time_consume = [0, 0, 5, 3, 7, 10, 13, 15, 17, 18, 20, 22, 23, 24, 26, 29];
STSP_red_important_stop = [0, 4, 6, 13]; // Park 17商場, 臺鐵南科站, 社區中心, 住華科技
var skip_list = [1, 2]; // 馨園宿舍, 南科實中
var stop_1 = 1; // 馨園宿舍
var stop_2 = 2; // 南科實中
var stop_3 = 3; // 民生水塔
var TRA_NK = 4;
var life_hub = 6; // 社區中心
var stop_4 = 11; // 南科健康生活館
var stop_5 = 14; // 晶電S3廠
STSP_red_time_go = [["06:29",[stop_1,stop_2,[stop_5,1]]],["06:13",stop_1,TRA_NK+1,['*',stop_2,stop_3,[TRA_NK,16,TRA_NK+1,1]]],
["06:54",[stop_1,stop_2]],["06:48",stop_1,TRA_NK+1,[stop_3,[TRA_NK,6]]],["07:14",[stop_1,stop_2,[life_hub,1,life_hub+1,2]]],
["07:15",stop_1,TRA_NK+1,[stop_3,[stop_2,1,TRA_NK,5]]],["07:23",[stop_1,stop_2,[life_hub,1,life_hub+1,2]]],
["07:45",[stop_1,stop_2,[TRA_NK+2,1,TRA_NK+3,1]]],["07:49",[stop_1,stop_2,[TRA_NK+2,1,TRA_NK+3,1]]],
["07:58",[stop_1,stop_2,[life_hub+1,2]]],["08:18",[stop_1,stop_2]],["08:23",[stop_1,stop_2]],["09:08",[stop_1,stop_2]],
["09:38",[stop_1,stop_2]],["10:16",[stop_1,stop_2]],["11:25",[stop_1,stop_2]],["12:24",[stop_1,stop_2]],["13:32",[stop_1,stop_2]],
["14:21",[stop_1,stop_2]],["15:45",[stop_1,stop_2]],["16:16",[stop_1,stop_2]]
];

// The name of return stops are different
STSP_red_main_stop_name_return = ["Park 17<br />商場","群創<br />C廠","台達電","台灣<br />康寧","南科健康<br />生活館","廣停3","漢民<br />科技","東捷<br />科技","茂迪","華園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_red_main_stop_time_consume_return = [0, 3, 6, 7, 8, 9, 10, 11, 13, 16, 18, 22, 25, 27, 30];
STSP_red_important_stop_return = [0, 2, 9, 11]; // Park 17商場, 台達電, 華園宿舍, 臺鐵南科站
STSP_red_time_return = [["17:03"],["17:30"],["17:37",[[1,1]]],["17:49"],["18:03"],["18:40"],["19:08"],["19:40"],["20:30"],["21:00"]];