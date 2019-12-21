red_11_interval_name = ["關廟","花園","龍崎","中坑","龍船","苦苓湖","牛埔農塘"];
red_11_interval_stop = [
["關廟國中","關廟市場"], // 關廟
["北勢里","花園","關廟轉運站","仰龍橋","牛稠埔","新光國小","代天府(新光里)","桂花巷(新光里)","南寮街(新光里)"], // 花園
["龍崎國中","龍崎","龍崎區公所","崎腳路口","大溪口"], // 龍崎
["龍崎文衡殿"], // 中坑
["過嶺路口","龍船"], // 龍船
["石曹","田草埔","後壁溪","後壁溪橋","順興瓦斯行","龍崎農會分會","苦苓湖"], // 苦苓湖
["龍船國小","瓦厝(牛埔)","牛埔橋","頂牛埔","牛埔","牛埔製麵廠","牛埔農塘"] // 牛埔農塘
];
red_11_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[28,26,26,26,26],
[37,31,26,26,26,26],
[45,40,31,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_11_main_stop_name = ["關廟國中","關廟<br />轉運站","代天府<br />(新光里)","龍崎","龍崎農會<br />分會","牛埔農塘"];
red_11_main_stop_time_consume = [0, 5, 13, 20, 30, 35];
red_11_important_stop = [0, 1, 3, 5]; // 關廟國中, 關廟轉運站, 龍崎, 牛埔農塘
red_11_time_go = [["07:05"],["08:25"],["09:45"],["11:05"],["13:00"],["14:20"],["15:30"]];
red_11_time_return = [["07:50"],["09:10"],["10:30"],["11:50"],["13:45"],["14:55"],["16:15"]];