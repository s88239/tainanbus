green_6_interval_name = ["新化","新市<br />火車站","新市","潭頂","大社"];
green_6_interval_stop = [
["新化站","國泰大樓","水利會","工務段","達興公司","新化地政事務所"], // 新化
["永新社區","遠東科技大學","新市火車站"], // 新市火車站
["新市電信局","新市","新市市場","新市國小","新市服務站"], // 新市
["港墘","潭頂"], // 潭頂
["新大社","大社國小","大社南","大社"] // 大社
];
green_6_fare = [
[26],
[26,26],
[26,26,26],
[31,26,26,26],
[35,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_6_main_stop_name = ["新化站","新市<br />火車站","新市","潭頂","大社"];
green_6_main_stop_time_consume = [0, 10, 15, 21, 25];
green_6_important_stop = [0, 1, 4]; // 新化站, 新市火車站, 大社
var Tanding = 3; // 潭頂
green_6_time_go = [["06:00"],["11:25",[[Tanding,5]]],["15:10"]];
green_6_time_return = [["09:00"],["10:30"],["17:55"],["19:35"]];