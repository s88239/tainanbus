red_3_interval_name = ["臺南","臺南<br />航空站","臺南<br />都會公園","保安<br />車站","嘉南科大","保安","中洲","大潭","武東","高鐵<br />臺南站","六甲","歸仁","關廟"];
red_3_interval_stop = [
["臺南公園(公園路)","臺南火車站","中山、民權路口","開山路","延平郡王祠","聯合報","大林新城","忠孝新村","大林","亞伯大飯店","生產路口","大同、機場路口"], // 臺南
["牛稠仔","臺南空軍基地","臺南航空站"], // 臺南航空站
["臺南都會公園","奇美博物館"], // 臺南都會公園
["十鼓文化村","保安轉運站"], // 保安轉運站
["嘉南藥理大學"], // 嘉南藥理科技大學
["保安"], // 保安
["中生里","中洲","中洲派出所"], // 中洲
["依仁國小","南大潭","大潭","大潭國小"], // 大潭
["武東"], // 武東
["臺南監獄","高鐵臺南站","沙崙國中","窩仔底"], // 高鐵臺南站
["成大歸仁校區","六甲三路口"], // 六甲
["上帝廟","南興里","南保","姓李仔","後市","歸仁公所","歸仁市場","善化寺","看東里","修元堂","歸仁交流道"], // 歸仁
["大亞公司","關廟站"] // 關廟
];
red_3_stop_time_consume = [0,5,7,9,10,12,14,15,16,17,17,18,19,19,20,23,25,27,28,31,34,35,36,37,38,39,40,41,42,43,46,48,50,60,62,
65,66,67,68,69,70,71,71,72,73,74,74,75];
red_3_fare = [
[26],
[26,26],
[30,26,26],
[34,26,26,26],
[39,26,26,26,26],
[43,26,26,26,26,26],
[51,27,26,26,26,26,26],
[58,34,28,26,26,26,26,26],
[60,36,30,26,26,26,26,26,26],
[68,43,38,34,29,26,26,26,26,26],
[76,52,46,42,37,32,26,26,26,26,26],
[93,69,63,59,54,50,42,35,33,26,26,26],
[104,80,74,70,65,60,53,46,44,36,28,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_3_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","臺南<br />航空站","奇美<br />博物館","保安<br />轉運站","嘉南藥理<br />科技大學","南大潭","高鐵<br />臺南站","歸仁公所","關廟"];
red_3_main_stop_time_consume = [0, 5, 20, 25, 28, 31, 39, 46, 70, 75];
red_3_important_stop = [0, 1, 3, 4, 7, 9]; // 臺南公園, 臺南火車站, 奇美博物館, 保安轉運站, 高鐵臺南站, 關廟
red_3_time_go = [["06:05"],["07:05"],["08:05"],["10:05"],["12:05"],["14:05"],["16:05"],["17:05"],["18:05"],["19:05"]];
red_3_time_return = [["05:50"],["07:20"],["08:40"],["10:40"],["12:40"],["14:40"],["16:40"],["17:40"],["18:40"],["19:40"]];