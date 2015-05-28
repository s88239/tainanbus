red_3_1_interval_name = ["保安<br />轉運站","臺南都<br />會公園","臺南<br />航空站"];
red_3_1_interval_stop = [
["保安轉運站"], // 保安轉運站
["奇美博物館","十鼓文化村","臺南都會公園"], // 臺南都會公園
["台糖嘉年華","臺南航空站"] // 臺南航空站
];
red_3_1_fare = [
[26],
[26,26],
[26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_3_1_main_stop_name = ["保安<br />轉運站","奇美<br />博物館","十鼓<br />文化村","臺南<br />都會公園","台糖<br />嘉年華","臺南<br />航空站"];
red_3_1_main_stop_time_consume = [0, 3, 4, 6, 7, 8];
skip_stop_list = [2,4];
red_3_1_important_stop = [0, 1, 5]; // 保安轉運站, 奇美博物館, 臺南航空站
red_3_1_time_go = [["08:00"],["08:30"],["09:00"],["09:30"],["10:00"],["10:30"],["11:00"],["11:30"],["13:00"],["14:00"],
["14:30"],["15:00"],["15:30"],["16:00"],["16:30"],["18:00"]];
red_3_1_time_return = [["08:08",skip_stop_list],["08:38",skip_stop_list],["09:08",skip_stop_list],["09:38",skip_stop_list],
["10:08",skip_stop_list],["10:38",skip_stop_list],["11:08",skip_stop_list],["11:38",skip_stop_list],["13:08",skip_stop_list],
["14:08",skip_stop_list],["14:38",skip_stop_list],["15:08",skip_stop_list],["15:38",skip_stop_list],["16:08",skip_stop_list],
["16:38",skip_stop_list],["18:08",skip_stop_list]];