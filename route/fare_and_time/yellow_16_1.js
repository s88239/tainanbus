yellow_16_1_interval_name = ["白河站","下秀祐","營房","烏樹林","安溪寮","後壁火車站","上茄苳","南靖火車站","後寮村","高鐵嘉義站"];
yellow_16_1_interval_stop = [
["白河站","白河魚市場","白河加油站"], // 白河
["頂秀祐","下秀祐"], // 下秀祐
["營房"], // 營房
["蘭花園區","烏樹林"], // 烏樹林
["安溪寮","市場前","頂安社區","北安溪寮","下茄苳","後壁高中","良食故事館"], // 安溪寮
["後壁火車站"], // 後壁火車站
["上茄苳","勝泰工業"], // 上茄苳
["南靖火車站"], // 南靖火車站
["後寮村","春珠里"], // 後寮村
["高鐵嘉義站"] // 高鐵嘉義站
];
yellow_16_1_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[41,35,33,26,26,26],
[51,46,43,36,30,26,26],
[62,56,53,46,40,26,26,26],
[89,84,81,74,68,48,38,26,26],
[101,96,93,86,80,61,50,40,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_16_1_main_stop_name = ["白河站","烏樹林","北安<br />溪寮","後壁<br />高中","後壁<br />火車站","上茄苳","南靖<br />火車站","後寮村","高鐵<br />嘉義站"];
yellow_16_1_main_stop_time_consume = [0, 7, 13, 15, 16, 19, 22, 29, 43];
yellow_16_1_important_stop = [0, 4, 8]; // 白河站, 後壁火車站, 高鐵嘉義站
var Baihe = 0;
var Wushulin = 1;
var Beianxiliao = 2;
var TRA_Nanjing = 6;
var Houliao_Vil = 7;
yellow_16_1_time_go = [["08:00"],["11:00"],["15:00"]];
yellow_16_1_time_return = [
["09:20",[[Houliao_Vil,-10,TRA_Nanjing,-1,Beianxiliao,1,Wushulin,2,Baihe,5]]],
["12:20",[[Houliao_Vil,-10,TRA_Nanjing,-1,Beianxiliao,1,Wushulin,2,Baihe,5]]],
["16:20",[[Houliao_Vil,-10,TRA_Nanjing,-1,Beianxiliao,1,Wushulin,2,Baihe,5]]]
];