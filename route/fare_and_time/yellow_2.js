yellow_2_interval_name = ["新營","人和里","柳營","龜子港","林鳳營","中社","六甲","六甲<br />營房","工研院","南元<br />農場","冷水寮","尖山路","土地崎","王爺宮","大丘"];
yellow_2_interval_stop = [ // 2016.02.04 checked
["新營站","第三市場","新營國小","圓環(第一銀行)","新進路口","真武殿","南光中學"], // 新營
["人和里"], // 人和里
["士林里","柳營","新榮中學","南士林"], // 柳營
["嘉南駕訓班","龜子港(省道)","社區"], // 龜子港
["林鳳營火車站","林鳳營"], // 林鳳營
["中社","東中社"], // 中社
["中山路社區","水林","六甲區公所","冰廠","六甲市場","六甲國中","六甲衛生所","六甲","六甲廟後"], // 六甲
["六甲營房"], // 六甲營房
["工研院南分院"], // 工研院南分院
["日新山莊","南元農場"], // 南元農場
["冷水寮"], // 冷水寮
["尖山路"], // 尖山路
["土地崎"], // 土地崎
["番仔坑","王爺宮"], // 王爺宮
["西港湖","北勢坑口","嶺頂","大丘派出所","匏仔寮"] // 大丘
];
yellow_2_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[27,26,26,26,26],
[33,26,26,26,26,26],
[46,38,33,26,26,26,26],
[56,48,42,34,29,26,26,26],
[59,51,45,37,32,26,26,26,26],
[63,55,50,41,36,30,26,26,26,26],
[69,61,55,47,42,36,26,26,26,26,26],
[73,65,60,51,46,40,27,26,26,26,26,26],
[76,68,62,54,49,43,30,26,26,26,26,26,26],
[81,72,67,58,53,47,34,26,26,26,26,26,26,26],
[111,103,97,89,84,78,64,55,52,47,42,37,35,30,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_2_main_stop_name = ["新營站","柳營","龜子港<br />(省道)","林鳳營<br />火車站","六甲","工研院<br />南分院","王爺宮","西港湖","北勢<br />坑口","匏仔寮"];
yellow_2_main_stop_time_consume = [0, 9, 15, 18, 30, 37, 50, 55, 59, 70];
yellow_2_important_stop = [0, 3, 4, 6]; // 新營站, 林鳳營火車站, 六甲, 王爺宮
var Sinying = 0; // 新營站
var Liouying = 1; // 柳營
var Gueizihgang = 2; // 龜子港(省道)
var TRA_Linfongying = 3; // 林鳳營火車站
var Lioujia = 4; // 六甲
var ITRI = 5; // 工研院南分院
var Wangye_Temple = 6; // 王爺宮
var Sigang_Lake = 7; // 西港湖
var Beishihkengkou = 8; // 北勢坑口
var Paozihlaio = 9; // 匏仔寮
yellow_2_time_go = [["05:40",[[Liouying,-3,Liouying+1,-3,Lioujia,-4,Wangye_Temple,-3,Paozihlaio,-2]]],
["07:30",Sinying,Wangye_Temple,[[Liouying,1,Gueizihgang,-1]]],
["11:00",[[Gueizihgang,-1,Lioujia,1]]],
["14:20",Sinying,Wangye_Temple,[[Gueizihgang,-2,Lioujia,2]]],
["16:40",[[Liouying,1,Gueizihgang,-1,TRA_Linfongying,1,Lioujia,1,ITRI,1,Wangye_Temple,-3,Sigang_Lake,-1,Paozihlaio,1]]],
["17:45",Sinying,Wangye_Temple,[[Liouying,5,TRA_Linfongying,3,Lioujia,4,ITRI,2,Wangye_Temple,1]]]];
yellow_2_time_return = [["06:00",Wangye_Temple,Sinying,[ITRI,[ITRI,-5]]],
["06:40",[[Beishihkengkou,-6,ITRI,-4,Liouying,-1,Sinying,6]]],
["08:25",Wangye_Temple,Sinying,[[ITRI,-3,Lioujia,1,TRA_Linfongying,1,Gueizihgang,1]]],
["12:15",[[Beishihkengkou,-6,ITRI,-3,Lioujia,1,TRA_Linfongying,1,Gueizihgang,1,Sinying,1]]],
["15:15",Wangye_Temple,Sinying,[[ITRI,-3,Lioujia,1,Gueizihgang,1,Liouying,-1,Sinying,2]]],
["17:55",[[Beishihkengkou,-5,Wangye_Temple,-1,ITRI,-3,Lioujia,1,TRA_Linfongying,1,Liouying,-1,Sinying,3]]]];