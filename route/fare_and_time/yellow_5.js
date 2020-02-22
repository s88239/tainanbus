yellow_5_interval_name = ["新營","副產","柳營<br />火車站","八老爺","中庄","下營公所"];
yellow_5_interval_stop = [ // 2018.11.18 checked
["新營站","新營鐵道地景公園","中營興業里","中山路","第一市場","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["柳營奇美醫院","鳳和中學","柳營火車站","柳營代天院"], // 柳營火車站
["劉家古厝","吳晉淮音樂紀念館","八翁里","八老爺"], // 八老爺
["賀建里","十六甲","中庄"], // 中庄
["紅毛厝","顏姓祖厝","下營區公所","下營廟前"] // 下營
];
yellow_5_fare = [
[26],
[26,26],
[26,26,26],
[27,26,26,26],
[42,33,26,26,26],
[51,42,32,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_5_main_stop_name = ["新營站","柳營<br />火車站","吳晉淮音<br />樂紀念館","八老爺","紅毛厝","下營<br />區公所","下營廟前"];
yellow_5_main_stop_time_consume = [0, 13, 18, 23, 31, 35, 36];
yellow_5_important_stop = [0, 1, 6]; // 新營站, 柳營火車站, 下營廟前
var Sinying = 0; // 新營站
var TRA_Liouying = 1; // 柳營火車站
var WuJinHuai = 2; // 吳晉淮音樂紀念館
var Balaoye = 3; // 八老爺
var Hongmaocuo = 4; // 紅毛厝
var Siaying_District_Office = 5; // 下營區公所
yellow_5_time_go = [["08:20",[WuJinHuai,[WuJinHuai,-6]]],["09:30",['L',WuJinHuai,[WuJinHuai,-6]]],["12:10",[WuJinHuai,[WuJinHuai,-6]]],["15:50",['L',WuJinHuai,[WuJinHuai,-6]]]];
yellow_5_time_return = [["09:05",[WuJinHuai,[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,-6,Sinying,2]]],["12:30",['L',WuJinHuai,[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,-6,Sinying,2]]],["12:55",[WuJinHuai,[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,-6,Sinying,2]]],["16:35",['L',WuJinHuai,[Hongmaocuo,-1,TRA_Liouying,-4,Sinying,12]]]];

yellow_5_holiday_time_go = [["08:20"],["09:30",['L']],["12:10"],["15:50",['L']],["17:15",[[Siaying_District_Office,1]]]];
yellow_5_holiday_time_return = [["09:05",[[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,1,Sinying,2]]],["12:30",['L',[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,1,Sinying,2]]],["12:55",[[Hongmaocuo,-1,Balaoye,-1,Sinying,2]]],["16:35",['L',[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,1,Sinying,2]]],["18:00",[[Hongmaocuo,-1,Balaoye,-1,TRA_Liouying,1,Sinying,2]]]];