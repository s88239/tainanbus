// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
hsr_shuttle_h31_main_stop_name = ["原住民文化會館<br /><span style='color: red;'>(假日延駛)</span>","臺南市政府","永華站","延平郡王祠<br />(國立臺南大學)","大林新城","臺南航空站<br />(奇美幸福工廠)","奇美博物館","高鐵臺南站"];
hsr_shuttle_h31_main_stop_time_consume = [0, 10, 17, 25, 30, 40, 45, 60];
hsr_shuttle_h31_important_stop = [0, 1, 5, 6, 7]; // 原住民文化會館, 臺南市政府, 臺南航空站(奇美幸福工廠), 奇美博物館, 高鐵臺南站
var start_stop = 1; // 臺南市政府
var end_stop = 7; // 高鐵臺南站
hsr_shuttle_h31_time_go = [["05:15",start_stop,end_stop],["06:00",start_stop,end_stop],["06:40",start_stop,end_stop],["07:00",start_stop,end_stop],["07:35",start_stop,end_stop],["07:50",start_stop,end_stop],["08:20",start_stop,end_stop],
["08:35",start_stop,end_stop],["08:50",start_stop,end_stop],["09:20",start_stop,end_stop],["09:35",start_stop,end_stop],["09:40"],["10:20",start_stop,end_stop],["10:35",start_stop,end_stop],["10:40"],["11:20",start_stop,end_stop],
["11:35",start_stop,end_stop],["11:40"],["12:20",start_stop,end_stop],["12:35",start_stop,end_stop],["12:40"],["13:20",start_stop,end_stop],["13:35",start_stop,end_stop],["13:40"],["14:20",start_stop,end_stop],["14:35",start_stop,end_stop],
["14:40"],["15:20",start_stop,end_stop],["15:35",start_stop,end_stop],["15:40"],["16:20",start_stop,end_stop],["16:35",start_stop,end_stop],["16:40"],["17:20",start_stop,end_stop],["17:35",start_stop,end_stop],["17:40"],
["18:20",start_stop,end_stop],["18:35",start_stop,end_stop],["18:40"],["19:20",start_stop,end_stop],["19:35",start_stop,end_stop],["19:40"],["20:20",start_stop,end_stop],["20:35",start_stop,end_stop],["20:40"],["21:20",start_stop,end_stop],
["21:35",start_stop,end_stop],["21:50",start_stop,end_stop],["22:35",start_stop,end_stop],["22:55",start_stop,end_stop]];

// The name of return stops are different
hsr_shuttle_h31_main_stop_name_return = ["高鐵臺南站","奇美博物館","臺南航空站<br />(奇美幸福工廠)","大林新城","延平郡王祠<br />(國立臺南大學)","小西門<br />(大億麗緻)","臺南市政府","原住民文化會館<br /><span style='color: red;'>(假日延駛)</span>"];
hsr_shuttle_h31_main_stop_time_consume_return = [0, 15, 20, 30, 35, 43, 50, 60];
hsr_shuttle_h31_important_stop_return = [0, 1, 2, 6, 7]; // 高鐵臺南站, 奇美博物館, 臺南航空站(奇美幸福工廠), 臺南市政府, 原住民文化會館
var start_stop_return = 0; // 高鐵臺南站
var end_stop_return = 6; // 臺南市政府
hsr_shuttle_h31_time_return = [["07:00",start_stop_return,end_stop_return],["07:35",start_stop_return,end_stop_return],["07:50",start_stop_return,end_stop_return],["08:20",start_stop_return,end_stop_return],["08:35",start_stop_return,end_stop_return],["08:50"],["09:20",start_stop_return,end_stop_return],
["09:35",start_stop_return,end_stop_return],["09:50"],["10:20",start_stop_return,end_stop_return],["10:35",start_stop_return,end_stop_return],["10:50"],["11:20",start_stop_return,end_stop_return],["11:35",start_stop_return,end_stop_return],["11:50"],["12:20",start_stop_return,end_stop_return],["12:35",start_stop_return,end_stop_return],
["12:50"],["13:20",start_stop_return,end_stop_return],["13:35",start_stop_return,end_stop_return],["13:50"],["14:20",start_stop_return,end_stop_return],["14:35",start_stop_return,end_stop_return],["14:50"],["15:20",start_stop_return,end_stop_return],["15:35",start_stop_return,end_stop_return],
["15:50"],["16:20",start_stop_return,end_stop_return],["16:35",start_stop_return,end_stop_return],["16:50"],["17:20",start_stop_return,end_stop_return],["17:35",start_stop_return,end_stop_return],["17:50"],["18:20",start_stop_return,end_stop_return],["18:35",start_stop_return,end_stop_return],["18:50"],
["19:20",start_stop_return,end_stop_return],["19:35",start_stop_return,end_stop_return],["19:50"],["20:20",start_stop_return,end_stop_return],["20:35",start_stop_return,end_stop_return],["20:50",start_stop_return,end_stop_return],["21:20",start_stop_return,end_stop_return],["21:35",start_stop_return,end_stop_return],["21:50",start_stop_return,end_stop_return],
["22:20",start_stop_return,end_stop_return],["22:40",start_stop_return,end_stop_return],["23:20",start_stop_return,end_stop_return],["23:35",start_stop_return,end_stop_return],["00:00",start_stop_return,end_stop_return]];