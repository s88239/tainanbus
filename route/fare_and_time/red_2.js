red_2_interval_name = ["臺南","仁德","後壁厝","上崙子","六甲","歸仁","關廟"];
red_2_interval_stop = [
["臺南站","新光三越新天地","小西門(大億麗緻)","西門、友愛街口","中正、西門路口","林百貨(中正路)","中山、民權路口",
"臺南公園(公園路)","臺南火車站","東門圓環","東門教會","東門城","龍山寺","富強市場","東門路","虎尾寮","富農街口"], // 臺南
["嘉南療養院","仁德交流道","仁德","土庫仔","中正路(仁德)"], // 仁德
["崙仔尾","北保仔","後壁厝","三塊厝","鉅全公司","蔦松腳","田厝"], // 後壁厝
["上崙子"], // 上崙子
["社尾","六甲"], // 六甲
["歸南派出所","頂歸南","歸南","崁仔下","崁仔頭","歸仁公所","歸仁市場","歸仁","看東里","修元堂","歸仁交流道"], // 歸仁
["大亞公司","關廟"], // 關廟
];
red_2_interval_time_consume = [10, 25, 45, 55, 60, 65, 70];
red_2_fare = [
[26],
[26,26],
[30,26,26],
[40,26,26,26],
[47,26,26,26,26],
[55,32,26,26,26,26],
[67,44,36,27,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_2_main_stop_name = ["臺南站","臺南公園<br />(公園路)","臺南<br />火車站","仁德","上崙仔","歸仁公所","關廟"];
red_2_main_stop_time_consume = [0, 5, 10, 27, 38, 49, 55];
red_2_important_stop = [0, 2, 5, 6]; // 臺南站, 臺南火車站, 歸仁公所, 關廟
red_2_time_go = [["7:15",[1]],["8:55",1,6],["12:25",1,6],["17:40",1,6],["21:25",1,6]];
red_2_time_return = [["6:05",[1]],["7:45",6,1],["13:45",6,1],["17:10",6,1],["18:45",6,1]];