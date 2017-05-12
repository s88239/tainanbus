yellow_15_interval_name = ["白河","大排竹","玉豐","埤肚","枋子林","蓮潭","詔安厝"];
yellow_15_interval_stop = [
["白河站","白河農會","賞蓮大道南站","賞蓮大道北站"], // 白河
["大排竹","北大排竹"], // 大排竹
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
yellow_15_main_stop_name = ["白河","玉豐","蓮花公園","枋子林","詔安厝"];
yellow_15_main_stop_time_consume = [0, 8, 10, 11, 15];
yellow_15_important_stop = [0, 2, 4]; // 白河, 蓮花公園, 詔安厝
var start_stop = 0; // 白河
var end_stop = 2; // 蓮花公園
yellow_15_time_go = [["06:45",[end_stop]],["10:50",['L',end_stop]],["18:35",['L',end_stop]]];
yellow_15_time_return = [["06:25",[end_stop]],["07:05",[end_stop]],["11:10",['L',end_stop]]];

yellow_15_holiday_time_go = [["06:45",[[end_stop+1,4]]],["08:10",start_stop,end_stop],["09:10",start_stop,end_stop],["10:10",start_stop,end_stop],["10:50",['L',[end_stop+1,4]]],["12:10",start_stop,end_stop],["13:10",start_stop,end_stop],["14:10",start_stop,end_stop],["15:10",start_stop,end_stop],["16:10",start_stop,end_stop],["17:10",start_stop,end_stop],["18:35",['L',[end_stop+1,4]]]];
yellow_15_holiday_time_return = [["06:25",[[end_stop,4]]],["07:05",[[end_stop,4]]],["08:30",end_stop,start_stop],["09:30",end_stop,start_stop],["10:30",end_stop,start_stop],["11:10",['L',[end_stop,4]]],["12:30",end_stop,start_stop],["13:30",end_stop,start_stop],["14:30",end_stop,start_stop],["15:30",end_stop,start_stop],["16:30",end_stop,start_stop],["17:30",end_stop,start_stop]];