yellow_9_interval_name = ["新營","南安溪寮","後壁火車站","上茄苳","南靖火車站","高鐵嘉義站"];
yellow_9_interval_stop = [
["新營站","新營區公所","臺南市政府民治中心","臺南市農會","東興國宅","新營客運管理中心"], // 新營
["南安溪寮","北安溪寮"], // 南安溪寮
["下茄苳","後壁高中","後壁火車站"], // 後壁火車站
["上茄苳"], // 上茄苳
["南靖火車站"], // 南靖火車站
["高鐵嘉義站"] // 高鐵嘉義站
];
yellow_9_stop_time_consume = [0,2,3,5,7,9,11,13,15,16,17,21,24,40];
yellow_9_fare = [
[26],
[26,26],
[36,26,26],
[46,26,26,26],
[57,36,26,26,26],
[97,76,61,50,40,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_9_main_stop_name = ["新營","臺南市政府<br />民治中心","南安<br />溪寮","後壁<br />高中","後壁<br />火車站","上茄苳","南靖<br />火車站","高鐵<br />嘉義站"];
yellow_9_main_stop_time_consume = [0, 3, 11, 16, 17, 21, 24, 40];
yellow_9_important_stop = [0, 4, 7]; // 新營, 後壁火車站, 高鐵嘉義站
yellow_9_time_go = [["06:10",[1,'W']],["06:45"],["07:10"],["08:10"],["09:10"],["10:10"],["11:10"],["12:10"],["13:10"],["14:10"],["15:10"],
["16:10"],["17:10"],["17:40",['五']],["18:10"],["18:40",[1,'五']],["19:10",[1]],["19:40",[1,'五']],["20:10",[1]],["20:40",[1,'五']]];
yellow_9_time_return = [["07:15",['W']],["07:50"],["08:15"],["09:15"],["10:15"],["11:15"],["12:15"],["13:15"],["14:15"],["15:15"],["16:15"],
["17:15"],["18:15",[1]],["18:45",[1,'五']],["19:15",[1]],["19:45",[1,'五']],["20:15",[1]],["20:45",[1,'五']],["21:15",[1]],["21:45",[1,'五']]];