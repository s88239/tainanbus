// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_1_main_stop_name = ["臺南<br />火車站","新光三越<br />新天地","鹽埕","喜樹","威武廟","成功橋","崎漏<br />電信局","興達<br />遠洋漁港"];
city_bus_1_main_stop_time_consume = [0, 10, 20, 29, 41, 50, 55, 60];
city_bus_1_important_stop = [0, 5, 7]; // 臺南火車站, 成功橋, 興達遠洋漁港
var start_stop = 0; // 臺南火車站
var end_stop_1 = 5; // 成功橋
var end_stop_2 = 6; // 崎漏電信局
city_bus_1_time_go = [["06:40",start_stop,end_stop_1,['喜']],["06:50",start_stop,end_stop_1],["07:00",start_stop,end_stop_1],["07:20",start_stop,end_stop_1],["07:30",start_stop,end_stop_1],["07:40",start_stop,end_stop_1],
["08:00",start_stop,end_stop_1],["08:20",start_stop,end_stop_2,['喜']],["08:35",start_stop,end_stop_2],["08:50",start_stop,end_stop_2],["09:05",start_stop,end_stop_2],["09:20",start_stop,end_stop_2],["09:50",start_stop,end_stop_2],
["10:20",start_stop,end_stop_2],["10:50",start_stop,end_stop_2,['喜']],["11:20",start_stop,end_stop_2],["11:50",start_stop,end_stop_2],["12:20",start_stop,end_stop_1],["12:50",start_stop,end_stop_1],["13:20",start_stop,end_stop_1],
["13:50",start_stop,end_stop_1],["14:20",start_stop,end_stop_2],["14:50",start_stop,end_stop_1],["15:20",start_stop,end_stop_1],["15:50",start_stop,end_stop_1],["16:10",start_stop,end_stop_1,['喜']],["16:30",start_stop,end_stop_2],
["16:50",start_stop,end_stop_1],["17:05",start_stop,end_stop_1],["17:20",start_stop,end_stop_2],["17:30",start_stop,end_stop_2],["17:40",start_stop,end_stop_2],["17:50",start_stop,end_stop_2],["18:00",start_stop,end_stop_2,['喜']],["18:20",start_stop,end_stop_2],
["18:30",start_stop,end_stop_2],["18:50",start_stop,end_stop_1],["19:10",start_stop,end_stop_1],["19:30",start_stop,end_stop_2],["19:50",start_stop,end_stop_2],["20:20",start_stop,end_stop_1],["21:00",start_stop,end_stop_2],
["21:20",start_stop,end_stop_2],["21:50",start_stop,end_stop_2],["22:20",start_stop,end_stop_2]
];
city_bus_1_time_return = [["05:45",end_stop_2,start_stop,['喜']],["05:55",end_stop_2,start_stop],["06:05",end_stop_2,start_stop],["06:15",end_stop_2,start_stop],["06:25",end_stop_2,start_stop],["06:35",end_stop_2,start_stop],
["06:45",end_stop_2,start_stop],["07:00",end_stop_2,start_stop],["07:30",end_stop_1,start_stop,['喜']],["07:45",end_stop_1,start_stop],["08:00",end_stop_1,start_stop],["08:15",end_stop_1,start_stop],
["08:30",end_stop_1,start_stop],["09:00",end_stop_1,start_stop],["09:30",end_stop_1,start_stop],["09:55",end_stop_2,start_stop,['喜']],["10:25",end_stop_2,start_stop],["10:55",end_stop_2,start_stop],
["11:25",end_stop_2,start_stop],["11:55",end_stop_2,start_stop],["12:25",end_stop_2,start_stop],["12:55",end_stop_2,start_stop],["13:30",end_stop_1,start_stop],["14:00",end_stop_1,start_stop],
["14:30",end_stop_1,start_stop],["15:00",end_stop_1,start_stop],["15:15",end_stop_2,start_stop,['喜']],["15:35",end_stop_2,start_stop],["16:00",end_stop_1,start_stop],["16:10",end_stop_2,start_stop],
["16:30",end_stop_1,start_stop],["16:35",end_stop_2,start_stop],["17:00",end_stop_1,start_stop],["17:10",end_stop_1,start_stop,['喜']],["17:25",end_stop_2,start_stop],["17:40",end_stop_1,start_stop],
["18:00",end_stop_1,start_stop],["18:15",end_stop_2,start_stop],["18:35",end_stop_2,start_stop],["18:55",end_stop_2,start_stop],["19:25",end_stop_2,start_stop],["19:55",end_stop_2,start_stop],
["20:30",end_stop_1,start_stop],["21:00",end_stop_1,start_stop],["21:30",end_stop_1,start_stop]
];

// holiday schedule
city_bus_1_holiday_time_go = [["06:40",start_stop,end_stop_1,['喜']],["07:00",start_stop,end_stop_1],["07:20",start_stop,end_stop_1],["07:40",start_stop,end_stop_1],["08:00",start_stop,end_stop_1],
["08:30",start_stop,end_stop_1,['喜']],["08:50",start_stop,end_stop_1],["09:10",start_stop,end_stop_1],["09:30",start_stop,end_stop_1],["09:50",start_stop,end_stop_1],["10:20",['喜']],["10:50",start_stop,end_stop_2],["11:20",start_stop,end_stop_2],
["11:50",start_stop,end_stop_2],["12:20",start_stop,end_stop_2],["12:50",start_stop,end_stop_1],["13:20",start_stop,end_stop_1],["13:50",start_stop,end_stop_2,['喜']],["14:20"],["14:50",start_stop,end_stop_1],["15:20",start_stop,end_stop_1],
["15:50",start_stop,end_stop_1],["16:10",start_stop,end_stop_1],["16:30",start_stop,end_stop_2],["16:50",start_stop,end_stop_2],["17:10",start_stop,end_stop_2],["17:30",start_stop,end_stop_2,['喜']],["17:50",start_stop,end_stop_2],
["18:10",start_stop,end_stop_1],["18:30",start_stop,end_stop_1],["18:50",start_stop,end_stop_1],["19:20",start_stop,end_stop_1],["19:50",start_stop,end_stop_2],["20:20",start_stop,end_stop_1],["20:50",start_stop,end_stop_2],
["21:20",start_stop,end_stop_2],["21:50",start_stop,end_stop_2],["22:20",start_stop,end_stop_2]
];
city_bus_1_holiday_time_return = [["05:45",end_stop_2,start_stop,['喜']],["06:05",end_stop_2,start_stop],["06:25",end_stop_2,start_stop],["06:45",end_stop_2,start_stop],["07:05",end_stop_2,start_stop],["07:40",end_stop_1,start_stop,['喜']],
["08:00",end_stop_1,start_stop],["08:20",end_stop_1,start_stop],["08:40",end_stop_1,start_stop],["09:00",end_stop_1,start_stop],["09:30",end_stop_1,start_stop,['喜']],["10:00",end_stop_1,start_stop],["10:30",end_stop_1,start_stop],["11:00",end_stop_1,start_stop],
["11:30",end_stop_1,start_stop],["11:55",end_stop_2,start_stop],["12:25",end_stop_2,start_stop],["12:50",['喜']],["13:25",end_stop_2,start_stop],["14:00",end_stop_1,start_stop],["14:30",end_stop_1,start_stop],["14:55",end_stop_2,start_stop],
["15:15",end_stop_2,start_stop],["15:35",end_stop_2,start_stop],["16:00",end_stop_1,start_stop],["16:20",end_stop_1,start_stop],["16:35",end_stop_2,start_stop,['喜']],["16:50"],["17:20",end_stop_1,start_stop],["17:40",end_stop_1,start_stop],
["17:55",end_stop_2,start_stop],["18:25",end_stop_2,start_stop],["19:00",end_stop_1,start_stop],["19:25",end_stop_2,start_stop],["20:00",end_stop_1,start_stop],["20:30",end_stop_1,start_stop],["21:00",end_stop_1,start_stop],["21:30",end_stop_1,start_stop]
];