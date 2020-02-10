green_12_interval_name = ["台南","開元","二王","永康","西勢","新化","那拔林","豐德","化石館","左鎮","睦光","中坑","南化","北平里","北寮","玉山"];
green_12_interval_stop = [
["臺南轉運站","臺南火車站","臺南公園(北門路)","台南二中"], // 台南
["中樓","開元","崑山中學"], // 開元
["南工宿舍","南工社區","中興","康福新城","二王"], // 二王
["臺南大學附中","永康農會","永康"], // 永康
["龍潭口","德芳社區","西勢","西勢東"], // 西勢
["南光藥廠","保生大帝宮","唪口","清水寺","農會前","新化站","新化區公所","新化保養廠","養護之家","仁愛之家"], // 新化
["畜試所","臺南醫院新化分院","接天寺","那拔林","千鳥橋"], // 那拔林
["隙子口","豐德","大立窯業"], // 豐德
["光和里","下菜寮","頂菜寮","左鎮化石園區","龍溝"], // 化石館
["邦寮","橄欖山","左鎮分駐所","左鎮果菜市場","左鎮區公所","左鎮國中"], // 左鎮
["公館","睦光","內庄路口"], // 睦光
["擺頭崎","三角潭","九洞橋","三錦橋","西埔","新南糖廠","中坑","人仰橋"], // 中坑
["崎腳","南化國小","南化農會","南化","南化區公所","南化國中","小崙尾"], // 南化
["湘子埔","鏡面水庫","七苓","北平里"], // 北平里
["南寮","北寮","北寮國小","頭份子"], // 北寮
["下頭子","南平","玉山"] // 玉山
];
green_12_fare = [
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
[91,81,72,67,62,49,31,26,26,26,26],
[104,93,85,80,74,62,43,36,28,26,26,26],
[114,103,94,89,84,71,53,46,38,27,26,26,26],
[-1,-1,-1,-1,-1,82,64,57,49,38,34,26,26,26],
[-1,-1,-1,-1,-1,90,72,65,57,46,41,28,26,26,26],
[-1,-1,-1,-1,-1,103,85,78,70,59,54,41,32,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_12_main_stop_name = ["臺南<br />轉運站","臺南<br />火車站","臺南大學<br />附中","新化站","臺南醫院<br />新化分院","豐德","左鎮化<br />石園區","左鎮果<br />菜市場","新南<br />糖廠","南化<br />區公所","北寮","玉山"];
green_12_main_stop_time_consume = [0, 5, 20, 50, 58, 64, 67, 70, 80, 85, 96, 105];
green_12_important_stop = [0, 1, 3, 7, 9, 11]; // 臺南轉運站, 臺南火車站, 新化站, 左鎮果菜市場, 南化區公所, 玉山
var Tainan_Bus_Station = 0; // 臺南轉運站
var Sinhua = 3; // 新化站
var Zuojhen_Market = 7; // 左鎮果菜市場
var Nanhua_District_Office = 9; // 南化
var Yushan = 11; // 玉山
green_12_time_go = [["05:25",Sinhua,Nanhua_District_Office],["07:00",Sinhua,Nanhua_District_Office,['W']],["07:20",Sinhua,Nanhua_District_Office],["07:35",Sinhua,Nanhua_District_Office,['W']],["08:10",Sinhua,Nanhua_District_Office,['W']],["08:20",Sinhua,Yushan],
["09:35",Zuojhen_Market,Nanhua_District_Office,['W']],["10:25",Zuojhen_Market,Nanhua_District_Office,['W']],["10:30",Sinhua,Yushan],["10:10",Tainan_Bus_Station,Nanhua_District_Office,['W']],["11:20",Zuojhen_Market,Nanhua_District_Office,['W']],
["12:20",Sinhua,Yushan],["13:00",Zuojhen_Market,Nanhua_District_Office,['W']],["13:55",Zuojhen_Market,Nanhua_District_Office,['W']],["14:05",Sinhua,Yushan],["14:30",Tainan_Bus_Station,Nanhua_District_Office,['W']],["15:40",Sinhua,Nanhua_District_Office,['W']],["17:20",Sinhua,Nanhua_District_Office,['W']],["18:15",Sinhua,Yushan],["21:20",Sinhua,Yushan]];
green_12_time_return = [["06:00",Nanhua_District_Office,Sinhua],["07:35",Nanhua_District_Office,Sinhua,['W']],["08:00",Nanhua_District_Office,Sinhua,['H']],["08:15",Nanhua_District_Office,Zuojhen_Market,['W']],["08:30",Nanhua_District_Office,Tainan_Bus_Station,['W']],["08:45",Nanhua_District_Office,Sinhua,['W']],
["09:15",Yushan,Sinhua],["10:00",Nanhua_District_Office,Zuojhen_Market,['W']],["10:50",Nanhua_District_Office,Zuojhen_Market,['W']],["11:30",Yushan,Sinhua],["12:30",Nanhua_District_Office,Zuojhen_Market,['W']],["12:55",Nanhua_District_Office,Tainan_Bus_Station,['W']],["13:25",Nanhua_District_Office,Zuojhen_Market,['W']],
["13:20",Yushan,Sinhua],["14:45",Nanhua_District_Office,Sinhua,['W']],["15:00",Yushan,Sinhua],["15:55",Nanhua_District_Office,Sinhua,['W']],["16:15",Nanhua_District_Office,Sinhua,['W']],["17:55",Nanhua_District_Office,Sinhua,['W']],["19:10",Yushan,Sinhua],["22:15",Yushan,Sinhua]];