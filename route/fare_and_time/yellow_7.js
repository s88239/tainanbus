yellow_7_interval_name = ["新營","頂窩","北勢寮","東河","北馬","東山","大客","武嶺","番子嶺","斑芝<br />花坑","東原","瓦厝","崎腳","青山","南寮口","二坑埔","仙公廟"];
yellow_7_interval_stop = [ // 2018.07.03 checked
["新營站","中營興業里","圓環(第一銀行)","新營文化中心","新營區公所","臺南市農會"], // 新營
["中營里","東山中路","頂窩","東營"], // 頂窩
["北勢寮","聖賢國小"], // 北勢寮
["東河","吉貝耍","枋子林","崁下寮","水雲天后宮","牛肉崎","牛山橋","油礦","雲天宮"], // 東河
["北馬"], // 北馬
["東山國中","東山國小","北東山","木柵","代天宮","許秀才","東山","嘉東"], // 東山
["凹子腳","大客","下庄","科里"], // 大客
["武嶺"], // 武嶺
["番子嶺","開門橋","萬應公廟","番子厝"], // 番子嶺
["斑芝花坑","斑花橋","柿子寮"], // 斑芝花坑
["三塊厝","嶺南里路口","西東原","東原"], // 東原
["瓦厝","東原國中","竹圍埔"], // 瓦厝
["崎腳","店子前"], // 崎腳
["下子店","青山"], // 青山
["田寮仔","南寮口","鴨母寮","內埔仔","下二坑"], // 南寮口
["二坑埔","仙公廟牌樓","凍腳"], // 二坑埔
["仙公廟"] // 仙公廟
];
yellow_7_fare = [
[26],
[26,26],
[26,26,26],
[32,26,26,26],
[38,26,26,26,26],
[48,32,26,26,26,26],
[53,36,31,26,26,26,26],
[59,42,36,27,26,26,26,26],
[62,45,39,30,26,26,26,26,26],
[70,53,47,38,32,26,26,26,26,26],
[80,63,57,48,42,32,27,26,26,26,26],
[82,65,59,50,43,33,28,26,26,26,26,26],
[87,70,64,55,48,38,34,28,26,26,26,26,26],
[90,73,67,58,51,41,36,31,28,26,26,26,26,26],
[94,78,72,63,56,46,41,35,33,26,26,26,26,26,26],
[103,86,80,71,64,54,50,44,41,33,26,26,26,26,26,26],
[116,99,93,84,78,68,63,57,54,46,36,34,29,26,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_7_main_stop_name = ["新營站","東河","吉貝耍","牛肉崎","北東山","許秀才","東山","斑花橋","東原","青山","仙公廟<br /><font color=\"red\">(假日延駛)</font>"];
yellow_7_main_stop_time_consume = [0, 17, 18, 24, 24, 28, 26, 36, 40, 45, 60];
yellow_7_important_stop = [0, 6, 9, 10]; // 新營站, 東山, 青山, 仙公廟
start_stop = 0; // 新營
cingshan = 9; // 青山
dongshan = 6; // 東山
skip_stop_1 = 2; // 吉貝耍
skip_stop_beef = 3; // 牛肉崎
skip_stop_2 = 5; // 許秀才
siangong_temple = 10; // 仙公廟

yellow_7_time_go = [["05:45",start_stop,dongshan,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,-4]]],
["06:55",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,3,skip_stop_beef+1,2,cingshan,1]]],
["08:20",start_stop,cingshan,[skip_stop_beef,skip_stop_2,[start_stop+1,1,skip_stop_1+2,4,dongshan+1,1,cingshan,1]]],
["08:30",start_stop,dongshan,[skip_stop_2,[skip_stop_beef+1,19]]],
["09:30",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["10:40",start_stop,cingshan,[skip_stop_beef,skip_stop_2,[cingshan-2,1]]],
["11:30",start_stop,dongshan,[skip_stop_2,[skip_stop_beef+1,19]]],
["11:50",start_stop,cingshan,[skip_stop_1,skip_stop_beef,[skip_stop_2+1,6]]],
["12:50",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["14:20",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["15:00",start_stop,dongshan,[skip_stop_2,[skip_stop_beef+1,19]]],
["15:35",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["16:30",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,1,skip_stop_beef+1,1]]],
["17:30",start_stop,cingshan,[skip_stop_beef,[start_stop+1,1,skip_stop_beef+1,1,dongshan,8,dongshan+1,3]]],
["18:45",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]]];
yellow_7_time_return = [["06:10",dongshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,-1]]],
["05:50",cingshan,start_stop,[skip_stop_beef,[dongshan,3,skip_stop_2,6,skip_stop_2-1,2,start_stop,2]]],
["07:55",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[dongshan,2,start_stop,3]]],
["09:20",dongshan,start_stop,[skip_stop_2,[skip_stop_beef,19]]],
["09:30",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,2,start_stop,2]]],
["10:25",cingshan,start_stop,[skip_stop_beef,skip_stop_2,[cingshan-1,-1,skip_stop_1,-1,start_stop,2]]],
["11:35",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop,2]]],
["12:20",dongshan,start_stop,[skip_stop_2,[skip_stop_beef,19]]],
["12:55",cingshan,start_stop,[skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop,2]]],
["13:45",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop+1,-1,start_stop,1]]],
["15:15",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop+1,-1,start_stop,1]]],
["15:50",dongshan,start_stop,[skip_stop_2,[skip_stop_beef,19]]],
["16:35",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,start_stop+1,-2,start_stop,1]]],
["17:25",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop+1,-1,start_stop,1]]],
["18:45",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,skip_stop_beef+1,-1,start_stop+1,-1,start_stop,1]]]];

// holiday schedule
yellow_7_holiday_time_go = [["05:45",start_stop,dongshan,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,-4]]],
["06:55",[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,3,skip_stop_beef+1,2,cingshan,1,siangong_temple,-1]]],
["07:15",[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,1,skip_stop_beef+1,1,cingshan,1,siangong_temple,-1]]],
["08:20",start_stop,cingshan,[skip_stop_beef,skip_stop_2,[start_stop+1,1,skip_stop_1+2,4,dongshan+1,1,cingshan,1]]],
["08:30",start_stop,dongshan,[skip_stop_2,[skip_stop_beef+1,19]]],
["09:30",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["10:40",[skip_stop_beef,skip_stop_2,[cingshan-2,1,siangong_temple,1]]],
["11:30",start_stop,dongshan,[skip_stop_2,[skip_stop_beef+1,19]]],
["11:50",[skip_stop_1,skip_stop_beef,[skip_stop_2+1,6]]],
["12:50",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["14:20",[skip_stop_1,skip_stop_beef,skip_stop_2]],
["15:00",start_stop,dongshan,[skip_stop_2,[skip_stop_beef+1,19]]],
["15:35",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]],
["16:30",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,1,skip_stop_beef+1,1]]],
["17:30",start_stop,cingshan,[skip_stop_beef,[start_stop+1,1,skip_stop_beef+1,1,dongshan,8,dongshan+1,3]]],
["18:45",start_stop,cingshan,[skip_stop_1,skip_stop_beef,skip_stop_2]]];
yellow_7_holiday_time_return = [["06:10",dongshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[start_stop+1,-1]]],
["05:50",cingshan,start_stop,[skip_stop_beef,[dongshan,3,skip_stop_2,6,skip_stop_2-1,2,start_stop,2]]],
["08:10",[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,2,start_stop,2]]],
["08:30",[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,2,start_stop,2]]],
["09:20",dongshan,start_stop,[skip_stop_2,[skip_stop_beef,19]]],
["09:30",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,2,start_stop,2]]],
["10:25",cingshan,start_stop,[skip_stop_beef,skip_stop_2,[cingshan-1,-1,skip_stop_1,-1,start_stop,2]]],
["12:20",dongshan,start_stop,[skip_stop_2,[skip_stop_beef,19]]],
["11:55",[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop,2]]],
["13:05",[skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop,2]]],
["13:45",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop+1,-1,start_stop,1]]],
["15:50",dongshan,start_stop,[skip_stop_2,[skip_stop_beef,19]]],
["15:35",[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop,2]]],
["16:35",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,start_stop+1,-2,start_stop,1]]],
["17:25",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,dongshan,1,start_stop+1,-1,start_stop,1]]],
["18:45",cingshan,start_stop,[skip_stop_1,skip_stop_beef,skip_stop_2,[cingshan-1,-1,skip_stop_beef+1,-1,start_stop+1,-1,start_stop,1]]]];
