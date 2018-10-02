orange_interval_name = ["佳里","子龍廟","麻豆","溪尾","善化","善化<br />轉運站","小新營","大內","二溪","走馬瀨","玉井"];
orange_interval_stop = [
["佳里站","更寮","彼緹娃蛋糕工廠","大潤發"], // 佳里
["子龍里","佳里興路口","子龍廟"], // 子龍廟
["麻豆口","新樓醫院","麻豆轉運站","圓環","電姬戲院","麻豆分局","巷口","興國路口","新生南路口"], // 麻豆
["溪底寮","萬聖公","溪尾","善化國中","南溪尾"], // 溪尾
["什美","善化國小","善化","移民署","善化區公所","樹人路口"], // 善化
["善化轉運站","善化高中","大成陸橋"], // 善化轉運站
["小新里","磚窯","善化啤酒廠","士宏新村","北勢洲橋"], // 小新營
["大內區公所","大內分駐所","大內","內庄朝天宮","大內口","大內生命園區","後堀"], // 大內
["二溪橋頭","曲溪","南瀛天文園區","二溪","二重溪","大坑橋","大內山莊","大匏崙","二溪交流道"], // 二溪
["走馬瀨","走馬瀨口","厝尾","豐里"], // 走馬瀨
["玉井國小","玉井站"] // 玉井
];
orange_fare = [
[26],
[26,26],
[26,26,26],
[43,31,26,26],
[52,40,29,26,26],
[57,44,34,26,26,26],
[66,54,43,26,26,26,26],
[81,69,58,38,29,26,26,26],
[93,81,71,50,42,37,27,26,26],
[114,102,91,71,62,57,48,33,26,26],
[128,116,105,85,76,72,62,47,35,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_main_stop_name = ["佳里","新樓醫院","麻豆<br />轉運站","善化","善化<br />轉運站","大內","南瀛<br />天文園區","走馬瀨","玉井"];
orange_main_stop_time_consume = [0, 12, 15, 30, 35, 50, 60, 73, 80];
orange_important_stop = [0, 2, 4, 8]; // 佳里, 麻豆轉運站, 善化轉運站, 玉井
orange_time_go = [["05:55"],["06:25"],["06:55"],["07:55"],["08:55"],["09:55"],["10:55"],["11:55"],["12:55"],
["13:55"],["14:55"],["16:05"],["16:45"],["17:15"],["17:55"],["18:55"],["19:55"],["21:25"]
];
orange_time_return = [["05:55"],["06:25"],["06:55"],["07:55"],["08:55"],["09:55"],["10:55"],["11:55"],["12:55"],
["13:55"],["14:55"],["15:55"],["16:55"],["17:25"],["17:55"],["18:55"],["19:55"],["21:25"]
];