<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";   // change if needed
$user = "root";        // your MySQL username
$pass = "";            // your MySQL password
$db   = "landingdb";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Fetch single row
$sql = "SELECT * FROM pixelgrade LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "No data found"]);
}

$conn->close();
?>
