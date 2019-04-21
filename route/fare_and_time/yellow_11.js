yellow_11_interval_name = ["白河","東山","大客","武嶺","番子嶺","斑芝<br />花坑","東原","瓦厝","崎腳","青山"];
yellow_11_interval_stop = [
["白河商工","白河分局","白河站","安養院"], // 白河
["東山加油站","民眾服務社","東山區衛生所","北東山","東山","嘉東"], // 東山
["凹子腳","大客","下庄","科里"], // 大客
["武嶺"], // 武嶺
["番子嶺","開門橋","萬應公廟","番子厝"], // 番子嶺
["斑芝花坑","斑花橋","柿子寮"], // 斑芝花坑
["三塊厝","嶺南里路口","頭前園仔","西勢角","學仔後","嶺南里","北大廳","宅子內","西東原","東原","前大埔"], // 東原
["瓦厝","東原國中","竹圍埔"], // 瓦厝
["崎腳","店子前"], // 崎腳
["下子店","青山","高原社區","墩子腳","車關寮","公厝","水井","水井尾","科頭","科尾"] // 青山
];
yellow_11_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[34,26,26,26,26,26],
[44,33,26,26,26,26,26],
[46,35,28,26,26,26,26,26],
[51,40,33,29,27,26,26,26,26],
[54,43,36,33,30,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_11_main_stop_name = ["白河商工","白河站","東山","嶺南里","宅子內","斑花橋","東原","青山","科尾"];
yellow_11_main_stop_time_consume = [0, 5, 10, 25, 27, 19, 24, 29, 32];
yellow_11_important_stop = [0, 1, 2, 7]; // 白河商工, 白河站, 東山, 青山
var start_stop = 1; // 白河
var dongshan = 2; // 東山
var start_stop_2 = 0; // 白河商工
var end_stop = 7; // 青山
var end_stop_2 = 8; // 科尾
var stop_1 = 3; // 嶺南里
var stop_2 = 4; // 宅子內
yellow_11_time_go = [["06:00",start_stop,end_stop,[stop_1,stop_2]],["06:05",start_stop,end_stop,[[stop_2+1,10,end_stop,1]]],["07:20",start_stop,end_stop,[stop_1,stop_2]],["09:10",start_stop,end_stop,[stop_1,stop_2,[stop_2,-1]]],["09:30",start_stop,end_stop_2,[[stop_2+1,9]]],["10:40",start_stop,end_stop,[[stop_2+1,9]]],["12:00",start_stop,end_stop,[stop_1,stop_2]],["13:40",start_stop,end_stop,[stop_1,stop_2,[stop_2,-1]]],["15:00",start_stop,end_stop,[stop_1,stop_2,[stop_2,-1]]],["16:15",start_stop_2,end_stop,[stop_1,stop_2,[stop_2,1]]],["17:15",start_stop_2,end_stop,[stop_1,stop_2,[stop_2,1]]],["18:05",start_stop,end_stop,[[stop_2+1,10]]],["18:25",start_stop,end_stop,[stop_1,stop_2,[stop_2,-1]]]];
yellow_11_time_return = [["06:30",end_stop,start_stop,[stop_1,stop_2,[dongshan,3]]],["06:45",end_stop,start_stop_2,[[stop_2,10,dongshan,2]]],["07:50",end_stop,start_stop,[stop_1,stop_2,[dongshan,-1]]],["09:40",end_stop,start_stop,[stop_1,stop_2,[dongshan,-1]]],["10:20",end_stop_2,start_stop,[[stop_2,9]]],["11:25",end_stop,start_stop,[[stop_2,9]]],["12:30",end_stop,start_stop,[stop_1,stop_2,[dongshan,-1]]],["14:10",end_stop,start_stop,[stop_1,stop_2,[dongshan,-1]]],["15:30",end_stop,start_stop,[stop_1,stop_2,[dongshan,-1]]],["16:55",end_stop,start_stop,[[stop_2,9,dongshan,2]]],["17:55",end_stop,start_stop,[stop_1,stop_2]],["18:50",end_stop,start_stop,[stop_1,stop_2,[dongshan,-1]]],["19:00",end_stop,start_stop,[stop_1,stop_2]]];