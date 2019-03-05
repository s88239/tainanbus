yellow_5_interval_name = ["新營","副產","柳營<br />火車站","八老爺","中庄","下營公所"];
yellow_5_interval_stop = [ // 2018.11.18 checked
["新營站","新營鐵道地景公園","中營興業里","中山路","第一市場","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["柳營奇美醫院","鳳和中學","柳營火車站","柳營代天院"], // 柳營火車站
["劉家古厝","八翁里","八老爺"], // 八老爺
["賀建里","十六甲","中庄"], // 中庄
["紅毛厝","顏姓祖厝","下營區公所","下營廟前"] // 下營
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
yellow_5_main_stop_name = ["新營站","柳營<br />火車站","八老爺","紅毛厝","下營<br />區公所","下營廟前"];
yellow_5_main_stop_time_consume = [0, 14, 18, 27, 29, 30];
yellow_5_important_stop = [0, 1, 5]; // 新營站, 柳營火車站, 下營廟前
var Sinying = 0; // 新營站
var TRA_Liouying = 1; // 柳營火車站
var Balaoye = 2; // 八老爺
var Hongmaocuo = 3; // 紅毛厝
yellow_5_time_go = [["08:20"],["09:30",['L']],["12:15"],["16:00",['L']],["17:15",['H']]];
yellow_5_time_return = [["09:00",[[Hongmaocuo,1,Sinying,-1]]],["12:30",['L',[Hongmaocuo,1,TRA_Liouying,1,Sinying,-2]]],["13:00",[[Hongmaocuo,1,Balaoye,-1]]],["16:35",['L',[Hongmaocuo,1,TRA_Liouying,1,Sinying,3]]],["18:00",['H',[Hongmaocuo,1,Balaoye,-2,Sinying,1]]]];