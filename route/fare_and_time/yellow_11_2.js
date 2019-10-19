yellow_11_2_interval_name = ["白河","東山","大客","武嶺","番子嶺","斑芝<br />花坑","西東原","北大洋","南勢庄",'<span style="font-weight:normal">碧</span>蓮寺',"橫路<br />休息站"];
yellow_11_2_interval_stop = [
["白河站","安養院"], // 白河
["東山加油站","民眾服務社","東山區衛生所","北東山","東山","嘉東"], // 東山
["凹子腳","大客","下庄","科里"], // 大客
["武嶺"], // 武嶺
["番子嶺","開門橋","萬應公廟","番子厝"], // 番子嶺
["斑芝花坑","斑花橋","柿子寮"], // 斑芝花坑
["三塊厝","嶺南里路口","西東原","東原派出所","前雙溪","後雙溪","雙溪庄"], // 西東原
["北大洋","田寮子","大洋","後坑頭","南勢里活動中心"], // 北大洋
["南勢庄","岩坑"], // 南勢庄
["碧蓮寺","橫路"], // 碧蓮寺
["橫路休息站"] // 橫路休息站
];
yellow_11_2_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[34,26,26,26,26,26],
[43,32,26,26,26,26,26],
[51,40,34,30,27,26,26,26],
[61,50,43,39,37,27,26,26,26],
[67,56,50,46,43,34,26,26,26,26],
[74,63,56,53,50,40,31,26,26,26,26]
];
yellow_11_2_main_stop_name = ["白河站","東山","西東原","前雙溪","南勢里<br />活動中心",'<span style="font-family:新細明體;">碧蓮寺</span>',"橫路<br />休息站"];
yellow_11_2_main_stop_time_consume = [0, 5, 19, 21, 26, 33, 37];
yellow_11_2_important_stop = [0, 1, 6]; // 白河站, 東山, 橫路休息站
var Baihe = 0; // 白河站
var Dongshan = 1; // 東山
var West_Dongyuan = 2; // 西東原
var Cian_Shuangsi = 3; // 前雙溪
var Nanshih_Village = 4; // 南勢里活動中心
var Bilian_Temple = 5; // 碧蓮寺
var Henglu_Rest_Area = 6; // 橫路休息站
yellow_11_2_time_go = [
["06:20",[Nanshih_Village,[Bilian_Temple,-5,Henglu_Rest_Area,3]]],
["08:40",[Cian_Shuangsi,[Henglu_Rest_Area,3]]],
["14:40",[Nanshih_Village,[Bilian_Temple,-5,Henglu_Rest_Area,3]]],
["16:45",[Cian_Shuangsi,[Henglu_Rest_Area,3]]]];
yellow_11_2_time_return = [
["06:55",[Cian_Shuangsi,[Bilian_Temple,-1,Nanshih_Village,-1,West_Dongyuan,1,Baihe,2]]],
["09:20",[Nanshih_Village,[Bilian_Temple,-1,Cian_Shuangsi,-5,Baihe,2]]],
["15:15",[Cian_Shuangsi,[Bilian_Temple,-1,Nanshih_Village,-1,West_Dongyuan,1,Baihe,2]]],
["17:25",[Nanshih_Village,[Bilian_Temple,-1,Cian_Shuangsi,-5,Baihe,2]]]];