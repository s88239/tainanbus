yellow_7_interval_name = ["新營","頂窩","北勢寮","東河","北馬","東山","大客","武嶺","番子嶺","斑芝<br />花坑","東原","瓦厝","崎腳","青山","仙公廟"];
yellow_7_interval_stop = [ // checked interval at Apr.15
["新營站","三商","圓環(第一銀行)","文化中心","新營公所","臺南市農會","中營里","東山中路"], // 新營
["頂窩","東營"], // 頂窩
["北勢寮","聖賢國小"], // 北勢寮
["東河","吉貝耍","枋子林"], // 東河
["北馬"], // 北馬
["東山國中","北東山","東山","嘉東"], // 東山
["凹子腳","大客","下庄","科里"], // 大客
["武嶺"], // 武嶺
["番子嶺"], // 番子嶺
["開門橋","萬應公廟","番子厝","斑芝花坑","斑花橋","柿子寮"], // 斑芝花坑
["三塊厝","西東原","東原"], // 東原
["瓦厝","東原國中","竹圍埔"], // 瓦厝
["崎腳"], // 崎腳
["店子前","下子店","青山"], // 青山
["南寮口","二坑埔","仙公廟"] // 仙公廟
];
yellow_7_stop_time_consume = [0,1,2,3,4,8,12,13,14,15,18,19,21,24,25,27,28,30,31,31,32,32,33,34,37,37,38,38,39,40,41,43,45,46,47,47,48,49,50];
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
yellow_7_main_stop_name = ["新營","東河","東山","斑花橋","東原","青山","仙公廟<br /><font color=\"red\">(假日延駛)</font>"];
yellow_7_main_stop_time_consume = [0, 18, 28, 39, 45, 50, 70];
yellow_7_important_stop = [0, 2, 5]; // 新營, 東山, 青山
start_stop = 0; // 新營
end_stop = 5; // 青山
yellow_7_time_go = [["06:55",start_stop,end_stop],["08:20",start_stop,end_stop,['繞']],["09:30",start_stop,end_stop],["10:40",start_stop,end_stop,['繞']],["11:50",start_stop,end_stop],["14:20",start_stop,end_stop],["15:40",start_stop,end_stop],["16:30",start_stop,end_stop],["17:30",start_stop,end_stop,['繞']],["18:50",start_stop,end_stop]];
yellow_7_time_return = [["05:50",end_stop,start_stop,['繞']],["07:55",end_stop,start_stop],["09:15",end_stop,start_stop],["10:25",end_stop,start_stop,['繞']],["11:35",end_stop,start_stop],["12:45",end_stop,start_stop,['繞']],["15:15",end_stop,start_stop],["16:35",end_stop,start_stop],["17:25",end_stop,start_stop],["18:25",end_stop,start_stop]];

// holiday schedule
yellow_7_holiday_time_go = [["06:55"],["07:15"],["08:20",start_stop,end_stop,['繞']],["09:30",start_stop,end_stop],["10:40",['繞']],["11:50",start_stop,end_stop],["14:20"],["15:40",start_stop,end_stop],["16:30",start_stop,end_stop],["17:30",start_stop,end_stop,['繞']],["18:50",start_stop,end_stop]];
yellow_7_holiday_time_return = [["05:50",end_stop,start_stop,['繞']],["08:10"],["08:30"],["09:15",end_stop,start_stop],["10:25",end_stop,start_stop,['繞']],["11:55"],["12:45",end_stop,start_stop,['繞']],["15:35"],["16:35",end_stop,start_stop],["17:25",end_stop,start_stop],["18:25",end_stop,start_stop]];