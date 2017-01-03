highway_bus_7410_interval_name = ["新營","埤寮","溪州寮","鹽水<br />分駐所","牛稠仔","義竹<br />社區","義竹","安溪<br />寮仔","後鎮仔","前東港","布袋港","遊客<br />中心","布袋<br />商港"];
highway_bus_7410_interval_stop = [
["新營站","圓環","三民路口","南新國中","新營高中","民治市政中心","新營高工","中正世家","電力公司","許丑"], // 新營
["埤寮","護鎮活動中心"], // 埤寮
["溪州寮","南榮科技大學"], // 溪州寮
["鹽水分駐所","鹽水國中"], // 鹽水分駐所
["岸內","義稠里","牛稠仔"], // 牛稠仔
["義竹社區"], // 義竹社區
["義竹國小","義竹","松仔腳","竹圍仔"], // 義竹
["四十九公廟","埤仔頭","安溪寮仔","磚廠"], // 安溪寮仔
["東後鎮仔","後鎮仔"], // 後鎮仔
["義布橋","平和社區","江山里","前東港","山寮仔"], // 前東港
["布袋廟後","布袋鎮公所","布袋","布袋港"], // 布袋港
["布袋遊客中心"],  // 遊客中心
["布袋商港"] // 布袋商港
];
highway_bus_7410_fare = [
[24],
[24,24],
[25,24,24],
[33,24,24,24],
[36,24,24,24,24],
[40,24,24,24,24,24],
[42,26,24,24,24,24,24],
[53,37,28,24,24,24,24,24],
[58,42,33,25,24,24,24,24,24],
[65,49,40,32,29,25,24,24,24,24],
[74,59,50,41,38,35,33,24,24,24,24],
[76,60,52,43,40,36,34,24,24,24,24,24],
[83,67,58,50,46,43,41,30,25,24,24,24,24]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
highway_bus_7410_main_stop_name = ["新營","鹽水<br />分駐所","義竹","前東港","布袋<br />遊客中心","布袋商港<br /><font color=\"red\">(4-9月延駛)</font>"];
highway_bus_7410_main_stop_time_consume = [0,21,27,39,45,50];
highway_bus_7410_important_stop = [0, 1, 4, 5]; // 新營, 鹽水分駐所, 布袋遊客中心, 布袋商港
stop_0 = 0; // 新營
stop_1 = 4; // 布袋遊客中心
highway_bus_7410_time_go = [
["07:30",stop_0,stop_1],["08:20"],["08:50",['L']],["10:20",stop_0,stop_1],["12:10",stop_0,stop_1],["13:50",stop_0,stop_1],
["15:10",stop_0,stop_1],["17:05",stop_0,stop_1],["18:00"],["18:50",stop_0,stop_1]
];
highway_bus_7410_time_return = [
["06:00",stop_1,stop_0],["08:20",stop_1,stop_0],["09:20"],["09:50",['L']],["11:10",stop_1,stop_0],["13:00",stop_1,stop_0],
["14:40",stop_1,stop_0],["16:00",stop_1,stop_0],["18:05",stop_1,stop_0],["19:00"]
];