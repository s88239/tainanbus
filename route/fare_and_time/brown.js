brown_interval_name = ["新營","茄苳腳","鹽水","舊營","歡雅","田寮","大埔路口","大埔","學甲寮<br />麻油寮","宅子港","學甲","營頂","佳里興","佳里"];
brown_interval_stop = [
["新營","臺南市農會","民治市政中心","南新國中","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","鹽水","地政事務所","月津國小"], // 鹽水
["舊營"], // 舊營
["歡雅","松子腳"], // 歡雅
["中洲寮","田寮"], // 田寮
["大埔路口"], // 大埔路口
["大豐國小","大埔","大埔橋"], // 大埔
["學甲寮","平西里","(繞)飯店里","(繞)麻油寮"], // 學甲寮, 麻油寮
["宅子港","德安寮"], // 宅子港
["學甲國中","學甲","學甲公所","東寮"], // 學甲
["清濟宮","大灣","營頂"], // 營頂
["佳里興北","佳里興","奇美佳里分院","北門農工","糖廠前"], // 佳里興
["中山公園","佳里"] // 佳里
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
brown_main_stop_name = ["新營","民治<br />市政中心","統聯<br />客運","鹽水","歡雅","大埔","麻油寮","學甲","奇美<br />佳里分院","佳里"];
brown_main_stop_time_consume = [0, 3, 8, 18, 26, 33, 33, 43, 53, 60];
brown_important_stop = [0, 3, 7, 9]; // 新營, 鹽水, 學甲, 佳里
brown_time_go = [["6:05",[6]],["6:35",[5]],["7:05",[6]],["7:35",[6]],["8:05",[5]],["8:35",[6]],["9:05",[6]],["9:35",[6]],
["10:05",[5]],["10:35",[6]],["11:05",[6]],["11:35",[6]],["12:05",[6]],["12:35",[5]],["13:05",[6]],["14:05",[6]],["14:35",[5]],
["15:05",[6]],["15:35",[6]],["16:05",[6]],["16:35",[6]],["17:05",[5]],["17:35",[6]],["18:05",[6]],["19:05",[6]],["20:05",[6]]
];
brown_time_return = [["6:05",[6]],["6:35",[5]],["7:05",[6]],["7:35",[6]],["8:05",[5]],["8:35",[6]],["9:05",[6]],["9:35",[6]],
["10:05",[5]],["10:35",[6]],["11:05",[6]],["11:35",[5]],["12:05",[6]],["12:35",[6]],["13:05",[6]],["14:05",[5]],["14:35",[6]],
["15:05",[6]],["15:35",[6]],["16:05",[5]],["16:35",[6]],["17:05",[6]],["17:35",[6]],["18:05",[5]],["19:05",[6]],["20:05",[6]]
];