green_7_interval_name = ["新化","新市<br />火車站","新市","大營里","大社"];
green_7_interval_stop = [
["新化站","國泰大樓","水利會","工務段","達興公司","新化地政事務所"], // 新化
["永新社區","遠東科技大學","新市火車站"], // 新市火車站
["新市電信局","新市","新市市場","新市國小","新市國中"], // 新市
["豐榮","東雲公司","濟德宮","營尾","大營里","營頂","大營路口"], // 大營里
["大社口","大社"] // 大社
];
green_7_stop_time_consume = [0,1,2,3,4,5,6,8,10,12,13,15,16,17,18,19,20,20,21,21,22,23,25];
green_7_fare = [
[26],
[26,26],
[26,26,26],
[30,26,26,26],
[35,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_7_main_stop_name = ["新化","新市<br />火車站","新市","豐榮","大營里","大社"];
green_7_main_stop_time_consume = [0, 10, 13, 18, 21, 25];
green_7_important_stop = [0, 1, 5]; // 新化, 新市火車站, 大社
var start_stop = 0; // 新化
var end_stop = 1; // 新市火車站
green_7_time_go = [["06:50",start_stop,end_stop],["07:10"],["10:00"],["17:25"],["17:40",start_stop,end_stop]];
green_7_time_return = [["06:25"],["07:00",end_stop,start_stop],["13:10"],["15:35"],["17:50",end_stop,start_stop]];