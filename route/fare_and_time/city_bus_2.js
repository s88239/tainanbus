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

city_bus_2_main_stop_name = ["復華里","崑山<br />科技大學","臺南<br />火車站","孔廟<br />(台灣文學館)","新光三越<br />新天地","安平古堡","崇義社區","三鯤鯓","觀光魚市場<br />(<font face=\"標楷體\">碧海碼頭</font>)","白鷺灣<br />社區","四草"];
city_bus_2_main_stop_time_consume = [0, 0, 20, 27, 35, 50, 55, 75, 56, 58, 65];
city_bus_2_important_stop = [1, 2]; // 崑山科大, 臺南火車站
stop_1 = 1; // 崑山科技大學
stop_2 = 6; // 崇義社區
stop_3 = 7; // 三鯤鯓
stop_4 = 8; // 觀光魚市場
stop_5 = 9; // 白鷺灣社區
stop_6 = 10; // 四草
city_bus_2_time_go = [["06:20",stop_1,stop_5,[stop_3,[2,-5]]],["06:30",stop_1,stop_4,[stop_3]],["06:35",stop_1,stop_4,[stop_3]],["06:40",stop_1,stop_5,['L',stop_3]],["07:05",2,stop_2],
["06:55",stop_1,stop_4,[stop_3]],["07:15",stop_1,stop_2],["07:35",stop_1,stop_6,['L',stop_3]],["08:00",stop_1,stop_3],["08:25",0,stop_2,[stop_1]],["08:45",stop_1,stop_4,[stop_3]],["09:30",stop_1,stop_5,[stop_3]],
["10:10",stop_1,stop_2,['L']],["10:40",stop_1,stop_3],["11:05",stop_1,stop_4,['L',stop_3]],["11:30",0,stop_2,[stop_1]],["11:45",stop_1,stop_6,[stop_3]],["12:05",stop_1,stop_3],["12:30",stop_1,stop_5,[stop_3]],
["13:00",stop_1,stop_4,['L',stop_3]],["13:30",stop_1,stop_4,[stop_3]],["14:00",stop_1,stop_5,['L',stop_3]],["14:30",stop_1,stop_4,[stop_3]],["14:50",stop_1,stop_4,[stop_3]],["15:15",stop_1,stop_5,['L',stop_3]],
["15:40",stop_1,stop_5,[stop_3]],["16:10",0,stop_2,[stop_1]],["16:15",stop_1,stop_4,['L',stop_3]],["16:40",stop_1,stop_3],["16:50",stop_1,stop_6,[stop_3]],["17:10",stop_1,stop_3],["17:30",stop_1,stop_5,[stop_3]],
["17:50",stop_1,stop_4,['L',stop_3]],["18:15",stop_1,stop_4,['L',stop_3]],["18:35",stop_1,stop_2],["18:55",stop_1,stop_2],["19:25",stop_1,stop_5,[stop_3]],["20:00",stop_1,stop_2],["20:15",stop_1,stop_2],
["20:35",stop_1,stop_4,[stop_3]],["21:00",stop_1,stop_6,['L',stop_3,[2,-5]]],["21:30",stop_1,stop_2],["22:00",stop_1,stop_2,[[2,-5]]]
];
city_bus_2_time_return = [["06:00",stop_2,stop_1,[[2,-5]]],["06:15",stop_2,stop_1],["06:23",stop_6,stop_1,['L',stop_3,[8,-3,2,5]]],["06:25",stop_3,stop_1,[[5,5]]],
["07:07",stop_5,stop_1,[stop_3,[2,5]]],["07:24",stop_4,0,[stop_1,stop_3]],["07:39",stop_4,stop_1,[stop_3,[2,5]]],["08:09",stop_4,stop_1,[stop_3]],["08:40",stop_6,stop_1,['L',stop_3,[2,10]]],["09:20",stop_3,stop_1],
["09:37",stop_5,stop_1,['L',stop_3,[2,5]]],["10:10",stop_2,0,[stop_1]],["10:14",stop_4,stop_1,[stop_3,[2,5]]],["10:52",stop_5,stop_1,[stop_3,[2,5]]],["11:25",stop_2,stop_1,['L',[2,5]]],
["12:00",stop_3,stop_1,[[2,5]]],["12:39",stop_4,stop_1,['L',stop_3,[2,5]]],["13:00",stop_6,stop_1,[stop_3,[2,5]]],["13:15",stop_3,stop_1,[[2,10]]],["13:52",stop_5,stop_1,[stop_3,[2,5]]],
["14:14",stop_4,stop_1,['L',stop_3]],["14:39",stop_4,stop_1,[stop_3,[2,5]]],["15:00",stop_2,0,[stop_1]],["15:12",stop_5,stop_1,['L',stop_3,[2,5]]],["15:39",stop_4,stop_1,[stop_3]],
["16:04",stop_4,stop_1,[stop_3,[2,10]]],["16:22",stop_5,stop_1,['L',stop_3,[2,5]]],["16:43",stop_4,stop_1,['L',stop_3,[5,1,2,15]]],["17:07",stop_5,stop_1,[stop_3,[2,15]]],
["17:20",stop_2,stop_1,[[2,15]]],["17:39",stop_4,stop_1,['L',stop_3,[2,15]]],["18:10",stop_3,stop_1],["18:30",stop_6,stop_1,[stop_3,[2,5]]],["18:52",stop_5,stop_1,[stop_3,[2,5]]],
["18:45",stop_3,stop_1,[[2,5]]],["19:39",stop_4,stop_1,['L',stop_3]],["19:54",stop_4,stop_1,['L',stop_3,[2,5]]],["20:32",stop_5,stop_1,[stop_3]],["20:50",stop_2,0,[stop_1]],["21:34",stop_4,stop_1,[stop_3]],
["22:00",stop_6,stop_1,['L',stop_3,[8,-4,7,-1]]]
];

// holiday schedule
city_bus_2_holiday_time_go = [["06:20",stop_1,stop_2],["06:50",stop_1,stop_5,[stop_3]],["07:25",stop_1,stop_5,[stop_3]],["08:00",stop_1,stop_3],["08:25",0,stop_2,[stop_1]],
["08:40",stop_1,stop_4,['L',stop_3]],["09:30",stop_1,stop_4,[stop_3]],["10:10",stop_1,stop_2,['L']],["10:40",stop_1,stop_3],["11:00",stop_1,stop_5,[stop_3]],["11:20",stop_1,stop_5,['L',stop_3]],
["11:30",0,stop_2,[stop_1]],["11:45",stop_1,stop_4,[stop_3]],["12:05",stop_1,stop_5,[stop_3]],["12:30",stop_1,stop_4,['L',stop_3]],["13:00",stop_1,stop_4,['L',stop_3]],["13:30",stop_1,stop_5,[stop_3]],
["14:00",stop_1,stop_4,['L',stop_3]],["14:20",stop_1,stop_5,[stop_3]],["14:40",stop_1,stop_4,[stop_3]],["15:00",stop_1,stop_4,['L',stop_3]],["15:30",stop_1,stop_5,['L',stop_3]],["16:00",stop_1,stop_4,[stop_3]],
["16:10",0,stop_2,[stop_1]],["16:20",stop_1,stop_4,['L',stop_3]],["16:45",stop_1,stop_5,[stop_3]],["17:10",stop_1,stop_3],["17:30",stop_1,stop_4,[stop_3]],["17:50",stop_1,stop_5,['L',stop_3]],
["18:10",stop_1,stop_4,['L',stop_3]],["18:35",stop_1,stop_2],["18:55",stop_1,stop_2,['L']],["19:25",stop_1,stop_5,[stop_3]],["20:00",stop_1,stop_4,[stop_3]],["20:40",stop_1,stop_2],["21:20",stop_1,stop_2,[[2,-5]]],
["22:00",stop_1,stop_2,[[2,-5]]]
];
city_bus_2_holiday_time_return = [["06:00",stop_2,stop_1,[[2,-5]]],["06:22",stop_5,stop_1,[stop_3]],["06:25",stop_3,stop_1,[[5,5]]],["07:24",stop_4,0,[1,stop_3]],
["08:02",stop_5,stop_1,[stop_3]],["08:37",stop_5,stop_1,['L',stop_3,[2,5]]],["09:17",stop_5,stop_1,[stop_3]],["09:20",stop_3,stop_1],["09:54",stop_4,stop_1,['L',stop_3,[2,5]]],["10:10",stop_2,0,[stop_1]],
["10:39",stop_4,stop_1,[stop_3,[2,5]]],["11:20",stop_2,stop_1,['L',[2,5]]],["12:02",stop_5,stop_1,[stop_3,[2,5]]],["12:00",stop_3,stop_1,[[2,10]]],["12:32",stop_5,stop_1,['L',stop_3,[2,5]]],
["13:04",stop_4,stop_1,[stop_3,[2,5]]],["13:32",stop_5,stop_1,[stop_3,[2,5]]],["13:54",stop_4,stop_1,['L',stop_3,[2,5]]],["14:14",stop_4,stop_1,['L',stop_3,[2,5]]],["14:42",stop_5,stop_1,[stop_3,[2,5]]],
["15:00",stop_2,0,[stop_1]],["15:14",stop_4,stop_1,['L',stop_3,[2,5]]],["15:37",stop_5,stop_1,[stop_3,[2,10]]],["16:04",stop_4,stop_1,[stop_3,[2,10]]],["16:29",stop_4,stop_1,['L',stop_3,[2,5]]],
["16:57",stop_5,stop_1,['L',stop_3,[2,5]]],["17:20",stop_2,stop_1,[[2,15]]],["17:24",stop_4,stop_1,[stop_3,[2,20]]],["17:49",stop_4,stop_1,['L',stop_3,[2,10]]],["18:17",stop_5,stop_1,[stop_3,[2,5]]],
["18:54",stop_4,stop_1,[stop_3,[2,5]]],["18:45",stop_3,stop_1,[[2,10]]],["19:42",stop_5,stop_1,['L',stop_3]],["20:27",stop_5,stop_1,[stop_3,[2,5]]],["20:50",stop_2,0,[stop_1]],["21:35",stop_2,stop_1],
["22:07",stop_5,stop_1,['L',stop_3,[2,-5]]]
];