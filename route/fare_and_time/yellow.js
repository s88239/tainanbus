yellow_interval_name = ["白河","下秀祐","營房","烏樹林","安溪寮","新營","副產","柳營","龜子港","麻豆寮","下營","中營","麻豆"];
yellow_interval_stop = [ // 2015.08.31 checked
["白河站","白河商工","白河漁市場","白河加油站"], // 白河
["頂秀祐","下秀祐"], // 下秀祐
["營房"], // 營房
["蘭花園區","烏樹林"], // 烏樹林
["安溪寮","市場前","頂安社區","南安溪寮"], // 安溪寮
["土庫里","卯舍","新營客運管理中心","東興、長榮路口","東興國宅","新東國中","臺南市農會","新營公所","文化中心",
"新營國小","第三市場","新營站","三商","中山路","第一市場","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["柳營奇美醫院","鳳和中學","柳營火車站","中華電信","柳營","新榮中學","東又悅公司"], // 柳營
["嘉南駕訓班","龜子港"], // 龜子港
["麻豆寮","洲子","嘉鴻公司"], // 麻豆寮
["下營國中","農會超市","下營公所","下營廟前","下營衛生所","給水站","右武衛公園"], // 下營
["中營路口","中營"], // 中營
["五王廟前","麻豆公所","興中、民生路口","一商前","電姬戲院","圓環","小埤頭","新樓醫院","麻豆轉運站"] // 麻豆
];
yellow_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[46,40,37,29,26,26],
[54,49,46,38,32,26,26],
[70,64,61,53,47,26,26,26],
[79,74,71,63,57,34,26,26,26],
[85,80,77,69,63,39,31,26,26,26],
[98,92,89,81,75,52,43,28,26,26,26],
[109,103,101,92,87,63,54,39,30,26,26,26],
[139,134,131,123,117,94,85,70,60,54,42,31,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_main_stop_name = ["白河","蘭花園區","新營","柳營<br />奇美醫院","柳營<br />火車站","麻豆寮","下營公所","一商前","麻豆<br />轉運站"];
yellow_main_stop_time_consume = [0, 9, 25, 33, 36, 46, 53, 71, 80];
yellow_important_stop = [0, 2, 4, 8]; // 白河, 新營, 柳營火車站, 麻豆轉運站
var start_stop = 0; // 白河
var hsinyin = 2; // 新營
var skip_stop = 1; // 蘭花園區
var chimei = 3; // 柳營奇美醫院
yellow_time_go = [["06:00",['L']],["06:20",start_stop,hsinyin,['L']],["06:30",['L']],["06:45",start_stop,chimei],["07:15",start_stop,hsinyin],["07:30",['L']],
["08:00",start_stop,hsinyin],["08:30"],["08:50",start_stop,hsinyin,['L']],["09:30"],["10:00",start_stop,hsinyin],["10:30",['L']],["11:00",start_stop,hsinyin,['L']],["11:30",['L']],["12:00",start_stop,hsinyin],
["12:30",['L']],["13:00",start_stop,hsinyin],["13:30",['L']],["14:00",start_stop,hsinyin,['L']],["14:30"],["15:00",start_stop,hsinyin,['L']],["15:30"],["16:00",start_stop,hsinyin,['繞']],["16:30",['<span style="color: red;">L</span>繞']],
["17:00",start_stop,hsinyin,['<span style="color: red;">L</span>繞']],["17:30",['<span style="color: red;">L</span>繞',]],["18:00",['L']],["18:15",start_stop,hsinyin],["18:30",start_stop,hsinyin],["19:00"],["20:00"]
];
yellow_time_return = [["06:10",hsinyin,start_stop],["06:35",hsinyin,start_stop,['L']],["06:50",hsinyin,start_stop],["06:00",['繞']],["06:30",[[hsinyin,5]]],["07:55",hsinyin,start_stop],
["07:30",['L',[hsinyin,5]]],["08:55",hsinyin,start_stop],["08:30",['L',[hsinyin,5]]],["09:55",hsinyin,start_stop,['L']],["09:30",['L',[hsinyin,5]]],["10:55",hsinyin,start_stop],["10:30",['L',[hsinyin,5]]],["11:55",hsinyin,start_stop],["11:30",[[hsinyin,5]]],["13:00",hsinyin,start_stop,['L']],
["12:30",[[hsinyin,5]]],["13:55",hsinyin,start_stop],["13:30",['L',[hsinyin,5]]],["14:55",hsinyin,start_stop,['L']],["14:30",['L',[hsinyin,5]]],["15:55",hsinyin,start_stop,['L']],["16:20",hsinyin,start_stop],["15:30",['L',[hsinyin,5]]],["17:00",hsinyin,start_stop],["16:40"],
["17:40",hsinyin,start_stop],["17:30",[[hsinyin,5]]],["18:10",['L',[hsinyin,5]]],["19:10",['L',[hsinyin,5]]],["20:00",['L']]
];