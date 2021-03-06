green_4_interval_name = ["新化","新市<br />火車站","大營<br />路口","小新營","陽光<br />電城","小新營","善化<br />轉運站"];
green_4_interval_stop = [
["新化站","國泰大樓","水利會","工務段","達興公司","新化地政事務所"], // 新化
["永新社區","遠東科技大學","新市火車站","光華街口","新市工業區"], // 新市火車站
["豐榮(省道)","南大營","大營路口","統一果汁廠","北大營"], // 大營路口
["可果美"], // 小新營
["陽光電城","南科火車站","統一夢巴里","陽光大道"], // 陽光電城
["目加溜灣","小新營","善化啤酒廠","磚窯","小新里"], // 小新營
["大成陸橋","善化高中","善化轉運站"] // 善化轉運站
];
green_4_fare = [
[26],
[26,26],
[28,26,26],
[56,43,29,26], // 小新營
[40,26,26,26,26],
[56,43,29,26,26,26], // 小新營
[66,52,38,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_4_main_stop_name = ["新化","新市<br />火車站","豐榮<br />(省道)","大營<br />路口","南科<br />火車站","統一<br />夢巴里","善化<br />啤酒廠","善化<br />轉運站"];
green_4_main_stop_time_consume = [0, 10, 15, 19, 30, 32, 41, 50];
green_4_important_stop = [0, 1, 4, 7]; // 新化, 新市火車站, 南科火車站, 善化轉運站
green_4_time_go = [["07:30"],["09:40"],["14:30"],["17:10"]];
green_4_time_return = [["08:20"],["10:30"],["15:20"],["18:00"]];