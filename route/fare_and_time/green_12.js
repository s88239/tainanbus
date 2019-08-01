green_12_interval_name = ["新化","那拔林","豐德","化石館","左鎮","睦光","中坑","南化","北平里","北寮","玉山"];
green_12_interval_stop = [
["新化站","新化區公所","新化保養廠","養護之家","仁愛之家"], // 新化
["畜試所","臺南醫院新化分院","接天寺","那拔林","千鳥橋"], // 那拔林
["隙仔口","豐德","大立窯業"], // 豐德
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
[34,26,26,26],
[44,26,26,26,26],
[49,31,26,26,26,26],
[62,43,36,28,26,26,26],
[71,53,46,38,27,26,26,26],
[82,64,57,49,38,34,26,26,26],
[90,72,65,57,46,41,28,26,26,26],
[103,85,78,70,59,54,41,32,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_12_main_stop_name = ["新化","臺南醫院<br />新化分院","豐德","左鎮化<br />石園區","左鎮果<br />菜市場","內庄<br />路口","新南<br />糖廠","南化<br />區公所","鏡面<br />水庫","北寮","玉山"];
green_12_main_stop_time_consume = [0, 8, 14, 17, 20, 23, 30, 35, 40, 46, 55];
green_12_important_stop = [0, 4, 7, 10]; // 新化, 左鎮果菜市場, 南化區公所, 玉山
var Sinhua = 0; // 新化
var Zuojhen_Market = 4; // 左鎮果菜市場
var Nanhua_District_Office = 7; // 南化
green_12_time_go = [["05:25",Sinhua,Nanhua_District_Office],["07:00",Sinhua,Nanhua_District_Office,['W']],["07:35",Sinhua,Nanhua_District_Office,['W']],["08:10",Sinhua,Nanhua_District_Office,['W']],["08:20"],
["09:35",Zuojhen_Market,Nanhua_District_Office,['W']],["10:25",Zuojhen_Market,Nanhua_District_Office,['W']],["10:30"],["11:20",Zuojhen_Market,Nanhua_District_Office,['W']],
["12:20"],["13:00",Zuojhen_Market,Nanhua_District_Office,['W']],["13:55",Zuojhen_Market,Nanhua_District_Office,['W']],["14:05"],["15:40",Sinhua,Nanhua_District_Office,['W']],["17:20",Sinhua,Nanhua_District_Office,['W']],["18:15"],["21:20"]];
green_12_time_return = [["06:00",Nanhua_District_Office,Sinhua],["07:35",Nanhua_District_Office,Sinhua,['W']],["08:15",Nanhua_District_Office,Zuojhen_Market,['W']],["08:45",Nanhua_District_Office,Sinhua,['W']],
["09:15"],["10:00",Nanhua_District_Office,Zuojhen_Market,['W']],["10:50",Nanhua_District_Office,Zuojhen_Market,['W']],["11:30"],["12:30",Nanhua_District_Office,Zuojhen_Market,['W']],["13:25",Nanhua_District_Office,Zuojhen_Market,['W']],
["13:20"],["14:45",Nanhua_District_Office,Sinhua,['W']],["15:00"],["16:15",Nanhua_District_Office,Sinhua,['W']],["17:55",Nanhua_District_Office,Sinhua,['W']],["19:10"],["22:15"]];