city_bus_5_interval_name = ["臺南"];
city_bus_5_interval_stop = [
["鹽行","南鹽行","洲仔尾","愛買量販","大崎","南大崎","南臺科技大學","中正南路","臺電配電中心","奇美醫院","大橋",
"臺南高工","南工宿舍","崑山中學","開元","富台新村","中樓","勝利北路","成大醫院(勝利路)","成功大學","小東路","臺南公園(北門路)",
"臺南火車站","南區健保局","民族路","赤崁樓","西門、民權路口","西門、友愛街口","小西門(大億麗緻)","新光三越新天地","西門路一段",
"臺南站","家齊女中","臺南高商","體育公園","竹溪寺(健康路)","南臺南","大林新城","忠孝新村","大林","亞伯大飯店","生產路口",
"台糖公司","保仁路","仁愛里","二空東","二空新城","成功里活動中心","東區電信局","市立醫院","龍寶路口","牛稠仔","空軍臺南基地",
"臺南航空站","臺南都會公園","保安里(家具產業博物館)","嘉南藥理大學","崇德十四街口","崇明國中","市立醫院(崇明路)","崇明路",
"德東街口"]
];
city_bus_5_stop_time_consume = [0,1,2,3,4,4,5,6,7,8,10,11,13,15,16,17,18,20,21,22,23,24,25,28,29,30,33,36,38,40,41,42,43,44,45,46,47,48,49,
50,51,52,53,54,55,56,58,59,59,60,53,54,55,57,58,59,60,60,61,62,63,64]; // unreliable
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_5_main_stop_name = ["桂田<br />酒店","鹽行","南臺<br />科大","奇美<br />醫院","崑山<br />中學","臺南<br />火車站","赤崁樓","新光三越<br />新天地","大林<br />新城","市立<br />醫院","臺南<br />航空站","嘉南<br />藥理大學","大甲里"];
city_bus_5_main_stop_time_consume = [0, 5, 10, 13, 20, 30, 35, 45, 55, 65, 62, 65, 70];
city_bus_5_important_stop = [0, 1, 3, 5, 9]; // 桂田酒店, 鹽行, 奇美醫院, 臺南火車站, 市立醫院
stop_start = 0;
stop_tainan_railway_station = 5;
stop_hospital = 9;
stop_airport = 10;
city_bus_5_time_go = [["05:55",stop_start,stop_hospital,['L']],["6:05",stop_start,stop_airport,[stop_hospital]],["6:20",stop_start,stop_hospital,[[5,5]]],["6:35",[stop_hospital,[5,5,10,5]]],["6:50",stop_start,stop_hospital,['<font color="red">L</font>生',[5,5]]],
["7:10",stop_start,stop_hospital],["7:25",stop_start,stop_airport,[stop_hospital]],["7:45",stop_start,stop_hospital,['L']],["8:05",[stop_hospital,[10,10]]],["8:30",stop_start,stop_hospital,['L']],["8:45",[stop_hospital,[10,10]]],["9:00",stop_start,stop_airport,[stop_hospital]],
["9:20",stop_start,stop_hospital,['L']],["9:50",stop_start,stop_hospital],["10:25",stop_start,stop_hospital,['生']],["10:40",[stop_hospital,[10,10]]],["11:10",stop_start,stop_airport,[stop_hospital]],["11:25",stop_start,stop_hospital],["11:45",stop_start,stop_hospital,['L']],
["12:00",stop_start,stop_airport,[stop_hospital]],["12:20",[stop_hospital,[10,10]]],["12:40",stop_start,stop_hospital,['L']],["13:00",stop_start,stop_hospital,['生']],["13:20",stop_start,stop_hospital,[[4,5]]],["13:40",[stop_hospital,[5,5,10,5]]],
["14:00",stop_start,stop_hospital],["14:20",stop_start,stop_hospital],["14:45",stop_start,stop_hospital,['L']],["15:05",stop_start,stop_hospital,[[5,5]]],["15:30",stop_start,stop_hospital,[[5,5]]],["15:50",[stop_hospital,[5,5,10,5]]],
["16:05",stop_start,stop_hospital,['L',[5,5]]],["16:20",stop_start,stop_airport,[stop_hospital,[5,5]]],["16:30",[stop_hospital,[5,10,10,5]]],["16:40",stop_start,stop_hospital,[[5,10]]],["16:55",stop_start,stop_hospital,['生',[5,10]]],
["17:15",stop_start,stop_hospital,['L',[5,10]]],["17:35",['L',stop_hospital,[5,10,10,5]]],["18:00",stop_start,stop_hospital,[[5,5]]],["18:20",stop_start,stop_hospital,[[5,5]]],["18:50",stop_start,stop_hospital],["19:15",stop_start,stop_hospital],
["19:45",stop_start,stop_hospital],["20:15",[stop_hospital]],["20:55",stop_start,stop_hospital,[[5,10]]],["21:25",0,stop_tainan_railway_station],["21:55",0,stop_tainan_railway_station]
];
city_bus_5_time_return = [["06:05",stop_hospital,stop_start],["6:20",stop_airport,stop_start,[stop_hospital,[stop_hospital,-2]]],["6:30",stop_hospital,stop_start,['L']],["6:50",stop_hospital,stop_start],["7:10",stop_hospital,stop_start,['L']],
["7:35",stop_hospital,stop_start],["7:50",stop_airport,stop_start,[stop_hospital,[8,-2]]],["8:10",stop_hospital,stop_start,['<font color="red">L</font>生',[6,-5]]],["8:20",[stop_hospital]],["8:40",stop_hospital,stop_start],["9:15",stop_hospital,stop_start],["9:25",[stop_hospital]],
["9:50",stop_airport,stop_start,[stop_hospital,[8,-2]]],["10:05",stop_hospital,stop_start,['L']],["10:30",stop_hospital,stop_start,['L']],["10:45",stop_airport,stop_start,[stop_hospital,[8,-2]]],["10:55",[stop_hospital]],["11:15",stop_hospital,stop_start,['L']],
["12:00",stop_hospital,stop_start,['生',[7,-5]]],["12:15",[stop_hospital]],["12:40",stop_hospital,stop_start,['L']],["13:00",stop_airport,stop_start,[stop_hospital,[8,-2]]],["13:20",stop_hospital,stop_start,['L']],["13:40",stop_airport,stop_start,[stop_hospital,[8,-2]]],
["14:10",stop_airport,stop_start,[stop_hospital,[8,-2]]],["14:25",stop_hospital,stop_start,['L']],["14:40",[stop_hospital]],["15:00",stop_hospital,stop_start,['生',[7,-5]]],["15:15",stop_hospital,stop_start],["15:25",[stop_hospital]],
["16:00",stop_hospital,stop_start,['L']],["16:20",stop_hospital,stop_start,['L']],["16:45",stop_hospital,stop_start],["17:05",stop_hospital,stop_start,['生',[7,-5]]],["17:20",[stop_hospital]],["17:45",stop_hospital,stop_start,['L']],
["18:00",stop_airport,stop_start,[stop_hospital,[8,-2]]],["18:10",[stop_hospital]],["18:25",stop_hospital,stop_start],["19:00",stop_hospital,stop_start,['生',[7,-5]]],["19:15",['L',stop_hospital]],
["19:35",stop_hospital,stop_start,['L']],["20:00",stop_airport,stop_start,[stop_hospital,[8,-2]]],["20:40",stop_hospital,stop_start],["21:30",stop_hospital,stop_start],["21:40",[stop_hospital,[7,-5]]],["22:05",stop_hospital,stop_tainan_railway_station]
];

// holiday schedule
city_bus_5_holiday_time_go = [["06:00",stop_start,stop_airport,[stop_hospital]],["6:15",stop_start,stop_hospital],["6:30",[stop_hospital,[10,10]]],["6:45",stop_start,stop_hospital,['生']],
["7:15",stop_start,stop_hospital],["7:45",stop_start,stop_hospital],["8:05",stop_start,stop_airport,['L',stop_hospital]],["8:25",stop_start,stop_hospital,['L']],["8:40",stop_start,stop_airport,[stop_hospital]],["8:55",stop_start,stop_hospital],
["9:30",stop_start,stop_hospital],["10:00",[stop_hospital,[10,10]]],["10:25",stop_start,stop_hospital,['生']],["10:55",stop_start,stop_hospital],["11:20",stop_start,stop_airport,[stop_hospital]],["11:40",stop_start,stop_hospital],
["12:00",stop_start,stop_airport,[stop_hospital]],["12:20",stop_start,stop_hospital,['L']],["13:00",stop_start,stop_hospital,['L']],["13:35",stop_start,stop_airport,[stop_hospital,[5,5]]],["13:55",stop_start,stop_hospital,[[5,5]]],
["14:15",stop_start,stop_hospital,[[5,5]]],["14:35",stop_start,stop_hospital,['生']],["15:00",stop_start,stop_hospital,'L'],["15:25",stop_start,stop_hospital,['L']],["15:40",[stop_hospital,[5,5,10,5]]],["15:55",stop_start,stop_airport,[stop_hospital,[5,5]]],
["16:20",stop_start,stop_hospital,['L',[5,5]]],["16:45",stop_start,stop_hospital,[[5,5]]],["17:05",stop_start,stop_hospital,['生',[5,5]]],["17:25",stop_start,stop_hospital,[[5,5]]],["17:45",stop_start,stop_hospital,[[5,5]]],
["18:10",stop_start,stop_hospital,['L',[5,5]]],["18:40",stop_start,stop_hospital,['L',[5,5]]],["19:20",stop_start,stop_hospital,['L']],["20:00",stop_start,stop_hospital,[[5,5]]],["20:35",stop_start,stop_hospital,[[5,5]]],["21:00",stop_start,stop_hospital,[[5,10]]],["21:25",stop_start,stop_tainan_railway_station]
];
city_bus_5_holiday_time_return = [["06:15",stop_hospital,stop_start],["6:40",stop_hospital,stop_start],["7:00",stop_hospital,stop_start],["7:20",stop_airport,stop_start,[stop_hospital,[8,-2]]],
["7:40",stop_hospital,stop_start],["8:10",stop_hospital,stop_start,['生',[7,-5]]],["8:45",[stop_hospital]],["9:05",stop_hospital,stop_start],["9:35",stop_hospital,stop_start],
["9:55",stop_airport,stop_start,[stop_hospital,[7,-2]]],["10:20",stop_hospital,stop_start],["10:35",stop_hospital,stop_start,['L']],["10:50",stop_airport,stop_start,[stop_hospital,[8,-2]]],["11:20",stop_hospital,stop_start,['L']],
["11:55",stop_hospital,stop_start,['生',[7,-5]]],["12:05",[stop_hospital]],["12:30",stop_hospital,stop_start],["13:00",stop_airport,stop_start,[stop_hospital,[8,-2]]],["13:15",stop_hospital,stop_start],["13:40",stop_airport,stop_start,[stop_hospital,[8,-2]]],
["14:20",stop_hospital,stop_start,['L']],["14:50",stop_hospital,stop_start,['L']],["15:25",stop_hospital,stop_start],["15:40",stop_airport,stop_start,[stop_hospital,[8,-2]]],
["16:00",stop_hospital,stop_start],["16:20",stop_hospital,stop_start,['生',[7,-5]]],["16:45",stop_hospital,stop_start,['L']],["17:05",stop_hospital,stop_start,['<font color="red">L</font>生',[7,-5]]],["17:20",[stop_hospital]],["17:50",stop_hospital,stop_start,['L']],
["18:10",stop_airport,stop_start,[stop_hospital,[8,-2]]],["18:30",stop_hospital,stop_start],["19:00",stop_hospital,stop_start,['生',[7,-5]]],["19:30",stop_hospital,stop_start],["20:00",stop_airport,stop_start,[stop_hospital,[8,-2]]],["20:15",stop_hospital,stop_start,['L']],
["20:40",stop_hospital,stop_start,['L']],["21:00",stop_hospital,stop_start,['L',[7,-5]]],["21:30",stop_hospital,stop_start,[[7,-5]]],["22:00",stop_hospital,stop_tainan_railway_station]
];