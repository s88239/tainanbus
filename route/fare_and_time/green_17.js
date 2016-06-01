green_17_interval_name = ["安平<br />工業區","臺南","網寮","崑山<br />科大","大灣","西勢里","崙子頂","洋子","新化"];
green_17_interval_stop = [
["安平工業區","安平港","服務中心","明和公園","三官廟","新興國小"], // 安平工業區
["臺南站","新光三越新天地","小西門(大億麗緻)","西門、友愛街口","西門、民權路口","民權路","中山、民權路口","臺南火車站","臺南公園(北門路)","成功大學","成大醫院","光明街口"], // 臺南
["四份子","臺灣銀行","榮民醫院"], // 網寮
["漢聲電台","建國里","崑山科大","崑山社區","天公廟(永康)"], // 崑山科大
["埔子尾","南灣","大灣三街","大灣","姓鄭仔","北灣村"], // 大灣
["南西勢","西勢國小","西勢里","蕃薯厝"], // 西勢里
["崙子頂","東崙子頂"], // 崙子頂
["竹子腳(大灣)","洋子"], // 洋子
["營盤後","清水寺","農會前","新化站"] // 新化
];
green_17_fare = [
[26],
[26,26],
[31,26,26],
[35,26,26,26],
[42,32,26,26,26],
[47,37,26,26,26,26],
[51,41,26,26,26,26,26],
[58,47,27,26,26,26,26,26],
[63,53,32,28,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_17_main_stop_name = ["安平<br />工業區","新光三越<br />新天地","臺南<br />火車站","崑山科大","大灣","西勢里","竹子腳<br />(大灣)","新化"];
green_17_main_stop_time_consume = [0, 10, 20, 32, 38, 42, 46, 50];
green_17_important_stop = [0, 2, 3, 7]; // 安平工業區, 臺南火車站, 崑山大學, 新化
green_17_time_go = [["06:10"],["07:10"],["07:35",['W']],["08:10"],["09:10"],["10:10"],["11:10"],["12:10"],["12:40"],["13:10"],
["14:10"],["14:30",['W']],["15:10"],["16:10"],["16:40"],["17:10"],["17:40"],["18:40"],["19:40"],["20:40"],["21:10"],["21:25"]];
green_17_time_return = [["06:10"],["06:20"],["07:10"],["08:15"],["09:15"],["09:45"],["10:15",['W']],["10:45"],["11:45"],["12:15"],
["12:45"],["13:15"],["14:15"],["15:15"],["16:15"],["17:00",['W']],["17:15"],["17:45"],["18:15"],["19:15"],["20:15"],["21:00"]];