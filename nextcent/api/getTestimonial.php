<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root"; // default
$password = "";     // default
$dbname = "landingdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT * FROM testimonial LIMIT 1";
$result = $conn->query($sql);

$data = array();
if ($result && $result->num_rows > 0) {
  $data = $result->fetch_assoc();
}

echo json_encode($data);

$conn->close();
?>
