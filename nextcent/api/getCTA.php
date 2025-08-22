<?php
// getCTA.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database connection
$host = "localhost";
$user = "root";   // change if needed
$pass = "";       // your MySQL password
$dbname = "landingdb";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// Fetch CTA (latest record)
$sql = "SELECT * FROM cta ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(["error" => "No CTA data found"]);
}

$conn->close();
?>
