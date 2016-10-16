yellow_3_interval_name = ["新營","人和里","柳營","路東","小腳腿","重溪里","大腳腿","山仔腳","江南<br />渡假村","二重溪","旭山里","瓦窯","果毅後","新厝","德元埤"];
yellow_3_interval_stop = [ // 2016.08.01 update
["新營站","第三市場","新營國小","圓環(第一銀行)","新進路口","真武殿","南光中學"], // 新營
["人和里"], // 人和里
["士林里","柳營","柳營代天院","柳營火車站","鳳和中學"], // 柳營
["柳營國中","路東"], // 路東
["柳科管理中心","小腳腿"], // 小腳腿
["重溪里","小腳腿活動中心","順天府","篤農里"], // 重溪里
["大腳腿","大腳腿路口"], // 大腳腿
["山仔腳","旭山農會","新吉庄"], // 山仔腳
["江南渡假村"], // 江南渡假村
["二重溪"], // 二重溪
["旭山里"], // 旭山里
["東瓦窯","瓦窯"], // 瓦窯
["果毅國小","果毅後","果毅後廟前"], // 果毅後
["新厝"], // 新厝
["德元埤"] // 德元埤
];
yellow_3_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[35,27,26,26,26],
[37,29,26,26,26,26],
[45,37,32,26,26,26,26],
[53,44,39,28,26,26,26,26],
[55,47,42,31,26,26,26,26,26],
[61,53,47,36,26,26,26,26,26,26],
[62,53,48,37,26,26,26,26,26,26,26],
[64,56,50,40,29,27,26,26,26,26,26,26],
[68,60,54,44,33,31,26,26,26,26,26,26,26],
[74,66,61,50,39,37,29,26,26,26,26,26,26,26],
[79,70,65,55,44,42,34,27,26,26,26,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_3_main_stop_name = ["新營","柳營","柳營<br />火車站","小腳腿","山仔腳","二重溪","果毅後<br />廟前","德元埤"];
yellow_3_main_stop_time_consume = [0, 8, 10, 17, 25, 30, 38, 44];
yellow_3_important_stop = [0, 2, 6, 7]; // 新營, 柳營火車站, 果毅後廟前, 德元埤
var start_stop = 0; // 新營
var end_stop = 6; // 果毅後廟前
yellow_3_time_go = [["05:50",start_stop,end_stop,[[1,-2]]],["08:20",['H']],["09:20"],["10:20",['H']],["12:20"],["13:20",['H']],["14:35"],["16:20",['H']],["17:15",start_stop,end_stop,[[1,4,2,1,3,4,4,5,5,1]]]];
yellow_3_time_return = [["06:30",end_stop,start_stop,[[3,4,1,2,0,4]]],["09:10",['H']],["10:10"],["11:10",['H']],["13:10"],["14:10",['H']],["15:25"],["17:10",['H']],["18:15",end_stop,start_stop,[[0,2]]]];