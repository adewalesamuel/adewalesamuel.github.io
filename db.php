<?php 

$hostname = "localhost";
$username = "id15113629_id7553592_samueladewale";
$password = "gDP5!%ffA]i%bq|D";
$database = "id15113629_id7553592_base";

$conn = new mysqli($hostname, $username, $password, $database);

if ($conn->connect_error) {
	die("Probleme de connection : " . $conn->connect_error);
}
?>