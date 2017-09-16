yellow_5_interval_name = ["新營","副產","柳營<br />火車站","八老爺","中庄","下營公所"];
yellow_5_interval_stop = [ // 2017.01.07 checked
["新營站","三商","中山路","第一市場","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["柳營奇美醫院","鳳和中學","柳營火車站","柳營代天院","劉家古厝"], // 柳營火車站
["八翁里","八老爺","乳牛的家","賀建里"], // 八老爺
["十六甲","中庄"], // 中庄
["紅毛厝","顏姓祖厝","下營公所","下營廟前"] // 下營
];
yellow_5_fare = [
[26],
[26,26],
[26,26,26],
[28,26,26,26],
[42,33,26,26,26],
[48,39,30,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_5_main_stop_name = ["新營","柳營<br />火車站","八老爺","乳牛的家","紅毛厝","下營公所","下營廟前"];
yellow_5_main_stop_time_consume = [0, 14, 19, 22, 35, 38, 40];
yellow_5_important_stop = [0, 1, 6]; // 新營, 柳營火車站, 下營廟前
var start_stop = 0; // 新營
var stop_1 = 5; // 下營公所
yellow_5_time_go = [["08:20"],["09:30",['L']],["15:45",['L']]];
yellow_5_time_return = [["09:10",[[stop_1,-1,start_stop,1]]],["12:30",['L',[stop_1,-1,start_stop,1]]],["16:35",['L',[stop_1,-1,start_stop,1]]]];