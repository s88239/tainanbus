green_interval_name = ["臺南","開元","二王","永康","西勢","新化","那拔林","豐德","化石館","左鎮","九層林","玉井"];
green_interval_stop = [
["臺南公園(公園路)","臺南火車站","臺南公園(北門路)","臺南二中"], // 臺南
["中樓","開元","崑山中學"], // 開元
["南工宿舍","南工社區","中興","康福新城","二王"], // 二王
["臺南大學附中","永康農會","永康"], // 永康
["龍潭口","德芳社區","西勢","西勢東"], // 西勢
["南光藥廠","保生大帝宮","唪口","清水寺","農會前","新化站","新化公所","新化保養廠","養護之家","仁愛之家"], // 新化
["畜試所","臺南醫院新化分院","接天寺","那拔林","千鳥橋"], // 那拔林
["隙仔口","豐德","大立窯業"], // 豐德
["光和里","下菜寮","頂菜寮","左鎮化石館","龍溝"], // 化石館
["邦寮","橄欖山","左鎮分駐所","左鎮","東屏厝"], // 左鎮
["竹坑","莿桐腳","後坑","九層林"], // 九層林
["愛文山","松腳","倒松","劉陳","望明口","玉山新城","新庄","玉井工商","玉井站"] // 玉井
];
green_stop_time_consume = [0,5,6,7,9,10,11,12,14,15,16,17,19,21,22,24,26,28,30,32,34,36,38,39,40,41,43,44,45,47,48,49,50,50,
51,52,52,53,54,55,56,56,57,58,59,60,60,61,62,62,63,63,64,64,65,66,67,68,69,70];
green_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[30,26,26,26,26],
[43,32,26,26,26,26],
[61,50,41,36,31,26,26],
[68,57,48,43,38,26,26,26],
[76,65,56,52,46,34,26,26,26],
[87,76,67,62,57,44,26,26,26,26],
[99,88,80,75,69,57,38,31,26,26,26],
[119,108,100,95,89,77,58,51,43,33,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","南工社區","臺南大學<br />附中","永康","新化","臺南醫院<br />新化分院","豐德","左鎮<br />化石館","左鎮","玉井"];
green_main_stop_time_consume = [0, 5, 14, 19, 22, 45, 53, 57, 61, 65, 75];
green_important_stop = [0, 1, 5, 10]; // 臺南公園, 臺南火車站, 新化, 玉井
green_time_go = [["05:55"],["06:10"],["06:25"],["06:40",['L']],["06:55"],
["07:00",0,5],["07:10",0,5],["08:00",5,10,['W']],["07:25"],["07:35",0,5,['W']],["07:40"],["07:55"],["08:10"],["08:25"],["08:55"],
["09:10"],["09:25"],["09:40",['L']],["09:55"],["10:25"],["10:40"],["10:55"],["11:25"],["11:55"],["12:10"],["12:25"],["12:40"],
["12:55",['L']],["13:25"],["13:40"],["13:55"],["14:25"],["14:55"],["15:10"],["15:25"],["15:55"],["16:25",['L']],["16:55"],
["17:10"],["17:20",0,5,['W']],["17:25"],["17:40"],["18:30",5,10,['W']],["17:55"],["18:10",['W']],["18:25"],["18:55"],["19:25"],
["19:55",['L']],["20:25"],["20:55"],["21:10"],["21:25"],["21:55"]
];
green_time_return = [["05:40",10,5,['W']],["06:10",5,0],["06:20",5,0],["06:00"],["06:35",5,0,['W']],["06:15"],["06:30"],["06:45"],
["07:00"],["07:30"],["07:45"],["08:00"],["08:15",['L']],["08:30"],["09:00"],["09:15"],["09:30"],["09:45"],["10:00"],["10:30"],
["10:45"],["11:00"],["11:30",['L']],["12:00"],["12:15"],["12:30"],["12:45"],["13:00"],["13:30"],["13:45"],["14:00"],["14:30",['L']],
["15:00"],["15:15"],["15:30"],["16:30",5,0,['W']],["16:00"],["16:30"],["16:45",10,5,['W']],["16:45",['W']],["17:00"],["17:15"],
["17:30"],["17:45"],["18:00",['L']],["18:30"],["19:00"],["19:30"],["20:00"],["20:30"],["21:00"],["21:15"],["21:30"],["22:00",['L']]
];