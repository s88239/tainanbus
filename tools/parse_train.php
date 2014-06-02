<?php
$url = $_POST['url'];
$searchdate = $_POST['searchdate'];
$fromstation = $_POST['fromstation'];
$tostation = $_POST['tostation'];
$trainclass = $_POST['trainclass'];
$fromtime = $_POST['fromtime'];
$totime = $_POST['totime'];

#$temp = $($url."&searchdate=".$searchdate."&fromstation=".$fromstation."&tostation=".$tostation."&trainclass=".$trainclass."&fromtime=".$fromtime."&totime=".$totime$fp = file($url));
$fp = file($url."&searchdate=".$searchdate."&fromstation=".$fromstation."&tostation=".$tostation."&trainclass=".$trainclass."&fromtime=".$fromtime."&totime=".$totime);

#echo '<xmp>';
echo $fp[64].$fp[70].$fp[71];
//print_r($fp);
echo '</xmp>';
?>