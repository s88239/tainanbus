yellow_10_interval_name = ["泰安宮","後壁<br />火車站","大路墘","顯濟宮","土溝里","白河","河東","大林","大林<br />路口","檨仔坑","石廟仔","籠仔內","六重溪","鎮安宮"];
yellow_10_interval_stop = [ // 2018.08.01 checked
["泰安宮","嘉苳里","下茄苳"], // 泰安宮
["後壁高中","良食故事館","後壁火車站","後壁區公所","後壁里","後壁國小"], // 後壁火車站
["大路墘"], // 大路墘
["嘉民里","東上茄苳","顯濟宮","永安國小"], // 顯濟宮
["土溝里","後壁竹子腳","下庄仔"], // 土溝里
["白河區圖書館","白河運動公園","白河商工","舊地政","白河國中","白河分局","中山、中興路口","白河站","念佛會"], // 白河
["凹底","畚箕湖","東畚箕湖","河東","河東國小"], // 河東
["竹林路口","大林","大林中山堂","檨子林","下厝仔","大林里"], // 大林
["大林路口","山頂仔"], // 大林路口
["檨仔坑"], // 檨仔坑
["台影文化城","石廟仔"], // 石廟仔
["三重溪","籠仔內"], // 籠仔內
["六溪國小","六溪部落","六重溪","南勢仔","禪源","頂埔"], // 六重溪
["鎮安宮"] // 鎮安宮
];
yellow_10_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[27,26,26,26,26],
[43,34,28,26,26,26],
[51,42,36,29,26,26,26],
[55,46,40,34,28,26,26,26],
[59,50,44,37,32,26,26,26,26],
[63,54,48,42,36,26,26,26,26,26],
[66,56,51,44,39,26,26,26,26,26,26],
[70,60,55,48,43,27,26,26,26,26,26,26],
[73,64,58,52,46,30,26,26,26,26,26,26,26],
[78,69,63,56,51,35,27,26,26,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_10_main_stop_name = ["泰安宮","後壁<br />火車站","土溝里","白河國中","白河站","大林","台影<br />文化城","六重溪","鎮安宮"];
yellow_10_main_stop_time_consume = [0, 5, 13, 20, 25, 33, 40, 45, 50];
yellow_10_important_stop = [1, 4, 8]; // 後壁火車站, 白河站, 鎮安宮
var Houbi_Train_Station = 1; // 後壁火車站
var Baihe_Junior_High_School = 3; // 白河國中
var Baihe = 4; // 白河站
var Jhen_an_Temple = 8; // 鎮安宮
yellow_10_time_go = [["07:30",[Baihe_Junior_High_School]],["10:00",[Baihe_Junior_High_School]],["13:40",[Baihe_Junior_High_School]],["15:40",[Baihe_Junior_High_School]],["16:20",Houbi_Train_Station,Baihe,[Baihe_Junior_High_School]],["17:00",Baihe_Junior_High_School,Jhen_an_Temple],["17:25",[[Baihe_Junior_High_School,5]]]];
yellow_10_time_return = [["06:15",[[Baihe_Junior_High_School-1,5]]],["08:20",[Baihe_Junior_High_School]],["10:55",[Baihe_Junior_High_School]],["14:30",[Baihe_Junior_High_School]],["15:55",Baihe,Houbi_Train_Station,[Baihe_Junior_High_School]],["16:30",[Baihe_Junior_High_School]],["17:30",Jhen_an_Temple,Baihe]];