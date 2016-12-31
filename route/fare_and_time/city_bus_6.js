// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_6_main_stop_name = ["仁德<br />轉運站","虎尾寮<br />重劃區","南紡購物中<br />心(裕農路)","東門<br />國宅","臺南<br />一中","臺南<br />火車站","延平<br />郡王祠","永華<br />市政中心","鹽埕<br />國宅","新興<br />國宅","龍崗<br />國小"];
city_bus_6_main_stop_time_consume = [0, 5, 13, 23, 30, 35, 41, 50, 65, 70, 75];
city_bus_6_important_stop = [0, 2, 5, 7]; // 仁德轉運站, 南紡購物中心(裕農路), 臺南火車站, 永華市政中心
var start_stop = 0;
var end_stop = 9;
var tsmall = 2;
var TNFSH = 4;
var tainan_railway_station = 5;
var city_hall = 7;
city_bus_6_time_go = [["05:57",['W',[tsmall,-2]]],["06:15",['義']],["06:40",start_stop,end_stop,['義',[tsmall,5]]],["06:55",start_stop,end_stop,['W']],
["07:05",start_stop,end_stop,['H']],["07:35",['後',[TNFSH,5]]],["08:05",start_stop,end_stop],["08:45",start_stop,end_stop,['義',[tsmall,5]]],["09:25"],["10:05",start_stop,end_stop],["10:45"],
["11:25",['後',[TNFSH,5]]],["12:05",start_stop,end_stop],["12:45",start_stop,end_stop],["13:25",['義',[tsmall,5]]],["14:05",start_stop,end_stop],["14:45",[[tsmall,5]]],["15:20",start_stop,end_stop],
["15:50",start_stop,end_stop],["16:15"],["16:45"],["17:10",['後',[TNFSH,5]]],["17:30",['義',[tsmall,5]]],["18:05",start_stop,end_stop],["18:45",start_stop,end_stop,[[tsmall,5]]],
["19:20",start_stop,end_stop,['義',[tsmall,5]]],["20:00",start_stop,end_stop,['W']],["20:10",start_stop,end_stop,['H',[tsmall,-5]]],["20:40",start_stop,end_stop,['W']],["21:05",start_stop,end_stop,[[tsmall,-5]]]
];
city_bus_6_time_return = [["06:00",[[city_hall,-7,city_hall-1,-3]]],["06:25",['後',[city_hall,-5,TNFSH-1,5]]],["06:55",end_stop,start_stop],["07:20",['義',[tsmall-1,5]]],["08:05",end_stop,start_stop],
["08:40",['W']],["08:45",end_stop,start_stop,['H']],["09:20"],["10:05",end_stop,start_stop,['後',[TNFSH-1,5]]],["10:45",end_stop,start_stop],["11:20"],["12:05",end_stop,start_stop,['義',[tsmall-1,5]]],["12:40"],["13:20"],
["14:05",end_stop,start_stop],["14:35",end_stop,start_stop],["15:00",end_stop,start_stop],["15:20"],["15:50",end_stop,start_stop,['後',[TNFSH-1,5]]],["16:10"],["16:40",end_stop,start_stop,[[tainan_railway_station,5]]],
["17:05",end_stop,start_stop,[[tainan_railway_station,5]]],["17:40",['義',[tsmall-1,5]]],["18:15",['義',[tsmall-1,5]]],["18:50"],["19:20"],["20:15",end_stop,start_stop,[[city_hall,-5]]],["21:05",end_stop,start_stop,['義',[city_hall,-5]]]
];