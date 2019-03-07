green_24_interval_name = ["玉井","鹿陶洋","楠西","曾文<br />管理局","曾文<br />水庫"];
green_24_interval_stop = [
["玉井站","玉安街口","玉田里"], // 玉井
["後旦","竹圍","鹿陶廟","鹿陶","埔頭子","大林路口","鹿陶洋","東西煙"], // 鹿陶洋
["油車","楠西區圖書館","楠西區公所","楠西街","楠西","楠西國中","水庫路口"], // 楠西
["照興里","小普陀山","興北","樂群新村","曾文二橋","曾文工務段","曾文青年活動中心","南區水資源局","曾文管理局"], // 曾文
["東口遊憩區","溪畔遊樂區","曾文之眼","壩頂","曾文遊樂區","觀景樓"] // 曾文水庫
];
green_24_fare = [
[26],
[26,26],
[26,26,26],
[43,27,26,26],
[69,52,43,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_24_main_stop_name = ["玉井站","鹿陶","鹿陶洋","楠西","興北","曾文<br />管理局","觀景樓"];
green_24_main_stop_time_consume = [0, 7, 9, 15, 20, 25, 40];
green_24_important_stop = [0, 3, 5, 6]; // 玉井站, 楠西, 曾文管理局, 觀景樓
var Yujing = 0; // 玉井站
var Zengwun_Administration = 5; // 曾文管理局
green_24_time_go = [["07:20",Yujing,Zengwun_Administration,['繞',[Zengwun_Administration,5]]],["09:00",Yujing,Zengwun_Administration],["09:30"],["10:35",Yujing,Zengwun_Administration],["11:40",Yujing,Zengwun_Administration],["12:15",['W']],["14:00"],["15:05",Yujing,Zengwun_Administration],["16:55",Yujing,Zengwun_Administration],["17:20",['H']]];
green_24_time_return = [["07:50",Zengwun_Administration,Yujing],["09:25",Zengwun_Administration,Yujing],["10:10"],["11:00",Zengwun_Administration,Yujing],["12:05",Zengwun_Administration,Yujing],["12:55",['W']],["14:40"],["15:30",Zengwun_Administration,Yujing],["17:20",Zengwun_Administration,Yujing],["18:00",['H']]];