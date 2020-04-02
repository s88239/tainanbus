red_3_1_interval_name = ["保安<br />轉運站","臺南都<br />會公園","臺南<br />航空站"];
red_3_1_interval_stop = [
["保安轉運站"], // 保安轉運站
["奇美博物館","十鼓文化村","臺南都會公園"], // 臺南都會公園
["家樂福新仁店","臺南航空站(奇美幸福工廠)"] // 臺南航空站
];
red_3_1_fare = [
[26],
[26,26],
[26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_3_1_main_stop_name = ["保安轉運站","奇美<br />博物館","十鼓<br />文化村","臺南<br />都會公園","家樂福<br />新仁店","臺南航空站<br />(奇美幸福工廠)"];
red_3_1_main_stop_time_consume = [0, 3, 4, 6, 8, 10];
skip_stop_list = [2,4];
red_3_1_important_stop = [0, 1, 5]; // 保安轉運站, 奇美博物館, 臺南航空站
red_3_1_time_go = [["08:30"],["09:00"],["09:30"],["10:00"],["10:30"],["11:00"],["12:00"],["13:00"],["13:30"],["14:00"],
["14:30"],["15:00"],["15:30"],["16:00"],["17:00"],["17:30"],["18:00"]];
red_3_1_time_return = [["08:40",skip_stop_list],["09:10",skip_stop_list],["09:40",skip_stop_list],["10:10",skip_stop_list],
["10:40",skip_stop_list],["11:10",skip_stop_list],["12:10",skip_stop_list],["13:10",skip_stop_list],["13:40",skip_stop_list],
["14:10",skip_stop_list],["14:40",skip_stop_list],["15:10",skip_stop_list],["15:40",skip_stop_list],["16:10",skip_stop_list],
["17:10",skip_stop_list],["17:40",skip_stop_list],["18:10",skip_stop_list]];