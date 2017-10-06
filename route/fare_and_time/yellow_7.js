yellow_7_interval_name = ["新營","頂窩","北勢寮","東河","北馬","東山","大客","武嶺","番子嶺","斑芝<br />花坑","東原","瓦厝","崎腳","青山","仙公廟"];
yellow_7_interval_stop = [ // 2016.02.14 checked
["新營站","三商","圓環(第一銀行)","文化中心","新營區公所","臺南市農會","中營里","東山中路"], // 新營
["頂窩","東營"], // 頂窩
["北勢寮","聖賢國小"], // 北勢寮
["東河","吉貝耍","枋子林"], // 東河
["北馬"], // 北馬
["東山國中","東山國小","北東山","木柵","代天宮","許秀才","東山","嘉東"], // 東山
["凹子腳","大客","下庄","科里"], // 大客
["武嶺"], // 武嶺
["番子嶺"], // 番子嶺
["開門橋","萬應公廟","番子厝","斑芝花坑","斑花橋","柿子寮"], // 斑芝花坑
["三塊厝","西東原","東原"], // 東原
["瓦厝","東原國中","竹圍埔"], // 瓦厝
["崎腳"], // 崎腳
["店子前","下子店","青山","田寮仔","南寮口","鴨母寮","內埔仔","下二坑","二坑埔","仙公廟牌樓","凍腳"], // 青山
["仙公廟"] // 仙公廟
];
yellow_7_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[30,26,26,26,26],
[40,31,26,26,26,26],
[47,38,33,26,26,26,26],
[51,42,36,27,26,26,26,26],
[53,44,39,29,26,26,26,26,26],
[63,54,49,39,33,26,26,26,26,26],
[73,64,59,49,43,33,26,26,26,26,26],
[75,66,61,51,45,35,28,26,26,26,26,26],
[80,71,66,56,50,40,33,29,27,26,26,26,26],
[83,74,69,59,53,43,36,33,30,26,26,26,26,26],
[109,100,95,85,79,69,62,58,56,46,36,34,29,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_7_main_stop_name = ["新營","東河","吉貝耍","北東山","許秀才","東山","斑花橋","東原","青山","仙公廟<br /><font color=\"red\">(假日延駛)</font>"];
yellow_7_main_stop_time_consume = [0, 18, 19, 26, 30, 28, 39, 45, 50, 70];
yellow_7_important_stop = [0, 5, 8, 9]; // 新營, 東山, 青山, 仙公廟
start_stop = 0; // 新營
end_stop = 8; // 青山
end_stop_2 = 5; // 東山
skip_stop_1 = 2; // 吉貝耍
skip_stop_2 = 4; // 許秀才
yellow_7_time_go = [["05:45",start_stop,end_stop_2,[skip_stop_1,skip_stop_2,[start_stop+1,-3,start_stop+3,-1,end_stop_2,1]]],
["06:55",start_stop,end_stop,[skip_stop_1,skip_stop_2,[start_stop+1,2,start_stop+3,2,end_stop,1]]],
["08:20",start_stop,end_stop,[skip_stop_2,[start_stop+1,3,start_stop+3,3]]],
["09:30",start_stop,end_stop,[skip_stop_1,skip_stop_2,[end_stop-1,-2]]],
["10:40",start_stop,end_stop,[skip_stop_2]],
["11:50",start_stop,end_stop,[skip_stop_1,[skip_stop_2,-1,skip_stop_2+1,7,end_stop_2+1,-3]]],
["12:50",start_stop,end_stop,[skip_stop_1,skip_stop_2]],
["14:20",start_stop,end_stop,[skip_stop_1,skip_stop_2,[end_stop_2+1,-2,end_stop,-1]]],
["15:35",start_stop,end_stop,[skip_stop_1,skip_stop_2,[start_stop+1,-1,start_stop+3,-2,end_stop_2,1]]],
["16:30",start_stop,end_stop,[skip_stop_1,skip_stop_2]],
["17:30",start_stop,end_stop,[[skip_stop_2+1,8]]],
["18:40",start_stop,end_stop,[skip_stop_1,skip_stop_2,[end_stop_2+1,-2]]]];
yellow_7_time_return = [["06:10",end_stop_2,start_stop,[skip_stop_1,skip_stop_2,[start_stop+3,1,start_stop,-4]]],
["05:50",end_stop,start_stop,[[skip_stop_2,6,skip_stop_2-1,2]]],
["07:55",end_stop,start_stop,[skip_stop_1,skip_stop_2]],
["09:30",end_stop,start_stop,[skip_stop_1,skip_stop_2]],
["10:25",end_stop,start_stop,[skip_stop_2,[end_stop_2,-2,start_stop,2]]],
["11:35",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop_2,-1,start_stop,1]]],
["12:55",end_stop,start_stop,[skip_stop_2]],
["13:45",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop-1,-1,end_stop_2,-3,start_stop+3,-1,start_stop+1,1,start_stop,-1]]],
["15:15",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop_2,-2,start_stop,2]]],
["16:35",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop_2,-2,start_stop+1,-1,start_stop,-2]]],
["17:25",end_stop,start_stop,[skip_stop_1,skip_stop_2]],
["18:45",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop_2,-3,start_stop+1,-1,start_stop,-1]]]];

// holiday schedule
yellow_7_holiday_time_go = [["05:45",start_stop,end_stop_2,[skip_stop_1,skip_stop_2,[start_stop+1,-3,start_stop+3,-1,end_stop_2,1]]],
["06:55",[skip_stop_1,skip_stop_2,[start_stop+1,2,start_stop+3,2,end_stop,1,end_stop+1,-5]]],
["07:15",[skip_stop_1,skip_stop_2]],
["08:20",start_stop,end_stop,[skip_stop_2,[start_stop+1,3,start_stop+3,3]]],
["09:30",start_stop,end_stop,[skip_stop_1,skip_stop_2,[end_stop-1,-2]]],
["10:40",[skip_stop_2]],
["11:50",[skip_stop_1,[skip_stop_2,-1,skip_stop_2+1,7,end_stop_2+1,-3,end_stop,-3]]],
["12:50",start_stop,end_stop,[skip_stop_1,skip_stop_2]],
["14:20",[skip_stop_1,skip_stop_2,[end_stop_2+1,-2,end_stop,-1,end_stop+1,3]]],
["15:35",start_stop,end_stop,[skip_stop_1,skip_stop_2,[start_stop+1,-1,start_stop+3,-2,end_stop_2,1]]],
["16:30",start_stop,end_stop,[skip_stop_1,skip_stop_2]],
["17:30",start_stop,end_stop,[[skip_stop_2+1,8]]],
["18:40",start_stop,end_stop,[skip_stop_1,skip_stop_2,[end_stop_2+1,-2]]]];
yellow_7_holiday_time_return = [["06:10",end_stop_2,start_stop,[skip_stop_1,skip_stop_2,[start_stop+3,1,start_stop,-4]]],
["05:50",end_stop,start_stop,[[skip_stop_2,6,skip_stop_2-1,2]]],
["08:10",[skip_stop_1,skip_stop_2]],
["08:30",[skip_stop_1,skip_stop_2]],
["09:30",end_stop,start_stop,[skip_stop_1,skip_stop_2]],
["10:25",end_stop,start_stop,[skip_stop_2,[end_stop_2,-2,start_stop,2]]],
["11:55",[skip_stop_1,skip_stop_2,[end_stop_2,-2,start_stop,2]]],
["13:05",[skip_stop_2,[end_stop,-4,start_stop+1,-1]]],
["13:45",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop-1,-1,end_stop_2,-3,start_stop+3,-1,start_stop+1,1,start_stop,-1]]],
["15:35",[skip_stop_1,skip_stop_2]],
["16:35",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop_2,-2,start_stop+1,-1,start_stop,-2]]],
["17:25",end_stop,start_stop,[skip_stop_1,skip_stop_2]],
["18:45",end_stop,start_stop,[skip_stop_1,skip_stop_2,[end_stop_2,-3,start_stop+1,-1,start_stop,-1]]]];