green_16_interval_name = ["新化","統一<br />花園","埤子頭","關廟","新豐","歸仁","六甲","高鐵<br />臺南站"];
green_16_interval_stop = [
["新化站","瓜瓜園生態館","農會前","清水寺","營盤後","洋子","竹子腳"], // 新化
["統一花園"], // 統一花園
["頂山子腳","加州新城","孤山子","埤頭里","埤子頭","下山子腳"], // 埤子頭
["下湖","悠然山莊","關廟交流道","過坑子","山西宮","關廟站","大亞公司"], // 關廟
["新豐高中(繞)","歸仁國中(繞)"], // 新豐
["歸仁交流道","修元堂","看東里","善化寺","歸仁市場","歸仁公所","崁仔頭","崁仔下","歸南","頂歸南","歸南派出所"], // 歸仁
["六甲(中正南路)","歸仁分局","成大歸仁校區"], // 六甲
["窩仔底","沙崙國中","高鐵臺南站"] // 高鐵臺南站
];
green_16_stop_time_consume = [0,1,2,3,4,4,5,2,4,5,7,8,10,12,13,15,17,19,20,21,25,25,22,23,24,25,25,26,27,28,29,30,31,32,34,36,38,39,40];
green_16_fare = [
[26],
[26,26],
[26,26,26],
[30,28,26,26],
[44,-1,30,26,26],
[42,-1,26,26,-1,26],
[54,-1,40,26,-1,26,26],
[62,-1,48,32,-1,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_16_main_stop_name = ["新化","統一花園","加州新城","山西宮","關廟","歸仁公所","高鐵<br />臺南站"];
green_16_main_stop_time_consume = [0, 5, 4, 19, 20, 25, 40];
green_16_important_stop = [0, 4, 6]; // 新化, 關廟, 高鐵臺南站
green_16_time_go = [["05:50",0,5,[1,'豐']],["07:00",0,4,[[2,5]]],["08:20",[1]],["10:00",0,4,[1]],["11:00",[1]],["12:00",0,4,[[2,5]]],
["13:00",0,4,[1]],["13:50",0,4,[1]],["14:00",[1]],["15:00",0,4,[1]],["16:00",0,4,[1]],["17:25",0,4,[[2,5]]],["18:55",[1]],
["19:10",0,4,[1]],["20:00",0,4,[1]],["21:00",0,4,[1]]];
green_16_time_return = [["06:15",5,0,[1,'豐']],["07:25",4,0,[[1,5]]],["09:00",[1]],["09:30",4,0,[1]],["10:20",4,0,[1]],["11:40",[1]],
["12:25",4,0,[[1,5]]],["13:20",4,0,[1]],["14:40",[1]],["15:20",4,0,[1]],["16:20",4,0,[1]],["17:50",4,0,[[1,5]]],["19:30",4,0,[1]],
["19:35",[1]],["20:20",4,0,[1]],["21:20",4,0,[1]]];