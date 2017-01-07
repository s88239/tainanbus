yellow_13_interval_name = ["白河","河東","虎子墓","木屐寮","仙草埔","關子嶺","頂關<br />子嶺","南寮<br />路口","坪頂","南寮"];
yellow_13_interval_stop = [ // 2015.11.19 checked
["白河國中","白河站","念佛會"], // 白河
["凹底","畚箕湖","東畚箕湖","河東","河東國小"], // 河東
["潭墘","虎子墓(虎山里)"], // 虎子墓
["木屐寮"], // 木屐寮
["白河水庫","竹林寺","派出所","仙草埔","白河榮家","灰窯","羌子崙"], // 仙草埔
["粗坑","寶泉橋","好漢坡","關子嶺"], // 關子嶺
["關子嶺教會","頂關子嶺"], // 頂關子嶺
["南寮路口"], // 南寮路口
["坪頂"], // 坪頂
["後坑","石埤","南寮"] // 南寮
];
yellow_13_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[36,28,26,26,26,26],
[39,31,26,26,26,26,26],
[44,36,30,26,26,26,26,26],
[45,37,31,27,26,26,26,26,26],
[51,43,37,33,27,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_13_main_stop_name = ["白河國中","白河","河東國小","仙草埔","關子嶺","南寮"];
yellow_13_main_stop_time_consume = [0, 10, 15, 23, 30, 40];
yellow_13_important_stop = [0, 1, 4, 5]; // 白河國中, 白河, 關子嶺, 南寮
var start_stop = 1;
var end_stop = 5;
yellow_13_time_go = [["08:40",start_stop,end_stop],["11:10",start_stop,end_stop],["14:10",start_stop,end_stop],["16:50",['L',[1,10]]],["18:25",start_stop,end_stop]];
yellow_13_time_return = [["05:50",[[0,-5]]],["09:20",end_stop,start_stop],["11:50",end_stop,start_stop],["14:50",end_stop,start_stop],["17:50",end_stop,start_stop,['L']]];