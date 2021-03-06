blue_24_interval_name = ["安平<br />工業區","臺南","文元寮","海尾","本淵寮","十二佃","溪南寮","學甲寮","土城子","青草里"];
blue_24_interval_stop = [
["安平工業區","安平港","服務中心","明和公園","三官廟","新興國小"], // 安平工業區
["臺南站","新光三越新天地","小西門(大億麗緻)","西門、友愛街口","西門、民權路口","西門圓環","永樂市場","協和里","文賢國中","文賢路"], // 臺南
["特力屋/好市多","文元寮","溪子墘社區","協成社區","中華社區","海東橋"], // 文元寮
["海尾前","海東里","南海尾","海尾"], // 海尾
["安南國中","海東國小","仁安路","本原街口"], // 本淵寮
["十二佃","十二佃神榕前","南天宮","十二佃橋"], // 十二佃
["新吉庄","公塭","溪南寮"], // 溪南寮
["學甲寮","學東廟","國聖大橋","安明路口"], // 學甲寮
["鹿耳門","溪埔仔","砂崙路口","土城國小","城東里","土城子","聖母廟(安中路)","聖母廟(城安路)"], // 土城子
["砂崙社區","砂崙里","青草里"] // 青草里
];
blue_24_fare = [
[26],
[26,26],
[26,26,26],
[37,27,26,26],
[41,31,26,26,26],
[48,37,26,26,26,26],
[55,44,29,26,26,26,26],
[60,49,34,26,26,26,26,26],
[72,62,47,35,31,26,26,26,26],
[82,72,57,45,41,34,27,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
blue_24_main_stop_name = ["安平<br />工業區","小西門<br />(大億麗緻)","永樂市場","特力屋/<br />好市多","協成社區","海尾","海東國小","南天宮","國聖大橋","聖母廟<br />(城安路)","青草里"];
blue_24_main_stop_time_consume = [0, 11, 15, 22, 26, 32, 35, 42, 51, 60, 65];
blue_24_important_stop = [0, 1, 6, 10]; // 安平工業區, 小西門(大億麗緻), 海東國小, 青草里
blue_24_time_go = [["07:50"],["08:20"],["11:00"],["12:20"],["14:10"],["17:10"],["17:30"],["18:25"]];
blue_24_time_return = [["06:00"],["06:10"],["06:20"],["09:00"],["10:00"],["12:40"],["13:25"],["15:40"]];