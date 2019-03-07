yellow_13_interval_name = ["白河","河東","虎子墓","木屐寮","仙草埔","關子嶺","頂關<br />子嶺","南寮<br />路口","坪頂","南寮","大鋤<br />花間","檳榔宅","仙公廟"];
yellow_13_interval_stop = [ // 2018.03.30 checked
["白河國中","白河站","念佛會"], // 白河
["凹底","畚箕湖","東畚箕湖","河東","河東國小"], // 河東
["潭墘","虎子墓(虎山里)"], // 虎子墓
["木屐寮"], // 木屐寮
["白河水庫","竹林寺","仙草派出所","仙草埔","白河榮家","灰窯","羌仔崙","麒麟隧道口"], // 仙草埔
["粗坑","寶泉橋","好漢坡","關子嶺","勞工育樂中心"], // 關子嶺
["關子嶺教會","頂關子嶺"], // 頂關子嶺
["南寮路口"], // 南寮路口
["坪頂"], // 坪頂
["後坑","石埤","南寮","崁頂福安宮"], // 南寮
["穆聖","李子園小舖","大鋤花間","龍湖山農莊"], // 大鋤花間
["檳榔宅"], // 檳榔宅
["仙公廟牌樓","凍腳","仙公廟"] // 仙公廟
];
yellow_13_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[26,26,26,26,26],
[39,31,26,26,26,26],
[42,34,28,26,26,26,26],
[47,39,34,29,26,26,26,26],
[49,41,35,31,26,26,26,26,26],
[54,46,41,36,30,26,26,26,26,26],
[73,66,60,55,49,34,32,26,26,26,26],
[81,73,68,63,57,42,40,34,32,27,26,26],
[90,82,76,72,65,51,48,43,41,35,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_13_main_stop_name = ["白河國中","白河站","河東國小","仙草埔","關子嶺","南寮","大鋤花間","仙公廟"];
yellow_13_main_stop_time_consume = [0, 10, 14, 21, 29, 37, 46, 60];
yellow_13_important_stop = [0, 1, 4, 5, 7]; // 白河國中, 白河站, 關子嶺, 南寮, 仙公廟
var Baihe_Junior_High_School = 0; // 白河國中
var Baihe = 1; // 白河站
var Hedong_Elementary_School = 2; // 河東國小
var Siancaopu = 3; // 仙草埔
var Guanzihling = 4; // 關子嶺
var Nanliao = 5; // 南寮
var Daichu_Farm = 6; // 大鋤花間
var Siangong_Temple = 7; // 仙公廟
yellow_13_time_go = [["08:30",Baihe,Nanliao,[[Nanliao,3]]],["08:50",Baihe,Siangong_Temple],["11:00",Baihe,Siangong_Temple],["11:10",Baihe,Nanliao,[[Nanliao,3]]],["13:20",Baihe,Siangong_Temple],["14:10",Baihe,Nanliao,[[Nanliao,3]]],["16:50",Baihe_Junior_High_School,Nanliao,['L',[Baihe,10,Hedong_Elementary_School,1,Siancaopu,1,Guanzihling,-1,Nanliao,2]]],["18:35",Baihe,Nanliao,[[Nanliao,3]]]];
yellow_13_time_return = [["05:50",Nanliao,Baihe_Junior_High_School,[[Guanzihling,2,Siancaopu,1,Hedong_Elementary_School,1,Baihe,2,Baihe_Junior_High_School,-3]]],["09:10",Nanliao,Baihe,[[Siancaopu,-1,Baihe,4]]],["09:50",Siangong_Temple,Baihe,[[Daichu_Farm,-6,Nanliao,-1,Guanzihling,1,Siancaopu,1,Hedong_Elementary_School,1,Baihe,4]]],["11:50",Nanliao,Baihe,[[Baihe,3]]],["12:00",Siangong_Temple,Baihe,[[Daichu_Farm,-6,Nanliao,-1,Guanzihling,1,Siancaopu,1,Hedong_Elementary_School,1,Baihe,4]]],["14:20",Siangong_Temple,Baihe,[[Daichu_Farm,-6,Nanliao,-1,Guanzihling,1,Siancaopu,1,Hedong_Elementary_School,1,Baihe,4]]],["14:50",Nanliao,Baihe,[[Baihe,3]]],["17:50",Nanliao,Baihe,['L',[Guanzihling,2,Siancaopu,-1,Hedong_Elementary_School,1,Baihe,1]]]];