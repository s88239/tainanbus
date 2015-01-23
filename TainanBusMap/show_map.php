<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="SHORTCUT ICON" href="../img/web_icon.ico">
	<link href="build/TDivbus.min.css" rel="stylesheet">
	<link href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" rel="stylesheet" />
	<link href="css/MarkerCluster.css" rel="stylesheet" />
	<link href="css/MarkerCluster.Default.css" rel="stylesheet" />
	<link href="../css/default.css" rel="stylesheet" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="js/jquery.blockUI.js"></script>
	<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
	<script src="js/leaflet.markercluster.js"></script>
	<script src="build/CommonVariable.min.js"></script>
	<script src="build/TainanBusRender.min.js"></script>
	<script src="build/TainanBusDiv.min.js"></script>
<?php
	$route_name = $_GET['route'];
	$str_sec = explode("_",$route_name);
	$branch_flag = false;
	switch ($str_sec[0]) {
		case 'green':
			$ch_name = (count($str_sec)==1)?'綠幹線':'綠'.$str_sec[1];
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'blue':
			$ch_name = (count($str_sec)==1)?'藍幹線':'藍'.$str_sec[1];
			break;
		case 'red':
			$ch_name = (count($str_sec)==1)?'紅幹線':'紅'.$str_sec[1];
			break;
		case 'brown':
			$ch_name = (count($str_sec)==1)?'棕幹線':'棕'.$str_sec[1];
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'orange':
			$ch_name = (count($str_sec)==1)?'橘幹線':'橘'.$str_sec[1];
			break;
		case 'yellow':
			$ch_name = (count($str_sec)==1)?'黃幹線':'黃'.$str_sec[1];
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'hsr':
			$ch_name = '高鐵快捷公車'.strtoupper($str_sec[2]);
			break;
		case 'tour':
			$ch_name = '台灣好行'.$str_sec[2].'路';
			break;
		default:
			$ch_name = $str_sec[2].'路';
			break;
	}
	if($branch_flag){
		$route_name = $str_sec[0].'_'.$str_sec[1];
		if( strcmp($str_sec[2], 'guanziling')==0 ) $ch_name = '關子嶺假日公車';
		else $ch_name = $ch_name.'-'.$str_sec[2];
	}
	echo '<title>'.$ch_name.' ─ 路線地圖 | Tainan Bus for FUN</title>';
?>
</head>
<body>
	<div id="map" bus-ref="<?php echo $route_name; ?>" style="width:100vw;height:100vh;"></div>
</body>
</html>