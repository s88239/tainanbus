// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_red_main_stop_name = ["Park 17<br />商場","璞園<br />宿舍","馨園<br />宿舍","南科<br />實中","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","晶圓<br />S1廠","東捷<br />科技","應材製<br />造中心","廣停3","南科健康<br />生活館","台灣<br />康寧","住華<br />科技","晶電<br />S3廠","Park 17<br />商場"];
STSP_red_main_stop_time_consume = [0, 0, 2, 7, 3, 7, 10, 13, 15, 17, 18, 20, 22, 23, 24, 26, 29];
STSP_red_important_stop = [0, 5, 7, 14]; // Park 17商場, 臺鐵南科站, 社區中心, 住華科技
var skip_list = [1, 2, 3]; // 璞園宿舍, 馨園宿舍, 南科實中
var stop_1 = 1; // 璞園宿舍
var stop_2 = 3; // 南科實中
var stop_3 = 4; // 民生水塔
var TRA_NK = 5;
var life_hub = 7; // 社區中心
var stop_4 = 12; // 南科健康生活館
var stop_5 = 15; // 晶電S3廠
STSP_red_time_go = [["06:25",[...skip_list,[stop_5,1]]],["06:11",stop_1,TRA_NK+1,['*',stop_2,stop_3,[TRA_NK,18,TRA_NK+1,1]]],
["06:52",[...skip_list]],["06:46",stop_1,TRA_NK+1,[stop_3,[TRA_NK,8]]],["07:14",[...skip_list,[life_hub,1,life_hub+1,2]]],
["07:06",stop_1,TRA_NK+1,[stop_3,[stop_2,1,TRA_NK,7]]],["07:21",[...skip_list,[life_hub,1,life_hub+1,2]]],
["07:43",[...skip_list,[TRA_NK+2,1,TRA_NK+3,1]]],["07:49",[...skip_list,[TRA_NK+2,1,TRA_NK+3,1]]],
["07:58",[...skip_list,[life_hub+1,2]]],["08:18",[...skip_list]],["08:23",[...skip_list]],["09:08",[...skip_list]],
["09:43",[...skip_list]],["10:23",[...skip_list]],["11:25",[...skip_list]],["12:24",[...skip_list]],["13:34",[...skip_list]],
["14:19",[...skip_list]],["15:45",[...skip_list]],["16:16",[...skip_list]]
];

// The name of return stops are different
STSP_red_main_stop_name_return = ["Park 17<br />商場","群創<br />C廠","台達電","台灣<br />康寧","南科健康<br />生活館","廣停3","漢民<br />科技","東捷<br />科技","茂迪","華園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","璞園<br />宿舍","Park 17<br />商場"];
STSP_red_main_stop_time_consume_return = [0, 3, 6, 7, 8, 9, 10, 11, 13, 16, 18, 22, 25, 27, 27, 31];
STSP_red_important_stop_return = [0, 2, 9, 11]; // Park 17商場, 台達電, 華園宿舍, 臺鐵南科站
STSP_red_time_return = [["17:03"],["17:32"],["17:39"],["17:49"],["18:05"],["18:40"],["19:08"],["19:40"],["20:23"],["20:58"]];