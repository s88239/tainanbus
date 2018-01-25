// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
tour_bus_99_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","赤崁樓","接官亭","安平古堡<br />(安北路)","四草生態文化<br />園區(大眾廟)","四草野生<br />動物保護區","鹿耳門<br />聖母廟","七股<br />鹽山","黑面琵鷺<br />賞鳥亭"];
tour_bus_99_main_stop_time_consume = [0, 15, 20, 27, 37, 48, 50, 60, 90, 120];
tour_bus_99_important_stop = [0, 1, 4, 6, 8]; // 臺南公園(公園路), 臺南火車站, 安平古堡(安北路), 四草野生動物保護區, 七股鹽山
var start_stop = 0; // 臺南公園(公園路)
var end_stop = 8; // 七股鹽山
var bird_watching = 9; // 黑面琵鷺賞鳥亭
var tra_tainan = 1; // 臺南火車站
var stop_1 = 6; // 四草野生動物保護區
var stop_2 = 7; // 鹿耳門聖母廟
tour_bus_99_time_go = [["08:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["10:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["13:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]]];
tour_bus_99_time_return = [["10:55",end_stop,start_stop,[[stop_2,-5]]],["12:55",end_stop,start_stop,[[stop_2,-5]]],["15:55",end_stop,start_stop,[[stop_2,-5]]]];
// holiday schedule
tour_bus_99_holiday_time_go = [
["08:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["10:55",end_stop,bird_watching],
["09:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["09:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["10:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["10:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["12:25",end_stop,bird_watching],
["11:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["11:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["13:55",end_stop,bird_watching],
["12:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["12:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["13:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["13:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["15:25",end_stop,bird_watching],
["14:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["14:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["16:55",end_stop,bird_watching],
["15:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["15:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["16:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["16:45",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]],
["17:15",start_stop,stop_1,[[tra_tainan,-12,tra_tainan+1,12]]]
];
tour_bus_99_holiday_time_return = [["10:15",stop_1,start_stop],["11:15",stop_1,start_stop],
["10:55",end_stop,start_stop,[[stop_2,-5]]],["12:15",stop_1,start_stop],
["11:55",end_stop,start_stop,[[stop_2,-5]]],["13:15",stop_1,start_stop],
["11:40",bird_watching,end_stop],["12:55",end_stop,start_stop,[[stop_2,-5]]],["14:15",stop_1,start_stop],
["13:10",bird_watching,end_stop],["13:55",end_stop,start_stop,[[stop_2,-5]]],["15:15",stop_1,start_stop],
["14:55",end_stop,start_stop,[[stop_2,-5]]],["16:15",stop_1,start_stop],
["14:40",bird_watching,end_stop],["15:55",end_stop,start_stop,[[stop_2,-5]]],["17:15",stop_1,start_stop],
["16:10",bird_watching,end_stop],["16:55",end_stop,start_stop,[[stop_2,-5]]],["18:00",stop_1,start_stop],
["18:15",stop_1,start_stop],["17:40",bird_watching,start_stop,['*',end_stop,[stop_2,-25]]],["18:10",end_stop,start_stop,[[stop_2,-5]]]];
// winter vacation schedule
tour_bus_99_wintervacation_time_go = [
["08:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["10:55",end_stop,bird_watching],
["09:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["10:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["12:25",end_stop,bird_watching],
["11:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["13:55",end_stop,bird_watching],
["12:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["13:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["15:25",end_stop,bird_watching],
["14:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],["16:55",end_stop,bird_watching],
["15:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]]
];
tour_bus_99_wintervacation_time_return = [
["10:55",end_stop,start_stop,[[stop_2,-5]]],
["11:55",end_stop,start_stop,[[stop_2,-5]]],
["11:40",bird_watching,end_stop],["12:55",end_stop,start_stop,[[stop_2,-5]]],
["13:10",bird_watching,end_stop],["13:55",end_stop,start_stop,[[stop_2,-5]]],
["14:55",end_stop,start_stop,[[stop_2,-5]]],
["14:40",bird_watching,end_stop],["15:55",end_stop,start_stop,[[stop_2,-5]]],
["16:10",bird_watching,end_stop],["16:55",end_stop,start_stop,[[stop_2,-5]]],
["17:40",bird_watching,start_stop,['*',end_stop,[stop_2,-25]]],
["18:10",end_stop,start_stop,[[stop_2,-5]]]
];
// summer vacation schedule
tour_bus_99_summervacation_time_go = [
["08:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["09:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["10:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["11:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["12:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["13:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["14:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]],
["15:45",start_stop,end_stop,[[tra_tainan,-12,tra_tainan+1,12]]]
];
tour_bus_99_summervacation_time_return = [
["10:55",end_stop,start_stop,[[stop_2,-5]]],
["11:55",end_stop,start_stop,[[stop_2,-5]]],
["12:55",end_stop,start_stop,[[stop_2,-5]]],
["13:55",end_stop,start_stop,[[stop_2,-5]]],
["14:55",end_stop,start_stop,[[stop_2,-5]]],
["15:55",end_stop,start_stop,[[stop_2,-5]]],
["16:55",end_stop,start_stop,[[stop_2,-5]]],
["18:10",end_stop,start_stop,[[stop_2,-5]]]
];