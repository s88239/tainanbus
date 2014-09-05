// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_0_main_stop_name = ["臺南<br />火車站","臺南公園<br />(公園路)","民德國中","花園夜市","永華市政<br />中心(府前路)","水萍塭<br />公園","體育公園","誠品書局","長榮、<br />大學路口","臺南<br />火車站"];
city_bus_0_interval_stop = [
["臺南火車站","成功路","公園國小","臺南公園(公園路)","公園北路口","公園北路","民德國中",
"大潤發","花園夜市","臨安海安路口","金華成功路口","協進國小(金華路)","中國城(金華路)",
"南華街口","生活美學館","永華市政中心(府前路)","二二八公園","南台別院","家樂福","文南路口",
"水萍塭公園","客家文化會館","夏林路五妃街口","健康西門路口","家齊女中","台南高商","體育公園",
"竹溪寺(健康路)","誠品書局","勝利國小","長榮女中","長榮東寧路口","長榮大學路口","成大自強校區",
"長榮小東路口","長榮東豐路口","長榮路四段","中樓","開元國小","臺南二中","臺南公園(北門路)","臺南火車站"]
];
city_bus_0_stop_time_consume = [0,2,4,5,6,7,8,9,10,11,12,14,15,17,19,20,20,21,22,22,23,24,24,25,26,27,28,31,33,35,36,37,38,40,41,42,43,45,46,47,48,50]; // unreliable
city_bus_0_main_stop_time_consume = [0, 5, 8, 10, 20, 23, 28, 33, 38, 50];
//city_bus_0r_main_stop_time_consume = [0, 5, 8, 10, 30, 33, 38, 43, 48, 60];
city_bus_0_important_stop = [0, 3, 9]; // 臺南火車站, 花園夜市, 臺南火車站
city_bus_0_time_go = [["06:00",['W',3]],["06:30",[3]],["06:50",[3]],["07:15",[3]],["07:40",[3]],["08:10",[3]],["08:50",[3]],
["09:30",[3]],["10:10",[3]],["10:50",[3]],["11:30",[3]],["12:10",[3]],["12:40",[3]],["13:10",[3]],["13:40",[3]],
["14:10",[3]],["14:50",[3]],["15:20",[3]],["16:00",[3]],["16:30",[3]],["17:10"],["17:40"],["18:20"],["19:00"],
["19:40"],["20:20"],["21:00"],["21:30"],["22:00",['正',3]],["22:10",['夜']],["22:40",['夜']],["23:10",['夜']]
];
city_bus_0_time_return = [["06:00",['W',3]],["06:20",[3]],["06:45",[3]],["07:10",[3]],["07:35",[3]],["08:00",[3]],["08:40",[3]],
["09:20",[3]],["10:100",[3]],["10:40",[3]],["11:20",[3]],["12:00",[3]],["12:30",[3]],["13:00",[3]],["13:30",[3]],
["14:00",[3]],["14:40",[3]],["15:10",[3]],["15:50",[3]],["16:20",[3]],["17:00"],["17:30"],["18:10"],["18:50"],
["19:30"],["20:10"],["20:50"],["21:20"],["22:00"],["22:30",['夜']],["23:10",['夜']]
];