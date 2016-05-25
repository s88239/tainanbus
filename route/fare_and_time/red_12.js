red_12_interval_name = ["關廟","花園","龍崎","中坑","龍船","苦苓湖","烏山頭"];
red_12_interval_stop = [
["關廟國中","關廟市場"], // 關廟
["北勢里","花園","關廟轉運站","仰龍橋","牛稠埔","九天宮"], // 花園
["龍崎","龍崎公所","崎腳路口","大溪口"], // 龍崎
["中坑","龍崎文衡殿"], // 中坑
["過嶺路口","龍船"], // 龍船
["石曹","後壁溪","苦苓湖"], // 苦苓湖
["五間","烏山腳路口","烏山腳","烏山頭"] // 烏山頭
];
red_12_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[28,26,26,26,26],
[37,31,26,26,26,26],
[47,42,33,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_12_main_stop_name = ["關廟國中","關廟<br />轉運站","龍崎","苦苓湖","烏山頭"];
red_12_main_stop_time_consume = [0, 5, 10, 20, 25];
red_12_important_stop = [0, 1, 2, 4]; // 關廟國中, 關廟轉運站, 龍崎, 烏山頭
var start_stop = 1;
var end_stop = 4;
red_12_time_go = [["06:05",start_stop,end_stop],["13:10",start_stop,end_stop],["17:30"]];
red_12_time_return = [["06:30"],["13:30",end_stop,start_stop],["18:05",end_stop,start_stop]];