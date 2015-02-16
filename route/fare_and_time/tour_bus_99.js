tour_bus_99_interval_name = ["臺南","鹽田"];
tour_bus_99_interval_stop = [
["臺南公園(公園路)","成功路","香格里拉飯店","勝利路","成功大學","臺南公園(北門路)","臺南火車站","臺南醫院(新光三越)",
"吳園","大遠百","赤崁樓","水仙宮(西門路)","接官亭","望月橋","安平蚵灰窯文化館","安平古堡(安北路)","德記洋行、安平樹屋",
"古運河","四草大橋東","四草大橋西","四草生態文化園區(大眾廟)","四草野生動物保護區"],
["鹿耳門天后宮","鹿耳門聖母廟","龍山村","鹽田旅服中心","臺灣鹽博物館","七股鹽山","海寮紅樹林驛站","六孔管理站","黑面琵鷺生態展示館","黑面琵鷺賞鳥亭"]
];
tour_bus_99_stop_time_consume = [0,2,5,8,9,12,15,17,20,21,25,28,30,35,38,40,42,45,50,53,55,60,65,70,75,80,82,85,90,92,93,95]; // unreliable
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
tour_bus_99_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","赤崁樓","接官亭","安平古堡<br />(安北路)","四草生態文化<br />園區(大眾廟)","四草野生<br />動物保護區","鹿耳門<br />聖母廟","臺灣鹽<br />博物館","七股<br />鹽山"];
tour_bus_99_main_stop_time_consume = [0, 15, 25, 30, 40, 55, 60, 70, 100, 110];
tour_bus_99_important_stop = [0, 1, 6, 9, 10]; // 臺南公園(公園路), 臺南火車站, 四草野生動物保護區, 七股鹽山, 黑面琵鷺賞鳥亭
tour_bus_99_time_go = [["09:45"],["10:45"],["14:45"]];
tour_bus_99_time_return = [["11:55"],["12:55"],["16:55"]];
// holiday schedule
tour_bus_99_holiday_time_go = [["08:45"],["09:15",0,6],["09:45"],["10:15",0,6],["10:45"],["11:15",0,6],["11:45"],["12:15",0,6],
["12:45"],["13:15",0,6],["13:45"],["14:15",0,6],["14:45"],["15:15",0,6],["15:45"],["16:15",0,6],["16:45",0,6],["17:15",0,6]
];
tour_bus_99_holiday_time_return = [["10:15",6,0],["11:15",6,0],["10:55"],["12:15",6,0],["11:55"],["13:15",6,0],["12:55"],
["14:15",6,0],["13:55"],["15:15",6,0],["14:55"],["16:15",6,0],["15:55"],["17:15",6,0],["17:45",6,0],["16:55",[[6,15]]],["18:15",6,0],
["18:10"]];
// vacation schedule
tour_bus_99_vacation_time_go = [["08:45"],["09:45"],["10:45"],["11:45"],["12:45"],["13:45"],["14:45"],["15:45"]];
tour_bus_99_vacation_time_return = [["10:55"],["11:55"],["12:55"],["13:55"],["14:55"],["15:55"],["16:55",[[6,15]]],["18:10"]];