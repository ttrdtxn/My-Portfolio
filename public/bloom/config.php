<?php
$host = 'localhost';
$user = 'root';  // Change if you use different MySQL user
$pass = '';      // Add password if required
$dbname = 'ecommerce';

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
