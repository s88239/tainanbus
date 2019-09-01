yellow_interval_name = ["白河","下秀祐","營房","烏樹林","安溪寮","新營","副產","柳營","龜子港","麻豆寮","下營","中營","麻豆"];
yellow_interval_stop = [ // 2015.08.31 checked
["白河站","白河商工","白河魚市場","白河加油站"], // 白河
["頂秀祐","下秀祐"], // 下秀祐
["營房"], // 營房
["蘭花園區","烏樹林"], // 烏樹林
["安溪寮","市場前","頂安社區","南安溪寮"], // 安溪寮
["土庫里","卯舍","新營客運管理中心","東仁、長榮路口","東興、長榮路口","東興國宅","新東國中","臺南市農會","新營區公所","新營文化中心",
"新營國小","第三市場","新營站","中營興業里","中山路","第一市場","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["柳營奇美醫院","鳳和中學","柳營火車站","中華電信","柳營","新榮中學","南士林"], // 柳營
["嘉南駕訓班","龜子港"], // 龜子港
["麻豆寮","洲子","嘉鴻公司"], // 麻豆寮
["下營國中","農會超市","下營區公所","下營廟前","下營衛生所","給水站","右武衛公園"], // 下營
["中營路口","中營"], // 中營
["五王廟前","麻豆區公所","興中民生路口","一商前","電姬戲院","圓環","小埤頭","新樓醫院","麻豆轉運站"] // 麻豆
];
yellow_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[45,39,36,29,26,26],
[53,48,45,38,32,26,26],
[69,63,60,53,47,26,26,26],
[78,73,70,63,57,34,26,26,26],
[84,79,76,69,63,39,31,26,26,26],
[97,91,88,81,75,52,43,28,26,26,26],
[108,102,100,92,87,63,54,39,30,26,26,26],
[139,134,131,124,118,94,86,71,61,55,43,31,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_main_stop_name = ["白河站","烏樹林","新營站","柳營<br />奇美醫院","柳營<br />火車站","麻豆寮","下營<br />區公所","一商前","麻豆<br />轉運站"];
yellow_main_stop_time_consume = [0, 9, 25, 33, 36, 46, 53, 71, 80];
yellow_important_stop = [0, 2, 4, 8]; // 白河站, 新營站, 柳營火車站, 麻豆轉運站
var Baihe  = 0; // 白河站
var Wushulin = 1; // 烏樹林
var hsinyin = 2; // 新營站
var chimei = 3; // 柳營奇美醫院
var TRA_Liouying = 4; // 柳營火車站
var Madouliao = 5; // 麻豆寮
var Siaying_District_Office = 6; // 下營區公所
var Yishangcian = 7; // 一商前
var Madou_Bus_Station = 8; // 麻豆轉運站
yellow_time_go = [["05:50",['L',[Wushulin,-2,hsinyin,11,chimei,1,Madou_Bus_Station,5]]],["06:20",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,2]]],["06:30",['L',[Wushulin,-2,hsinyin,2,chimei,3,Siaying_District_Office,1,Madou_Bus_Station,6]]],["06:45",Baihe,chimei,[[Wushulin,-2,hsinyin,7,chimei,2]]],["06:55",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,2]]],["07:15",Baihe,hsinyin,[[Wushulin,-2,hsinyin,7]]],["07:30",['L',[Wushulin,-2,hsinyin,2,chimei,3,Siaying_District_Office,1,Madou_Bus_Station,6]]],["07:45",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],
["08:00",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["08:30"],["08:50",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,2]]],["09:20",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,7]]],["09:30"],["09:45",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["10:00",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["10:30",['L',[Wushulin,-2,hsinyin,2,chimei,1,Siaying_District_Office,-1,Madou_Bus_Station,10]]],["11:00",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,2]]],["11:30",['L',[Wushulin,-2,hsinyin,2,chimei,1,Siaying_District_Office,-1,Madou_Bus_Station,10]]],["12:00",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],
["12:30",['L',[Wushulin,-2,hsinyin,2,chimei,1,Siaying_District_Office,-1,Madou_Bus_Station,10]]],["13:00",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["13:30",['L',[Wushulin,-2,hsinyin,2,chimei,1,Siaying_District_Office,-1,Madou_Bus_Station,10]]],["14:00",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,2]]],["14:30"],["15:00",Baihe,hsinyin,['L',[Wushulin,-2,hsinyin,2]]],["15:30"],["16:00",Baihe,hsinyin,['繞',[Wushulin,1,hsinyin,4]]],["16:30",['<span style="color: red;">L</span>繞',[hsinyin,3,chimei,3,Madouliao,1,Siaying_District_Office,3,Yishangcian,1,Madou_Bus_Station,4]]],
["16:55",Baihe,hsinyin,['<span style="color: red;">L</span>繞',[Wushulin,1,hsinyin,9]]],["17:30",['<span style="color: red;">L</span>繞',[hsinyin,3,chimei,2,Madouliao,1,Siaying_District_Office,2,Yishangcian,-1,Madou_Bus_Station,8]]],["18:00",['L',[Wushulin,-2,hsinyin,2,chimei,3,Madouliao,-1,Siaying_District_Office,-2,Yishangcian,-3,Madou_Bus_Station,13]]],["18:15",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["18:30",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["18:45",Baihe,hsinyin,[[Wushulin,-2,hsinyin,2]]],["19:00"],["20:00"],
["21:40",hsinyin,Madou_Bus_Station,[[TRA_Liouying,1,Siaying_District_Office,-2,Yishangcian,-2,Madou_Bus_Station,3]]],["22:10",Baihe,hsinyin,[[Wushulin,-4,hsinyin,-1]]]
];
yellow_time_return = [["05:50",hsinyin,Baihe,[[Wushulin,-1,Baihe,1]]],["06:10",hsinyin,Baihe],["06:35",hsinyin,Baihe,['L']],["06:50",hsinyin,Baihe],["06:00",['繞']],["07:15",hsinyin,Baihe,['<span style="color: red;">L</span>繞',[hsinyin-1,3,Baihe,2]]],["07:30",hsinyin,Baihe],["06:30",[[hsinyin,5,Baihe,-5]]],["07:55",hsinyin,Baihe],
["07:30",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,9,Wushulin,1,Baihe,-4]]],["08:55",hsinyin,Baihe],["08:30",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,9,Wushulin,1,Baihe,-4]]],["09:55",hsinyin,Baihe,['L']],["10:20",hsinyin,Baihe],["09:30",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,8,Wushulin,-3,Baihe,1]]],["10:55",hsinyin,Baihe],["10:30",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,8,Wushulin,-3,Baihe,1]]],["11:55",hsinyin,Baihe],["11:30",[[hsinyin,5,hsinyin-1,-5]]],["13:00",hsinyin,Baihe,['L']],
["12:30",[[hsinyin,5,hsinyin-1,-5]]],["13:55",hsinyin,Baihe],["13:30",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,8,Wushulin,-3,Baihe,1]]],["14:55",hsinyin,Baihe,['L']],["14:30",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,8,Wushulin,-3,Baihe,1]]],["15:55",hsinyin,Baihe,['L']],["16:10",hsinyin,Baihe],["16:20",hsinyin,Baihe],["15:30",['L',[Yishangcian,1,TRA_Liouying,-1,hsinyin,9,Wushulin,1]]],["17:00",hsinyin,Baihe,[[hsinyin-1,3,Baihe,2]]],["16:40"],
["17:40",hsinyin,Baihe,[[hsinyin-1,3,Baihe,2]]],["17:30",[[hsinyin,5,hsinyin-1,-5]]],["18:20",['L',[Yishangcian,1,Siaying_District_Office,-1,TRA_Liouying,-1,hsinyin,8,Wushulin,-3,Baihe,1]]],["19:20",['L',[Yishangcian,1,Siaying_District_Office,-1,Madouliao,-1,TRA_Liouying,-1,hsinyin,5,Wushulin,-3]]],["20:00",['L',[Yishangcian,1,Siaying_District_Office,-3,Madouliao,-1,TRA_Liouying,-1,hsinyin,2,Wushulin,-2,Baihe,4]]],
["21:40",hsinyin,Baihe,[[Wushulin,-4,Baihe,4]]],["22:40",Madou_Bus_Station,hsinyin,[[Yishangcian,1,Siaying_District_Office,-4,Madouliao,-3,TRA_Liouying,-2,hsinyin,8]]]
];