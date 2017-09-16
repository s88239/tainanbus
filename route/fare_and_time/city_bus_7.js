// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_7_main_stop_name = ["臺南<br />火車站","林百貨<br />(中正路)","小北<br />商場","鄭子寮","和順<br />國宅","海東<br />國小","十二佃","中信金融<br />管理學院","康寧<br />大學","台糖<br />安南學苑"];
city_bus_7_main_stop_time_consume = [0, 6, 14, 20, 27, 37, 43, 48, 50, 50];
city_bus_7_important_stop = [0, 2, 5, 7, 9]; // 臺南火車站, 小北商場, 海東國小, 興國管理學院, 台糖安南學苑
var start_stop = 0; // 臺南火車站
var end_stop = 5; // 海東國小
city_bus_7_time_go = [["07:00",['<span style="color: blue;">學</span>']],["07:30"],["09:00"],["10:00"],["11:10"],["12:30"],["13:30"],["14:05"],["15:10"],
["16:15"],["17:10"],["17:50"],["19:30"],["20:00",['<span style="color: red;">日</span>']],["20:15",['<span style="color: green;">日停</span>']],["20:30",['<span style="color: red;">日</span>']],["21:45"]
];
city_bus_7_time_return = [["06:20",end_stop,start_stop,['<span style="color: blue;">學</span>']],["06:20",['<span style="color: blue;">學</span>']],["08:10",['<span style="color: blue;">學</span>']],["08:40"],["10:05"],["11:00"],["12:20"],["13:30"],["14:40"],
["15:20"],["16:20"],["17:30"],["18:25"],["19:00"],["20:35"],["21:00",['<span style="color: red;">日</span>']],["21:15",['<span style="color: green;">日停</span>']],["21:30",['<span style="color: red;">日</span>']],["22:35"]
];