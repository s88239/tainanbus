// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
hsr_shuttle_h62_main_stop_name = ["桂田酒店","奇美醫院","兵仔市","南紡<br />購物中心","文化中心","富農街口","仁德交流道","義林一街口","高鐵臺南站"];
hsr_shuttle_h62_main_stop_time_consume = [0, 15, 22, 25, 35, 42, 45, 50, 65];
hsr_shuttle_h62_important_stop = [0, 1, 3, 6, 8]; // 桂田酒店, 奇美醫院, 南紡購物中心, 仁德交流道, 高鐵臺南站
var start_stop = 1; // 奇美醫院
var end_stop = 8; // 高鐵臺南站
hsr_shuttle_h62_time_go = [["05:10",start_stop,end_stop],["05:50",start_stop,end_stop],["06:25",start_stop,end_stop],["07:00",start_stop,end_stop],["07:25",start_stop,end_stop],["08:00",start_stop,end_stop],["08:25",start_stop,end_stop],
["08:45"],["09:25",start_stop,end_stop],["09:35",start_stop,end_stop],["10:00",start_stop,end_stop],["10:10"],["11:00",start_stop,end_stop],["11:10"],["12:00",start_stop,end_stop],["12:10",start_stop,end_stop],
["12:35",start_stop,end_stop],["12:45"],["13:10"],["13:55",start_stop,end_stop],["14:15",start_stop,end_stop],["14:25",start_stop,end_stop],["15:00",start_stop,end_stop],["15:20"],["15:45",start_stop,end_stop],["16:05",start_stop,end_stop],
["16:25",start_stop,end_stop],["17:00",start_stop,end_stop],["17:10"],["18:00",start_stop,end_stop],["18:10",start_stop,end_stop],["18:35",start_stop,end_stop],["19:00",start_stop,end_stop],["19:10"],["20:00",start_stop,end_stop],
["20:25",start_stop,end_stop],["20:45"],["21:25",start_stop,end_stop],["22:00",start_stop,end_stop],["22:30",start_stop,end_stop]];
hsr_shuttle_h62_time_return = [["07:00",end_stop,start_stop],["07:20"],["07:40",end_stop,start_stop],["08:20",end_stop,start_stop],["8:40"],["09:20",end_stop,start_stop],
["09:40"],["10:20",end_stop,start_stop],["10:40",end_stop,start_stop],["11:10"],["11:20",end_stop,start_stop],["11:40"],["12:20",end_stop,start_stop],["12:40",end_stop,start_stop],["13:10",end_stop,start_stop],["13:20",end_stop,start_stop],
["13:50"],["14:20",end_stop,start_stop],["14:40",end_stop,start_stop],["15:00",end_stop,start_stop],["15:20",end_stop,start_stop],["15:40"],["16:20",end_stop,start_stop],["16:50",end_stop,start_stop],["17:00",end_stop,start_stop],
["17:20",end_stop,start_stop],["17:40"],["18:20",end_stop,start_stop],["18:40",end_stop,start_stop],["19:10",end_stop,start_stop],["19:20"],["19:50",end_stop,start_stop],["20:20",end_stop,start_stop],["20:40",end_stop,start_stop],
["21:20",end_stop,start_stop],["21:50",end_stop,start_stop],["22:20",end_stop,start_stop],["22:40",end_stop,start_stop],["23:25",end_stop,start_stop],["23:55",end_stop,start_stop]];