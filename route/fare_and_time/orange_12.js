orange_12_interval_name = ["麻豆","溪尾","善化","善化<br />轉運站","善化","亞蔬","南科","三舍","新市","新市<br />火車站","車行","蔦松","鹽行","南臺<br />科大","奇美<br />醫院","兵仔市","臺南"];
orange_12_interval_stop = [
["麻豆轉運站","圓環","電姬戲院","一商前","晉江里北","晉江里"], // 麻豆
["溪底寮","萬聖公","溪尾","善化國中","南溪尾"], // 溪尾
["什美","善化國小","善化","移民署","善化區公所","樹人路口"], // 善化
["善化轉運站"], // 善化轉運站
["善化高中","大成國小"], // 善化
["坐駕里","亞蔬中心"], // 亞蔬
["南科實中"], // 南科
["得力實業","佳和公司","三舍"], // 三舍
["復興路口","新市市場","新市","新市電信局"], // 新市
["新市火車站","新市火車站(省道)"], // 新市火車站
["車行"], // 車行
["統一馬口鐵","三新紡織","蔦松"], // 蔦松
["竹林里","鹽行","南鹽行","洲仔尾","大崎"], // 鹽行
["尚頂里","臺電配電中心"], // 南臺科大
["奇美醫院","大橋","臺南高工"], // 奇美醫院
["中華、振興路口","中華、中華二路口","中華路、勝華街口","兵仔市","四份子"], // 兵仔市
["光明街口","無障礙福利之家","成大醫院(小東路)","成大醫院(勝利路)","臺南公園(北門路)","臺南火車站","臺南轉運站"] // 臺南
];
orange_12_fare = [
[26],
[26,26],
[29,26,26], // 善化
[34,26,26,26],
[29,26,26,26,26], // 善化
[45,26,26,26,26,26],
[50,28,26,26,26,26,26],
[58,36,27,26,27,26,26,26],
[62,40,31,26,31,26,26,26,26],
[67,45,36,32,36,26,26,26,26,26],
[75,53,45,40,45,30,26,26,26,26,26],
[83,61,52,47,52,38,33,26,26,26,26,26],
[89,67,58,53,58,44,39,31,27,26,26,26,26],
[95,73,65,60,65,50,45,37,34,28,26,26,26,26],
[100,78,69,64,69,54,49,42,38,33,26,26,26,26,26],
[108,86,77,72,77,62,57,50,46,41,32,26,26,26,26,26],
[122,100,91,87,91,77,72,64,60,55,47,39,33,27,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_12_main_stop_name = ["麻豆<br />轉運站","溪尾","善化<br />轉運站","南科<br />實中","新市<br />火車站","鹽行","奇美<br />醫院","成大醫院<br />(小東路)","臺南<br />火車站","臺南<br />轉運站"];
orange_12_main_stop_time_consume = [0, 15, 23, 40, 52, 63, 68, 77, 80, 85];
orange_12_important_stop = [0, 2, 4, 6, 8, 9]; // 麻豆轉運站, 善化轉運站, 新市火車站, 奇美醫院, 臺南火車站, 臺南轉運站
orange_12_time_go = [["06:30"],["06:40"],["08:30"],["10:30"],["13:30"],["16:55"],["17:25"],["18:30"],["19:30"]];
orange_12_time_return = [["06:10"],["07:25"],["08:25"],["09:25"],["11:25"],["14:25"],["16:20"],["17:35"],["21:10"]];