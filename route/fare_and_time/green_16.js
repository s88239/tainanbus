green_16_interval_name = ["新化","埤子頭","關廟<br />交流道","花園","關廟","歸仁","六甲","高鐵<br />臺南站"];
green_16_interval_stop = [
["新化站","新化體育公園","瓜瓜園生態館","農會前","清水寺","營盤後","洋子","竹子腳","統一花園"], // 新化
["頂山子腳","加州新城","孤山子","埤頭里活動中心","埤頭里","埤子頭","下山子腳"], // 埤子頭
["下湖","悠然山莊","關廟交流道","過坑子"], // 關廟交流道
["北勢里活動中心","關廟轉運站","花園","北勢里"], // 花園
["關廟區公所","山西宮","關廟國中","大亞公司"], // 關廟
["歸仁交流道","修元堂","看東里","善化寺","歸仁文化中心","歸仁市場","新豐高中","歸仁國中","歸仁區公所(中正北路)","歸仁區公所(中正南路)","崁仔頭","崁仔下","歸南","頂歸南","歸南派出所"], // 歸仁
["六甲(中正南路)","歸仁分局","成大歸仁校區"], // 六甲
["窩仔底","沙崙國中","高鐵臺南站"] // 高鐵臺南站
];
green_16_fare = [
[26],
[26,26],
[31,26,26],
[34,26,26,26],
[40,26,26,26,26],
[51,36,26,26,26,26],
[63,49,33,29,26,26,26],
[72,57,41,37,32,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_16_main_stop_name = ["新化","統一花園","埤子頭","關廟<br />轉運站","關廟國中","歸仁<br />區公所","高鐵<br />臺南站"];
green_16_main_stop_time_consume = [0, 5, 8, 20, 25, 30, 45];
green_16_important_stop = [0, 3, 4, 5, 6]; // 新化, 關廟轉運站, 關廟國中,歸仁區公所, 高鐵臺南站
var skip_stop = 1; // 統一花園
var start_stop = 0; // 新化
var stop_1 = 4; // 關廟國中
var stop_2 = 5; // 歸仁區公所
green_16_time_go = [["05:50",start_stop,stop_2,[skip_stop,'豐']],["07:00",start_stop,stop_1,[[2,5]]],["08:30",[skip_stop]],
["10:00",start_stop,stop_1,[skip_stop]],["11:00",[skip_stop]],["12:00",start_stop,stop_1,[[2,5]]],
["13:00",start_stop,stop_1,[skip_stop]],["14:00",[skip_stop]],["15:00",start_stop,stop_1,[skip_stop]],
["16:10",start_stop,stop_1,[skip_stop]],["17:25",start_stop,stop_1,[[2,5]]],["18:55",[skip_stop]],
["19:20",start_stop,stop_1,[skip_stop]],["20:00",start_stop,stop_1,[skip_stop]],["21:00",start_stop,stop_1,[skip_stop]],
["22:00",start_stop,stop_1,[skip_stop]]
];
green_16_time_return = [["06:20",stop_2,start_stop,[skip_stop,'豐']],["07:30",stop_1,start_stop,[[skip_stop,5]]],
["09:25",[skip_stop]],["10:25",stop_1,start_stop,[skip_stop]],["11:45",[skip_stop]],["12:30",stop_1,start_stop,[[skip_stop,5]]],
["13:25",stop_1,start_stop,[skip_stop]],["14:55",[skip_stop]],["15:25",stop_1,start_stop,[skip_stop]],
["16:35",stop_1,start_stop,[skip_stop]],["17:55",stop_1,start_stop,[[skip_stop,5]]],["19:40",stop_1,start_stop,[skip_stop]],
["19:40",[skip_stop]],["20:25",stop_1,start_stop,[skip_stop]],["21:25",stop_1,start_stop,[skip_stop]],
["22:25",stop_1,start_stop,[skip_stop]]
];