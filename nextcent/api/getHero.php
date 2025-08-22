<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$host = "localhost";
$user = "root";   // default user
$pass = "";       // default password in XAMPP
$db   = "landingdb";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT title, subtitle, button_text, image_path FROM hero LIMIT 1";
$result = $conn->query($sql);

$data = $result->fetch_assoc();

echo json_encode($data);

$conn->close();
?>
