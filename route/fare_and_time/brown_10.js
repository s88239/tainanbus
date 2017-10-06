brown_10_interval_name = ["學甲","下草坔","莊禮寮","埤頭","麻豆公所","麻豆國中"];
brown_10_interval_stop = [ // 2016.02.04 checked
["學甲(民權路)","學甲(中正路)","學甲","學甲公所","東寮"], // 學甲
["頂草坔","中草坔","豐和里","賴姓宗祠","下草坔"], // 下草坔
["港仔尾","莊禮寮"], // 莊禮寮
["大山國小","埤頭","小埤頭","新建里"], // 埤頭
["新生南路","曾文家商","麻豆分局","一商前","興中民生路口","麻豆公所","曾文農工","大堀頭"], // 麻豆公所
["麻豆國中"] // 麻豆國中
];
brown_10_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[40,29,26,26,26],
[53,41,33,27,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
brown_10_main_stop_name = ["學甲<br />(民權路)","學甲","港仔尾","一商前","麻豆國中"];
brown_10_main_stop_time_consume = [0, 2, 25, 33, 40];
brown_10_important_stop = [0, 1, 4]; // 學甲(民權路), 學甲, 麻豆國中
var skip_stop = 2; // 港仔尾
brown_10_time_go = [["06:40",[[3,8,4,2]]],["07:00",['L',skip_stop,[3,4,4,2]]],["09:10",['L',skip_stop]],["11:35",['L',skip_stop]],["14:35",['L',skip_stop]],["16:15",['L',skip_stop]],["16:25",[skip_stop]]];
brown_10_time_return = [["07:40",[skip_stop]],["07:50",['L',skip_stop]],["10:00",['L',skip_stop]],["12:20",['L',skip_stop]],["15:20",['L',skip_stop]],["17:05",['L',skip_stop,[3,2,2,5]]],["17:15",[[3,2,2,8]]]];