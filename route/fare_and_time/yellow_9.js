yellow_9_interval_name = ["新營","南安溪寮","後壁火車站","上茄苳","南靖火車站","高鐵嘉義站","故宮南院"];
yellow_9_interval_stop = [ // 2015.08.31 checked
["新營站","第三市場","新營區公所","臺南市政府民治中心","臺南市農會","新東國中","東興國宅",
"東興、長榮路口","新營客運管理中心","卯舍","土庫里"], // 新營
["南安溪寮","北安溪寮","下茄苳"], // 南安溪寮
["後壁高中","良食故事館","後壁火車站"], // 後壁火車站
["上茄苳"], // 上茄苳
["南靖火車站"], // 南靖火車站
["高鐵嘉義站"], // 高鐵嘉義站
["故宮南院"] // 故宮南院
];
yellow_9_fare = [
[26],
[26,26],
[36,26,26],
[46,26,26,26],
[57,36,26,26,26],
[97,76,61,50,40,26],
[114,94,78,68,58,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_9_main_stop_name = ["新營","臺南市政府<br />民治中心","東興<br />國宅","南安<br />溪寮","後壁<br />高中","後壁<br />火車站","上茄苳","南靖<br />火車站","高鐵<br />嘉義站","故宮南院<br /><span style='color:red;'>【二~日】</span>"];
yellow_9_main_stop_time_consume = [0, 3, 8, 14, 19, 20, 24, 27, 43, 50];
yellow_9_important_stop = [0, 5, 8, 9]; // 新營, 後壁火車站, 高鐵嘉義站, 故宮南院
var start_stop = 0; // 新營
var skip_stop = 1; // 臺南市政府民治中心
var stop_1 = 2; // 東興國宅
var stop_2 = 6; // 後壁火車站
var hsr_chiayi = 8; // 上茄苳
yellow_9_time_go = [["06:00",start_stop,hsr_chiayi,[skip_stop,'W']],["06:40",start_stop,hsr_chiayi,[[stop_1,6,stop_2,4]]],["07:00",start_stop,hsr_chiayi],["08:00"],["09:00"],["10:00"],["11:00"],["12:00"],["13:00"],["14:00"],["15:00"],
["16:00"],["17:00",[[stop_1,6,stop_2,4]]],["17:40",start_stop,hsr_chiayi,['五']],["18:00",start_stop,hsr_chiayi],["18:40",start_stop,hsr_chiayi,[skip_stop,'五']],["19:00",start_stop,hsr_chiayi,[skip_stop]],["19:40",start_stop,hsr_chiayi,[skip_stop,'五']],["20:00",start_stop,hsr_chiayi,[skip_stop]],["20:40",start_stop,hsr_chiayi,[skip_stop,'五']]];
yellow_9_time_return = [["07:15",hsr_chiayi,start_stop,['W']],["07:55",hsr_chiayi,start_stop],["08:25",hsr_chiayi,start_stop],["09:10",[[hsr_chiayi,8]]],["10:10",[[hsr_chiayi,8]]],["11:10",[[hsr_chiayi,8]]],["12:10",[[hsr_chiayi,8]]],["13:10",[[hsr_chiayi,8]]],["14:10",[[hsr_chiayi,8]]],["15:10",[[hsr_chiayi,8]]],["16:10",[[hsr_chiayi,8]]],
["17:10",[[hsr_chiayi,8]]],["18:10",[skip_stop,[hsr_chiayi,8]]],["19:00",hsr_chiayi,start_stop,[skip_stop,'五']],["19:25",hsr_chiayi,start_stop,[skip_stop]],["20:00",hsr_chiayi,start_stop,[skip_stop,'五']],["20:25",hsr_chiayi,start_stop,[skip_stop]],["21:00",hsr_chiayi,start_stop,[skip_stop,'五']],["21:25",hsr_chiayi,start_stop,[skip_stop]],["22:00",hsr_chiayi,start_stop,[skip_stop,'五']]];