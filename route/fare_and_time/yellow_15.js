yellow_15_interval_name = ["白河","大排竹","玉豐","埤肚","枋子林","蓮潭","詔安厝"];
yellow_15_interval_stop = [
["白河站","中山、中興路口","白河區公所","白河區圖書館"], // 白河
["賞蓮大道南站","賞蓮大道北站","大排竹","北大排竹"], // 大排竹
["南玉豐","玉豐","蓮花公園"], // 玉豐
["埤肚"], // 埤肚
["枋子林","廣安里"], // 枋子林
["蓮潭"], // 蓮潭
["詔安厝(一)","詔安厝(二)"] // 詔安厝
];
yellow_15_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[26,26,26,26,26,26],
[26,26,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_15_main_stop_name = ["白河站","賞蓮大道<br />南站","玉豐","蓮花公園","枋子林","詔安厝<br />(二)"];
yellow_15_main_stop_time_consume = [0, 3, 8, 9, 11, 15];
yellow_15_important_stop = [0, 3, 5]; // 白河站, 蓮花公園, 詔安厝(二)
var start_stop = 0; // 白河
var end_stop = 3; // 蓮花公園
yellow_15_time_go = [["06:45",['黃']],["10:50",['黃']],["18:35",['黃']]];
yellow_15_time_return = [["06:25",[end_stop]],["07:05",['黃']],["11:10",['黃']]];

yellow_15_holiday_time_go = [["06:45",['黃']],["08:10",start_stop,end_stop,['蓮']],["09:10",start_stop,end_stop,['蓮']],["10:10",start_stop,end_stop,['蓮']],["10:50",['黃']],["11:10",start_stop,end_stop,['蓮']],["13:10",start_stop,end_stop,['蓮']],["14:10",start_stop,end_stop,['蓮']],["15:10",start_stop,end_stop,['蓮']],["16:10",start_stop,end_stop,['蓮']],["17:10",start_stop,end_stop,['蓮']],["18:10",start_stop,end_stop,['蓮']],["18:35",['黃']]];
yellow_15_holiday_time_return = [["06:25",[end_stop]],["07:05",['黃']],["08:30",end_stop,start_stop,['蓮']],["09:30",end_stop,start_stop,['蓮']],["10:30",end_stop,start_stop,['蓮']],["11:10",['黃']],["11:30",end_stop,start_stop,['蓮']],["13:30",end_stop,start_stop,['蓮']],["14:30",end_stop,start_stop,['蓮']],["15:30",end_stop,start_stop,['蓮']],["16:30",end_stop,start_stop,['蓮']],["17:30",end_stop,start_stop,['蓮']],["18:30",end_stop,start_stop,['蓮']]];