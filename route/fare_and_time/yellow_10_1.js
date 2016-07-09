yellow_10_1_interval_name = ["白河","河東","大林","大林<br />路口","檨仔坑","石廟仔","籠仔內","六重溪","鎮安宮","檳榔腳"];
yellow_10_1_interval_stop = [ // 2015.08.31 checked
["白河站","念佛會"], // 白河
["凹底","畚箕湖","東畚箕湖","河東"], // 河東
["竹林路口","大林","大林中山堂","下厝仔"], // 大林
["大林路口","山頂仔"], // 大林路口
["檨仔坑","台影文化城"], // 檨仔坑
["石廟仔"], // 石廟仔
["三重溪","籠仔內"], // 籠仔內
["六溪國小","六溪部落","六重溪","石牌","南勢仔","頂埔"], // 六重溪
["鎮安宮","六戶仔","崁下仔"], // 鎮安宮
["檳榔腳"] // 檳榔腳
];
yellow_10_1_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[26,26,26,26,26,26],
[26,26,26,26,26,26,26],
[30,26,26,26,26,26,26,26],
[34,26,26,26,26,26,26,26,26],
[41,33,30,26,26,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_10_1_main_stop_name = ["白河","大林","台影<br />文化城","六重溪","鎮安宮","檳榔腳"];
yellow_10_1_main_stop_time_consume = [0, 8, 15, 20, 23, 27];
yellow_10_1_important_stop = [0, 2, 5]; // 白河, 台影文化城, 檳榔腳
var skip_stop = 4; // 鎮安宮
yellow_10_1_time_go = [["08:50"],["12:00"],["14:00"]];
yellow_10_1_time_return = [["09:17",[skip_stop,[skip_stop,-4]]],["12:27",[skip_stop,[skip_stop,-4]]],["14:27",[skip_stop,[skip_stop,-4]]]];