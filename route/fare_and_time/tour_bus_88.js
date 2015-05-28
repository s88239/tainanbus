tour_bus_88_interval_name = ["臺南"];
tour_bus_88_interval_stop = [
["臺南公園(公園路)","成功路","臺南火車站","縣知事官邸","東門圓環","延平郡王祠(開山路)","法華寺","誠品書局","文化中心",
"巴克禮公園","台糖長榮酒店","大林商圈","竹溪寺(健康路)","體育公園","大南門城","孔廟","山林事務所","鄭氏家廟","天壇(忠義路)",
"赤崁樓","水仙宮(民族路)","神農街","中正商圈","大億麗緻酒店、新光三越","水萍塭公園","市政中心(永華路)","億載金城","林默娘公園",
"安平港濱歷史公園","原住民文化會館","運河博物館","延平街","安平蚵灰窯文化館","安平古堡(安北路)","德記洋行、安平樹屋","古運河",
"觀光魚市場(碧海碼頭)","觀夕平台"]
];
tour_bus_88_stop_time_consume = [0,2,5,8,9,12,13,15,18,20,21,25,26,28,29,30,31,32,33,35,36,38,40,42,45,47,50,52,53,53,54,56,56,58,60,62,64,65]; // unreliable
// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
tour_bus_88_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","延平郡王祠<br />(開山路)","文化<br />中心","孔廟","赤崁樓","神農街","市政中心<br />(永華路)","億載<br />金城","安平古堡<br />(安北路)","觀夕<br />平台"];
tour_bus_88_main_stop_time_consume = [0, 5, 12, 18, 30, 35, 38, 47, 53, 63, 70];
tour_bus_88_important_stop = [0, 1, 10]; // 臺南公園(公園路), 臺南火車站, 觀夕平台
skip_stop = 3; // 孔廟
tour_bus_88_time_go = [["09:00",[skip_stop,[skip_stop,-10]]],["10:00",[skip_stop,[skip_stop,-10]]],
["11:00",[skip_stop,[skip_stop,-10]]],["12:00",[skip_stop,[skip_stop,-10]]],["13:00",[skip_stop,[skip_stop,-10]]],
["14:00",[skip_stop,[skip_stop,-10]]],["15:00",[skip_stop,[skip_stop,-10]]],["16:00",[skip_stop,[skip_stop,-10]]],
["17:00",[skip_stop,[skip_stop,-10]]],["18:00",[skip_stop,[skip_stop,-10]]]
];
tour_bus_88_time_return = [["10:15",[skip_stop,[skip_stop,-10]]],["11:15",[skip_stop,[skip_stop,-10]]],
["12:15",[skip_stop,[skip_stop,-10]]],["13:15",[skip_stop,[skip_stop,-10]]],["14:15",[skip_stop,[skip_stop,-10]]],
["15:15",[skip_stop,[skip_stop,-10]]],["16:15",[skip_stop,[skip_stop,-10]]],["17:15",[skip_stop,[skip_stop,-10]]],
["18:15",[skip_stop,[skip_stop,-10]]],["19:15",[skip_stop,[skip_stop,-10]]]
];
tour_bus_88_vacation_time_go = [["09:00"],["10:00"],["11:00"],["12:00"],["13:00"],["14:00"],["15:00"],["16:00"],["17:00"],["18:00"]];
tour_bus_88_vacation_time_return = [["10:25"],["11:25"],["12:25"],["13:25"],["14:25"],["15:25"],["16:25"],["17:25"],["18:25"],["19:25"]];
// holiday schedule
tour_bus_88_holiday_time_go = [["08:30"],["09:00",[skip_stop,[skip_stop,-10]]],["09:30"],["10:00",[skip_stop,[skip_stop,-10]]],
["10:30"],["11:00",[skip_stop,[skip_stop,-10]]],["11:30"],["12:00",[skip_stop,[skip_stop,-10]]],["12:30"],
["13:00",[skip_stop,[skip_stop,-10]]],["13:30"],["14:00",[skip_stop,[skip_stop,-10]]],["14:30"],
["15:00",[skip_stop,[skip_stop,-10]]],["15:30"],["16:00",[skip_stop,[skip_stop,-10]]],["16:30"],
["17:00",[skip_stop,[skip_stop,-10]]],["17:30"],["18:00",[skip_stop,[skip_stop,-10]]],["18:30"],
["19:00",[skip_stop,[skip_stop,-10]]]
];
tour_bus_88_holiday_time_return = [["10:00"],["10:30",[skip_stop,[skip_stop,-10]]],["11:00"],["11:30",[skip_stop,[skip_stop,-10]]],
["12:00"],["12:30",[skip_stop,[skip_stop,-10]]],["13:00"],["13:30",[skip_stop,[skip_stop,-10]]],["14:00"],
["14:30",[skip_stop,[skip_stop,-10]]],["15:00"],["15:30",[skip_stop,[skip_stop,-10]]],["16:00"],
["16:30",[skip_stop,[skip_stop,-10]]],["17:00"],["17:30",[skip_stop,[skip_stop,-10]]],["18:00"],
["18:30",[skip_stop,[skip_stop,-10]]],["19:00"],["19:30",[skip_stop,[skip_stop,-10]]],["20:00"],
["20:30",[skip_stop,[skip_stop,-10]]]
];