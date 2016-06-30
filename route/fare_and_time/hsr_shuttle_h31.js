// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
hsr_shuttle_h31_main_stop_name = ["原住民文化會館<br /><font color=\"red\">(假日延駛)</font>","臺南市政府","興南客運<br />臺南站","延平郡王祠<br />(國立臺南大學)","大林新城","臺南航空站","奇美博物館","高鐵臺南站"];
hsr_shuttle_h31_main_stop_time_consume = [0, 10, 17, 25, 30, 40, 45, 60];
hsr_shuttle_h31_important_stop = [0, 1, 5, 6, 7]; // 桂田酒店, 臺南市政府, 臺南航空站, 奇美博物館, 高鐵臺南站
var start_stop = 1; // 臺南市政府
var end_stop = 7; // 高鐵臺南站
hsr_shuttle_h31_time_go = [["05:30",start_stop,end_stop],["06:00",start_stop,end_stop],["06:40",start_stop,end_stop],["07:00",start_stop,end_stop],["07:35",start_stop,end_stop],["07:50",start_stop,end_stop],["08:20",start_stop,end_stop],
["08:35",start_stop,end_stop],["08:50",start_stop,end_stop],["09:20",start_stop,end_stop],["09:35",start_stop,end_stop],["09:40"],["10:20",start_stop,end_stop],["10:35",start_stop,end_stop],["10:40"],["11:20",start_stop,end_stop],
["11:35",start_stop,end_stop],["11:40"],["12:20",start_stop,end_stop],["12:35",start_stop,end_stop],["12:40"],["13:20",start_stop,end_stop],["13:35",start_stop,end_stop],["13:40"],["14:20",start_stop,end_stop],["14:35",start_stop,end_stop],
["14:40"],["15:20",start_stop,end_stop],["15:35",start_stop,end_stop],["15:40"],["16:20",start_stop,end_stop],["16:35",start_stop,end_stop],["16:40"],["17:20",start_stop,end_stop],["17:35",start_stop,end_stop],["17:40"],
["18:20",start_stop,end_stop],["18:35",start_stop,end_stop],["18:40"],["19:20",start_stop,end_stop],["19:35",start_stop,end_stop],["19:40"],["20:20",start_stop,end_stop],["20:35",start_stop,end_stop],["20:40"],["21:20",start_stop,end_stop],
["21:35",start_stop,end_stop],["21:50",start_stop,end_stop],["22:35",start_stop,end_stop],["22:55",start_stop,end_stop]];
hsr_shuttle_h31_time_return = [["07:00",end_stop,start_stop],["07:35",end_stop,start_stop],["07:50",end_stop,start_stop],["08:20",end_stop,start_stop],["08:35",end_stop,start_stop],["08:50"],["09:20",end_stop,start_stop],
["09:35",end_stop,start_stop],["09:50"],["10:20",end_stop,start_stop],["10:35",end_stop,start_stop],["10:50"],["11:20",end_stop,start_stop],["11:35",end_stop,start_stop],["11:50"],["12:20",end_stop,start_stop],["12:35",end_stop,start_stop],
["12:50"],["13:20",end_stop,start_stop],["13:35",end_stop,start_stop],["13:50"],["14:20",end_stop,start_stop],["14:35",end_stop,start_stop],["14:50"],["15:20",end_stop,start_stop],["15:35",end_stop,start_stop],
["15:50"],["16:20",end_stop,start_stop],["16:35",end_stop,start_stop],["16:50"],["17:20",end_stop,start_stop],["17:35",end_stop,start_stop],["17:50"],["18:20",end_stop,start_stop],["18:35",end_stop,start_stop],["18:50"],
["19:20",end_stop,start_stop],["19:35",end_stop,start_stop],["19:50"],["20:20",end_stop,start_stop],["20:35",end_stop,start_stop],["20:50",end_stop,start_stop],["21:20",end_stop,start_stop],["21:35",end_stop,start_stop],["21:50",end_stop,start_stop],
["22:20",end_stop,start_stop],["22:40",end_stop,start_stop],["23:20",end_stop,start_stop],["23:35",end_stop,start_stop],["00:00",end_stop,start_stop]];