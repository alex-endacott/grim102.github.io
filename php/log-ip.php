<?php
$iplogfile = '../logs/ip-logs.txt';
$ipaddress = $_SERVER['REMOTE_ADDR'];
$timestamp = = date('d/m/Y h:i:s'):
$fp = fopen($iplogfile, 'a+');
chmod($iplogfile, 0777);
fwrite($fp, '['.$timestamp.']: '.$ipaddress.' PHP_EOL);
fclose($fp);
?>
