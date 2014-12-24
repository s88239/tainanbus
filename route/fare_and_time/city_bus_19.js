// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_19_main_stop_name = ["原住民<br />文化會館","億載金城","市政中心<br />(永華路)","林百貨<br />(中正路)","臺南<br />火車站","崑山科大","大灣高中"];
city_bus_19_main_stop_time_consume = [0, 5, 17, 25, 30, 50, 60];
city_bus_19_important_stop = [0, 4, 6]; // 原住民文化會館, 臺南火車站, 大灣高中
start_idx = 4;
end_idx = 6;
end_idx2 = 0;
city_bus_19_time_go = [["05:50",start_idx,end_idx,[[end_idx-1,-5,end_idx,-5]]],["06:00",start_idx,end_idx,[[end_idx,-5]]],
["06:10",start_idx,end_idx],["06:20"],["06:40",[[2,-2,3,-3]]],["07:10"],["07:55",[[2,-2,3,-3]]],["08:40",[[2,-2,3,-3]]],
["09:25",[[2,-2,3,-3]]],["10:10"],["10:55",[[2,-2,3,-3]]],["11:40"],["12:25",[[2,3,3,2]]],["13:10",[[2,-2,3,-3]]],["13:55"],
["14:40",[[2,-2,3,-3]]],["15:15",[[2,-2,3,-3]]],["16:00",[[2,-2,3,-3]]],["16:45"],["17:25"],["17:50",[[2,3,3,2]]],
["18:25",[[2,-2,3,-3]]],["18:55"],["19:40",[[2,-2,3,-3]]],["20:25",[[2,-2,3,-3]]],["21:10",[[2,-2,3,-3]]],
["21:30",end_idx2,start_idx],["22:00",[[2,-2,3,-3]]],["22:20",end_idx2,start_idx],["22:55",end_idx2,start_idx]
];
city_bus_19_time_return = [["06:00",start_idx,end_idx2,[[2,-3,1,-5,0,-2]]],["06:10",start_idx,end_idx2],
["06:40",start_idx,end_idx2],["06:10"],["06:25"],["06:40"],["07:40"],["08:40"],["09:30",[[start_idx,-5]]],["10:15"],["11:00"],
["11:45"],["12:20",[[start_idx,-5]]],["13:05"],["13:50",[[start_idx,-5]]],["14:35"],["15:20"],["16:00",[[start_idx,5]]],
["16:30",[[start_idx,5]]],["17:10"],["17:35"],["18:10"],["18:55",[[start_idx,5]]],["19:40"],["20:25"],["21:10"],
["21:30",end_idx,start_idx],["22:00",[[start_idx,-5]]],["22:20",end_idx,start_idx],["22:55",end_idx,start_idx]
];