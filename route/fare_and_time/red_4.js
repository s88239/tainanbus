red_4_interval_name = ["臺南","文化中心","後壁厝","保安","保安車站","臺南<br />都會公園"];
red_4_interval_stop = [
["臺南公園(公園路)","臺南火車站","縣知事官邸","東門圓環","胸腔病院","聯合報","大林新城","忠孝新村","大林"], // 臺南
["巴克禮公園","崇德路","市立醫院","東區電信局","第一分局","德高國小"], // 文化
["中華醫事科技大學","民安、德洋路口","仁德國中","後壁厝","三塊厝(仁德)","鉅全公司","蔦松腳","田厝"], // 後壁厝
["奇美公司","保安工業區","保安宮"], // 保安
["保安轉運站"], // 保安轉運站
["奇美博物館"] // 臺南都會公園
];
red_4_fare = [
[26],
[26,26],
[37,26,26],
[50,34,26,26],
[53,37,26,26,26],
[59,43,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_4_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","巴克禮<br />公園","中華醫事<br />科技大學","後壁厝","保安<br />轉運站","奇美<br />博物館"];
red_4_main_stop_time_consume = [0, 5, 17, 30, 35, 45, 50];
red_4_important_stop = [0, 1, 3, 5, 6]; // 臺南公園, 臺南火車站, 中華醫事科技大學, 保安轉運站, 奇美博物館
red_4_time_go = [["07:20"],["09:35"],["10:35"],["11:25"],["12:25"],["13:55"],["14:45"],["15:45"],["16:15"],["19:05"]];
red_4_time_return = [["08:35"],["10:55"],["11:45"],["12:35"],["13:35"],["15:05"],["15:55"],["16:55"],["17:25"],["20:00"]];