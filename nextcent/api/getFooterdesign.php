<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json");

$servername = "localhost";
$username = "root"; // default in XAMPP
$password = "";     // default is empty
$dbname = "landingdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Fetch footerdesign data (only 1 row)
$sql = "SELECT * FROM footerdesign LIMIT 1";
$result = $conn->query($sql);

$data = array();
if ($result && $result->num_rows > 0) {
    $data = $result->fetch_assoc();
}

// Return JSON
echo json_encode($data);

$conn->close();
?>
