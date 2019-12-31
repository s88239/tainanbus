<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="../img/web_icon.ico" rel="SHORTCUT ICON" />
	<link href="build/TDivbus.min.css" rel="stylesheet" />
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
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'brown':
			$ch_name = (count($str_sec)==1)?'棕幹線':'棕'.$str_sec[1];
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'orange':
			$ch_name = (count($str_sec)==1)?'橘幹線':'橘'.$str_sec[1];
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'yellow':
			$ch_name = (count($str_sec)==1)?'黃幹線':'黃'.$str_sec[1];
			if(count($str_sec)>2) $branch_flag = true;
			break;
		case 'hsr':
			if($str_sec[2]=='166') $ch_name = '嘉義縣市區公車-'.strtoupper($str_sec[2]).'路電動巴士';
			else $ch_name = '高鐵快捷公車'.strtoupper($str_sec[2]);
			break;
		case 'tour':
			$ch_name = '台灣好行'.$str_sec[2].'路';
			break;
		case 'STSP':
			if($str_sec[1]=='red') $ch_route_name = '紅線(北環東線)';
			else if($str_sec[1]=='orange') $ch_route_name = '橘線(北環西線)';
			else if($str_sec[1]=='blue') $ch_route_name = '藍線(南環線)';
			else if($str_sec[1]=='green') $ch_route_name = '綠線(高鐵線)';
			else if($str_sec[1]=='Shanhua') $ch_route_name = '棕線(善化線)';
			else if($str_sec[1]=='holiday') $ch_route_name = '假日線';
			$ch_name = '南科巡迴巴士'.$ch_route_name;
			break;
		case 'sightseeing':
			if($str_sec[1]=='western') $ch_route_name = '西環線';
			$ch_name = '臺南雙層巴士'.$ch_route_name;
			break;
		default:
			if(count($str_sec)>3) $ch_name = $str_sec[2].'-'.$str_sec[3].'路'; // e.g. 77-1
			else $ch_name = $str_sec[2].'路';
			break;
	}
	if($branch_flag){
		if( strcmp($route_name, 'yellow_12_1')==0 ){
			$route_name = $str_sec[0].'_'.$str_sec[1]; // other branch is merged. e.g. y12-1 is contained in y12
		}
		$ch_name = $ch_name.'-'.$str_sec[2];
	}
	echo '<title>'.$ch_name.' ─ 路線地圖 | Tainan Bus for FUN</title>';
?>
</head>
<body>
	<div id="map" bus-ref="<?php echo $route_name; ?>" style="width:100vw;height:100vh;"></div>
</body>
</html>