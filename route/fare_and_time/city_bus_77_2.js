// format = [time at the start stop] or
// [time, other] or
// [time, start_stop, end_stop, other]
city_bus_77_2_main_stop_name = ["安平<br />漁人碼頭","億載金城","漁光里","香腸<br />博物館","黃金海岸<br />遊客中心","親水公園","茄萣濱海<br />遊樂區","興達港<br />觀光魚市","興達港<br />立體停車場"];
city_bus_77_2_main_stop_time_consume = [0, 2, 6, 10, 20, 25, 30, 35, 35];
city_bus_77_2_important_stop = [0, 2, 5, 7]; // 安平漁人碼頭, 漁光里, 親水公園, 興達港觀光魚市
var Anping_Fishermans_Wharf = 0; // 安平漁人碼頭
var Yuguang_Vil = 2; // 漁光里
var Riverbank_Park = 5; // 親水公園
var Singda_Harbor_Fish_Market = 7; // 興達港觀光魚市
city_bus_77_2_time_go = [["11:00",Anping_Fishermans_Wharf,Singda_Harbor_Fish_Market,[Yuguang_Vil]],["12:00",Anping_Fishermans_Wharf,Singda_Harbor_Fish_Market,[Yuguang_Vil]],["13:00",Anping_Fishermans_Wharf,Riverbank_Park,[[Yuguang_Vil+1,15]]],["14:00",Anping_Fishermans_Wharf,Riverbank_Park,[[Yuguang_Vil+1,15]]],["15:00",Anping_Fishermans_Wharf,Riverbank_Park,[[Yuguang_Vil+1,15]]],["16:00",Anping_Fishermans_Wharf,Riverbank_Park,[[Yuguang_Vil+1,15]]]];
city_bus_77_2_time_return = [["12:00",[Yuguang_Vil]],["13:00",[Yuguang_Vil]],["14:00",Riverbank_Park,Anping_Fishermans_Wharf,[[Yuguang_Vil,10,Yuguang_Vil-1,5]]],["15:00",Riverbank_Park,Anping_Fishermans_Wharf,[[Yuguang_Vil,10,Yuguang_Vil-1,5]]],["16:00",Riverbank_Park,Anping_Fishermans_Wharf,[[Yuguang_Vil,10,Yuguang_Vil-1,5]]],["17:00",Riverbank_Park,Anping_Fishermans_Wharf,[[Yuguang_Vil,10,Yuguang_Vil-1,5]]]];