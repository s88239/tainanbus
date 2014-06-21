yellow_14_interval_name = ["白河","三間厝","埤子頭","竹子門","外崎內","內崎內","鹿寮水庫","頭前溪","同仁路口","三層崎"];
yellow_14_interval_stop = [
["白河站","白河分局","舊地政","白河國中"], // 白河
["三間厝"], // 三間厝
["溪洲路口","埤子頭"], // 埤子頭
["竹門國小","竹子門(一)","竹子門(二)"], // 竹子門
["松子腳","外崎內"], // 外崎內
["內崎內","崎內國小"], // 內崎內
["鹿寮水庫","青果行"], // 鹿寮水庫
["頭前溪","仙溪橋","三德宮"], // 頭前溪
["公埤","同仁路口"], // 同仁路口
["水庫路","三層崎"] // 三層崎
];
yellow_14_stop_time_consume = [0,1,3,4,5,5,6,8,8,8,9,9,11,12,13,13,14,14,16,17,18,19,20];
yellow_14_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[26,26,26,26,26,26],
[26,26,26,26,26,26,26],
[26,26,26,26,26,26,26,26],
[31,26,26,26,26,26,26,26,26],
[33,26,26,26,26,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_14_main_stop_name = ["白河","三間厝","鹿寮水庫","三層崎"];
yellow_14_main_stop_time_consume = [0, 5, 13, 20];
yellow_14_important_stop = [0, 3]; // 白河, 三層崎
yellow_14_time_go = [["07:50"],["10:20"],["11:50"],["17:40"]];
yellow_14_time_return = [["06:15"],["08:20"],["10:50"],["12:20"]];