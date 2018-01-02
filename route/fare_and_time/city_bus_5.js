// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_5_main_stop_name = ["桂田<br />酒店","鹽行","奇美<br />醫院","崑山<br />中學","臺南<br />火車站","赤崁樓","新光三越<br />新天地","大林<br />新城","市立<br />醫院","臺南<br />航空站","嘉南<br />藥理大學","大甲里"];
city_bus_5_main_stop_time_consume = [0, 5, 13, 20, 30, 35, 45, 55, 65, 67, 70, 75];
city_bus_5_important_stop = [0, 1, 2, 4, 8, 10]; // 桂田酒店, 鹽行, 奇美醫院, 臺南火車站, 市立醫院, 嘉南藥理大學
stop_start = 0; // 桂田酒店
stop_tainan_railway_station = 4; // 臺南火車站
stop_hospital = 8; // 市立醫院
stop_airport = 9; // 臺南航空站
city_bus_5_time_go = [["05:55",stop_start,stop_hospital,['L']],["06:05",[stop_hospital]],["06:20",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["06:35",[stop_hospital,[stop_tainan_railway_station,5]]],["06:50",stop_start,stop_hospital,['L',[stop_tainan_railway_station,5]]],
["07:10",stop_start,stop_hospital],["07:25",[stop_hospital]],["07:45",stop_start,stop_hospital,['L']],["08:05",[stop_hospital,[stop_airport,5]]],["08:30",stop_start,stop_hospital,['L']],["08:45",[stop_hospital,[stop_airport,5]]],["09:00",[stop_hospital]],
["09:20",stop_start,stop_hospital,['L']],["09:50",stop_start,stop_hospital],["10:25",stop_start,stop_hospital],["10:40",[stop_hospital,[stop_airport,5]]],["11:10",[stop_hospital]],["11:25",stop_start,stop_hospital],["11:45",stop_start,stop_hospital,['L']],
["12:00",[stop_hospital]],["12:20",[stop_hospital,[stop_airport,5]]],["12:40",stop_start,stop_hospital,['L']],["13:00",stop_start,stop_hospital],["13:20",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["13:40",[stop_hospital,[stop_tainan_railway_station,5]]],
["14:00",stop_start,stop_hospital],["14:20",stop_start,stop_hospital],["14:45",stop_start,stop_hospital,['L']],["15:05",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["15:30",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["15:50",[stop_hospital,[stop_tainan_railway_station,5]]],
["16:05",stop_start,stop_hospital,['L',[stop_tainan_railway_station,5]]],["16:20",[stop_hospital,[stop_tainan_railway_station,5]]],["16:30",[stop_hospital,[stop_tainan_railway_station,10]]],["16:40",stop_start,stop_hospital,[[stop_tainan_railway_station,10]]],["16:55",stop_start,stop_hospital,[[stop_tainan_railway_station,10]]],
["17:15",stop_start,stop_hospital,['L',[stop_tainan_railway_station,10]]],["17:35",['L',stop_hospital,[stop_tainan_railway_station,10]]],["18:00",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["18:20",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["18:50",stop_start,stop_hospital],["19:15",stop_start,stop_hospital],
["19:45",stop_start,stop_hospital],["20:15",[stop_hospital,[stop_airport,5]]],["20:55",stop_start,stop_hospital,[[stop_tainan_railway_station,10]]],["21:25",0,stop_tainan_railway_station],["21:55",0,stop_tainan_railway_station]
];
city_bus_5_time_return = [["06:05",stop_hospital,stop_start],["06:12",[stop_hospital,[stop_hospital,-7]]],["06:30",stop_hospital,stop_start,['L']],["06:50",stop_hospital,stop_start],["07:10",stop_hospital,stop_start,['L']],
["07:35",stop_hospital,stop_start],["07:42",[stop_hospital,[stop_hospital,-7]]],["08:10",stop_hospital,stop_start,['L']],["08:20",[stop_hospital,[stop_hospital,-5]]],["08:40",stop_hospital,stop_start],["09:15",stop_hospital,stop_start],["09:25",[stop_hospital,[stop_hospital,-5]]],
["09:42",[stop_hospital,[stop_hospital,-7]]],["10:05",stop_hospital,stop_start,['L']],["10:30",stop_hospital,stop_start,['L']],["10:37",[stop_hospital,[stop_hospital,-7]]],["10:55",[stop_hospital,[stop_hospital,-5]]],["11:15",stop_hospital,stop_start,['L']],
["12:00",stop_hospital,stop_start],["12:15",[stop_hospital,[stop_hospital,-5]]],["12:40",stop_hospital,stop_start,['L']],["12:52",[stop_hospital,[stop_hospital,-7]]],["13:20",stop_hospital,stop_start,['L']],["13:32",[stop_hospital,[stop_hospital,-7]]],
["14:02",[stop_hospital,[stop_hospital,-7]]],["14:25",stop_hospital,stop_start,['L']],["14:40",[stop_hospital,[stop_hospital,-5]]],["15:00",stop_hospital,stop_start],["15:15",stop_hospital,stop_start],["15:25",[stop_hospital,[stop_hospital,-5]]],
["16:00",stop_hospital,stop_start,['L']],["16:20",stop_hospital,stop_start,['L']],["16:45",stop_hospital,stop_start],["17:05",stop_hospital,stop_start],["17:20",[stop_hospital,[stop_hospital,-5]]],["17:45",stop_hospital,stop_start,['L']],
["17:52",[stop_hospital,[stop_hospital,-7]]],["18:10",[stop_hospital,[stop_hospital,-5]]],["18:25",stop_hospital,stop_start],["19:00",stop_hospital,stop_start],["19:15",['L',stop_hospital,[stop_hospital,-5]]],
["19:35",stop_hospital,stop_start,['L']],["19:52",[stop_hospital,[stop_hospital,-7]]],["20:40",stop_hospital,stop_start],["21:30",stop_hospital,stop_start],["21:40",[stop_hospital,[stop_hospital-1,-5,stop_hospital-2,-5]]],["22:05",stop_hospital,stop_tainan_railway_station]
];

// holiday schedule
city_bus_5_holiday_time_go = [["06:00",[stop_hospital]],["06:15",stop_start,stop_hospital],["06:30",[stop_hospital,[stop_airport,5]]],["06:45",stop_start,stop_hospital],
["07:15",stop_start,stop_hospital],["07:45",stop_start,stop_hospital],["08:05",['L',stop_hospital]],["08:25",stop_start,stop_hospital,['L']],["08:40",[stop_hospital]],["08:55",stop_start,stop_hospital],
["09:30",stop_start,stop_hospital],["10:00",[stop_hospital,[stop_airport,5]]],["10:25",stop_start,stop_hospital],["10:55",stop_start,stop_hospital],["11:20",[stop_hospital]],["11:40",stop_start,stop_hospital],
["12:00",[stop_hospital]],["12:20",stop_start,stop_hospital,['L']],["13:00",stop_start,stop_hospital,['L']],["13:35",[stop_hospital,[stop_tainan_railway_station,5]]],["13:55",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],
["14:15",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["14:35",stop_start,stop_hospital],["15:00",stop_start,stop_hospital,'L'],["15:25",stop_start,stop_hospital,['L']],["15:40",[stop_hospital,[stop_tainan_railway_station,5]]],["15:55",[stop_hospital,[stop_tainan_railway_station,5]]],
["16:20",stop_start,stop_hospital,['L',[stop_tainan_railway_station,5]]],["16:45",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["17:05",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["17:25",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["17:45",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],
["18:10",stop_start,stop_hospital,['L',[stop_tainan_railway_station,5]]],["18:40",stop_start,stop_hospital,['L',[stop_tainan_railway_station,5]]],["19:20",stop_start,stop_hospital,['L']],["20:00",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["20:35",stop_start,stop_hospital,[[stop_tainan_railway_station,5]]],["21:00",stop_start,stop_hospital,[[stop_tainan_railway_station,10]]],["21:25",stop_start,stop_tainan_railway_station]
];
city_bus_5_holiday_time_return = [["06:15",stop_hospital,stop_start],["06:40",stop_hospital,stop_start],["07:00",stop_hospital,stop_start],["07:22",[stop_hospital,[stop_hospital,-7]]],
["07:40",stop_hospital,stop_start],["08:10",stop_hospital,stop_start],["08:45",[stop_hospital,[stop_hospital,-5]]],["09:05",stop_hospital,stop_start],["09:35",stop_hospital,stop_start],
["09:47",[stop_hospital,[stop_hospital-1,-7]]],["10:20",stop_hospital,stop_start],["10:35",stop_hospital,stop_start,['L']],["10:42",[stop_hospital,[stop_hospital,-7]]],["11:20",stop_hospital,stop_start,['L']],
["11:55",stop_hospital,stop_start],["12:05",[stop_hospital,[stop_hospital,-5]]],["12:30",stop_hospital,stop_start],["12:52",[stop_hospital,[stop_hospital,-7]]],["13:15",stop_hospital,stop_start],["13:32",[stop_hospital,[stop_hospital,-7]]],
["14:20",stop_hospital,stop_start,['L']],["14:50",stop_hospital,stop_start,['L']],["15:25",stop_hospital,stop_start],["15:32",[stop_hospital,[stop_hospital,-7]]],
["16:00",stop_hospital,stop_start],["16:20",stop_hospital,stop_start],["16:45",stop_hospital,stop_start,['L']],["17:05",stop_hospital,stop_start,['L']],["17:20",[stop_hospital,[stop_hospital,-5]]],["17:50",stop_hospital,stop_start,['L']],
["18:02",[stop_hospital,[stop_hospital,-7]]],["18:30",stop_hospital,stop_start],["19:00",stop_hospital,stop_start],["19:30",stop_hospital,stop_start],["19:52",[stop_hospital,[stop_hospital,-7]]],["20:15",stop_hospital,stop_start,['L']],
["20:40",stop_hospital,stop_start,['L']],["21:00",stop_hospital,stop_start,['L',[stop_hospital-1,-5]]],["21:30",stop_hospital,stop_start,[[stop_hospital-1,-5]]],["22:00",stop_hospital,stop_tainan_railway_station]
];