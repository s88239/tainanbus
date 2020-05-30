// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
STSP_green_main_stop_name = ["Park 17<br />商場","育成<br />中心","聯電","聯電<br />P5廠","群創<br />D廠","高鐵<br />臺南站"];
STSP_green_main_stop_time_consume = [0, 2, 3, 4, 5, 38];
STSP_green_important_stop = [0, 5]; // Park 17商場, 高鐵臺南站
var hsr_tainan_go = 5;
var skip_list = [2, 3, 4]; // 聯電, 聯電P5廠, 群創D廠
STSP_green_time_go = [["05:50",skip_list],["07:00",skip_list],["07:50",skip_list],["08:20",skip_list],["09:20",skip_list],["10:10",['綠',...skip_list,[hsr_tainan_go,12]]],["11:20",skip_list],["12:20",skip_list],["13:20",skip_list],["14:20",skip_list],["15:20",skip_list],["16:20",skip_list],["17:20"],["17:50"],["18:25"]];

STSP_green_holiday_main_stop_name = ["Park 17<br />商場","社區中心","育成中心","高鐵<br />臺南站"];
STSP_green_holiday_main_stop_time_consume = [0, 4, 6, 39];
STSP_green_holiday_important_stop = [0, 3]; // Park 17商場, 高鐵臺南站
STSP_green_holiday_time_go = [["16:20"],["18:10"]];

// The name of return stops are different
STSP_green_main_stop_name_return = ["高鐵<br />臺南站","群創<br />D廠","聯電<br />P5廠","瀚宇<br />彩晶","動物<br />中心","Park 17<br />商場"];
STSP_green_main_stop_time_consume_return = [0, 33, 34, 35, 37, 39];
STSP_green_important_stop_return = [0, 5]; // 高鐵臺南站, Park 17商場
var hsr_tainan_return = 0;
STSP_green_time_return = [["07:05"],["08:18"],["08:50"],["09:25"],["10:25"],["11:25",['綠',[hsr_tainan_return+1,12]]],["12:25"],["13:25"],["14:25"],["15:25"],["16:25"],["17:25"],["18:25"],["18:50"],["19:40"]];

STSP_green_holiday_main_stop_name_return = ["高鐵<br />臺南站","動物中心","華園宿舍","Park 17<br />商場"];
STSP_green_holiday_main_stop_time_consume_return = [0, 35, 37, 41];
STSP_green_holiday_important_stop_return = [0, 3]; // 高鐵臺南站, Park 17商場
STSP_green_holiday_time_return = [["17:25"],["18:50"]];
