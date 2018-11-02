yellow_16_interval_name = ["白河站","東山","北馬","吉貝耍","大腳腿<br />路口","山仔腳","旭山里","瓦窯","果毅後<br />廟前","六甲","二鎮","隆田火車站"];
yellow_16_interval_stop = [ // 2018.10.01 checked
["白河商工","白河分局","白河站","安養院"], // 白河站
["東山加油站","民眾服務社","北東山","東山","東山國中"], // 東山
["北馬"], // 北馬
["吉貝耍"], // 吉貝耍
["大腳腿路口"], // 大腳腿路口
["山仔腳","旭山農會","新吉庄"], // 山仔腳
["旭山里"], // 山仔腳
["東瓦窯","瓦窯(柳營)"], // 瓦窯
["果毅國小","果毅後","果毅後廟前"], // 果毅後廟前
["福德祠","六甲市場","六甲國中","六甲衛生所","六甲"], // 六甲
["七甲里","瓦窯(六甲)","二鎮","勞動力發展署","官田服務中心","官田工業區"], // 二鎮
["隆田","隆田火車站"] // 隆田火車站
];
yellow_16_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[30,26,26,26,26],
[34,26,26,26,26,26],
[38,26,26,26,26,26,26],
[41,27,26,26,26,26,26,26],
[45,32,26,26,26,26,26,26,26],
[63,50,43,37,33,29,26,26,26,26],
[74,61,54,48,44,40,36,33,29,26,26],
[89,75,69,63,59,54,51,48,43,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_16_main_stop_name = ["白河商工","白河站","東山","北馬","吉貝耍","山仔腳","旭山里","瓦窯<br />(柳營)","果毅後","六甲","二鎮","隆田<br />火車站"];
yellow_16_main_stop_time_consume = [0, 5, 10, 13, 15, 19, 21, 23, 25, 35, 43, 51];
yellow_16_important_stop = [0, 1, 2, 6, 9, 11]; // 白河商工, 白河站, 東山, 旭山里, 六甲, 隆田火車站
var Baihe = 1; // 白河站
var Dongshan = 2; // 東山
var Syushan_Vil = 6; // 旭山里
var Guoyihou = 8; // 果毅後
var Lioujia = 9; // 六甲
var Longtian_Train_Station = 11; // 隆田火車站
yellow_16_time_go = [["05:55"],["16:00",[[Baihe,1,Dongshan,1,Dongshan+1,1,Guoyihou,1,Lioujia,2,Longtian_Train_Station,1]]],["17:00",[[Dongshan,1,Dongshan+1,1,Dongshan+3,-1,Lioujia,2]]]];
yellow_16_time_return = [["06:50",[[Guoyihou,2,Syushan_Vil+1,1,Syushan_Vil,-1,Syushan_Vil-1,1,Baihe,1]]],["17:05",[[Longtian_Train_Station-1,2,Guoyihou,2,Syushan_Vil+1,1,Syushan_Vil-1,1,Syushan_Vil-2,-1,Dongshan,1,Baihe,1]]],["18:00",[[Longtian_Train_Station-1,1,Lioujia,-1,Baihe,1]]]];