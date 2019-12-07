orange_9_interval_name = ["麻豆轉運站","子龍廟","佳里站","奇美佳<br />里分院","大灣","學甲國中","高鐵嘉義站"];
orange_9_interval_stop = [
["麻豆轉運站","新樓醫院"], // 麻豆轉運站
["子龍廟"], // 子龍廟
["大潤發","佳里站","佳里公園"], // 佳里站
["蕭壠文化園區","奇美佳里分院","佳里興"], // 奇美佳里分院
["大灣"], // 大灣
["學甲區公所","學甲國中"], // 學甲國中
["高鐵嘉義站"] // 高鐵嘉義站
];
orange_9_fare = [
[26],
[26,26],
[26,26,26],
[33,26,26,26],
[43,31,26,26,26],
[51,39,27,26,26,26],
[178,170,156,147,141,130,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_9_main_stop_name = ["麻豆轉運站","佳里站","學甲區公所","高鐵嘉義站"];
orange_9_main_stop_time_consume = [0, 10, 25, 70];
orange_9_important_stop = [0, 1, 3]; // 麻豆轉運站, 佳里站, 高鐵嘉義站
var Madou_Bus_Station = 0;
var Jiali_Bus_Station = 1;
var Syuejia_District_Office = 2;
var HSR_Chiayi_Station = 3;
orange_9_time_go = [["06:00"],["06:40"],
["08:40",[Jiali_Bus_Station,Syuejia_District_Office,[HSR_Chiayi_Station,-20]]],
["09:20"],["10:00"],["12:40"],["14:30"],["15:40"],
["16:40",[Jiali_Bus_Station,Syuejia_District_Office,[HSR_Chiayi_Station,-20]]],
["17:40"],["20:40"]
];
orange_9_time_return = [["07:20"],["08:30"],
["10:20",[Jiali_Bus_Station,Syuejia_District_Office,[Madou_Bus_Station,-20]]],
["11:10"],["12:20"],["14:20"],["16:20"],["17:20"],
["18:20",[Jiali_Bus_Station,Syuejia_District_Office,[Madou_Bus_Station,-20]]],
["19:20"],["22:20"]
];

// holiday schedule
orange_9_holiday_time_go = [["06:40"],
["08:40",[Jiali_Bus_Station,Syuejia_District_Office,[HSR_Chiayi_Station,-20]]],
["09:20"],["10:00"],["11:40"],["12:40"],["13:40"],["14:30"],["15:10"],
["15:50",[Jiali_Bus_Station,Syuejia_District_Office,[HSR_Chiayi_Station,-20]]],
["16:50"],["17:40"],["18:40"],["20:40"]
];
orange_9_holiday_time_return = [["08:30"],
["10:20",[Jiali_Bus_Station,Syuejia_District_Office,[Madou_Bus_Station,-20]]],
["11:10"],["11:30"],["13:25"],["14:20"],["15:25"],["16:20"],["17:00"],
["17:20",[Jiali_Bus_Station,Syuejia_District_Office,[Madou_Bus_Station,-20]]],
["18:30"],["19:20"],["20:20"],["22:20"]
];