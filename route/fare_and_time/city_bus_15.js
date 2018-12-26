// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_15_main_stop_name = ["奇美<br />醫院","臺南<br />高工","中華、<br />小東路口","南紡購<br />物中心","中華東、<br />東門路口","巴克禮<br />公園","大林<br />國宅","國民、<br />大成路口","家齊<br />高中","大成<br />國中","大成<br />路口"];
city_bus_15_main_stop_time_consume = [0, 5, 10, 12, 17, 21, 25, 27, 30, 33, 35];
city_bus_15_important_stop = [0, 1, 3, 5, 8]; // 大成路口, 臺南站, 臺南火車站, 海東國小, 聖母廟, 城西里
var start_stop = 0; // 奇美醫院
var end_stop = 9; // 大成國中
city_bus_15_time_go = [["06:00",start_stop,end_stop],["06:15",start_stop,end_stop],["06:30",start_stop,end_stop],["06:45",start_stop,end_stop],["07:15"],["07:35",start_stop,end_stop],["08:15",start_stop,end_stop],["08:50",start_stop,end_stop],
["09:20"],["09:55",start_stop,end_stop],["10:35",start_stop,end_stop],["11:00"],["11:35",start_stop,end_stop],["12:15",start_stop,end_stop],["12:50"],["13:20",start_stop,end_stop],["14:00",start_stop,end_stop],["14:40"],
["15:10",start_stop,end_stop],["15:40",start_stop,end_stop],["16:20",start_stop,end_stop],["16:50"],["17:20",start_stop,end_stop],["17:45",start_stop,end_stop],["18:10",start_stop,end_stop],["18:35"],["19:00",start_stop,end_stop],["19:30",start_stop,end_stop],
["20:10",start_stop,end_stop],["20:30",start_stop,end_stop],["21:00",start_stop,end_stop],["21:30",start_stop,end_stop]];
city_bus_15_time_return = [["06:10",end_stop,start_stop],["06:20",end_stop,start_stop],["06:35",end_stop,start_stop],["06:55",end_stop,start_stop],["07:35",end_stop,start_stop],["08:08"],["08:40",end_stop,start_stop],["09:15",end_stop,start_stop],
["09:55",end_stop,start_stop],["10:18"],["10:55",end_stop,start_stop],["11:35",end_stop,start_stop],["12:03"],["12:35",end_stop,start_stop],["13:15",end_stop,start_stop],["13:48"],["14:30",end_stop,start_stop],
["15:00",end_stop,start_stop],["15:33"],["16:00",end_stop,start_stop],["16:35",end_stop,start_stop],["17:00",end_stop,start_stop],["17:20",end_stop,start_stop],["17:43"],["18:15",end_stop,start_stop],["18:55",end_stop,start_stop],["19:28"],
["19:50",end_stop,start_stop],["20:20",end_stop,start_stop],["20:50",end_stop,start_stop],["21:30",end_stop,start_stop]];

// holiday schedule
city_bus_15_holiday_time_go = [["06:20",start_stop,end_stop],["06:45",start_stop,end_stop],["07:15"],["07:35",start_stop,end_stop],["08:15",start_stop,end_stop],["08:50",start_stop,end_stop],
["09:20"],["09:55",start_stop,end_stop],["10:15",start_stop,end_stop],["10:35",start_stop,end_stop],["11:00"],["11:35",start_stop,end_stop],["12:15",start_stop,end_stop],["12:50"],["13:20",start_stop,end_stop],["14:00",start_stop,end_stop],["14:40"],
["15:10",start_stop,end_stop],["15:40",start_stop,end_stop],["16:20",start_stop,end_stop],["16:40"],["17:20",start_stop,end_stop],["17:55",start_stop,end_stop],["18:25"],["19:00",start_stop,end_stop],["19:35",start_stop,end_stop],
["20:10",start_stop,end_stop],["20:45",start_stop,end_stop],["21:30",start_stop,end_stop]];
city_bus_15_holiday_time_return = [["06:10",end_stop,start_stop],["06:35",end_stop,start_stop],["06:55",end_stop,start_stop],["07:35",end_stop,start_stop],["08:08"],["08:40",end_stop,start_stop],["09:00",end_stop,start_stop],["09:15",end_stop,start_stop],
["09:55",end_stop,start_stop],["10:18"],["10:55",end_stop,start_stop],["11:35",end_stop,start_stop],["12:03"],["12:35",end_stop,start_stop],["13:15",end_stop,start_stop],["13:48"],["14:30",end_stop,start_stop],
["15:00",end_stop,start_stop],["15:33"],["16:00",end_stop,start_stop],["16:35",end_stop,start_stop],["17:10",end_stop,start_stop],["17:33"],["18:15",end_stop,start_stop],["18:55",end_stop,start_stop],["19:28"],
["20:00",end_stop,start_stop],["20:45",end_stop,start_stop],["21:30",end_stop,start_stop]];