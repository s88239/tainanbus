// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_3_main_stop_name = ["海東國小","海東橋","特力屋、<br />好市多","赤崁樓","臺南<br />火車站","文化中心","市立醫院","竹篙厝","全福新城","復興國中"];
city_bus_3_main_stop_time_consume = [0, 10, 15, 25, 35, 50, 58, 65, 70, 75];
city_bus_3_important_stop = [0, 4, 7]; // 海東國小, 臺南火車站, 竹篙厝
var start_stop = 0; // 海東國小
var tra_tainan = 4; // 臺南火車站
var end_stop = 7; // 竹篙厝
var end_stop_2 = 8; // 全福新城
city_bus_3_time_go = [["06:00",start_stop,end_stop,['W',[tra_tainan,-5]]],["06:15",start_stop,end_stop,['L']],["06:30",start_stop,end_stop,['W']],["06:45",start_stop,end_stop_2],["07:05",start_stop,end_stop],
["07:35",start_stop,end_stop,['L']],["08:00",start_stop,end_stop],["08:30",start_stop,end_stop],["09:00",start_stop,end_stop],["09:30",start_stop,end_stop],["10:00",start_stop,end_stop_2],["10:30",start_stop,end_stop,['L']],
["11:00",start_stop,end_stop,['L']],["11:30",[end_stop_2]],["12:00",start_stop,end_stop],["12:30",start_stop,end_stop],["13:00",start_stop,end_stop],["13:30",start_stop,end_stop,['L']],
["14:00",start_stop,end_stop],["14:20",start_stop,end_stop],["14:40",start_stop,end_stop_2],["15:05",start_stop,end_stop],["15:25",start_stop,end_stop],["15:45",start_stop,end_stop],["16:00",[end_stop_2]],
["16:20",start_stop,end_stop],["16:40",start_stop,end_stop,['L',[tra_tainan,5]]],["16:55",[end_stop_2,[tra_tainan,5]]],["17:10",start_stop,end_stop,[[tra_tainan,5]]],["17:25",start_stop,end_stop,[[tra_tainan,5]]],
["17:40",start_stop,end_stop,[[tra_tainan,5]]],["18:00",start_stop,end_stop,[[tra_tainan,5]]],["18:20",start_stop,end_stop,[[tra_tainan,5]]],["18:45",start_stop,end_stop],["19:25",start_stop,end_stop],["20:00",start_stop,end_stop],
["20:40",start_stop,end_stop],["21:15",start_stop,end_stop]
];
city_bus_3_time_return = [["06:00",end_stop,start_stop,['W']],["06:15",[end_stop_2,[tra_tainan,-5]]],["06:30",end_stop,start_stop,['W']],["06:45",[end_stop_2,[tra_tainan,-5]]],
["07:10",end_stop,start_stop],["07:30",end_stop,start_stop,['L']],["07:45",end_stop,start_stop],["08:00",end_stop_2,start_stop],["08:25",end_stop,start_stop],
["08:50",end_stop,start_stop,['L']],["09:15",end_stop,start_stop],["09:45",end_stop,start_stop],["10:15",end_stop,start_stop,['L']],["10:45",end_stop,start_stop],
["11:15",end_stop_2,start_stop],["11:45",end_stop,start_stop,['L']],["12:15",end_stop,start_stop,['L']],["12:50",[end_stop_2,[tra_tainan,-5]]],["13:15",end_stop,start_stop,['L']],
["13:45",end_stop,start_stop],["14:15",end_stop,start_stop],["14:45",end_stop,start_stop,['L']],["15:15",end_stop,start_stop,['L']],["15:35",end_stop,start_stop],
["16:00",end_stop_2,start_stop],["16:20",end_stop,start_stop],["16:40",end_stop,start_stop,['L']],["17:00",end_stop,start_stop,[[tra_tainan,5]]],["17:25",[end_stop_2,[tra_tainan,-5]]],
["17:40",end_stop,start_stop,['L',[end_stop-1,5,tra_tainan,5]]],["18:05",end_stop,start_stop,['L',[tra_tainan,5]]],["18:30",[end_stop_2,[tra_tainan,-5]]],["18:50",end_stop,start_stop,[[tra_tainan,5]]],["19:25",end_stop,start_stop],
["20:00",end_stop,start_stop],["20:40",end_stop,start_stop],["21:15",end_stop,start_stop,['L',[tra_tainan,5]]]
];