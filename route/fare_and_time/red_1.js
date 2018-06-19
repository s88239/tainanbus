red_1_interval_name = ["臺南","後甲","太子廟","大人廟","媽祖廟","歸仁","關廟","花園"];
red_1_interval_stop = [
["臺南公園(公園路)","臺南火車站","縣知事官邸","東門圓環","東門教會","東門城","龍山寺","衛生局"], // 臺南
["妙善寺","南紡購物中心(裕農路)","後甲","慈幼高工","國道南工處"], // 後甲
["棉新紡織","明直宮","太子廟","土井仔","六甲店"], // 太子廟
["東春紡織","大人廟","西勢仔"], // 大人廟
["媽廟北","媽祖廟","圳頭"], // 媽祖廟
["七甲","富強社區","八甲","新豐高中","歸仁國中","歸仁區公所","歸仁市場","歸仁","看東里","修元堂","歸仁交流道"], // 歸仁
["大亞公司","關廟國中","關廟市場"], // 關廟
["北勢里","花園","關廟轉運站"] // 花園
];
red_1_fare = [
[26],
[26,26],
[26,26,26],
[31,26,26,26],
[38,26,26,26,26],
[48,32,26,26,26,26],
[59,43,35,28,26,26,26],
[65,48,40,34,27,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
red_1_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","太子廟","大人廟","媽祖廟","歸仁<br />區公所","關廟國中","關廟<br />轉運站"];
red_1_main_stop_time_consume = [0, 5, 25, 30, 35, 40, 50, 55];
red_1_important_stop = [0, 1, 5, 7]; // 臺南公園, 臺南火車站, 歸仁區公所, 關廟轉運站
red_1_time_go = [["06:25"],["07:00"],["13:10"],["18:20"],["21:45"]];
red_1_time_return = [["06:10"],["10:00"],["12:05"],["15:00"],["17:00"]];