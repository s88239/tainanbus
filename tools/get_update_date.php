<?php
date_default_timezone_set("Asia/Taipei");
$route_name = $_GET["route"];
if($route_name) {
	$file_path = "../route/fare_and_time/".$route_name.".js";
	echo date("Y/m/d",filemtime($file_path));
}
?>