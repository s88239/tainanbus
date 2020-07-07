green_13_interval_name = ["新化","虎頭埤","茄苓崁","大坑里","大谷山","岡林","內庄子","睦光","左鎮"];
green_13_interval_stop = [
["新化站","新化國中"], // 新化
["太平洋社區","蜜月新城","佛顓寺","東成醬油","桃源新城","虎頭埤口"], // 虎頭埤
["埤後","口埤","興大林場","赤峰崎","筍廠","茄苓崁","新化慈惠堂","將軍山","風窗"], // 茄苓崁
["那拔寮","大坑國小","大坑里"], // 大坑里
["南屏農場","大坑休閒農場","烏樹林","龍行寺","大谷山","慈蓮寺"], // 大谷山
["旗來山","岡林","岡林教會","大丘園","岡林橋","紅柿腳","外岡林","大坪崎","水流東"], // 岡林
["下崁子","內庄子","龜潭"], // 內庄子
["內庄路口","睦光","公館"], // 睦光
["左鎮國中","左鎮區公所"] // 左鎮
];
green_13_fare = [
[26],
[26,26],
[26,26,26],
[32,26,26,26],
[38,27,26,26,26],
[44,33,26,26,26,26],
[51,40,30,26,26,26,26],
[61,50,39,29,26,26,26,26],
[66,55,44,34,28,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_13_main_stop_name = ["新化","虎頭埤口","興大林場","大坑<br />休閒農場","大谷山","慈蓮寺","岡林","內庄路口","左鎮<br />區公所"];
green_13_main_stop_time_consume = [0, 6, 9, 17, 19, 20, 25, 38, 45];
green_13_important_stop = [0, 2, 5, 8]; // 新化, 興大林場, 慈蓮寺, 左鎮區公所
green_13_time_go = [["05:50"],["06:10",0,5,['W']],["08:20"],["09:00"],["10:00",['W']],["10:45"],["11:30"],["13:00",['W']],["15:10"],["17:00"],["18:10"]];
green_13_time_return = [["06:30",5,0,['W']],["06:45"],["09:05"],["09:45"],["10:45",['W']],["11:30"],["12:15"],["13:45",['W']],["15:55"],["17:45"],["18:55"]];