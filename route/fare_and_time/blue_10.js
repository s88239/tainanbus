blue_10_interval_name = ["佳里","番子寮","漚汪","苓子寮","將軍","山子腳","馬沙溝","將軍漁港"];
blue_10_interval_stop = [
["佳里站","北門高中","潭墘"], // 佳里
["番子寮"], // 番子寮
["竹子腳","漚汪","將軍區衛生所","中社","忠興里","過港仔","忠嘉里"], // 漚汪
["苓子寮","巷口"], // 苓子寮
["北埔","將軍","將軍國小","將富"], // 將軍
["玉山里口","玉山里","玉山玉天宮","公館","山子腳","廣山里"], // 山子腳
["長平國小","馬沙溝"], // 馬沙溝
["將軍漁港"] // 將軍漁港
];
blue_10_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[32,26,26,26,26],
[42,33,27,26,26,26],
[51,42,36,28,26,26,26],
[56,47,42,34,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
blue_10_main_stop_name = ["佳里站","番子寮","漚汪","苓子寮","將軍","山子腳","馬沙溝","將軍漁港"];
blue_10_main_stop_time_consume = [0, 6, 9, 14, 17, 22, 25, 30];
blue_10_important_stop = [0, 2, 6, 7]; // 佳里站, 漚汪, 馬沙溝, 將軍漁港
var Jiali = 0; // 佳里站
var Mashagou = 6; // 馬沙溝
blue_10_time_go = [["05:20",Jiali,Mashagou],["06:00"],["07:20"],["08:50"],["09:30"],["10:50"],["12:30"],["13:40"],["15:10"],["16:10"],["17:00",["繞"]],["17:40",Jiali,Mashagou],["19:00"],["20:00"],["20:20"],["21:10"],["22:00"]];
blue_10_time_return = [["05:45",Mashagou,Jiali],["06:30",["繞"]],["08:00"],["09:30"],["10:10"],["11:30"],["13:10"],["14:20"],["15:50"],["16:50"],["17:40"],["18:05",Mashagou,Jiali],["19:30"],["20:40"],["21:00"],["21:40"],["22:30"]];