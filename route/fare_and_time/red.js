red_interval_name = ["安平<br />工業區","臺南","仁德","歸仁","關廟","花園","龍崎"];
red_interval_stop = [
["安平工業區","燕窩觀光工廠","開南公園","中華南路二段","新興國宅","德興路口","至善橋","郡南里","永成路三段","府南里","田寮里","新興國小"], // 安平工業區
["臺南站","新光三越新天地","小西門(大億麗緻)","西門、友愛街口","中正、西門路口","林百貨(中正路)","中山、民權路口",
"臺南火車站","縣知事官邸","東門圓環","東門教會","東門城","龍山寺","富強市場","東門路","虎尾寮","富農街口"], // 臺南
["崁腳","嘉南療養院","仁德交流道","仁德","仁義里","鍾厝","慈濟臺南分會","義林一街口","林仔","貝汝流通"], // 仁德
["上帝廟","南興里","南保","姓李仔","後市","歸仁公所","歸仁市場","歸仁文化中心","善化寺","看東里","修元堂","歸仁交流道"], // 歸仁
["大亞公司","關廟國中","關廟市場"], // 關廟
["北勢里","花園","關廟轉運站","仰龍橋","牛稠埔","九天宮"], // 花園
["龍崎"] // 龍崎
];
red_fare = [
[26],
[26,26],
[44,27,26],
[58,41,26,26],
[68,52,26,26,26],
[72,56,29,26,26,26],
[82,66,39,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_main_stop_name = ["安平<br />工業區","新光三越<br />新天地","臺南<br />火車站","仁德","歸仁公所","關廟國中","關廟<br />轉運站","龍崎"];
red_main_stop_time_consume = [0, 15, 25, 45, 55, 60, 65, 70];
red_important_stop = [0, 2, 6, 7]; // 安平工業區, 臺南火車站, 關廟轉運站, 龍崎
start_stop = 0;
stop_1 = 2; // 臺南火車站
stop_2 = 4; // 歸仁公所
stop_3 = 6; // 關廟轉運站
red_time_go = [["05:35",start_stop,stop_2,['W']],["05:45",start_stop,stop_3],["06:00",start_stop,stop_3,['繞',[stop_3,5]]],
["06:15",start_stop,stop_3],["06:30"],["07:00"],["07:15",start_stop,stop_3],["07:30",start_stop,stop_3],
["08:00"],["08:30",start_stop,stop_3],["09:00"],["09:30",start_stop,stop_3],["10:00"],["10:30",start_stop,stop_3],["11:00"],
["11:30",start_stop,stop_3],["11:45",start_stop,stop_3],["12:00"],["12:15",start_stop,stop_3],["12:30",start_stop,stop_3],
["13:00"],["13:30",start_stop,stop_3],["14:00"],["14:30",start_stop,stop_3],["15:00"],["15:30",start_stop,stop_3],
["15:45",start_stop,stop_3],["16:00"],["16:15",start_stop,stop_3],["16:45",start_stop,stop_3],["16:50",start_stop,stop_3],
["17:00"],["17:15",start_stop,stop_3],["17:30",start_stop,stop_3],["17:45",start_stop,stop_3],["18:00"],
["18:30",start_stop,stop_3],["19:00"],["19:30",start_stop,stop_3],["20:00"],["20:30",start_stop,stop_3],
["21:00",start_stop,stop_3],["21:15",start_stop,stop_3],["21:30"],["22:00",start_stop,stop_3]
];
red_time_return = [["05:50"],["06:10",stop_3,start_stop],["06:20",stop_3,start_stop],["06:30",stop_2,start_stop,['W']],["06:20"],
["06:40",stop_3,start_stop],["06:50",stop_3,start_stop],["06:50"],["07:15",stop_3,start_stop],["07:30",stop_3,start_stop],
["07:50"],["08:30",stop_3,start_stop],["08:50"],["09:30",stop_3,start_stop],["09:50"],["10:30",stop_3,start_stop],["10:50"],
["11:30",stop_3,start_stop],["11:50"],["12:15",stop_3,start_stop],["12:35",stop_3,start_stop],["12:50"],
["13:30",stop_3,start_stop],["13:50"],["14:15",stop_3,start_stop],["14:30",stop_3,start_stop],["14:50"],
["15:30",stop_3,start_stop],["15:50"],["16:30",stop_3,start_stop],["16:50",['繞',[stop_2,5]]],
["17:15",stop_3,start_stop,['繞',[stop_2,5]]],["17:30",stop_3,start_stop],["17:45",stop_3,start_stop],["17:50"],
["18:30",stop_3,start_stop],["18:45",stop_3,start_stop],["18:50"],["19:30",stop_3,start_stop],["19:50"],
["20:25",stop_3,start_stop],["20:45",stop_3,start_stop],["20:50"],["21:20"],["22:00",stop_3,start_stop]
];