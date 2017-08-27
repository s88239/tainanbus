red_10_interval_name = ["花園","關廟","歸仁","仁德","太子廟","大灣","永康","二王","奇美<br />醫院"];
red_10_interval_stop = [
["關廟轉運站","北勢里活動中心"], // 花園
["關廟公所","北勢里","得玉興書局","中山路","關廟國中","大亞公司"], // 關廟
["歸仁交流道","修元堂","看東里","善化寺","歸仁文化中心","歸仁市場","歸仁公所","後市","姓李仔","南保","南興里","上帝廟"], // 歸仁
["貝汝流通","林仔","義林一街口","慈濟臺南分會","鐘厝","仁義里","仁德","仁德公所","一甲廟路口"], // 仁德
["漢平公司","土庫","太子廟"], // 太子廟
["大灣","大灣天公廟","下巷仔","楊慶祥中醫診所","永大公園","網寮里","永大夜市"], // 大灣
["國通汽車公司","永康(永大路)","永大路埔聖街口","埔園里","永康火車站","自強路口","永康農會","臺南大學附中"], // 永康
["二王","康福新城","中興","南工社區","臺南高工"], // 二王
["大橋","奇美醫院"] // 奇美醫院
];
red_10_fare = [
[26],
[26,26],
[26,26,26],
[34,29,26,26],
[43,37,26,26,26],
[46,41,26,26,26,26],
[67,62,47,33,26,26,26],
[72,67,52,38,29,26,26,26],
[83,77,62,48,40,37,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_10_main_stop_name = ["關廟<br />轉運站","關廟國中","歸仁公所","仁德","大灣","永康<br />火車站","奇美醫院"];
red_10_main_stop_time_consume = [0, 8, 13, 23, 30, 45, 65];
red_10_important_stop = [0, 2, 5, 6]; // 關廟轉運站,　歸仁公所, 永康火車站, 奇美醫院
red_10_time_go = [["06:20"],["06:25",['繞']],["07:20",['繞']],["09:00"],["10:20",['繞']],["12:10"],["14:00"],["14:30"],["15:10"],["17:10"],["18:40"]];
red_10_time_return = [["06:10"],["07:40"],["09:00",['繞']],["10:20"],["12:10",['繞']],["14:00"],["15:10"],["16:10"],["17:10"],["17:30",['繞']],["18:30"]];