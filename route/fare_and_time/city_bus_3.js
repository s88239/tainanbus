// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_3_main_stop_name = ["海東國小","海東橋","特力屋、<br />好市多","赤崁樓","臺南<br />火車站","文化中心(台<br />糖長榮酒店)","市立醫院","竹篙厝","全福新城","復興國中"];
city_bus_3_main_stop_time_consume = [0, 10, 15, 25, 35, 50, 58, 65, 65, 75];
city_bus_3_important_stop = [0, 4, 7, 8]; // 海東國小, 臺南火車站, 竹篙厝, 全福新城
var start_stop = 0; // 海東國小
var tra_tainan = 4; // 臺南火車站
var end_stop = 7; // 竹篙厝
var end_stop_2 = 8; // 全福新城
city_bus_3_time_go = [["06:00",start_stop,end_stop,['W',[tra_tainan,-5]]],["06:15",start_stop,end_stop,['L']],["06:20",start_stop,end_stop,['W']],["06:30",start_stop,end_stop,['W']],["06:45",start_stop,end_stop_2,[end_stop]],["07:05",start_stop,end_stop],
["07:35",start_stop,end_stop,['L']],["08:00",start_stop,end_stop],["08:30",start_stop,end_stop],["09:00",start_stop,end_stop],["09:30",start_stop,end_stop],["10:00",start_stop,end_stop_2,[end_stop]],["10:30",start_stop,end_stop,['L']],
["11:00",start_stop,end_stop,['L']],["11:30",[end_stop_2]],["12:00",start_stop,end_stop],["12:30",start_stop,end_stop],["13:00",start_stop,end_stop],["13:30",start_stop,end_stop,['L']],
["14:00",start_stop,end_stop],["14:20",start_stop,end_stop],["14:40",start_stop,end_stop_2,[end_stop]],["15:05",start_stop,end_stop],["15:25",start_stop,end_stop],["15:45",start_stop,end_stop],["16:00",[end_stop_2]],
["16:20",start_stop,end_stop],["16:40",start_stop,end_stop,['L']],["16:55",[end_stop_2,[tra_tainan,5]]],["17:10",start_stop,end_stop,[[tra_tainan,5]]],["17:25",start_stop,end_stop,[[tra_tainan,5]]],
["17:40",start_stop,end_stop,[[tra_tainan,5]]],["18:00",start_stop,end_stop,[[tra_tainan,5]]],["18:20",start_stop,end_stop,[[tra_tainan,5]]],["18:45",start_stop,end_stop],["19:25",start_stop,end_stop],["20:00",start_stop,end_stop],
["20:40",start_stop,end_stop],["21:15",start_stop,end_stop]
];

var return_start = 1; // 竹篙厝
var return_end = 9; // 海東國小
var return_skip = 2; // 復興國中
var return_tra_tainan = 5; // 臺南火車站
city_bus_3_main_stop_name_return = ["全福新城","竹篙厝","復興國中","市立醫院","文化中心(台<br />糖長榮酒店)","臺南<br />火車站","赤崁樓","特力屋、<br />好市多","海東橋","海東國小"];
city_bus_3_main_stop_time_consume_return = [0, 5, 20, 12, 20, 35, 40, 50, 55, 65];
city_bus_3_important_stop_return = [0, 1, 5, 9]; // 全福新城, 竹篙厝, 臺南火車站, 海東國小
city_bus_3_time_return = [["06:00",return_start,return_end,['W',return_skip]],["06:00",return_start,return_end,[[return_skip+1,20]]],["06:30",return_start,return_end,['W',return_skip]],
["06:30",return_start,return_end,[[return_skip+1,20]]],["07:10",return_start,return_end,[return_skip]],["07:30",return_start,return_end,['L',return_skip]],
["07:45",return_start,return_end,[return_skip]],["08:00",[return_skip]],["08:25",return_start,return_end,[return_skip]],["08:50",return_start,return_end,['L',return_skip]],
["09:15",return_start,return_end,[return_skip]],["09:45",return_start,return_end,[return_skip]],["10:15",return_start,return_end,['L',return_skip]],
["10:45",return_start,return_end,[return_skip]],["11:15",[return_skip]],["11:45",return_start,return_end,['L',return_skip]],["12:15",return_start,return_end,['L',return_skip]],
["12:35",return_start,return_end,[[return_skip+1,20]]],["13:15",return_start,return_end,['L',return_skip]],["13:45",return_start,return_end,[return_skip]],
["14:15",return_start,return_end,[return_skip]],["14:45",return_start,return_end,['L',return_skip]],["15:15",return_start,return_end,['L',return_skip]],
["15:35",return_start,return_end,[return_skip]],["16:00",[return_skip]],["16:20",return_start,return_end,[return_skip]],["16:40",return_start,return_end,['L',return_skip]],
["17:00",return_start,return_end,[return_skip,[return_tra_tainan,5]]],["17:20",return_start,return_end,['W',return_skip]],["17:10",return_start,return_end,[[return_skip+1,20]]],
["17:40",return_start,return_end,['L',return_skip,[return_tra_tainan-1,5,return_tra_tainan,5]]],["18:05",return_start,return_end,['L',return_skip,[return_tra_tainan,5]]],
["18:15",return_start,return_end,[[return_skip+1,20]]],["18:50",return_start,return_end,[return_skip,[return_tra_tainan,5]]],["19:25",return_start,return_end,[return_skip]],
["20:00",return_start,return_end,[return_skip]],["20:40",return_start,return_end,[return_skip]],["21:15",return_start,return_end,['L',return_skip,[return_tra_tainan,5]]]
];