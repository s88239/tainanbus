highway_bus_7210_interval_name = ["嘉義","下路頭","後庄","公館","檳榔<br />樹角","中庄","內角","草店","溪洲","三間厝","白河"];
highway_bus_7210_interval_stop = [
["嘉義轉運中心","嘉義火車站","嘉義站","第一銀行","公明路","承德站","崇文國小"], // 嘉義
["嘉義高工","立仁高中","下路頭","輔仁中學"], // 下路頭
["興村","後庄","中埔農會"], // 後庄
["公館","仁友醫院","公館尾"],  // 公館
["檳榔樹角","檳榔樹角一"], // 檳榔樹角
["中庄","中庄一","尚學書局","營房"], // 中庄
["將軍山","糞箕科","內角","步兵崗"], // 內角
["草店","關帝廟","甘宅"], // 草店
["溪洲","財星社區"], // 溪洲
["三間厝","白河國中"], // 三間厝
["恆大","日光幼稚園","舊郵局","圓環地政","白河分局","白河"] // 白河
];
highway_bus_7210_stop_time_consume = [0,20,30,45,60,70];
highway_bus_7210_fare = [
[24,21,21,21,21,23,30,33,38,42,47],
[24,24,21,21,21,21,24,27,31,35,41],
[24,24,24,21,21,21,21,23,27,31,36],
[24,24,24,24,21,21,21,21,23,27,32],
[24,24,24,24,24,21,21,21,21,21,26],
[26,24,24,24,24,24,21,21,21,21,24],
[34,27,24,24,24,24,24,21,21,21,21],
[38,31,26,24,24,24,24,24,21,21,21],
[43,36,31,26,24,24,24,24,24,21,21],
[47,40,35,30,24,24,24,24,24,24,21],
[53,46,42,36,29,28,24,24,24,24,24]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
highway_bus_7210_main_stop_name = ["嘉義轉運站","嘉義火車站","內角","白河"];
highway_bus_7210_main_stop_time_consume = [0,5,35,45];
highway_bus_7210_important_stop = [0, 1, 3]; // 嘉義轉運站, 嘉義火車站, 白河
highway_bus_7210_time_go = [["06:30"],["07:30"],["08:30"],["13:30"],["17:20",['繞']],["17:30"],["18:20",['繞']],["19:30"],["20:00"],["20:30"],["21:40"]];
highway_bus_7210_time_return = [["06:00"],["06:15",['繞']],["06:30",['繞']],["06:40"],["07:30"],["08:30"],["09:30"],["14:30"],["18:30"],["19:30"]];