brown_interval_name = ["新營","茄苳腳","鹽水","舊營","歡雅","田寮","大埔路口","大埔","學甲寮<br />麻油寮","宅子港","學甲","大灣","佳里興","佳里"];
brown_interval_stop = [
["新營站","臺南市農會","民治市政中心","新營高中","南新國中","民生新南里","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","護庇宮","鹽水","鹽水地政事務所","月津國小","鹽水壽園"], // 鹽水
["舊營"], // 舊營
["大莊里","歡雅","松子腳"], // 歡雅
["中洲寮","田寮"], // 田寮
["大埔路口"], // 大埔路口
["大豐國小","大豐南天宮","大埔橋"], // 大埔
["學甲寮","平西里","飯店里","麻油寮"], // 學甲寮, 麻油寮
["宅子港","德安寮","學甲工業區"], // 宅子港
["學甲國中","學甲郵局","學甲","學甲區公所","東寮","中華、華宗路口"], // 學甲
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
brown_main_stop_name = ["新營站","民治<br />市政中心","統聯<br />客運","鹽水","歡雅","大豐<br />南天宮","麻油寮","學甲","學甲<br />區公所","奇美<br />佳里分院","佳里站"];
brown_main_stop_time_consume = [0, 3, 8, 18, 26, 33, 33, 43, 44, 53, 60];
brown_important_stop = [0, 3, 7, 10]; // 新營站, 鹽水, 學甲, 佳里站
var Sinying = 0; // 新營站
var Yanshuei = 3; // 鹽水
var skip_stop_1 = 5; // 大豐南天宮
var skip_stop_2 = 6; // 麻油寮
var Syuejia = 7; // 學甲
var Syuejia_District_Office = 8; // 學甲區公所
var Jiali = 10; // 佳里站
brown_time_go = [["05:50",Sinying,Syuejia_District_Office,[skip_stop_1,[Yanshuei,-3,Syuejia,-6]]],["05:55",[skip_stop_1,[Yanshuei,-3,Syuejia_District_Office,1,Jiali,2]]],["06:00",Sinying,Yanshuei,['L',[Yanshuei,-3]]],["06:05",[skip_stop_2,'L',[Yanshuei,-3,Syuejia_District_Office,1,Jiali,2]]],["06:10",Sinying,Syuejia_District_Office,[skip_stop_1,[Yanshuei,-3,Syuejia,-1]]],["06:35",[skip_stop_1,'L']],["07:05",[skip_stop_2,[Yanshuei,2,Syuejia,-1,Jiali,-1]]],["07:35",[skip_stop_2]],["08:05",[skip_stop_1]],["08:35",[skip_stop_2]],["09:05",[skip_stop_2,[Syuejia,-3,Jiali,3]]],["09:35",[skip_stop_2,'L',[Syuejia,-3,Jiali,3]]],
["10:05",[skip_stop_1,'L',[Syuejia,-3,Jiali,3]]],["10:35",[skip_stop_2,[Syuejia,-3,Jiali,3]]],["11:05",[skip_stop_2]],["11:35",[skip_stop_2]],["12:05",[skip_stop_2]],["12:35",[skip_stop_1,[Syuejia,-3,Jiali,3]]],["13:05",[skip_stop_2,'L',[Syuejia,-3,Jiali,3]]],["13:35",[skip_stop_1,[Syuejia,-3,Jiali,3]]],["14:05",[skip_stop_2]],["14:35",[skip_stop_1,'L',[Syuejia,-3,Jiali,3]]],
["15:05",[skip_stop_2]],["15:20",Sinying,Syuejia_District_Office,[skip_stop_1,[Yanshuei,2,Syuejia,-2,Syuejia_District_Office,1]]],["15:35",[skip_stop_2,'L',[Yanshuei,2,Jiali,3]]],["16:05",[skip_stop_2,'L',[Yanshuei,2,Syuejia,-5,Syuejia_District_Office,1,Jiali,7]]],["16:10",Sinying,Syuejia_District_Office,[skip_stop_1,[Yanshuei,2,Syuejia,-2,Syuejia_District_Office,1]]],["16:35",[skip_stop_2]],["17:00",[skip_stop_1,[Syuejia,-3,Syuejia_District_Office,1,Jiali,2]]],["17:05",Sinying,Yanshuei,[[Yanshuei,7]]],["17:10",[skip_stop_1]],["17:15",[skip_stop_2,[Yanshuei,4,Syuejia,-2,Syuejia_District_Office,1,Jiali,-3]]],["17:35",[skip_stop_2,'L',[Yanshuei,4,Syuejia,-2,Syuejia_District_Office,1,Jiali,-3]]],["18:15",[skip_stop_2,[Yanshuei,2,Syuejia,-5,Jiali,3]]],
["19:05",[skip_stop_2]],["20:05",[skip_stop_2]],["21:40",[skip_stop_2,[Yanshuei,-3,Syuejia,-5,Jiali,-2]]]
];
brown_time_return = [["06:30",Yanshuei,Sinying,['L',[Sinying,2]]],["06:00",[skip_stop_2]],["06:35",[skip_stop_1]],["07:05",[skip_stop_2]],["07:20",[skip_stop_1,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["07:35",[skip_stop_2,'L',[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["08:00",Syuejia_District_Office,Sinying,[skip_stop_1,[Yanshuei,-4]]],["08:05",[skip_stop_1,'L',[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["08:30",Syuejia_District_Office,Sinying,[skip_stop_1,[Yanshuei,-4]]],["08:35",[skip_stop_2,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["09:05",[skip_stop_2]],["09:35",[skip_stop_2]],
["10:05",[skip_stop_1]],["10:35",[skip_stop_2,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["11:05",[skip_stop_2,'L',[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["11:35",[skip_stop_1,'L',[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["12:15",[skip_stop_2]],["12:45",[skip_stop_2]],["13:05",[skip_stop_2,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["14:05",[skip_stop_1,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["14:35",[skip_stop_2,'L',[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["14:50",[skip_stop_1,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],
["15:05",[skip_stop_2]],["15:35",[skip_stop_2]],["16:05",[skip_stop_1,'L']],["16:35",[skip_stop_2]],["17:40",Yanshuei,Sinying,[[Sinying,7]]],["17:05",[skip_stop_2,'L',[Syuejia_District_Office,2,Syuejia,1,Sinying,7]]],["17:35",[skip_stop_2,'L',[Syuejia_District_Office,1,Syuejia,1,Yanshuei,-7,Sinying,5]]],["18:00",Syuejia_District_Office,Sinying,[skip_stop_1,[Yanshuei,-3,Sinying,4]]],["18:15",Syuejia_District_Office,Sinying,[skip_stop_1,[Yanshuei,-3,Sinying,4]]],["18:05",[skip_stop_1]],
["18:15",[skip_stop_1,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["18:35",[skip_stop_2,[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["19:05",[skip_stop_2,'L',[Syuejia_District_Office,-2,Yanshuei,-3,Sinying,5]]],["20:15",[skip_stop_2,[Syuejia_District_Office,-2,Yanshuei,-5,Sinying,-3]]],["22:35",[skip_stop_2,[Syuejia_District_Office,-5,Yanshuei,-6,Sinying,1]]]
];