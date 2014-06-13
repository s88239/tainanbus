yellow_12_interval_name = ["白河","河東","虎子墓","木屐寮","仙草埔","關子嶺"];
yellow_12_interval_stop = [
["白河站","念佛會","凹底"], // 白河
["畚箕湖","河東","河東國小","潭墘"], // 河東
["虎子墓(虎山里)","福顯宮"], // 虎子墓
["木屐寮","白河水庫"], // 木屐寮
["竹林寺","派出所","仙草埔","白河榮家","灰窯","羌子崙","粗坑"], // 仙草埔
["寶泉橋","好漢坡","關子嶺"] // 關子嶺
];
yellow_12_stop_time_consume = [0,2,4,4,5,5,6,7,10,10,11,12,12,13,14,14,15,17,18,19,20];
yellow_12_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[36,28,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_12_main_stop_name = ["白河","河東國小","福顯宮","仙草埔","關子嶺"];
yellow_12_main_stop_time_consume = [0, 5, 10, 13, 20];
yellow_12_important_stop = [0, 2, 4]; // 白河, 福顯宮, 關子嶺
var skip_stop = 2; // 福顯宮
yellow_12_time_go = [["6:20",0,skip_stop,['副']],["06:55",[skip_stop]],["08:05",[skip_stop]],["09:05",[skip_stop]],["10:05",[skip_stop]],["10:40",0,skip_stop,['副']],["12:05",[skip_stop]],["13:05",[skip_stop]],["15:05",[skip_stop]],["16:05",[skip_stop]],["17:30",0,skip_stop,['副']]];
yellow_12_time_return = [["6:30",skip_stop,0,['副']],["07:25",[skip_stop]],["08:35",[skip_stop]],["09:35",[skip_stop]],["10:35",[skip_stop]],["10:50",skip_stop,0,['副']],["12:35",[skip_stop]],["13:35",[skip_stop]],["15:35",[skip_stop]],["16:35",[skip_stop]],["17:40",skip_stop,0,['副']]];