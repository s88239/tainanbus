// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_1_main_stop_name = ["臺南<br />火車站","新光三越<br />新天地","鹽埕","喜樹","威武廟","茄萣<br />衛生所","崎漏<br />電信局","興達<br />遠洋漁港"];
city_bus_1_main_stop_time_consume = [0, 10, 20, 29, 41, 50, 55, 60];
city_bus_1_important_stop = [0, 5, 7]; // 臺南火車站, 茄萣衛生所, 興達遠洋漁港
var start_stop = 0; // 臺南火車站
var end_stop_1 = 5; // 茄萣衛生所
var end_stop_2 = 6; // 崎漏電信局
city_bus_1_time_go = [["06:40",start_stop,end_stop_1],["06:55",start_stop,end_stop_1],["07:10",start_stop,end_stop_1],["07:20",start_stop,end_stop_1],["07:30",start_stop,end_stop_1],["07:40",start_stop,end_stop_1],
["07:55",start_stop,end_stop_1],["08:10",start_stop,end_stop_1],["08:25",start_stop,end_stop_1],["08:40",start_stop,end_stop_1],["08:55",start_stop,end_stop_1],["09:20",start_stop,end_stop_1],["09:50",start_stop,end_stop_1],
["10:20",start_stop,end_stop_1],["10:50",start_stop,end_stop_1],["11:20",start_stop,end_stop_1],["11:50",start_stop,end_stop_1],["12:20",start_stop,end_stop_1],["12:50",start_stop,end_stop_1],["13:20",start_stop,end_stop_1],
["13:50",start_stop,end_stop_1],["14:20",start_stop,end_stop_1],["14:50",start_stop,end_stop_1],["15:20",start_stop,end_stop_1],["15:50",start_stop,end_stop_1],["16:10",start_stop,end_stop_1],["16:30",start_stop,end_stop_2],
["16:50",start_stop,end_stop_1],["17:05",start_stop,end_stop_1],["17:20",start_stop,end_stop_2],["17:30",start_stop,end_stop_2],["17:50",start_stop,end_stop_1],["18:00",start_stop,end_stop_1],["18:20",start_stop,end_stop_1],
["18:30",start_stop,end_stop_1],["18:50",start_stop,end_stop_1],["19:10",start_stop,end_stop_1],["19:30",start_stop,end_stop_1],["19:50",start_stop,end_stop_1],["20:20",start_stop,end_stop_1],["21:00",start_stop,end_stop_1],
["21:20",start_stop,end_stop_2],["21:50",start_stop,end_stop_2],["22:20",start_stop,end_stop_1]
];
city_bus_1_time_return = [["05:55",end_stop_2,start_stop],["06:05",end_stop_2,start_stop],["06:15",end_stop_1,start_stop],["06:15",end_stop_2,start_stop],["06:25",end_stop_2,start_stop],["06:40",end_stop_1,start_stop],
["06:50",end_stop_1,start_stop],["07:00",end_stop_2,start_stop],["07:20",end_stop_1,start_stop],["07:35",end_stop_1,start_stop],["07:50",end_stop_1,start_stop],["08:05",end_stop_1,start_stop],
["08:30",end_stop_1,start_stop],["09:00",end_stop_1,start_stop],["09:30",end_stop_1,start_stop],["10:00",end_stop_1,start_stop],["10:30",end_stop_1,start_stop],["11:00",end_stop_1,start_stop],
["11:30",end_stop_1,start_stop],["12:00",end_stop_1,start_stop],["12:30",end_stop_1,start_stop],["13:00",end_stop_1,start_stop],["13:30",end_stop_1,start_stop],["14:00",end_stop_1,start_stop],
["14:30",end_stop_1,start_stop],["15:00",end_stop_1,start_stop],["15:20",end_stop_1,start_stop],["15:40",end_stop_1,start_stop],["16:00",end_stop_1,start_stop],["16:15",end_stop_1,start_stop],
["16:30",end_stop_1,start_stop],["16:40",end_stop_1,start_stop],["17:00",end_stop_1,start_stop],["17:10",end_stop_1,start_stop],["17:30",end_stop_1,start_stop],["17:40",end_stop_1,start_stop],
["18:00",end_stop_1,start_stop],["18:15",end_stop_2,start_stop],["18:40",end_stop_1,start_stop],["19:00",end_stop_1,start_stop],["19:30",end_stop_1,start_stop],["20:00",end_stop_1,start_stop],
["20:30",end_stop_1,start_stop],["21:00",end_stop_1,start_stop],["21:30",end_stop_1,start_stop]
];

// holiday schedule
city_bus_1_holiday_time_go = [["06:40",start_stop,end_stop_1],["07:05",start_stop,end_stop_1],["07:30",start_stop,end_stop_1],["07:50",start_stop,end_stop_1],["08:10",start_stop,end_stop_1],
["08:30",start_stop,end_stop_1],["08:50",start_stop,end_stop_1],["09:10",start_stop,end_stop_1],["09:30",start_stop,end_stop_1],["09:50",start_stop,end_stop_1],["10:20"],["10:50",start_stop,end_stop_1],["11:20",start_stop,end_stop_1],
["11:50",start_stop,end_stop_1],["12:20",start_stop,end_stop_1],["12:50",start_stop,end_stop_1],["13:20",start_stop,end_stop_1],["13:50",start_stop,end_stop_1],["14:20"],["14:50",start_stop,end_stop_1],["15:20",start_stop,end_stop_1],
["15:50",start_stop,end_stop_1],["16:10",start_stop,end_stop_1],["16:30",start_stop,end_stop_2],["16:50",start_stop,end_stop_2],["17:10",start_stop,end_stop_1],["17:30",start_stop,end_stop_2],["17:50",start_stop,end_stop_1],
["18:10",start_stop,end_stop_1],["18:30",start_stop,end_stop_1],["18:50",start_stop,end_stop_1],["19:20",start_stop,end_stop_1],["19:50",start_stop,end_stop_1],["20:20",start_stop,end_stop_1],["20:50",start_stop,end_stop_1],
["21:20",start_stop,end_stop_2],["21:50",start_stop,end_stop_2],["22:20",start_stop,end_stop_1]
];
city_bus_1_holiday_time_return = [["05:55",end_stop_2,start_stop],["06:15",end_stop_2,start_stop],["06:35",end_stop_2,start_stop],["06:55",end_stop_2,start_stop],["07:15",end_stop_2,start_stop],["07:40",end_stop_1,start_stop],
["08:00",end_stop_1,start_stop],["08:20",end_stop_1,start_stop],["08:40",end_stop_1,start_stop],["09:00",end_stop_1,start_stop],["09:30",end_stop_1,start_stop],["10:00",end_stop_1,start_stop],["10:30",end_stop_1,start_stop],["11:00",end_stop_1,start_stop],
["11:30",end_stop_1,start_stop],["12:00",end_stop_1,start_stop],["12:30",end_stop_1,start_stop],["12:50"],["13:30",end_stop_1,start_stop],["14:00",end_stop_1,start_stop],["14:30",end_stop_1,start_stop],["15:00",end_stop_1,start_stop],
["15:20",end_stop_1,start_stop],["15:40",end_stop_1,start_stop],["16:00",end_stop_1,start_stop],["16:20",end_stop_1,start_stop],["16:40",end_stop_1,start_stop],["16:50"],["17:20",end_stop_1,start_stop],["17:40",end_stop_1,start_stop],
["18:00",end_stop_1,start_stop],["18:30",end_stop_1,start_stop],["19:00",end_stop_1,start_stop],["19:30",end_stop_1,start_stop],["20:00",end_stop_1,start_stop],["20:30",end_stop_1,start_stop],["21:00",end_stop_1,start_stop],["21:30",end_stop_1,start_stop]
];