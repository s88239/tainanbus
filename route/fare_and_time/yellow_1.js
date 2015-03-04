yellow_1_interval_name = ["新營","人和里","柳營","龜子港","林鳳營","中社","六甲","嘉南里","烏山頭<br />水庫","臺南藝<br />術大學"];
yellow_1_interval_stop = [
["新營站","新營國小","圓環(第一銀行)","新進路口","真武殿","南光中學"], // 新營
["人和里"], // 人和里
["士林里","柳營","新榮中學"], // 柳營
["東又悅公司","嘉南駕訓班","龜子港(省道)"], // 龜子港
["社區","林鳳營火車站","林鳳營"], // 林鳳營
["中社","東中社","中山路社區","水林"], // 中社
["六甲公所","冰廠","六甲市場","六甲國中","六甲衛生所","六甲"], // 六甲
["赤山巖","龍潭寺","嘉南里"], // 嘉南里
["烏山頭水庫"], // 烏山頭水庫
["大崎","臺南藝術大學(西側門)","臺南藝術大學"] // 臺南藝術大學
];
yellow_1_stop_time_consume = [0,2,4,5,6,7,7,8,9,12,13,14,15,17,18,19,22,23,24,24,25,26,27,28,29,30,32,34,35,37,41,43,45];
yellow_1_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[27,26,26,26,26],
[33,26,26,26,26,26],
[46,38,33,26,26,26,26],
[54,46,40,32,27,26,26,26],
[56,48,42,34,29,26,26,26,26],
[70,62,56,47,43,36,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_1_main_stop_name = ["新營","柳營","龜子港<br />(省道)","林鳳營<br />火車站","六甲","烏山頭水庫","臺南藝<br />術大學"];
yellow_1_main_stop_time_consume = [0, 9, 15, 18, 30, 35, 45];
yellow_1_important_stop = [0, 3, 4, 5, 6]; // 新營, 林鳳營火車站, 六甲, 烏山頭水庫, 臺南藝術大學
var main_end_stop = 4; // 六甲
yellow_1_time_go = [["06:00",0,main_end_stop],["06:55",0,main_end_stop],["08:30",0,main_end_stop],["09:30",0,main_end_stop],["12:20",0,main_end_stop],["13:00",0,main_end_stop],["15:00"],["17:00",0,main_end_stop],["18:15",0,main_end_stop]];
yellow_1_time_return = [["06:35",main_end_stop,0],["07:30",main_end_stop,0],["09:15",main_end_stop,0],["10:15",main_end_stop,0],["13:05",main_end_stop,0],["13:45",main_end_stop,0],["15:50"],["17:40",main_end_stop,0],["18:50",main_end_stop,0]];

var wushantou_stop = 5; // 烏山頭水庫
yellow_1_holiday_time_go = [["06:00",0,main_end_stop],["06:55",0,main_end_stop],["08:30",0,wushantou_stop],["09:30",0,wushantou_stop],["12:20",0,wushantou_stop],["13:00",0,wushantou_stop],["15:00"],["17:00",0,main_end_stop],["18:15",0,main_end_stop]];
yellow_1_holiday_time_return = [["06:35",main_end_stop,0],["07:30",main_end_stop,0],["09:10",wushantou_stop,0],["10:10",wushantou_stop,0],["13:00",wushantou_stop,0],["13:40",wushantou_stop,0],["15:50"],["17:40",main_end_stop,0],["18:50",main_end_stop,0]];