yellow_12_interval_name = ["白河","河東","虎子墓","木屐寮","仙草埔","關子嶺"];
yellow_12_interval_stop = [ // 2015.12.03 checked
["白河站","念佛會"], // 白河
["凹底","畚箕湖","東畚箕湖","河東","河東國小"], // 河東
["潭墘","虎子墓(虎山里)"], // 虎子墓
["木屐寮"], // 木屐寮
["白河水庫","竹林寺","派出所","仙草埔","白河榮家","灰窯","羌子崙"], // 仙草埔
["粗坑","寶泉橋","好漢坡","關子嶺"] // 關子嶺
];
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
yellow_12_main_stop_name = ["白河","河東國小","虎子墓<br />(虎山里)","仙草埔","關子嶺"];
yellow_12_main_stop_time_consume = [0, 5, 10, 13, 20];
yellow_12_important_stop = [0, 2, 4]; // 白河, 虎山里, 關子嶺
yellow_12_time_go = [["06:55"],["08:15"],["09:15"],["10:15"],["12:15"],["13:15"],["15:15"],["16:15",['L']]];
yellow_12_time_return = [["07:25"],["08:45"],["09:45"],["10:45"],["12:45"],["13:45"],["15:45"],["16:45",['L']]];

// holiday schedule
yellow_12_holiday_time_go = [["06:55"],["07:20"],["08:15"],["09:15"],["09:45",['溫']],["10:15"],["12:15"],["12:45",['溫']],["13:15"],["14:50",['溫']],["15:15"],["16:15",['L']],["18:00",['溫']]];
yellow_12_holiday_time_return = [["07:25"],["08:45"],["09:45"],["10:45"],["11:00",['溫']],["12:45"],["13:45"],["14:00",['溫']],["15:20",['溫']],["15:45"],["16:45",['L']],["17:00"],["18:30",['溫']]];

yellow_12_activity_time_go = [["06:55"],["07:20"],["08:15"],["09:15"],["09:45"],["10:15"],["12:15"],["12:45"],["13:15"],["14:50"],["15:15"],["16:15"],["18:00"]];
yellow_12_activity_time_return = [["07:25"],["08:45"],["09:45"],["10:45"],["11:00"],["12:45"],["13:45"],["14:00"],["15:20"],["15:45"],["16:45",['L']],["17:00"],["18:30"],["20:30"]];