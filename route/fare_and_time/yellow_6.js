yellow_6_interval_name = ["新營","埤寮","新厝","竹新里","新港東","頂長<br />短樹","菁寮","白沙屯","菁寮<br />國小","後壁<br />火車站"];
yellow_6_interval_stop = [ // 2016.06.23 checked
["新營站","中營興業里","圓環(第一銀行)","新營文化中心","新營區公所","新營高工","中正世家","電力公司","許丑"], // 新營
["埤寮","天鵝湖公園"], // 埤寮
["後鎮派出所","新厝"], // 新厝
["竹新里","昭安宮","太安宮","新東國小"], // 竹新里
["新港東"], // 新港東
["下長短樹","仕安里","鎮安堂","頂長短樹"], // 頂長短樹
["菁寮","西菁寮","新嘉里"], // 菁寮
["東新嘉","白沙屯"], // 白沙屯
["菁寮國小","菁豐里"], // 菁寮國小
["後壁火車站","後壁區公所"] // 後壁火車站
];
yellow_6_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[36,26,26,26,26],
[47,34,29,26,26,26],
[52,39,34,31,26,26,26],
[60,48,42,39,26,26,26,26],
[69,57,51,48,33,26,26,26,26],
[86,73,68,65,49,39,34,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_6_main_stop_name = ["新營站","新營<br />區公所","埤寮","竹新里","仕安里","鎮安堂","菁寮","白沙屯","後壁<br />火車站","後壁<br />區公所"];
yellow_6_main_stop_time_consume = [0, 5, 10, 13, 13, 16, 17, 21, 34, 34];
yellow_6_important_stop = [0, 6, 8]; // 新營站, 菁寮, 後壁火車站
var Sinying = 0; // 新營站
var skip_stop = 3; // 竹新里
var Shihan_Village = 4; // 仕安里
var skip_stop_2 = 5; // 鎮安堂
var Jingliao = 6; // 菁寮
var Baishatun = 7; // 白沙屯
var houbi_train_station = 8; // 後壁火車站
yellow_6_time_go = [["05:50",Sinying,Baishatun,[skip_stop,skip_stop_2,[Sinying+1,-3,skip_stop_2,1]]],["06:45",Sinying,Baishatun,[skip_stop,skip_stop_2]],
["06:55",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["07:50",Sinying,houbi_train_station,['繞',[Shihan_Village,12,skip_stop_2+1,2]]],
["09:25",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["11:00",Sinying,houbi_train_station,['繞',[Shihan_Village,12,skip_stop_2+1,2]]],
["12:10",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["13:05",Sinying,houbi_train_station,['繞',[Shihan_Village,12,skip_stop_2+1,2]]],
["15:40",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["17:45",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[Sinying+2,4,skip_stop_2,2,Baishatun,1,houbi_train_station,-1]]]];
yellow_6_time_return = [["06:15",Baishatun,Sinying,[skip_stop,skip_stop_2,[skip_stop_2,-1,Sinying,5]]],
["07:10",Baishatun,Sinying,[skip_stop,skip_stop_2,[skip_stop_2,1,Sinying,3]]],
["07:40",[skip_stop,skip_stop_2,[Baishatun,-2,Jingliao,1,Sinying,7]]],
["08:45",['繞',[Baishatun,-1,skip_stop_2,2,skip_stop,12,Sinying,2]]],
["10:10",[skip_stop,skip_stop_2,[Baishatun,-3,Jingliao,1,Sinying,3]]],
["11:55",['繞',[Baishatun,-1,skip_stop_2,2,skip_stop,12]]],
["12:55",[skip_stop,skip_stop_2,[Baishatun,-3,Jingliao,1,Sinying,3]]],
["14:00",['繞',[Baishatun,-1,skip_stop_2,2,skip_stop,12,Sinying,2]]],
["16:25",[skip_stop,skip_stop_2,[Baishatun,-2,Shihan_Village,1,Sinying,7]]],
["18:45",[skip_stop,skip_stop_2,[Baishatun,-3,Jingliao,1,Sinying,3]]]];
// holiday schedule
yellow_6_holiday_time_go = [["05:50",Sinying,Baishatun,[skip_stop,skip_stop_2,[Sinying+1,-3,skip_stop_2,1]]],["06:45",Sinying,Baishatun,[skip_stop,skip_stop_2]],
["06:55",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["07:50",Sinying,houbi_train_station,[skip_stop,skip_stop_2]],
["09:25",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["11:00",Sinying,houbi_train_station,[skip_stop,skip_stop_2]],
["12:10",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["13:05",Sinying,houbi_train_station,[skip_stop,skip_stop_2]],
["15:40",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[houbi_train_station,1]]],
["17:45",Sinying,houbi_train_station,[skip_stop,skip_stop_2,[Sinying+2,4,skip_stop_2,2,Baishatun,1,houbi_train_station,-1]]]];
yellow_6_holiday_time_return = [["06:15",Baishatun,Sinying,[skip_stop,skip_stop_2,[skip_stop_2,-1,Sinying,5]]],
["07:10",Baishatun,Sinying,[skip_stop,skip_stop_2,[skip_stop_2,1,Sinying,3]]],
["07:40",[skip_stop,skip_stop_2,[Baishatun,-2,Jingliao,1,Sinying,7]]],
["08:35",[skip_stop,skip_stop_2,[Baishatun,-1,skip_stop_2,1,Sinying,2]]],
["10:10",[skip_stop,skip_stop_2,[Baishatun,-3,Jingliao,1,Sinying,3]]],
["11:45",[skip_stop,skip_stop_2,[Baishatun,-1,skip_stop_2,1,Sinying,2]]],
["12:55",[skip_stop,skip_stop_2,[Baishatun,-3,Jingliao,1,Sinying,3]]],
["13:50",[skip_stop,skip_stop_2,[Baishatun,-1,skip_stop_2,1,Sinying,2]]],
["16:25",[skip_stop,skip_stop_2,[Baishatun,-2,Shihan_Village,1,Sinying,7]]],
["18:45",[skip_stop,skip_stop_2,[Baishatun,-3,Jingliao,1,Sinying,3]]]];
