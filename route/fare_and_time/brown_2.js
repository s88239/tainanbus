brown_2_interval_name = ["新營","茄苳腳","鹽水","牛稠子","下中"];
brown_2_interval_stop = [ // 2015.09.30 checked
["新營站","圓環(第一銀行)","三民路口","民治市政中心","新營高工","中正世家","電力公司","新營體育場","新北里","營新醫院","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","鹽水","南榮科大","汫水國小","護安宮","汫水里","鹽水國小","武廟"], // 鹽水
["岸內","義稠里","牛稠子"], // 牛稠子
["二莊","樹仔腳","下中"] // 下中
];
brown_2_fare = [
[26],
[26,26],
[34,26,26],
[39,26,26,26],
[49,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_2_main_stop_name = ["新營","統聯客運","鹽水","洪水國小","下中"];
brown_2_main_stop_time_consume = [0, 12, 22, 29, 30];
brown_2_important_stop = [0, 2, 4]; // 新營, 鹽水, 下中
var skip_stop = 3;
brown_2_time_go = [["07:50",[[skip_stop+1,14]]],["09:50",[[skip_stop+1,14]]],["13:50",[skip_stop]],["15:50",[skip_stop]]];
brown_2_time_return = [["08:40",[[skip_stop,12,skip_stop-1,2]]],["10:40",[[skip_stop,12,skip_stop-1,2]]],["14:30",[skip_stop]],["16:30",[skip_stop]]];