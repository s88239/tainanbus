orange_1_interval_name = ["善化<br />轉運站","善化","六分寮","東勢寮","新中","日新","大內","頭社","環湖","頭社","大內","蒙正"];
orange_1_interval_stop = [
["善化轉運站"], // 善化轉運站
["樹人路口","善化公所","善化(中正路)"], // 善化
["東勢宅口","六分寮","大同國小"], // 六分寮
["東勢寮"], // 東勢寮
["肉品市場","新中","臺南鴨莊"], // 新中
["日新","又新"], // 日新
["石子瀨","大內公所","大內分駐所","大內","內庄朝天宮","大內口","大內生命園區","後堀路口"], // 大內
["天公廟","秀才庄","竹湖","頭社","頭社路口"], // 頭社
["紅花園","竹宅子","風窗","環湖崎頂","湖頭教會","環湖","環湖廟口",
"環湖","湖頭教會","環湖崎頂","風窗","竹宅子","紅花園"], // 環湖
["頭社路口","頭社","竹湖","秀才庄","天公廟"], // 頭社
["後堀路口","大內生命園區","大內口","內江里","大內國中"], // 大內
["蒙正","開靈宮"] // 蒙正
];
orange_1_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[31,28,26,26,26],
[36,33,26,26,26,26],
[51,48,39,33,26,26,26],
[68,65,55,50,37,32,26,26],
[84,82,72,66,54,48,33,26,26],
[68,65,55,50,37,32,26,26,26,26],
[51,48,39,33,26,26,26,26,33,26,26],
[58,55,46,40,27,26,26,26,40,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
orange_1_main_stop_name = ["善化<br />轉運站","六分寮","新中","大內<br />公所","大內","環湖<br />廟口","蒙正","開靈宮"];
orange_1_main_stop_time_consume = [0, 11, 20, 28, 30, 51, 33, 35];
orange_1_important_stop = [0, 5, 7]; // 善化轉運站, 環湖廟口, 開靈宮
orange_1_time_go = [["05:40",[[6,40]]],["13:10",[5]],["15:10",[5]]];
orange_1_time_return = [["07:10",[5]],["14:10",[5]],["16:10",[5]]];