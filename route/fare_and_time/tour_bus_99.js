// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
tour_bus_99_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","延平郡王祠<br />(府前路)","赤崁樓","億載<br />金城","安平古堡<br />(安北路)","觀夕<br />平台","四草生態文化<br />園區(大眾廟)","四草野生動<br />物保護園區","七股<br />鹽山","黑面琵鷺<br />賞鳥亭"];
tour_bus_99_main_stop_time_consume = [0, 4, 10, 18, 38, 45, 50, 57, 60, 90, 120];
tour_bus_99_important_stop = [0, 1, 4, 5, 7, 9]; // 臺南公園(公園路), 臺南火車站, 安平古堡(安北路), 四草野生動物保護園區, 七股鹽山
var start_stop = 0; // 臺南公園(公園路)
var end_stop = 9; // 七股鹽山
var bird_watching = 10; // 黑面琵鷺賞鳥亭
var tra_tainan = 1; // 臺南火車站
var Sunset_Platform = 6; // 觀夕平台
var Sihcao_Wildlife_Conservation_Area = 8; // 四草野生動物保護園區
tour_bus_99_time_go = [["08:45",start_stop,end_stop],["10:45",start_stop,end_stop],["13:45",start_stop,end_stop]];
tour_bus_99_time_return = [["10:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["12:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["16:15",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]]];
// holiday schedule
tour_bus_99_holiday_time_go = [
["08:30",start_stop,end_stop],["09:00",start_stop,end_stop],
["10:55",end_stop,bird_watching],
["09:30",start_stop,end_stop],["10:00",start_stop,end_stop],["10:30",start_stop,end_stop],
["12:25",end_stop,bird_watching],
["11:00",start_stop,end_stop],["11:30",start_stop,end_stop],["12:00",start_stop,end_stop],
["13:55",end_stop,bird_watching],
["12:30",start_stop,end_stop],["13:00",start_stop,end_stop],["13:30",start_stop,end_stop],
["15:25",end_stop,bird_watching],
["14:00",start_stop,end_stop],["14:30",start_stop,end_stop],["15:00",start_stop,end_stop],
["16:55",end_stop,bird_watching],
["15:30",start_stop,end_stop],["16:00",start_stop,end_stop],["16:30",start_stop,end_stop],
["17:00",start_stop,Sunset_Platform],["17:30",start_stop,Sunset_Platform],["18:00",start_stop,Sunset_Platform],
["18:30",start_stop,Sunset_Platform],["19:00",start_stop,Sunset_Platform]
];
tour_bus_99_holiday_time_return = [
["10:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["10:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["11:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["11:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["11:40",bird_watching,end_stop],
["12:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["12:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["13:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["13:10",bird_watching,end_stop],
["13:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["14:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["14:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["14:40",bird_watching,end_stop],
["15:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["15:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["16:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["16:10",bird_watching,end_stop],
["16:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],["17:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["18:00",Sunset_Platform,start_stop],
["17:50",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["17:40",bird_watching,start_stop,['*',end_stop,[Sihcao_Wildlife_Conservation_Area,-25]]],
["18:30",Sunset_Platform,start_stop],
["18:20",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-8,Sunset_Platform,-2]]],
["19:00",Sunset_Platform,start_stop],["19:30",Sunset_Platform,start_stop],["20:00",Sunset_Platform,start_stop]
];
// winter vacation schedule
tour_bus_99_wintervacation_time_go = [
["08:45",start_stop,end_stop],["10:55",end_stop,bird_watching],
["09:45",start_stop,end_stop],
["10:45",start_stop,end_stop],["12:25",end_stop,bird_watching],
["11:45",start_stop,end_stop],["13:55",end_stop,bird_watching],
["12:45",start_stop,end_stop],
["13:45",start_stop,end_stop],["15:25",end_stop,bird_watching],
["14:45",start_stop,end_stop],["16:55",end_stop,bird_watching],
["15:45",start_stop,end_stop]
];
tour_bus_99_wintervacation_time_return = [
["10:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["11:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["11:40",bird_watching,end_stop],["12:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["13:10",bird_watching,end_stop],["13:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["14:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["14:40",bird_watching,end_stop],["15:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["16:10",bird_watching,end_stop],["16:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["17:40",bird_watching,start_stop,['*',end_stop,[Sihcao_Wildlife_Conservation_Area,-25]]],
["18:10",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]]
];
// summer vacation schedule
tour_bus_99_summervacation_time_go = [
["08:45",start_stop,end_stop],
["09:45",start_stop,end_stop],
["10:45",start_stop,end_stop],
["11:45",start_stop,end_stop],
["12:45",start_stop,end_stop],
["13:45",start_stop,end_stop],
["14:45",start_stop,end_stop],
["15:45",start_stop,end_stop]
];
tour_bus_99_summervacation_time_return = [
["10:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["11:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["12:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["13:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["14:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["15:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["16:55",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]],
["18:10",end_stop,start_stop,[[Sihcao_Wildlife_Conservation_Area,-5]]]
];