<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$host = "localhost";
$user = "root";   // default XAMPP user
$pass = "";       // default password
$db   = "landingdb";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Fetch all logos
$sql = "SELECT title, subtitle, logo_path FROM client";
$result = $conn->query($sql);

$clients = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $clients[] = $row;
    }
}

echo json_encode($clients);

$conn->close();
?>
