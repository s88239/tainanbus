<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php
	$type_name = $_GET['type'];
	switch ($type_name) {
		case 'green':
			$ch_name = '綠幹支線';
			break;
		case 'blue':
			$ch_name = '藍幹支線';
			break;
		case 'red':
			$ch_name = '紅幹支線';
			break;
		case 'brown':
			$ch_name = '棕幹支線';
			break;
		case 'orange':
			$ch_name = '橘幹支線';
			break;
		case 'yellow':
			$ch_name = '黃幹支線';
			break;
		case 'hsr_shuttle':
			$ch_name = '高鐵轉乘公車';
			break;
		case 'city_bus':
			$ch_name = '市區公車';
			break;
		default:
			$ch_name = '公車';
			break;
	}
?>
<title>大台南公車 ─ <?php echo $ch_name; ?>路線總覽</title>
<link href="img/web_icon.ico" rel="SHORTCUT ICON" />
<link href="css/map.css" rel="stylesheet" />
<script language="javascript" src="tools/zoom.js"></script>
</head>
<body>
<div>
	<input type="button" onclick="calculate(1);" value="＋" />
	<input type="button" onclick="calculate(-1);" value="－" />
	<input type="button" onclick="calculate(0);" value="原始大小" />
</div>
<div class="map_img" id="route_map" style="overflow:auto;">
	<img class="map_img" src="route/overview/<?php echo $type_name; ?>.jpg" alt="台南市<?php echo $ch_name; ?>路線總覽" />
</div>

</body>

</html>
