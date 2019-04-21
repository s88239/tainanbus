green_25_interval_name = ["玉井","鹿陶洋","楠西","密枝","雙溪","茶水站","第一莊","第三莊","嘉義農場","大茅埔","大埔"];
green_25_interval_stop = [
["玉井站","玉安街口","玉田里"], // 玉井
["後旦","竹圍","鹿陶廟","鹿陶","埔頭子","大林路口","鹿陶洋","東西煙"], // 鹿陶洋
["油車","楠西橋","楠西區圖書館","楠西區公所","楠西街","楠西","楠西國中","水庫路口"], // 楠西
["檨仔坑","山頂","風窗","埤仔坑","密枝南","密枝","密枝北"], // 密枝
["東勢坑","坊子頭","吊橋頭","雙溪","社區口"], // 雙溪
["復興站","茶水站"], // 茶水站
["風吹嶺","第一莊","第二莊"], // 第一莊
["第三莊","第四莊"], // 第三莊
["嘉義農場","第六莊","草嶺","第八莊"], // 嘉義農場
["過山","第十莊","長枝坑","大茅埔","泰山","楓康","枋樹林"], // 大茅埔
["大埔路口","大埔鄉公所","土地公廟","大埔(嘉義)","大埔街"] // 大埔
];
green_25_fare = [
[26],
[26,26],
[26,26,26],
[45,28,26,26],
[54,38,29,26,26],
[64,47,38,26,26,26],
[72,55,46,27,26,26,26],
[83,66,57,38,28,26,26,26],
[90,73,64,45,35,26,26,26,26],
[110,94,85,65,56,47,39,28,26,26],
[130,113,104,85,75,66,58,47,40,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
green_25_main_stop_name = ["玉井","鹿陶","鹿陶洋","楠西","密枝","社區口","風吹嶺","嘉義<br />農場","大茅埔","大埔<br />路口","大埔街"];
green_25_main_stop_time_consume = [0, 7, 9, 15, 25, 32, 40, 45, 55, 63, 65];
green_25_important_stop = [0, 3, 7, 10]; // 玉井, 楠西, 嘉義農場, 大埔街
green_25_time_go = [["06:10"],["07:50"],["12:50"],["15:50"]];
green_25_time_return = [["07:20"],["08:55"],["14:00"],["17:00"]];