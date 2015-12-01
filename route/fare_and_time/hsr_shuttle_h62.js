hsr_shuttle_h62_interval_name = ["桂田酒店","奇美醫院"];
hsr_shuttle_h62_interval_stop = [
["桂田酒店","鹽行"], // 桂田酒店延駛段
["奇美醫院","臺南高工","兵仔市","國賓影城","關帝廳","富強市場","崇明路口","文化中心","中華東、東門路口","富農街口","仁德交流道","仁德","高鐵臺南站"] // 主線
];

// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
hsr_shuttle_h62_main_stop_name = ["桂田酒店","奇美醫院","兵仔市","南紡夢時代","文化中心","富農街口","仁德交流道","高鐵臺南站"];
hsr_shuttle_h62_main_stop_time_consume = [0, 15, 22, 25, 40, 50, 55, 80];
hsr_shuttle_h62_important_stop = [0, 1, 3, 7]; // 桂田酒店, 奇美醫院, 南紡夢時代, 高鐵臺南站
var start_stop = 1; // 奇美醫院
var end_stop = 7; // 高鐵臺南站
hsr_shuttle_h62_time_go = [["05:25",start_stop,end_stop],["06:00",start_stop,end_stop],["06:35",start_stop,end_stop],["07:00",start_stop,end_stop],["07:35",start_stop,end_stop],["08:00",start_stop,end_stop],["08:35",start_stop,end_stop],
["08:45"],["09:20",start_stop,end_stop],["09:35",start_stop,end_stop],["10:00",start_stop,end_stop],["10:20"],["11:00",start_stop,end_stop],["11:20"],["12:00",start_stop,end_stop],["12:10",start_stop,end_stop],
["12:35",start_stop,end_stop],["12:45"],["13:20"],["13:55",start_stop,end_stop],["14:15",start_stop,end_stop],["14:35",start_stop,end_stop],["15:00",start_stop,end_stop],["15:20"],["15:55",start_stop,end_stop],["16:05",start_stop,end_stop],
["16:35",start_stop,end_stop],["17:00",start_stop,end_stop],["17:20"],["18:00",start_stop,end_stop],["18:10",start_stop,end_stop],["18:35",start_stop,end_stop],["19:00",start_stop,end_stop],["19:20"],["20:00",start_stop,end_stop],
["20:30"],["21:00",start_stop,end_stop],["21:35",start_stop,end_stop],["22:00",start_stop,end_stop],["22:30",start_stop,end_stop]];
hsr_shuttle_h62_time_return = [["07:00",end_stop,start_stop],["07:20"],["07:50",end_stop,start_stop],["08:20",end_stop,start_stop],["8:50"],["09:20",end_stop,start_stop],
["09:50"],["10:20",end_stop,start_stop],["10:50",end_stop,start_stop],["11:10"],["11:20",end_stop,start_stop],["11:50"],["12:20",end_stop,start_stop],["12:50",end_stop,start_stop],["13:10",end_stop,start_stop],["13:20",end_stop,start_stop],
["13:50"],["14:20",end_stop,start_stop],["14:50",end_stop,start_stop],["15:00",end_stop,start_stop],["15:20",end_stop,start_stop],["15:50"],["16:20",end_stop,start_stop],["16:50",end_stop,start_stop],["17:00",end_stop,start_stop],
["17:20",end_stop,start_stop],["17:50"],["18:20",end_stop,start_stop],["18:50",end_stop,start_stop],["19:10"],["19:20",end_stop,start_stop],["19:50",end_stop,start_stop],["20:20",end_stop,start_stop],["20:50",end_stop,start_stop],
["21:20",end_stop,start_stop],["21:50",end_stop,start_stop],["22:20",end_stop,start_stop],["22:50",end_stop,start_stop],["23:25",end_stop,start_stop],["23:55",end_stop,start_stop]];