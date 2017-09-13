// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
tour_bus_88_main_stop_name = ["臺南公園<br />(公園路)","臺南<br />火車站","延平<br />郡王祠","文化中心","葉石濤文<br />學紀念館","赤崁樓","神農街、<br />水仙宮","小西門<br />(大億麗緻)","億載<br />金城","原住民<br />文化會館","安平古堡<br />(安北路)","觀夕<br />平台"];
tour_bus_88_main_stop_time_consume = [0, 5, 12, 18, 30, 35, 38, 43, 53, 56, 63, 70];
tour_bus_88_important_stop = [0, 1, 3, 5, 9, 11]; // 臺南公園(公園路), 臺南火車站, 文化中心, 赤崁樓, 原住民文化會館, 觀夕平台
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