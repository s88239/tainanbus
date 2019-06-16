brown_2_interval_name = ["新營","茄苳腳","鹽水","鹽水<br />上帝廟","汫水國小","牛稠仔","下中"];
brown_2_interval_stop = [ // 2017.01.07 checked
["新營站","中營興業里","圓環(第一銀行)","新營醫院","民治市政中心","新營高工","中正世家","電力公司","新營體育場","育德工家","新北里","營新醫院","統聯客運"], // 新營
["茄苳腳","新營工業區","明達中學"], // 茄苳腳
["竹圍尾","橋南里","護庇宮","鹽水","南榮科大"], // 鹽水
["鹽水上帝廟","蔦松腳"], // 鹽水上帝廟
["汫水國小"], // 汫水國小
["鹽水國小","鹽水武廟","岸內","義稠里","牛稠仔"], // 牛稠仔
["二莊","樹仔腳","下中"] // 下中
];
brown_2_fare = [
[26],
[26,26],
[35,26,26],
[41,26,26,26],
[47,26,26,26,26],
[67,41,32,26,26,26],
[74,48,39,34,27,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_2_main_stop_name = ["新營站","民治<br />市政中心","統聯客運","鹽水","鹽水<br />上帝廟","汫水國小","鹽水國小","下中"];
brown_2_main_stop_time_consume = [0, 7, 16, 23, 28, 33, 39, 46];
brown_2_important_stop = [0, 3, 7]; // 新營站, 鹽水, 下中
var Sinying = 0; // 新營站
var Ubus = 2; // 統聯客運
var Yanshuei_Jade_Emperor_Temple = 4; // 鹽水上帝廟
var Jingshui_Elementary_School = 5; // 汫水國小
var Yanshuei_Elementary_School = 6; // 鹽水國小
brown_2_time_go = [["06:50",[Yanshuei_Jade_Emperor_Temple,[Yanshuei_Jade_Emperor_Temple,-3]]],["10:15"],["12:10"],["15:15"]];
brown_2_time_return = [["07:40",[[Yanshuei_Elementary_School,-1,Jingshui_Elementary_School,-1,Ubus,2,Sinying,-1]]],
["11:10",[[Yanshuei_Elementary_School,-1,Jingshui_Elementary_School,-1,Ubus,2,Sinying,-1]]],
["13:05",[[Yanshuei_Elementary_School,-1,Jingshui_Elementary_School,-1,Ubus,2,Sinying,-1]]],
["16:10",[[Yanshuei_Elementary_School,-1,Jingshui_Elementary_School,-1,Ubus,2,Sinying,-1]]]];