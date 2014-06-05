blue_24_interval_name = ["安平<br />工業區","臺南","文元寮","海尾","本淵寮","十二佃","溪南寮","學甲寮","土城子","青草里"];
blue_24_interval_stop = [
["安平工業區","安平港","管理中心","明和公園","三官廟","新興國小"], // 安平工業區
["臺南站","新光三越新天地","小西門(大億麗緻)","西門、友愛街口","西門、民權路口","西門圓環","永樂市場","協和里","文賢國中","文賢路"], // 臺南
["特力屋、好市多","文元寮","溪子墘社區","協成社區","中華社區","海東橋"], // 文元寮
["海尾前","海東里","南海尾","海尾"], // 海尾
["安南國中","海東國小","仁安路","本原街口"], // 本淵寮
["十二佃","南天宮","十二佃橋"], // 十二佃
["新吉庄","公塭","溪南寮"], // 溪南寮
["學甲寮","學東廟","國姓大橋"], // 學甲寮
["鹿耳門","溪埔仔","砂崙路口","土城國小","城東里","土城子","聖母廟"], // 土城子
["砂崙社區","砂崙里","青草里"] // 青草里
];
blue_24_stop_time_consume = [0,1,2,3,4,5,7,10,11,13,14,14,15,17,20,21,22,23,25,26,27,28,29,30,31,32,34,35,36,38,41,42,43,44,45,46,47,49,51,54,55,56,57,58,59,60,62,64,65];
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
blue_24_main_stop_name = ["安平<br />工業區","新光三越<br />新天地","永樂<br />市場","特力屋、<br />好市多","協成<br />社區","海尾","海東<br />國小","南天宮","國姓<br />大橋","聖母廟","青草里"];
blue_24_main_stop_time_consume = [0, 10, 15, 22, 26, 32, 35, 42, 51, 60, 65];
blue_24_important_stop = [0, 1, 6, 10]; // 安平工業區, 臺南市政府, 海東國小, 九塊厝
blue_24_time_go = [["7:50"],["8:20"],["11:00"],["12:20"],["14:10"],["17:25"],["17:50"],["18:25"]];
blue_24_time_return = [["6:00"],["6:15"],["6:35"],["9:00"],["10:00"],["12:40"],["13:25"],["15:40"]];