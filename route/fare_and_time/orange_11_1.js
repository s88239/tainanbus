orange_11_1_interval_name = ["下營","中營","麻豆","安業","謝厝寮","後營","西港","和順","北安路","臺南"];
orange_11_1_interval_stop = [
["下營區公所"], // 下營
["中營"], // 中營
["麻豆轉運站","電姬戲院","麻豆分局","巷口","後寮"], // 麻豆
["安業派出所"], // 安業
["謝厝寮"], // 謝厝寮
["後營"], // 後營
["西港"], // 西港
["北和順"], // 和順
["安中路口","聖安街口"], // 北安路
["臺南二中","臺南火車站","臺南轉運站"] // 臺南
];
orange_11_1_fare = [
[26],
[26,26,],
[40,29,26],
[53,42,26,26],
[57,47,26,26,26],
[63,53,26,26,26,26],
[72,62,33,26,26,26,26],
[96,85,56,43,39,33,26,26],
[111,101,72,59,54,48,39,26,26],
[128,117,88,75,70,64,55,32,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_11_1_main_stop_name = ["下營<br />區公所","麻豆<br />轉運站","麻豆<br />分局","西港","北和順","安中<br />路口","臺南<br />火車站","臺南<br />轉運站"];
orange_11_1_main_stop_time_consume = [0, 15, 20, 35, 55, 67, 80, 85];
orange_11_1_important_stop = [0, 1, 3, 6, 7]; // 下營區公所, 麻豆轉運站, 西港, 臺南火車站, 臺南轉運站
var Madou = 1; // 麻豆轉運站
var Tainan_Park = 7; // 臺南公園(公園路)
orange_11_1_time_go = [["06:00"],["08:00",Madou,Tainan_Park],["09:05",Madou,Tainan_Park],
["11:00",Madou,Tainan_Park],["12:25"],["13:50",Madou,Tainan_Park],["14:10",Madou,Tainan_Park],
["15:40",Madou,Tainan_Park],["19:10"]
];
orange_11_1_time_return = [["07:25",Tainan_Park,Madou],["09:40",Tainan_Park,Madou],["10:30"],
["12:50",Tainan_Park,Madou],["14:00",Tainan_Park,Madou],["15:40",Tainan_Park,Madou],
["16:10",Tainan_Park,Madou],["17:00"],["20:40"]
];