// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_orange_main_stop_name = ["Park 17<br />商場","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","西拉雅<br />廣場","台積電","群創<br />B廠","聯電","Park 17<br />商場"];
STSP_orange_main_stop_time_consume = [0, 3, 7, 10, 13, 16, 19, 21, 22, 24];
STSP_orange_important_stop = [0, 2, 4, 6]; // Park 17商場, 臺鐵南科站, 社區中心, 台積電
var TRA_NK = 2; // 臺鐵南科站
var stop_1 = 3; // 南科實中
var stop_2 = 4; // 社區中心
var stop_3 = 5; // 西拉雅廣場
STSP_orange_time_go = [["06:20"],["06:41"],["07:05",[[stop_1,1]]],["07:20",[[stop_1,1,stop_2,2,stop_3,1]]],
["07:49",[[stop_1,1,stop_2,2,stop_3,1]]],["07:58",[[stop_1,1,stop_2,2,stop_3,1]]],["08:25",[[stop_1,1]]],["09:06"],["09:37"],
["10:36"],["11:05"],["11:50",['*',[TRA_NK,21]]],["12:48"],["13:30"],["13:50"],["14:36"],["15:32"],["16:12"],["17:00"]
];

// The name of return stops are different
STSP_orange_main_stop_name_return = ["Park 17<br />商場","聯電","霞客湖<br />停車場","南茂<br />科技","商務<br />會館","馨園<br />宿舍","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_orange_main_stop_time_consume_return = [0, 2, 4, 6, 9, 11, 13, 17, 20, 22, 25];
STSP_orange_important_stop_return = [0, 3, 5, 7]; // Park 17商場, 南茂科技, 馨園宿舍, 臺鐵南科站
STSP_orange_time_return = [["17:09"],["17:42"],["18:05"],["18:28"],["18:58"],["19:20"],["20:12"],["20:43"],["21:25"]];