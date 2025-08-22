<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Database connection
$host = "localhost";
$user = "root";  // default XAMPP user
$pass = "";      // default XAMPP password is empty
$db   = "landingdb";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

$sql = "SELECT * FROM feature";
$result = $conn->query($sql);

$features = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $features[] = $row;
    }
}

echo json_encode($features);
$conn->close();
?>
