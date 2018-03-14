yellow_6_1_interval_name = ["新營","埤寮","新港東","頂長<br />短樹","菁寮","後壁<br />區公所","大路墘","土溝<br />代天府","顯濟宮","小南海<br />風景區","林初埤","大排竹","白河站"];
yellow_6_1_interval_stop = [ // 2015.7.5 checked
["新營站","三商","圓環(第一銀行)","文化中心","新營公所","新營高工","中正世家"], // 新營
["電力公司","許丑","埤寮"], // 埤寮
["新港東"], // 新港東
["下長短樹","頂長短樹"], // 頂長短樹
["菁寮","菁寮國小","菁豐里"], // 菁寮
["後壁火車站","後壁區公所","後壁里","後壁國小"], // 後壁區公所
["大路墘"], // 大路墘
["土溝代天府","土溝美術館","土溝鄉情客廳","土溝里"], // 土溝代天府
["永安國小","顯濟宮"], // 顯濟宮
["小南海風景區","將軍埤","開天府","水岸木棧道","永安國小","土溝里"], // 小南海風景區
["林初埤","海豐厝"], // 林初埤
["北大排竹","大排竹","賞蓮大道北站","賞蓮大道南站"], // 大排竹
["白河農會","白河站"] // 白河站
];
yellow_6_1_fare = [
[26],
[26,26],
[26,26,26],
[28,26,26,26],
[33,26,26,26,26],
[48,35,30,26,26,26],
[53,41,35,26,26,26,26],
[58,45,40,30,26,26,26,26],
[66,53,48,38,26,26,26,26,26],
[72,60,55,44,40,26,26,26,26,26],
[91,79,74,63,59,43,38,34,26,26,26],
[98,86,81,70,65,50,45,40,32,26,26,26],
[107,94,89,79,74,59,54,49,41,34,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_6_1_main_stop_name = ["新營","電力公司","菁寮","後壁<br />火車站","土溝<br />代天府","小南海<br />風景區","林初埤","白河站"];
yellow_6_1_main_stop_time_consume = [0, 6, 20, 28, 35, 44, 55, 63];
yellow_6_1_important_stop = [0, 3, 7]; // 新營, 後壁區公所, 白河站
yellow_6_1_time_go = [["07:30"],["08:00",['加']],["08:30"],["09:00",['加']],["09:30",['加']],["10:10"],["10:40",['加']],["11:10"],["12:00",['加']],["12:30",['加']],["13:10"],["13:40",['加']],["14:10"],["14:40",['加']],["15:10",['加']],["15:40"],["16:10",['加']],["16:40"]];
yellow_6_1_time_return = [["08:40"],["09:10",['加']],["09:40"],["10:10",['加']],["10:40",['加']],["11:20"],["11:50",['加']],["12:20"],["13:10",['加']],["13:40",['加']],["14:20"],["14:50",['加']],["15:20"],["15:50",['加']],["16:20",['加']],["16:50"],["17:20",['加']],["17:50"]];