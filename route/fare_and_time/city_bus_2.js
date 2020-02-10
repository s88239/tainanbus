// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_2_main_stop_name = ["崑山<br />科大","復華里","四份子","臺南<br />火車站","孔廟(台灣文<br />學館、臺南市<br />美術館1館)","新光三越<br />新天地","安平<br />古堡","崇義社區","白鷺灣<br />社區","四草<br /><span style='color: blue;'>(平日延駛)</span>","億載<br />金城","三鯤鯓"];
city_bus_2_main_stop_time_consume = [0, 5, 5, 20, 27, 35, 50, 53, 55, 62, 75, 80];
city_bus_2_important_stop = [0, 3, 6, 8]; // 崑山科大, 臺南火車站, 安平古堡, 白鷺灣社區
stop_1 = 0; // 崑山科技大學
stop_2 = 1; // 復華里
stop_3 = 8; // 白鷺灣社區
stop_4 = 9; // 四草
stop_5 = 11; // 三鯤鯓
stop_6 = 5; // 新光三越新天地
stop_7 = 3; // 臺南火車站
city_bus_2_time_go = [["06:15",stop_1,stop_3,[stop_2,[stop_7,-5]]],["06:25",stop_1,stop_3,[stop_2,'L',[stop_6,5]]],["06:32",stop_1,stop_3,['W',[stop_2+1,5,stop_6,5]]],["06:40",stop_1,stop_3,[stop_2,[stop_6,10]]],["06:45",stop_1,stop_3,['W',stop_2,[stop_6,10]]],
["06:55",stop_1,stop_3,[stop_2,[stop_6,5]]],["07:35",stop_1,stop_4,[stop_2]],["08:00",stop_1,stop_5,[stop_2,stop_4]],["08:35",stop_1,stop_3,[stop_2]],
["09:10",stop_1,stop_3,['L',stop_2]],["09:25",stop_1,stop_3,[[stop_2+1,5]]],["09:50",stop_1,stop_3,[stop_2]],["10:20",stop_1,stop_3,[stop_2]],
["10:50",stop_1,stop_5,[stop_2,stop_4]],["11:10",stop_1,stop_3,[stop_2,'L']],["11:30",stop_1,stop_3,[stop_2]],["11:50",stop_1,stop_4,['L',stop_2]],
["12:10",stop_1,stop_5,[stop_2,stop_4]],["12:30",stop_1,stop_3,[stop_2,'L']],["12:45",stop_1,stop_3,[[stop_2+1,5]]],["13:10",stop_1,stop_3,[stop_2]],
["13:30",stop_1,stop_3,[stop_2]],["13:50",stop_1,stop_3,['L',stop_2]],["14:10",stop_1,stop_3,[stop_2]],["14:30",stop_1,stop_3,[stop_2]],["14:50",stop_1,stop_3,[stop_2]],
["15:10",stop_1,stop_3,['L',stop_2]],["15:30",stop_1,stop_3,[stop_2]],["15:50",stop_1,stop_3,[stop_2,'L']],["16:05",stop_1,stop_3,[[stop_2+1,5]]],
["16:30",stop_1,stop_3,[stop_2]],["16:45",stop_1,stop_5,[stop_2,stop_4]],["17:00",stop_1,stop_4,[stop_2]],["17:15",stop_1,stop_5,['L',stop_2,stop_4,[stop_6,5]]],
["17:30",stop_1,stop_3,[stop_2]],["17:45",stop_1,stop_3,[stop_2]],["18:00",stop_1,stop_3,['L',stop_2]],["18:20",stop_1,stop_3,[stop_2]],
["19:00",stop_1,stop_3,[stop_2]],["19:40",stop_1,stop_3,[stop_2]],["20:20",stop_1,stop_3,[stop_2]],["21:00",stop_1,stop_4,[stop_2,[stop_7,-5]]],
["21:20",stop_1,stop_3,['L',stop_2,[stop_7,-5]]],["22:05",stop_1,stop_3,[stop_2,[stop_7,-5]]]
];
city_bus_2_time_return = [["06:00",stop_3,stop_1,[stop_2,[stop_6,-2,stop_6-1,-3]]],["06:25",stop_3,stop_1,[stop_2,[stop_6,-2,stop_6-1,-3]]],
["06:27",stop_4,stop_1,[stop_2,[stop_3,1]]],["06:25",stop_5,stop_1,["崇",stop_2,stop_3,stop_4,[stop_7,5]]],["07:30",stop_3,stop_1,[[stop_2,5]]],
["07:55",stop_3,stop_1,['L',stop_2]],["08:20",stop_3,stop_1,[stop_2]],["08:40",stop_4,stop_1,[stop_2,[stop_3,3]]],["09:20",stop_3,stop_1,[stop_2]],
["09:25",stop_5,stop_1,[stop_2,stop_4]],["10:10",stop_3,stop_1,['L',stop_2]],["10:30",stop_3,stop_1,[stop_2]],["10:50",stop_3,stop_1,['L',stop_2]],
["11:10",stop_3,stop_1,[[stop_2,5]]],["11:30",stop_3,stop_1,[stop_2]],["11:50",stop_3,stop_1,[stop_2]],["12:10",stop_3,stop_1,['L',stop_2]],
["12:05",stop_5,stop_1,[stop_2,stop_4]],["12:50",stop_3,stop_1,['L',stop_2]],["13:03",stop_4,stop_1,['L',stop_2]],["13:30",stop_3,stop_1,[stop_2]],
["13:25",stop_5,stop_1,[stop_2,stop_4]],["14:10",stop_3,stop_1,['L',stop_2]],["14:30",stop_3,stop_1,[[stop_2,5]]],["14:50",stop_3,stop_1,[stop_2]],
["15:10",stop_3,stop_1,[stop_2]],["15:30",stop_3,stop_1,[stop_2]],["15:50",stop_3,stop_1,['L',stop_2]],["16:10",stop_3,stop_1,[stop_2]],["16:30",stop_3,stop_1,[stop_2]],
["16:45",stop_3,stop_1,['L',stop_2,[stop_6-1,5]]],["17:00",stop_3,stop_1,[stop_2,[stop_6-1,5]]],["17:10",stop_3,stop_1,['W',stop_2,[stop_6-1,5]]],["17:15",stop_3,stop_1,['L',stop_2,[stop_6-1,5]]],
["17:35",stop_3,stop_1,[stop_2,[stop_6-1,5]]],["17:55",stop_3,stop_1,[stop_2]],["18:00",stop_5,stop_1,[stop_2,stop_4]],["18:38",stop_4,stop_1,[stop_2,[stop_6,-2,stop_6-1,-3]]],
["18:45",stop_5,stop_1,['L',stop_2,stop_4,[stop_6,-2,stop_6-1,-3]]],["19:50",stop_3,stop_1,['L',stop_2,[stop_6,-2,stop_6-1,-3]]],["20:25",stop_3,stop_1,[stop_2,[stop_6,-2,stop_6-1,-3]]],
["21:10",stop_3,stop_1,[[stop_2,5,stop_6,-2,stop_6-1,-3]]],["22:00",stop_4,stop_1,['L',stop_2,[stop_3,-2,stop_6,-2,stop_6-1,-3]]]
];