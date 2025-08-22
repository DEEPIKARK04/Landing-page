<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = "localhost";
$user = "root";  // change if your MySQL user is different
$pass = "";      // set your MySQL password if any
$db   = "landingdb";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Fetch header (only one row)
$headerSql = "SELECT title, subtitle FROM stats_header LIMIT 1";
$headerRes = $conn->query($headerSql);
$header = $headerRes->fetch_assoc();

// Fetch stats
$sql = "SELECT icon, value, label FROM stats";
$result = $conn->query($sql);

$stats = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $stats[] = $row;
    }
}

echo json_encode([
    "header" => $header,
    "stats" => $stats
]);

$conn->close();
?>
