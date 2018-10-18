yellow_4_interval_name = ["新營","副產","太康","五軍營","小腳腿","大腳腿","山仔腳","江南<br />渡假村","二重溪","瓦窯","果毅後<br />廟前","六甲"];
yellow_4_interval_stop = [ // checked 2016.10.08
["新營站","第三市場","新營國小","圓環(第一銀行)","新進路口","真武殿","南光中學"], // 新營
["副產","實驗所"], // 副產
["太康里","柳營奇美醫院","太康","太康農業專區"], // 太康
["五軍營","法主宮"], // 五軍營
["重溪","明聖殿","小腳腿","篤農里"], // 小腳腿
["大腳腿","大腳腿路口"], // 大腳腿
["山仔腳","旭山農會","新吉庄"], // 山仔腳
["江南渡假村"], // 江南渡假村
["二重溪","旭山里"], // 二重溪
["東瓦窯","瓦窯(柳營)"], // 瓦窯
["果毅國小","果毅後","果毅後廟前"], // 果毅後廟前
["福德祠","六甲市場","六甲國中","六甲衛生所","六甲"] // 六甲
];
yellow_4_fare = [
[26],
[26,26],
[26,26,26],
[26,26,26,26],
[34,26,26,26,26],
[38,28,26,26,26,26],
[45,35,30,26,26,26,26],
[49,39,34,26,26,26,26,26],
[53,43,38,30,26,26,26,26,26],
[61,52,47,39,27,26,26,26,26,26],
[66,56,51,43,32,28,26,26,26,26,26],
[84,74,69,61,50,46,39,35,31,26,26,26]
];
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
yellow_4_main_stop_name = ["新營站","柳營奇<br />美醫院","法主宮","明聖殿","小腳腿","山仔腳","二重溪","果毅後<br />廟前","六甲"];
yellow_4_main_stop_time_consume = [0, 13, 17, 19, 23, 30, 34, 40, 50];
yellow_4_important_stop = [0, 1, 4, 8]; // 新營站, 柳營奇美醫院, 小腳腿, 六甲
var Sinying = 0; // 新營站
var Liouying_Chi_Mei_Hospital = 1; // 柳營奇美醫院
var Siaojiaotuei = 4; // 小腳腿
var Lioujia = 8; // 六甲
yellow_4_time_go = [["06:40"],["08:40"],["10:10"],["12:10"],["14:00"],["16:15"],["18:45"]];
yellow_4_time_return = [["05:50",[Liouying_Chi_Mei_Hospital,[Lioujia-1,-2,Lioujia-2,2]]],["07:40",[[Siaojiaotuei,1,Liouying_Chi_Mei_Hospital,1,Sinying,-2]]],["09:40",[[Siaojiaotuei,1,Liouying_Chi_Mei_Hospital,1,Sinying,-2]]],
["11:10",[[Lioujia-1,-1,Liouying_Chi_Mei_Hospital,1,Sinying,-2]]],["13:10",[[Lioujia-1,-1,Liouying_Chi_Mei_Hospital,1,Sinying,-2]]],["14:55",[[Liouying_Chi_Mei_Hospital,1,Sinying,-1]]],["17:15",[[Siaojiaotuei,1,Liouying_Chi_Mei_Hospital,1,Sinying,-2]]]];