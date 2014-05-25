// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_18_main_stop_name = ["國民路","臺南站","小西門<br />(大億麗緻)","臺南<br />火車站","大道<br />新城","六甲頂","安順","安順<br />國小","和順<br />國小","塭南里","臺灣歷史<br />博物館"];
city_bus_18_main_stop_time_consume = [0, 10, 13, 20, 30, 38, 45, 50, 55, 60, 70];
city_bus_18_important_stop = [1, 3, 9, 10]; // 大成路口, 臺南站, 臺南火車站, 海東國小, 聖母廟, 城西里
city_bus_18_time_go = [["06:20",0,9],["06:55",1,10],["07:00",1,9],["07:10",1,9],["07:20",1,9],["07:40",1,10],["08:00",1,10],
["08:10",0,9,[[1,10]]],["09:00",1,9],["09:20"],["10:00",1,9],["10:30",1,10],["10:50",0,9],["11:30",1,10],["12:00",0,9],
["12:30",1,10],["13:00",1,9],["13:30",1,9],["14:00",1,10],["14:30",1,10],["15:00",1,9],["15:30",1,10],["15:50",0,9],
["16:15",1,9],["16:30",1,9],["17:10",1,9,['北',6,7]],["17:20"],["17:45",1,9,['北',6,7]],["18:05",0,9,[[1,-5]]],["18:30",1,10],
["19:00",1,9],["19:30",1,9],["20:00",1,9],["20:30",1,9],["21:00",1,9],["21:30",1,9],["22:00",1,9]
];
city_bus_18_time_return = [["05:50",10,1,[[5,-2,4,-3,3,-5]]],["06:15",9,1,['北',6,7]],["06:20",9,1],["06:25",9,1,[[3,5]]],
["06:30",9,1,['北',6,7,[3,5]]],["06:40",9,1],["07:00",9,0],["07:30",9,1],["08:00",9,1],["08:20",[[5,-2,4,-3,3,-5]]],
["09:00",9,1],["09:20",10,1],["10:00",9,0,[[5,-2,4,-3,3,-5]]],["10:20",10,1],["11:00",9,0],["11:20",10,1],["11:50",10,1],
["12:30",9,1],["12:50",10,1],["13:30",9,1],["14:00",9,1],["14:20",10,1],["15:00",9,0,[[5,-2,4,-3,3,-5]]],["15:30",9,1],
["15:35",10,1],["16:10"],["16:45",9,1],["17:00",9,0],["17:20",10,1],["18:00",9,1],["18:30",9,1],["18:50",9,1],["19:00",10,1],
["19:30",9,1],["20:00",9,1],["20:30",9,1],["21:00",9,1]
];

// holiday schedule
city_bus_18_holiday_time_go = [["06:40",1,9],["07:00",1,10],["07:25",1,10,[[3,5]]],["07:50",1,10],["08:15",1,10,[[3,5]]],
["08:30",[[1,5,3,5]]],["09:15",1,10,[[3,5]]],["09:45",1,10,[[3,5]]],["10:15",1,10,[[3,5]]],["10:45",1,10,[[3,5]]],
["11:15",1,10,[[3,5]]],["11:45",1,10,[[3,5]]],["12:00",[[1,5,3,5]]],["12:45",1,10,[[3,5]]],["13:15",1,10,[[3,5]]],
["13:45",1,10,[[3,5]]],["14:15",1,10,[[3,5]]],["14:45",1,10,[[3,5]]],["15:15",1,10,[[3,5]]],["15:45",1,10,[[3,5]]],
["16:15",1,10,[[3,5]]],["16:30",0,9,[[1,5,3,5]]],["17:10",1,10,[[3,5]]],["17:35",1,9,[[3,5]]],["18:00",1,9,[[3,5]]],
["18:20",1,9,[[3,5]]],["18:45",1,9,[[3,5]]],["19:15",1,9,[[3,5]]],["19:45",1,10,[[3,5]]],["20:15",1,9,[[3,5]]],
["20:45",1,9,[[3,5]]],["21:15",1,9],["21:50",1,9]
];
city_bus_18_holiday_time_return = [["06:00",9,1,[[5,-2,4,-3,3,-5]]],["06:30",9,1,[[5,-2,4,-3,3,-5]]],
["06:50",9,1,[[5,-2,4,-3,3,-5]]],["07:10",9,1,[[5,-2,4,-3,3,-5]]],["07:35",9,0,[[5,-2,4,-3,3,-5]]],["08:00",9,1,[[5,-2,4,-3]]],
["08:20",10,1,[[5,-2,4,-3]]],["08:50",10,1,[[5,-2,4,-3]]],["09:20",10,1,[[5,-2,4,-3]]],["09:50",10,1],
["10:20",10,1,[[5,-2,4,-3]]],["10:50",[[5,-2,4,-3]]],["11:20",10,1],["11:50",10,1],["12:20",10,1],["12:50",10,1],
["13:20",10,1],["13:50",10,1,[[5,-2,4,-3]]],["14:20",10,1,[[5,-2,4,-3]]],["14:50",10,1],["15:20",[[5,-2,4,-3]]],
["15:50",10,1],["16:05",10,1],["16:35",10,1],["16:55",10,1],["17:20",10,1],["17:50",10,1],["18:30",9,1],["18:50",10,1],
["19:30",9,1,[[5,-2,4,-3]]],["20:00",9,1,[[5,-2,4,-3]]],["20:30",9,1,[[5,-2,4,-3,3,-5]]],["21:00",9,1,[[5,-2,4,-3]]]
];