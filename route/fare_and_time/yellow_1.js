yellow_1_interval_name = ["新營","人和里","柳營","龜子港","林鳳營","中社","六甲","嘉南里","烏山頭<br />水庫","臺南藝<br />術大學"];
yellow_1_interval_stop = [ // 2015.12.03 checked
["新營站","第三市場","新營國小","圓環(第一銀行)","新進路口","真武殿","南光中學"], // 新營
["人和里"], // 人和里
["士林里","柳營","新榮中學","南士林"], // 柳營
["嘉南駕訓班","龜子港(省道)","社區"], // 龜子港
["林鳳營火車站","林鳳營"], // 林鳳營
["中社","東中社"], // 中社
["中山路社區","水林","六甲區公所","冰廠","六甲市場","六甲國中","六甲衛生所","六甲"], // 六甲
["赤山巖","龍潭寺","嘉南里"], // 嘉南里
["烏山頭水庫"], // 烏山頭水庫
["大崎","臺南藝術大學(西側門)","臺南藝術大學"] // 臺南藝術大學
];
yellow_1_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[30,26,26,26,26],
[35,26,26,26,26,26],
[50,41,35,26,26,26,26],
[57,48,43,33,27,26,26,26],
[60,51,45,36,29,26,26,26,26],
[73,65,59,50,43,38,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_1_main_stop_name = ["新營站","柳營","龜子港<br />(省道)","林鳳營<br />火車站","六甲","烏山頭<br />水庫","臺南<br />藝術大學"];
yellow_1_main_stop_time_consume = [0, 9, 14, 17, 29, 34, 40];
yellow_1_important_stop = [0, 3, 4, 5, 6]; // 新營站, 林鳳營火車站, 六甲, 烏山頭水庫, 臺南藝術大學
var main_end_stop = 4; // 六甲
yellow_1_time_go = [["06:00",0,main_end_stop],["06:50",0,main_end_stop],["08:25"],["09:30"],["12:20"],["13:10"],["15:10"],["17:20",0,main_end_stop],["18:50",0,main_end_stop]];
yellow_1_time_return = [["06:35",main_end_stop,0],["07:30",main_end_stop,0],["09:15"],["10:20"],["13:10"],["14:00"],["16:00"],["18:10",main_end_stop,0],["19:30",main_end_stop,0]];