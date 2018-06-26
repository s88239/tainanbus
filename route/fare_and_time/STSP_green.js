// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_green_main_stop_name = ["Park 17<br />商場","育成<br />中心","聯電","群創<br />D廠","高鐵<br />臺南站"];
STSP_green_main_stop_time_consume = [0, 2, 3, 5, 38];
STSP_green_important_stop = [0, 4]; // Park 17商場, 高鐵臺南站
var hsr_tainan_go = 4;
STSP_green_time_go = [["05:50"],["07:00"],["08:20"],["09:20"],["10:10",['綠',[hsr_tainan_go,12]]],["11:50"],["13:20"],["14:50"],["15:50"],["16:50"],["17:45"],["18:50"]];

// The name of return stops are different
STSP_green_main_stop_name_return = ["高鐵<br />臺南站","群創<br />D廠","瀚宇<br />彩晶","動物<br />中心","Park 17<br />商場"];
STSP_green_main_stop_time_consume_return = [0, 33, 35, 37, 39];
STSP_green_important_stop_return = [0, 4]; // 高鐵臺南站, Park 17商場
var hsr_tainan_return = 0;
STSP_green_time_return = [["07:05"],["08:18"],["09:30"],["10:25"],["11:25",['綠',[hsr_tainan_return+1,12]]],["12:50"],["14:25"],["15:50"],["16:50"],["17:50"],["18:50"],["19:50"]];