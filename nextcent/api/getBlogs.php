<?php
// getBlogs.php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$host = "localhost";
$user = "root";   // default XAMPP user
$pass = "";       // default XAMPP password is empty
$db   = "landingdb";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get section header/subhead
$section_sql = "SELECT header, subhead FROM blog_section LIMIT 1";
$section_result = $conn->query($section_sql);
$section_data = $section_result->fetch_assoc();

// Get blog cards (without subtitle now)
$blog_sql = "SELECT img, title FROM blog";
$blog_result = $conn->query($blog_sql);
$blogs = [];

while ($row = $blog_result->fetch_assoc()) {
    $blogs[] = $row;
}

echo json_encode([
    "section" => $section_data,
    "blogs" => $blogs
]);

$conn->close();
?>
