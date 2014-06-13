brown_10_interval_name = ["新營","茄苳腳","鹽水","後寮","番子寮","孫厝寮","羊稠厝","頂洲","北紅茄萣","新渡子頭","渡子頭","南鯤鯓","雙春"];
brown_10_interval_stop = [
["新營站","圓環","三民路口","齊普","新營漁市場","太子路口","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","鹽水","地政事務所","月津國小"], // 鹽水
["後寮"], // 後寮
["番子寮"], // 番子寮
["孫厝寮","南孫厝寮"], // 孫厝寮
["羊稠厝","頑皮世界"], // 羊稠厝
["頂洲"], // 頂洲
["北紅茄萣"], // 北紅茄萣
["新渡子頭"], // 新渡子頭
["渡子頭"], // 渡子頭
["南鯤鯓","橋北"], // 南鯤鯓
["永春","雙春"] // 雙春
];
brown_10_stop_time_consume = [0,1,3,5,7,8,10,11,13,15,16,18,20,22,24,26,27,29,31,32,33,34,35,36,37,36,37,38,40,43,45,46,47,49,50,
52,53,54,55,56,57,58,60]; // fake time
brown_10_fare = [ // fake fare
[26],
[26,26],
[26,26,26],
[33,26,26,26],
[39,26,26,26,26],
[46,31,26,26,26,26],
[50,34,26,26,26,26,26],
[52,36,27,26,26,26,26,26],
[55,39,30,26,26,26,26,26,26],
[59,43,34,26,26,26,26,26,26,26],
[73,57,48,41,34,27,26,26,26,26,26],
[82,67,57,50,43,36,33,30,27,26,26,26],
[89,73,64,57,50,43,39,37,34,31,26,26,26],
[100,84,75,68,61,54,50,48,45,42,27,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_10_main_stop_name = ["新營","統聯<br />客運","鹽水","頑皮世界","南鯤鯓","雙春"];
brown_10_main_stop_time_consume = [0, 8, 18, 35, 51, 55];
brown_10_important_stop = [0, 2, 4, 5]; // 新營, 鹽水, 南鯤鯓, 雙春
brown_10_time_go = [["09:45"],["13:25"],["17:40"]];
brown_10_time_return = [["06:00"],["10:40"],["14:20"]];