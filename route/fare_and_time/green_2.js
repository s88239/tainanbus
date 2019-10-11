green_2_interval_name = ["新化","新市<br />火車站","新市","三舍","南科","亞蔬<br />中心","善化","善化<br />轉運站","小新營","山上","玉峰里"];
green_2_interval_stop = [
["新化站","國泰大樓","水利會","工務段","達興公司","新化地政事務所"], // 新化
["永新社區","遠東科技大學","新市火車站"], // 新市火車站
["新市電信局","新市","新市市場","復興路口"], // 新市
["三舍","佳和公司","得力實業"], // 三舍
["南科實中"], // 南科
["亞蔬中心","坐駕里"], // 亞蔬中心
["中正路","善化區公所","樹人路口"], // 善化
["善化轉運站","善化高中","大成陸橋"], // 善化轉運站
["小新里","磚窯","善化啤酒廠","士宏新村"], // 小新營
["北勢洲","宏遠紡織","苦瓜寮","山上加油站","山上區公所","山上市場","農會托兒所","山上派出所","臺南水道博物館","新庄(玉峰)"], // 山上
["牛稠埔(玉峰)","中坑(玉峰)","玉峰里"] // 玉峰里
];
green_2_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[31,26,26,26,26],
[36,26,26,26,26,26],
[43,29,26,26,26,26,26],
[46,33,27,26,26,26,26,26],
[56,42,37,33,26,26,26,26,26],
[73,59,54,50,42,37,30,26,26,26],
[85,72,66,62,55,50,43,39,30,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_2_main_stop_name = ["新化","新市<br />火車站","新市","南科<br />實中","亞蔬<br />中心","善化<br />轉運站","善化<br />高中","善化<br />啤酒廠","宏遠<br />紡織","山上<br />市場","臺南水道<br />博物館","玉峰里"];
green_2_main_stop_time_consume = [0, 10, 13, 24, 27, 40, 42, 49, 55, 60, 63, 70];
green_2_important_stop = [0, 1, 3, 5, 9, 10]; // 新化, 新市火車站, 南科實中, 善化轉運站, 山上市場, 臺南水道博物館
green_2_time_go = [["05:50"],["07:50",0,9],["13:00",0,9],["16:45"],["20:10",0,9]];
green_2_time_return = [["07:00"],["08:50",9,0],["14:00",9,0],["18:10"],["21:10",9,0]];