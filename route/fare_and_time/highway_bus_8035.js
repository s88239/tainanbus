highway_bus_8035_interval_name = ["南化","金馬寮","木柵","內門","中埔","旗山"];
highway_bus_8035_interval_stop = [
["南化","南化派出所","界址","西部","東埔派出所"], // 南化
["大坪","北頭","金馬寮","茄冬橋","分水嶺","內興里"], // 金馬寮
["椰樹橋","頂寮橋","木柵","蘇遠埔","內湖"], // 木柵
["口湖","內門","內門區公所","內門國小","十三甲","內埔橋","菜公坑"], // 內門
["中埔頭","內門國中","中埔","觀音亭","農會","二層橋","石溝","實踐大學","嶺頂"], // 中埔
["朝天宮","旗山監理站","旗山北站","中華路口","旗山市場","延平路","旗山轉運站"] // 旗山
];
highway_bus_8035_fare = [
[26],
[26,26],
[28,26,26],
[41,26,26,26],
[52,37,26,26,26],
[86,71,58,44,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
highway_bus_8035_main_stop_name = ["南化","茄冬橋","內門","中埔頭","實踐大學","旗山北站","旗山轉運站"];
highway_bus_8035_main_stop_time_consume = [0,10,30,35,40,50,55];
highway_bus_8035_important_stop = [0, 2, 4, 6]; // 南化, 內門, 實踐大學, 旗山轉運站
var start_stop = 2; // 內門
var end_stop = 6; // 旗山轉運站
var skip_stop = 4; // 實踐大學
highway_bus_8035_time_go = [
["06:35",start_stop,end_stop,['S',skip_stop,[skip_stop,-10]]],["06:45",start_stop,end_stop,['S',skip_stop,[skip_stop,-10]]],
["06:20",[skip_stop,[skip_stop,-10]]],["08:20"],["10:50"],["13:20"],["17:35"]
];
highway_bus_8035_time_return = [
["06:30",end_stop,start_stop,['S',skip_stop,[skip_stop,-10]]],["07:35",['W',skip_stop,[skip_stop,-10]]],["10:05"],["12:35"],
["16:50"],["17:30"],["18:45"]
];