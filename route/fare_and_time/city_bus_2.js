// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_2_interval_stop = [
["復華里","復國一路475巷口","復華六街口","復華五街口","復華二街口","復華一街口","復國一路90巷口","影三華廈",
"崑山科技大學","建國里","漢聲電台","影劇三村","榮民醫院","台灣銀行","四份子","光明街口","無障礙之家","成大醫院(小東路)",
"成功大學","小東路","臺南公園(北門路)","臺南火車站","臺南醫院","中山、民權路口","孔廟(台灣文學館)","建興國中(南門路)",
"大南門城","觀光協會","南門路","台南高商","家齊女中","台南站","西門路一段","新光三越新天地","小西門(大億麗緻)",
"西門、友愛街口","郭綜合醫院","協進國小(民生路)","民生路二段","交通隊","平安里","臨海社區","半路厝","望月橋","南興",
"承天橋口","安平國中","石門里","安平蚵灰窯文化館","漁民村","安平古堡(安北路)","德記洋行、安平樹屋","崇義社區","同平路",
"觀光魚市場(碧海碼頭)","沙灘忠誠社區","白鷺灣社區","大社角","四草","德記洋行、安平樹屋(850巷)","安平古堡(安平路)","港仔里",
"運河博物館","安平國中(育平路)","安平區公所(育平路)","育平派出所","郡平路口","億載國小","億載金城","濱海站","漁光里",
"瑞復中心","漁光分校","社頭","三鯤鯓","天壇","延平街","安平","石門國小","安北路口","民生綠園"]
];

city_bus_2_main_stop_name = ["復華里","崑山<br />科大","臺南<br />火車站","孔廟(台灣<br />文學館)","新光三越<br />新天地","安平<br />古堡","臺南<br />海事","白鷺灣<br />社區","四草","億載<br />金城","三鯤鯓"];
city_bus_2_main_stop_time_consume = [0, 0, 20, 25, 32, 48, 53, 55, 62, 75, 80];
city_bus_2_important_stop = [1, 2, 5]; // 崑山科大, 臺南火車站, 安平古堡
stop_1 = 1; // 崑山科技大學
stop_2 = 0; // 復華里
stop_3 = 7; // 白鷺灣社區
stop_4 = 8; // 四草
stop_5 = 10; // 三鯤鯓

city_bus_2_time_go = [["06:15",stop_1,stop_3,[[stop_1+1,-5]]],["06:25",stop_1,stop_3,['L']],["06:40",stop_1,stop_3],
["06:55",stop_1,stop_3,[[stop_1+1,5]]],["07:35",stop_1,stop_4],["08:00",stop_1,stop_5,[stop_4]],["08:35",stop_1,stop_3],
["09:10",stop_1,stop_3,['L']],["09:30",stop_2,stop_3,[stop_1]],["09:50",stop_1,stop_3],["10:20",stop_1,stop_3],
["10:50",stop_1,stop_5,[stop_4]],["11:10",stop_1,stop_3,['L']],["11:30",stop_1,stop_3],["11:50",stop_1,stop_4,['L']],
["12:10",stop_1,stop_5,[stop_4]],["12:30",stop_1,stop_3,['L']],["12:50",stop_2,stop_3,[stop_1]],["13:10",stop_1,stop_3],
["13:30",stop_1,stop_3],["13:50",stop_1,stop_3],["14:10",stop_1,stop_3],["14:30",stop_1,stop_3,['L']],["14:50",stop_1,stop_3],
["15:10",stop_1,stop_3,['L']],["15:30",stop_1,stop_3],["15:50",stop_1,stop_3,['L']],["16:10",stop_2,stop_3,[stop_1]],
["16:30",stop_1,stop_3],["16:45",stop_1,stop_5,[stop_4]],["17:00",stop_1,stop_4],["17:15",stop_1,stop_5,['L',stop_4]],
["17:30",stop_1,stop_3],["17:45",stop_1,stop_3],["18:00",stop_1,stop_3,['L']],["18:20",stop_1,stop_3],
["19:00",stop_1,stop_3,['L']],["19:40",stop_1,stop_3],["20:20",stop_1,stop_3],["21:00",stop_1,stop_4,['L',[stop_1+1,-5]]],
["21:20",stop_1,stop_3,['L',[stop_1+1,-5]]],["22:05",stop_1,stop_3,[[stop_1+1,-5]]]
];
city_bus_2_time_return = [["06:00",stop_3,stop_1,[[stop_1+1,5]]],["06:25",stop_3,stop_1,[[stop_1+1,-5]]],
["06:27",stop_4,stop_1,[[stop_3,1]]],["06:25",stop_5,stop_1,[stop_4,[stop_3,5]]],["07:30",stop_3,stop_2,[stop_1]],
["07:55",stop_3,stop_1,['L']],["08:20",stop_3,stop_1],["08:40",stop_4,stop_1,[[stop_3,3]]],["09:20",stop_3,stop_1],
["09:25",stop_5,stop_1,[stop_4]],["10:10",stop_3,stop_1,['L']],["10:30",stop_3,stop_1],["10:50",stop_3,stop_1,['L']],
["11:10",stop_3,stop_2,[stop_1]],["11:30",stop_3,stop_1],["11:50",stop_3,stop_1,['L']],["12:10",stop_3,stop_1],
["12:05",stop_5,stop_1,[stop_4]],["12:50",stop_3,stop_1,['L']],["13:03",stop_4,stop_1],["13:30",stop_3,stop_1],
["13:25",stop_5,stop_1,[stop_4]],["14:10",stop_3,stop_1,['L']],["14:30",stop_3,stop_2,[stop_1]],["14:50",stop_3,stop_1],
["15:10",stop_3,stop_1],["15:30",stop_3,stop_1],["15:50",stop_3,stop_1,['L']],["16:10",stop_3,stop_1],["16:30",stop_3,stop_1],
["16:45",stop_3,stop_1,['L',[stop_1+1,5]]],["17:00",stop_3,stop_1,[[stop_1+1,5]]],["17:15",stop_3,stop_1,['L',[stop_1+1,5]]],
["17:35",stop_3,stop_1,[[stop_1+1,5]]],["17:55",stop_3,stop_1],["18:00",stop_5,stop_1,[stop_4]],["18:38",stop_4,stop_1,[[stop_1+3,-5]]],
["18:45",stop_5,stop_1,['L',stop_4,[stop_1+3,-5]]],["19:50",stop_3,stop_1,['L',[stop_1+3,-5]]],["20:25",stop_3,stop_1,[[stop_1+3,-5]]],
["21:10",stop_3,stop_2,[stop_1,[stop_1+3,-5]]],["22:00",stop_4,stop_1,['L',[stop_3,-2,stop_1+3,-5]]]
];

// holiday schedule
city_bus_2_holiday_time_go = [["06:15",stop_1,stop_3,[[stop_1+1,-5]]],["06:25",stop_1,stop_3,['L']],["06:40",stop_1,stop_3],
["07:00",stop_1,stop_3],["07:35",stop_1,stop_3],["08:00",stop_1,stop_5,[stop_4]],["08:35",stop_1,stop_3],
["09:10",stop_1,stop_3,['L']],["09:30",stop_2,stop_3,[stop_1]],["09:50",stop_1,stop_3],["10:20",stop_1,stop_3],
["10:50",stop_1,stop_5,[stop_4]],["11:10",stop_1,stop_3,['L']],["11:30",stop_1,stop_3],["11:50",stop_1,stop_3,['L']],
["12:10",stop_1,stop_5,[stop_4]],["12:30",stop_1,stop_3,['L']],["12:50",stop_2,stop_3,[stop_1]],["13:10",stop_1,stop_3],
["13:30",stop_1,stop_3],["13:50",stop_1,stop_3],["14:10",stop_1,stop_3],["14:30",stop_1,stop_3,['L']],["14:50",stop_1,stop_3],
["15:10",stop_1,stop_3,['L']],["15:30",stop_1,stop_3],["15:50",stop_1,stop_3,['L']],["16:10",stop_2,stop_3,[stop_1]],
["16:30",stop_1,stop_3],["16:45",stop_1,stop_5,[stop_4]],["17:00",stop_1,stop_3],["17:15",stop_1,stop_5,['L',stop_4]],
["17:30",stop_1,stop_3],["17:45",stop_1,stop_3],["18:00",stop_1,stop_3,['L']],["18:20",stop_1,stop_3],
["19:00",stop_1,stop_3,['L']],["19:40",stop_1,stop_3],["20:20",stop_1,stop_3],["21:00",stop_1,stop_3,['L',[stop_1+1,-5]]],
["21:20",stop_1,stop_3,['L',[stop_1+1,-5]]],["22:05",stop_1,stop_3,[[stop_1+1,-5]]]
];
city_bus_2_holiday_time_return = [["06:10",stop_3,stop_1,[[stop_1+1,-5]]],["06:25",stop_3,stop_1,[[stop_1+1,-5]]],
["06:35",stop_3,stop_1],["06:25",stop_5,stop_1,[stop_4,[stop_3,5]]],["07:30",stop_3,stop_2,[stop_1]],["07:55",stop_3,stop_1,['L']],
["08:20",stop_3,stop_1],["08:50",stop_3,stop_1],["09:20",stop_3,stop_1],["09:25",stop_5,stop_1,[stop_4]],
["10:10",stop_3,stop_1,['L']],["10:30",stop_3,stop_1],["10:50",stop_3,stop_1,['L']],["11:10",stop_3,stop_2,[stop_1]],
["11:30",stop_3,stop_1],["11:50",stop_3,stop_1,['L']],["12:10",stop_3,stop_1],["12:05",stop_5,stop_1,[stop_4]],
["12:50",stop_3,stop_1,['L']],["13:10",stop_3,stop_1,['L']],["13:30",stop_3,stop_1],["13:25",stop_5,stop_1,[stop_4]],
["14:10",stop_3,stop_1,['L']],["14:30",stop_3,stop_2,[stop_1]],["14:50",stop_3,stop_1],["15:10",stop_3,stop_1],
["15:30",stop_3,stop_1],["15:50",stop_3,stop_1,['L']],["16:10",stop_3,stop_1],["16:30",stop_3,stop_1],
["16:45",stop_3,stop_1,['L',[stop_1+1,5]]],["17:00",stop_3,stop_1,[[stop_1+1,5]]],["17:15",stop_3,stop_1,['L',[stop_1+1,5]]],
["17:35",stop_3,stop_1,[[stop_1+1,5]]],["17:55",stop_3,stop_1],["18:00",stop_5,stop_1,[stop_4]],
["18:45",stop_3,stop_1,[[stop_1+3,-5]]],["18:45",stop_5,stop_1,['L',stop_4,[stop_1+3,-5]]],["19:50",stop_3,stop_1,['L',[stop_1+3,-5]]],
["20:25",stop_3,stop_1,[[stop_1+3,-5]]],["21:10",stop_3,stop_2,[stop_1,[stop_1+3,-5]]],["22:05",stop_3,stop_1,['L',[stop_1+3,-5]]]
];