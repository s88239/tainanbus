green_11_interval_name = ["新化","那拔林","豐德","山上","大營<br />路口","小新營","茄拔","善化<br />轉運站"];
green_11_interval_stop = [
["新化站","新化公所","新化保養廠","養護之家","仁愛之家"], // 新化
["畜試所","臺南醫院新化分院","接天寺","那拔林","千鳥橋"], // 那拔林
["隙仔口","豐德","森霸電廠"], // 豐德
["水源地","山上派出所","農會托兒所","山上市場","山上公所","明和里"], // 山上
["大營路口","統一果汁廠","北大營"], // 大營路口
["可果美","五甲","目加溜灣","小新營"], // 小新營
["茄拔","牛庄","北子店"], // 茄拔
["善化轉運站"] // 善化轉運站
];
green_11_fare = [
[26],
[26,26],
[26,26,26],
[38,26,26,26],
[50,32,26,26,26],
[62,43,36,26,26,26],
[66,48,41,28,26,26,26],
[72,54,47,35,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_11_main_stop_name = ["新化","臺南醫院<br />新化分院","豐德","水源地","山上<br />市場","大營<br />路口","善化<br />轉運站"];
green_11_main_stop_time_consume = [0, 8, 14, 15, 18, 22, 40];
green_11_important_stop = [0, 3, 6]; // 新化, 水源地, 善化轉運站
green_11_time_go = [["05:30"],["08:20"],["09:30",['W']],["12:30",['W']],["13:30"],["18:20"]];
green_11_time_return = [["06:10"],["06:10"],["10:10",['W']],["13:10",['W']],["14:10"],["19:10"]];