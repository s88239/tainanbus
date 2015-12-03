highway_bus_7207_interval_name = ["嘉義","新庄","湖子內","崎子頭","柳子林","水上","南和村","後崛","山子腳","鹿草","竹子腳","頂潭","下潭","五間厝","義竹","厚生橋","鹽水"];
highway_bus_7207_interval_stop = [
["嘉義","克林","舊市政府"], // 嘉義
["民生公園","新庄","下路頭","獅子社區"], // 新庄
["湖子內","埤肚","民生社區"], // 湖子內
["崎子頭","友愛幼稚園"], // 崎子頭
["柳子林","柳子林一","苦提寺","凌雲二村","吳竹子腳"], // 柳子林
["水上","水上派出所","龍德村","十一指厝"], // 水上
["糖廠","彩虹社區","南和村","孝親護理之家","後寮","鳳凰社區"], // 南和村
["麻豆店","後崛"], // 後崛
["三角村","毛蟹行","嘉義教養院","山子腳"], // 山子腳
["鹿草國中","鹿草","鹿草農會診所"], // 鹿草
["竹子腳"], // 竹子腳
["頂潭"], // 頂潭
["下潭一","下潭"], // 下潭
["中平村","五間厝","田尾"], // 五間厝
["義竹圍","義竹電力公司","活動中心","義竹"], // 義竹
["厚生橋"], // 厚生橋
["牛埔","鹽水"] // 鹽水
];
highway_bus_7207_stop_time_consume = [];
highway_bus_7207_fare = [
[24,21,21,21,21,21,35,43,47,53,59,62,66,74,83,84,93],
[24,24,21,21,21,21,29,38,41,48,53,57,61,68,77,79,87],
[24,24,24,21,21,21,27,35,39,45,51,54,58,66,75,76,85],
[24,24,24,24,21,21,22,31,34,41,46,50,54,61,70,72,80],
[24,24,24,24,24,21,21,27,30,37,42,46,50,57,66,68,76],
[24,24,24,24,24,24,21,21,23,30,35,38,42,50,59,61,69],
[39,33,30,25,24,24,24,21,21,21,24,27,31,39,48,50,58],
[49,43,40,35,30,24,24,24,21,21,21,21,23,30,40,41,49],
[53,47,44,39,35,26,24,24,24,21,21,21,21,27,36,37,46],
[61,54,52,46,42,34,24,24,24,24,21,21,21,21,30,31,39],
[67,60,58,53,48,40,27,24,24,24,24,21,21,21,24,26,34],
[71,64,62,56,52,44,31,24,24,24,24,24,21,21,21,22,30],
[75,69,66,61,56,48,36,26,24,24,24,24,24,21,21,21,26],
[84,77,75,70,65,57,44,35,30,24,24,24,24,24,21,21,21],
[94,88,85,80,76,67,55,45,41,34,28,24,24,24,24,21,21],
[96,90,87,82,77,69,56,47,43,35,29,25,24,24,24,24,21],
[105,99,96,91,87,78,66,56,52,45,39,35,30,24,24,24,24]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
highway_bus_7207_main_stop_name = ["嘉義","湖子內","水上","後崛","鹿草","竹子腳","義竹","鹽水"];
highway_bus_7207_main_stop_time_consume = [0,10,20,30,35,37,47,55];
highway_bus_7207_important_stop = [0, 4, 7]; // 嘉義, 鹿草, 鹽水
highway_bus_7207_time_go = [["08:30"],["09:00"],["11:00"],["11:30"],["14:00"],["18:30"]];
highway_bus_7207_time_return = [["09:40"],["10:10"],["12:10"],["12:40"],["15:10"],["18:50"],["19:10"]];