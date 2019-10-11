// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_orange_main_stop_name = ["Park 17<br />商場","馨園<br />宿舍","南科<br />實中","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","西拉雅<br />廣場","台積電","群創<br />B廠","聯電","Park 17<br />商場"];
STSP_orange_main_stop_time_consume = [0, 4, 11, 3, 7, 10, 13, 16, 19, 22, 23, 24];
STSP_orange_important_stop = [0, 4, 6, 8]; // Park 17商場, 臺鐵南科站, 社區中心, 台積電
var start_stop = 0; // Park 17商場
var stop_01 = 1; // 馨園宿舍
var stop_02 = 2; // 南科實中
var TRA_NK = 4; // 臺鐵南科站
var stop_1 = 5; // 南科實中
var stop_2 = 6; // 社區中心
var stop_3 = 7; // 西拉雅廣場
var InnoLux = 9; // 群創B廠
var park17_end = 11; // Park 17商場
STSP_orange_time_go = [["06:30",[stop_01,stop_02]],["07:15",[stop_01,stop_02,[stop_2,1,stop_3,1]]],["07:15",[[stop_02+1,11,stop_2,1,stop_3,1]]],
["07:46",[stop_01,stop_02]],["07:58",[stop_01,stop_02]],["08:17",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],["09:18",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],
["10:02",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],["11:05",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],["12:00",[stop_01,stop_02,'*',[TRA_NK,23,InnoLux,-1,park17_end,1]]],["12:49",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],["13:45",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],["14:21",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],
["15:18",[stop_01,stop_02,[InnoLux,-1,park17_end,1]]],["16:08",[stop_01,[stop_02,-6,stop_02+1,11,InnoLux,-1,park17_end,1]]],["17:03",[stop_01,stop_02]],["17:00",start_stop,TRA_NK,[stop_01,[stop_02,-6,stop_02+1,11,TRA_NK,1]]],["17:00",start_stop,TRA_NK,[stop_01,[stop_02,-6,stop_02+1,11,TRA_NK,1]]],["17:18",stop_02,TRA_NK,[[stop_02+1,5,TRA_NK,6]]]
];

var return_stop_1 = 6; // 南科實中校門口
// The name of return stops are different
STSP_orange_main_stop_name_return = ["Park 17<br />商場","聯電","霞客湖<br />停車場","南茂<br />科技","商務<br />會館","華園<br />宿舍","南科實中<br />校門口","民生<br />水塔","臺鐵<br />南科站","南科<br />實中","社區<br />中心","Park 17<br />商場"];
STSP_orange_main_stop_time_consume_return = [0, 2, 4, 6, 9, 11, 15, 13, 17, 20, 22, 25];
STSP_orange_important_stop_return = [0, 3, 5, 8]; // Park 17商場, 南茂科技, 華園宿舍, 臺鐵南科站
STSP_orange_time_return = [["17:15",[return_stop_1]],["17:41",[return_stop_1]],["17:53",[return_stop_1]],["18:10",[return_stop_1]],["18:45",[return_stop_1]],["19:45",[return_stop_1]],["20:34",[[return_stop_1+1,5]]],["21:06",[return_stop_1]]];