brown_interval_name = ["新營","茄苳腳","鹽水","舊營","歡雅","田寮","大埔路口","大埔","學甲寮<br />麻油寮","宅子港","學甲","大灣","佳里興","佳里"];
brown_interval_stop = [
["新營站","臺南市農會","民治市政中心","南新國中","民生新南里","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","護庇宮","鹽水","鹽水地政事務所","月津國小","鹽水壽園"], // 鹽水
["舊營"], // 舊營
["大莊里","歡雅","松子腳"], // 歡雅
["中洲寮","田寮"], // 田寮
["大埔路口"], // 大埔路口
["大豐國小","大豐南天宮","大埔橋"], // 大埔
["學甲寮","平西里","飯店里","麻油寮"], // 學甲寮, 麻油寮
["宅子港","德安寮"], // 宅子港
["學甲國中","學甲郵局","學甲","學甲區公所","東寮"], // 學甲
["清濟宮","大灣","溪州","營頂"], // 大灣
["佳里興北","佳里興","奇美佳里分院","北門農工","蕭壠文化園區"], // 佳里興
["佳里公園","佳里站"] // 佳里
];
brown_fare = [
[26],
[26,26],
[26,26,26],
[33,26,26,26],
[39,26,26,26,26],
[46,31,26,26,26,26],
[50,34,26,26,26,26,26],
[52,36,27,26,26,26,26,26],
[55,39,30,26,26,26,26,26,26],
[59,43,34,26,26,26,26,26,26,26],
[73,57,48,41,34,27,26,26,26,26,26],
[82,67,57,50,43,36,33,30,27,26,26,26],
[89,73,64,57,50,43,39,37,34,31,26,26,26],
[100,84,75,68,61,54,50,48,45,42,27,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_main_stop_name = ["新營","民治<br />市政中心","統聯<br />客運","鹽水","歡雅","大豐<br />南天宮","麻油寮","學甲<br />區公所","奇美<br />佳里分院","佳里"];
brown_main_stop_time_consume = [0, 3, 8, 18, 26, 33, 33, 43, 53, 60];
brown_important_stop = [0, 3, 7, 9]; // 新營, 鹽水, 學甲區公所, 佳里
var start_stop = 0; // 新營
var end_stop = 3; // 鹽水
var skip_stop_1 = 5; // 大豐南天宮
var skip_stop_2 = 6; // 麻油寮
var end_stop_2 = 7; // 學甲區公所
brown_time_go = [["05:50",start_stop,end_stop_2,[skip_stop_1]],["06:00",start_stop,end_stop,['L',[end_stop,2]]],["06:05",[skip_stop_2,'L']],["06:10",start_stop,end_stop_2,[skip_stop_1]],["06:35",[skip_stop_1,'L']],["07:05",[skip_stop_2]],["07:35",[skip_stop_2]],["08:05",[skip_stop_1]],["08:35",[skip_stop_2]],["09:05",[skip_stop_2]],["09:35",[skip_stop_2,'L']],
["10:05",[skip_stop_1,'L']],["10:35",[skip_stop_2]],["11:05",[skip_stop_2]],["11:35",[skip_stop_2]],["12:05",[skip_stop_2]],["12:35",[skip_stop_1]],["13:05",[skip_stop_2,'L']],["14:05",[skip_stop_2]],["14:35",[skip_stop_1,'L']],
["15:05",[skip_stop_2]],["15:20",start_stop,end_stop_2,[skip_stop_1]],["15:35",[skip_stop_2,'L']],["16:05",[skip_stop_2,'L']],["16:10",start_stop,end_stop_2,[skip_stop_1]],["16:35",[skip_stop_2]],["17:05",start_stop,end_stop,[[end_stop,5]]],["17:10",[skip_stop_1]],["17:35",[skip_stop_2,'L']],["18:15",[skip_stop_2]],
["19:05",[skip_stop_2]],["20:05",[skip_stop_2]]
];
brown_time_return = [["06:30",end_stop,start_stop,['L',[start_stop,5]]],["06:00",[skip_stop_2]],["06:35",[skip_stop_1]],["07:05",[skip_stop_2]],["07:35",[skip_stop_2,'L']],["08:00",end_stop_2,start_stop,[skip_stop_1]],["08:05",[skip_stop_1,'L']],["08:30",end_stop_2,start_stop,[skip_stop_1]],["08:35",[skip_stop_2]],["09:05",[skip_stop_2]],["09:35",[skip_stop_2]],
["10:05",[skip_stop_1]],["10:35",[skip_stop_2]],["11:05",[skip_stop_2,'L']],["11:35",[skip_stop_1,'L']],["12:05",[skip_stop_2]],["12:35",[skip_stop_2]],["13:05",[skip_stop_2]],["14:05",[skip_stop_1]],["14:35",[skip_stop_2,'L']],
["15:05",[skip_stop_2]],["15:35",[skip_stop_2]],["16:05",[skip_stop_1,'L']],["16:35",[skip_stop_2]],["17:40",end_stop,start_stop,[[start_stop,5]]],["17:05",[skip_stop_2,'L']],["17:35",[skip_stop_2,'L']],["18:00",end_stop_2,start_stop,[skip_stop_1]],["18:15",end_stop_2,start_stop,[skip_stop_1]],["18:05",[skip_stop_1]],
["19:05",[skip_stop_2,'L']],["20:15",[skip_stop_2]]
];