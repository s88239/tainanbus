// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_11_main_stop_name = ["大成<br />路口","臺南站","小西門<br />(大億麗緻)","臺南<br />火車站","民德<br />路口","花園夜市<br />(和緯路)","安中路<br />一段","海東<br />國小","土城<br />中學","聖母廟","城西里"];
city_bus_11_main_stop_time_consume = [0, 2, 5, 17, 24, 29, 42, 57, 64, 70, 77];
city_bus_11_important_stop = [0, 1, 3, 5, 7, 9, 10]; // 大成路口, 臺南站, 臺南火車站, 花園夜市(和緯路), 海東國小, 聖母廟, 城西里
var start_stop = 10; // 城西里
var tainan_railway_station = 3; // 臺南火車站
var stop_1 = 7; // 海東國小
city_bus_11_time_go = [["06:03",['W',[stop_1-1,-5,stop_1,-5]]],["06:08",['H',[stop_1-1,-5,stop_1,-5]]],["07:38"],["08:58"],["12:13"],["14:23"],["15:23"],["17:18",[[tainan_railway_station,5]]],["17:38",['W',[tainan_railway_station,5]]],["18:43"],["20:38"]];
city_bus_11_time_return = [["06:10"],["07:10",['W']],["07:25",['H']],["09:15"],["11:00"],["13:50"],["15:50"],["17:00"],["19:00"],["19:40",['W']],["20:15"],["21:55",start_stop,tainan_railway_station,[[start_stop-1,-2,start_stop-2,-2,stop_1,-1]]]];