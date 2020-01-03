yellow_9_interval_name = ["新營","南安溪寮","後壁火車站","上茄苳","南靖火車站","後寮村","高鐵嘉義站","故宮南院"];
yellow_9_interval_stop = [ // 2018.10.02 checked
["新營站","第三市場","新營國小","新營文化中心","新營區公所","臺南市政府民治中心","臺南市農會","新東國中","東興國宅",
"東興、長榮路口","東仁、長榮路口","新營客運管理中心"], // 新營
["卯舍","土庫里","南安溪寮","北安溪寮"], // 南安溪寮
["下茄苳","後壁高中","良食故事館","後壁火車站"], // 後壁火車站
["上茄苳","勝泰工業"], // 上茄苳
["南靖火車站"], // 南靖火車站
["後寮村","春珠里"], // 後寮村
["高鐵嘉義站"], // 高鐵嘉義站
["故宮南院"] // 故宮南院
];
yellow_9_fare = [
[26],
[26,26],
[36,26,26],
[46,26,26,26],
[57,36,26,26,26],
[84,64,48,38,28,26],
[97,76,61,50,40,26,26],
[114,94,78,68,58,30,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_9_main_stop_name = ["新營站","臺南市政府<br />民治中心","臺南市<br />農會","東興<br />國宅","新營客運<br />管理中心","北安<br />溪寮","後壁<br />火車站","南靖<br />火車站","高鐵<br />嘉義站","故宮南院<br /><span style='color:red;'>【二~日】</span>"];
yellow_9_main_stop_time_consume = [0, 4, 6, 9, 11, 16, 20, 27, 45, 55];
yellow_9_important_stop = [0, 6, 8, 9]; // 新營站, 後壁火車站, 高鐵嘉義站, 故宮南院
var Sinying = 0; // 新營站
var Tainan_City_Hall_Minzhi_Center = 1; // 臺南市政府民治中心
var Dongsing_Public_Housing = 3; // 東興國宅
var North_Ansiliao = 5;
var TRA_Houbi = 6; // 後壁火車站
var TRA_Nanjing = 7;
var hsr_chiayi = 8; // 高鐵嘉義站
yellow_9_time_go = [["06:00",Sinying,hsr_chiayi,[Tainan_City_Hall_Minzhi_Center]],["06:50",Sinying,hsr_chiayi,['W',[hsr_chiayi,10]]],["07:00",Sinying,hsr_chiayi],["08:00"],["09:00"],["10:00"],["11:00"],["12:00"],["13:00"],["14:00"],["15:00"],
["16:00"],["17:00",[[Dongsing_Public_Housing,5,TRA_Houbi,5]]],["17:40",Sinying,hsr_chiayi,['五']],["18:00",Sinying,hsr_chiayi],["18:40",Sinying,hsr_chiayi,[Tainan_City_Hall_Minzhi_Center,'五']],["19:00",Sinying,hsr_chiayi,[Tainan_City_Hall_Minzhi_Center]],["19:40",Sinying,hsr_chiayi,[Tainan_City_Hall_Minzhi_Center,'五']],["20:00",Sinying,hsr_chiayi,[Tainan_City_Hall_Minzhi_Center]],["20:40",Sinying,hsr_chiayi,[Tainan_City_Hall_Minzhi_Center,'五']]];
yellow_9_time_return = [
["07:15",hsr_chiayi,Sinying,[[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Tainan_City_Hall_Minzhi_Center,1,Sinying,3]]],
["07:55",hsr_chiayi,Sinying,['W',[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Tainan_City_Hall_Minzhi_Center,1,Sinying,3]]],
["08:25",hsr_chiayi,Sinying,[[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["09:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["10:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["11:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["12:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["13:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["14:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["15:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Tainan_City_Hall_Minzhi_Center,1,Sinying,3]]],
["16:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Tainan_City_Hall_Minzhi_Center,1,Sinying,3]]],
["17:05",[[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Tainan_City_Hall_Minzhi_Center,1,Sinying,3]]],
["18:05",[Tainan_City_Hall_Minzhi_Center,[hsr_chiayi,10,TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["19:00",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,'五',[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["19:25",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["20:00",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,'五',[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["20:25",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["21:00",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,'五',[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["21:25",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]],
["22:00",hsr_chiayi,Sinying,[Tainan_City_Hall_Minzhi_Center,'五',[TRA_Nanjing,-5,TRA_Houbi,1,North_Ansiliao,-1,Dongsing_Public_Housing,1,Sinying,-1]]]];