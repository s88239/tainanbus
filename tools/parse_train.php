<?php
$url = $_POST['url'];
$fp = file($url);
echo '<xmp>';
echo $fp[64].$fp[70].$fp[71];
//print_r($fp);
echo '</xmp>';
?>