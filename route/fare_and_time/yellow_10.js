yellow_10_interval_name = ["泰安宮","後壁<br />火車站","大路墘","顯濟宮","土溝里","白河","河東","大林","大林<br />路口","檨仔坑","石廟仔","籠仔內","六重溪"];
yellow_10_interval_stop = [ // 2017.06.13 checked
["泰安宮","嘉苳里","下茄苳"], // 泰安宮
["後壁高中","良食故事館","後壁火車站","後壁區公所","後壁里","後壁國小"], // 後壁火車站
["大路墘"], // 大路墘
["嘉民里","東上茄苳","顯濟宮","永安國小"], // 顯濟宮
["土溝里","後壁竹子腳","下庄仔"], // 土溝里
["白河商工","舊地政","白河國中","白河分局","白河站","念佛會"], // 白河
["凹底","畚箕湖","河東","河東國小"], // 河東
["竹林路口","大林","大林中山堂","檨子林","下厝仔"], // 大林
["大林路口","山頂仔"], // 大林路口
["檨仔坑","台影文化城"], // 檨仔坑
["石廟仔"], // 石廟仔
["三重溪","籠仔內"], // 籠仔內
["六溪國小","六溪部落","六重溪","南勢仔","禪源","頂埔","鎮安宮"] // 六重溪
];
yellow_10_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[27,26,26,26,26],
[43,34,28,26,26,26],
[51,42,36,29,26,26,26],
[55,45,40,33,28,26,26,26],
[59,49,43,37,32,26,26,26,26],
[63,53,48,41,36,26,26,26,26,26],
[65,55,50,43,38,26,26,26,26,26,26],
[69,60,54,47,42,26,26,26,26,26,26,26],
[73,63,58,51,46,30,26,26,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_10_main_stop_name = ["泰安宮","後壁<br />火車站","土溝里","白河國中","白河","大林","台影<br />文化城","六重溪","鎮安宮"];
yellow_10_main_stop_time_consume = [0, 5, 13, 20, 25, 33, 40, 45, 50];
yellow_10_important_stop = [1, 4, 6]; // 後壁火車站, 白河, 台影文化城
skip_stop = 3; // 白河國中
stop_1 = 4; // 白河
end_stop = 8; // 鎮安宮
yellow_10_time_go = [["07:20",[skip_stop]],["10:00",[skip_stop]],["13:30",[skip_stop]],["15:40",[skip_stop]],["17:00",skip_stop,end_stop],["17:25",[[skip_stop,5]]]];
yellow_10_time_return = [["06:15",[[skip_stop-1,5]]],["08:15",[skip_stop]],["11:00",[skip_stop]],["14:30",[skip_stop]],["16:30",[skip_stop]],["17:30",end_stop,stop_1]];