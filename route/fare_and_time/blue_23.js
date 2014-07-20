blue_23_interval_name = ["安平<br />工業區","臺南","文元寮","海尾","本淵寮","十二佃","溪南寮","學甲寮","永吉","三股","十份里","金德興","九塊厝"];
blue_23_interval_stop = [
["安平工業區","安平港","管理中心","香腸博物館"], // 安平工業區
["文華社區","臺南市政府","水萍塭公園","永華站","小西門(大億麗緻)","西門、友愛街口","西門、民權路口","西門圓環","永樂市場","協和里","文賢國中","文賢路"], // 臺南
["特力屋、好市多","文元寮","溪子墘社區","協成社區","中華社區","海東橋"], // 文元寮
["海尾前","海東里","南海尾","海尾"], // 海尾
["安南國中","海東國小","仁安路","本原街口"], // 本淵寮
["十二佃","南天宮","十二佃橋"], // 十二佃
["新吉庄","公塭","溪南寮"], // 溪南寮
["學甲寮","學東廟","國聖大橋"], // 學甲寮
["永吉"], // 永吉
["東三股","三股"], // 三股
["十份里"], // 十份里
["金德興"], // 金德興
["東九塊厝","九塊厝"] // 九塊厝
];
blue_23_stop_time_consume = [0,1,2,4,6,7,9,10,11,13,14,14,15,17,20,21,22,23,25,26,27,28,29,30,31,32,34,35,36,38,41,42,43,44,45,46,47,49,51,54,55,57,60,63,64,65];
blue_23_fare = [
[26],
[26,26],
[26,26,26],
[37,26,26,26],
[41,29,26,26,26],
[48,36,26,26,26,26],
[55,43,29,26,26,26,26],
[60,48,34,26,26,26,26,26],
[71,59,46,34,30,26,26,26,26],
[76,64,51,39,35,28,26,26,26,26],
[81,69,56,44,40,34,26,26,26,26,26],
[85,73,60,48,44,37,30,26,26,26,26,26],
[89,77,63,51,47,41,34,29,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
//blue_23_main_stop_name = ["安平<br />工業區","臺南<br />市政府","永樂<br />市場","特力屋、<br />好市多","協成<br />社區","海尾","海東<br />國小","南天宮","國聖<br />大橋","三股","九塊厝"];
//blue_23_main_stop_time_consume = [0, 7, 15, 22, 26, 32, 35, 42, 51, 57, 65];
//blue_23_important_stop = [0, 1, 6, 10]; // 安平工業區, 臺南市政府, 海東國小, 九塊厝
blue_23_selected_stop = [0,5,12,16,19,25,27,31,38,41,45]; // 安平工業區, 臺南市政府, 永樂市場, 特力屋、好市多, 協成社區, 海尾, 海東國小, 南天宮, 國聖大橋, 三股, 九塊厝
blue_23_important_stop = [0, 5, 27, 45]; // 安平工業區, 臺南市政府, 海東國小, 九塊厝
blue_23_time_range = [null,null,null]; // start, end, targe_stop_name
blue_23_time_go = [["09:25"],["13:00"],["15:00"]];
blue_23_time_return = [["10:55"],["14:40"],["16:30"]];