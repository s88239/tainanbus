green_22_interval_name = ["玉井","鹿陶洋","楠西","香蕉山","梅嶺"];
green_22_interval_stop = [
["玉井站","玉田里"], // 玉井
["後旦","竹圍","鹿陶廟","鹿陶","埔頭子","大林路口","鹿陶洋","東西煙"], // 鹿陶洋
["油車","楠西區圖書館","楠西公所","楠西街","楠西","台電楠西服務所"], // 楠西
["茄拔路口","內埔","關帝廳","香蕉市","中山堂","灣丘","土地公廟","梅嶺資訊站","香蕉山","北勢仔","下井仔湖","上井仔湖","樟湖","二層坪"], // 香蕉山
["梅嶺"] // 梅嶺
];
green_22_fare = [
[26],
[26,26],
[26,26,26],
[45,28,26,26],
[56,40,31,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_22_main_stop_name = ["玉井","鹿陶","鹿陶洋","楠西","香蕉市","梅嶺<br />資訊站","梅嶺"];
green_22_main_stop_time_consume = [0, 7, 9, 15, 23, 28, 40];
green_22_important_stop = [0, 3, 6]; // 玉井, 楠西, 梅嶺
green_22_time_go = [["07:20"],["10:50"],["11:30"],["14:30"],["15:05",['加']],["18:00"]];
green_22_time_return = [["08:00"],["11:30"],["12:10"],["15:10"],["15:45",['加']],["18:40"]];

// holiday schedule
green_22_holiday_time_go = [["07:20"],["07:30",['加']],["08:10"],["09:00",['加']],["09:30"],["10:50"],["11:00",['加']],["11:30"],["12:30"],["13:00",['加']],["15:00",['加']],["15:05",['加']],["15:40"],["16:30",['加']],["17:10"],["18:00"],["19:30"]];
green_22_holiday_time_return = [["08:00"],["08:10",['加']],["08:50"],["09:40",['加']],["10:10"],["11:30"],["11:40",['加']],["12:10"],["13:10"],["13:40",['加']],["15:40",['加']],["15:45",['加']],["16:20"],["17:10",['加']],["17:50"],["18:40"],["20:10"]];