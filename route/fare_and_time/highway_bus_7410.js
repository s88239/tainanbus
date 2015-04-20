highway_bus_7410_interval_name = ["新營","茄苳腳","鹽水","牛稠仔","義竹<br />社區","義竹","安溪<br />寮仔","後鎮仔","前東港","布袋港","遊客<br />中心","布袋<br />商港"];
highway_bus_7410_interval_stop = [
["新營站","圓環","三民路口","新營高中","齊普","新營漁市場","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","鹽水","分駐所","鹽水國中"], // 鹽水
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
highway_bus_7410_stop_time_consume = [];
highway_bus_7410_fare = [
[24,21,21,25,28,30,40,44,51,59,61,67],
[24,24,21,21,21,21,27,32,38,46,48,54],
[24,24,24,21,21,21,21,24,30,38,40,46],
[28,24,24,24,21,21,21,21,26,35,36,42],
[32,24,24,24,24,21,21,21,23,31,33,39],
[34,24,24,24,24,24,21,21,21,29,31,37],
[45,30,24,24,24,24,24,21,21,21,21,27],
[50,36,27,24,24,24,24,24,21,21,21,22],
[57,43,34,29,26,24,24,24,24,21,21,21],
[67,52,43,39,36,33,24,24,24,24,21,21],
[69,54,45,41,37,35,24,24,24,24,24,21],
[76,61,52,48,44,42,30,25,24,24,24,24]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
highway_bus_7410_main_stop_name = ["新營","鹽水","義竹","前東港","布袋<br />遊客中心","布袋商港<br /><font color=\"red\">(4-9月延駛)</font>"];
highway_bus_7410_main_stop_time_consume = [0,15,20,35,42,45];
highway_bus_7410_important_stop = [0, 1, 4]; // 新營, 鹽水, 布袋遊客中心
stop_0 = 0; // 新營
stop_1 = 4; // 布袋遊客中心
highway_bus_7410_time_go = [
["07:10",stop_0,stop_1],["08:20"],["08:50"],["10:00",stop_0,stop_1],["11:00",stop_0,stop_1],["12:40",stop_0,stop_1],
["15:00",stop_0,stop_1],["17:10",stop_0,stop_1,['繞',[1,5]]],["18:00"],["18:50",stop_0,stop_1]
];
highway_bus_7410_time_return = [
["05:58",stop_1,stop_0,['繞',[0,5]]],["07:58",stop_1,stop_0],["09:20"],["09:50"],["10:48",stop_1,stop_0],["11:48",stop_1,stop_0],
["13:28",stop_1,stop_0],["15:48",stop_1,stop_0],["18:13",stop_1,stop_0],["19:00"]
];