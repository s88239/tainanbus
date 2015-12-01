hsr_shuttle_h31_interval_name = ["安億橋","臺南市政府"];
hsr_shuttle_h31_interval_stop = [
["原住民文化會館"], // 安億橋延駛段
["臺南市政府","臺南站","建興國中(孔廟)","延平郡王祠(國立臺南大學)","大林新城","生產路口","台糖嘉年華","臺南航空站","奇美博物館","高鐵臺南站"] // 主線
];

// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
hsr_shuttle_h31_main_stop_name = ["原住民文化會館<br /><font color=\"red\">(假日延駛)</font>","臺南市政府","興南客運<br />臺南站","延平郡王祠<br />(國立臺南大學)","大林新城","臺南航空站","奇美博物館","高鐵臺南站"];
hsr_shuttle_h31_main_stop_time_consume = [0, 10, 17, 25, 30, 40, 45, 60];
hsr_shuttle_h31_important_stop = [0, 1, 5, 6, 7]; // 桂田酒店, 臺南市政府, 臺南航空站, 奇美博物館, 高鐵臺南站
var start_stop = 1; // 臺南市政府
var end_stop = 7; // 高鐵臺南站
hsr_shuttle_h31_time_go = [["05:30",start_stop,end_stop],["06:00",start_stop,end_stop],["06:40",start_stop,end_stop],["07:00",start_stop,end_stop],["07:40",start_stop,end_stop],["08:00",start_stop,end_stop],["08:20",start_stop,end_stop],
["08:40",start_stop,end_stop],["09:00",start_stop,end_stop],["09:20",start_stop,end_stop],["09:40",start_stop,end_stop],["10:00",start_stop,end_stop],["10:10"],["10:40",start_stop,end_stop],["11:00",start_stop,end_stop],["11:10"],
["11:40",start_stop,end_stop],["12:00",start_stop,end_stop],["12:10"],["12:40",start_stop,end_stop],["13:00",start_stop,end_stop],["13:10"],["13:40",start_stop,end_stop],["14:00",start_stop,end_stop],["14:10"],["14:40",start_stop,end_stop],
["15:00",start_stop,end_stop],["15:10"],["15:40",start_stop,end_stop],["16:00",start_stop,end_stop],["16:10"],["16:40",start_stop,end_stop],["17:00",start_stop,end_stop],["17:10"],["17:40",start_stop,end_stop],["18:00",start_stop,end_stop],
["18:10"],["18:40",start_stop,end_stop],["19:00",start_stop,end_stop],["19:10"],["19:40",start_stop,end_stop],["20:00",start_stop,end_stop],["20:10"],["20:40",start_stop,end_stop],["21:00",start_stop,end_stop],["21:10"],
["21:40",start_stop,end_stop],["22:00",start_stop,end_stop],["22:40",start_stop,end_stop],["22:55",start_stop,end_stop]];
hsr_shuttle_h31_time_return = [["07:00",end_stop,start_stop],["07:40",end_stop,start_stop],["08:00",end_stop,start_stop],["08:20",end_stop,start_stop],["08:40",end_stop,start_stop],["09:00",end_stop,start_stop],["09:20"],
["09:40",end_stop,start_stop],["10:00",end_stop,start_stop],["10:20"],["10:40",end_stop,start_stop],["11:00",end_stop,start_stop],["11:20"],["11:40",end_stop,start_stop],["12:00",end_stop,start_stop],["12:20"],["12:40",end_stop,start_stop],
["13:00",end_stop,start_stop],["13:20"],["13:40",end_stop,start_stop],["14:00",end_stop,start_stop],["14:20"],["14:40",end_stop,start_stop],["15:00",end_stop,start_stop],["15:20"],["15:40",end_stop,start_stop],
["16:00",end_stop,start_stop],["16:20"],["16:40",end_stop,start_stop],["17:00",end_stop,start_stop],["17:20"],["17:40",end_stop,start_stop],["18:00",end_stop,start_stop],["18:20"],["18:40",end_stop,start_stop],["19:00",end_stop,start_stop],
["19:20"],["19:40",end_stop,start_stop],["20:00",end_stop,start_stop],["20:20"],["20:40",end_stop,start_stop],["21:00",end_stop,start_stop],["21:20",end_stop,start_stop],["21:40",end_stop,start_stop],["22:00",end_stop,start_stop],
["22:20",end_stop,start_stop],["22:40",end_stop,start_stop],["23:20",end_stop,start_stop],["23:40",end_stop,start_stop],["00:00",end_stop,start_stop]];