yellow_interval_name = ["白河","下秀祐","營房","烏樹林","安溪寮","新營","副產","柳營","龜子港","麻豆寮","下營","中營","麻豆"];
yellow_interval_stop = [
["白河站","白河商工","白河漁市場","白河加油站"], // 白河
["頂秀祐","下秀祐"], // 下秀祐
["營房"], // 營房
["蘭花園區","烏樹林"], // 烏樹林
["安溪寮","市場前","頂安社區","南安溪寮","土庫里"], // 安溪寮
["新營客運管理中心","東興、長榮路口","東興國宅","臺南市農會","新營公所","文化中心",
"新營國小","第三市場","新營站","三商","中山路","第一市場","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["柳營奇美醫院","鳳和中學","柳營火車站","中華電信","柳營","新榮中學","東又悅公司"], // 柳營
["嘉南駕訓班","龜子港"], // 龜子港
["麻豆寮","洲子","嘉鴻公司"], // 麻豆寮
["下營國中","農會超市","下營公所","下營廟前"], // 下營
["給水站","中營路口","中營"], // 中營
["五王廟前","麻豆公所","興中、民生路口","一商前","戲院前","圓環","小埤頭","新樓醫院","果菜市場"] // 麻豆
];
yellow_stop_time_consume = [0,1,1,2,3,4,5,6,7,9,10,11,12,13,14,15,17,19,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,38,40,42,
43,44,45,47,48,49,50,51,52,54,57,59,60,67,68,70,72,73,75,78,80];
yellow_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[42,37,34,28,26,26],
[51,46,43,36,30,26,26],
[65,60,57,51,44,26,26,26],
[74,69,66,60,54,32,26,26,26],
[80,75,72,66,60,38,29,26,26,26],
[93,88,84,78,72,51,42,28,26,26,26],
[103,98,95,89,82,61,52,38,29,26,26,26],
[133,128,125,119,112,91,82,68,59,53,40,30,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_main_stop_name = ["白河","蘭花園區","新營","柳營<br />奇美醫院","柳營<br />火車站","麻豆寮","下營公所","一商前","果菜市場"];
yellow_main_stop_time_consume = [0, 9, 25, 33, 36, 46, 53, 71, 80];
yellow_important_stop = [0, 2, 8]; // 白河, 新營, 果菜市場
yellow_time_go = [["06:00",[1]],["06:20",0,2,[1]],["06:30",[1]],["06:45",0,3,[1]],["07:15",0,2,[1]],["07:30",[1]],
["08:00",0,2],["08:30"],["09:00",0,2],["09:30"],["10:00",0,2],["10:30"],["11:00",0,2],["11:30"],["12:00",0,2],
["12:30"],["13:00",0,2],["13:30"],["14:00",0,2],["14:30"],["15:00",0,2],["15:30"],["16:00",0,2],["16:30"],
["17:00",0,2],["17:30",['繞',1]],["18:00",[1]],["18:15",0,2,[1]],["18:30",0,2,[1]],["19:00",[1]],["20:00",[1]]
];
yellow_time_return = [["06:20",2,0,[1]],["06:45",2,0,[1]],["06:50",2,0,[1]],["06:00",['繞',1]],["06:30",[1]],["07:55",2,0],
["07:30"],["08:55",2,0],["08:30"],["09:55",2,0],["09:30"],["10:55",2,0],["10:30"],["11:55",2,0],["11:30"],["12:55",2,0],
["12:30"],["13:55",2,0],["13:30"],["14:55",2,0],["14:30"],["15:55",2,0],["15:30"],["16:30",2,0],["17:00",2,0],["16:40",[1]],
["17:40",2,0,[1]],["17:30",[1]],["18:00",[1]],["19:00",[1]],["20:00",[1]]
];