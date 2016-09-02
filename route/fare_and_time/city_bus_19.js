// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_19_main_stop_name = ["臺南海事","原住民<br />文化會館","億載金城","市政中心<br />(永華路)","林百貨<br />(中正路)","臺南<br />火車站","成功大學","崑山科大","大灣高中"];
city_bus_19_main_stop_time_consume = [0, 7, 11, 17, 29, 37, 41, 57, 67];
city_bus_19_important_stop = [0, 1, 5, 8]; // 臺南海事, 原住民文化會館, 臺南火車站, 大灣高中
var tra_tainan = 5; // 臺南火車站
var start_stop = 1; // 原住民文化會館
var end_stop = 8; // 大灣高中
city_bus_19_time_go = [["05:50",tra_tainan,end_stop,[[end_stop-1,-5,end_stop,-5]]],["06:10",tra_tainan,end_stop,[[end_stop,-5]]],
["06:30",tra_tainan,end_stop],["06:20",start_stop,end_stop],["06:45",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["07:18",['W']],["08:00",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],["08:40",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["09:25",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],["10:10",start_stop,end_stop],["10:55",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["11:40",start_stop,end_stop],["12:25",start_stop,end_stop,[[2,3,3,2]]],["13:10",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],["13:55",start_stop,end_stop],
["14:40",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],["15:15",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["16:00",tra_tainan,end_stop],["16:00",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["16:45",start_stop,end_stop],["17:30",tra_tainan,end_stop],["17:23",['W']],
["18:10",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],["18:55",start_stop,end_stop],["19:40",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["20:25",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],["21:10",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]],
["22:00",start_stop,end_stop,[[tra_tainan-1,-3,tra_tainan,-2]]]
];
city_bus_19_time_return = [["06:00",tra_tainan,start_stop,[[3,-3,2,-5,1,-2]]],["06:10",tra_tainan,start_stop],["06:10",['W']],
["06:35",end_stop,start_stop,[[tra_tainan+1,-5]]],["07:00",end_stop,start_stop],["07:40",end_stop,start_stop],["08:40",end_stop,start_stop],
["09:30",end_stop,start_stop,[[tra_tainan,-5]]],["10:15",end_stop,start_stop],["11:00",end_stop,start_stop],["11:45",end_stop,start_stop],
["12:20",end_stop,start_stop,[[tra_tainan+1,-5]]],["13:05",end_stop,start_stop],["13:50",end_stop,start_stop,[[tra_tainan+1,-5]]],
["14:35",end_stop,start_stop],["15:20",end_stop,start_stop],["16:00",['W',[tra_tainan,5]]],
["16:30",end_stop,start_stop,[[tra_tainan,5]]],["17:15",end_stop,start_stop],["17:35",end_stop,start_stop],["18:00",end_stop,start_stop,[[tra_tainan,5]]],
["18:55",end_stop,start_stop,[[tra_tainan,5]]],["19:40",end_stop,start_stop],["20:25",end_stop,start_stop],["21:10",end_stop,start_stop],
["21:30",end_stop,tra_tainan],["22:00",end_stop,start_stop,[[tra_tainan+1,-5]]]
];