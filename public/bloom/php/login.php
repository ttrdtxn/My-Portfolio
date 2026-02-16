<?php
header('Content-Type: application/json'); // Ensure JSON response
session_start();
include '../config.php'; // Adjust based on your directory structure

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['role'] = $user['role'];

    // Ensure response has 'message' and 'status'
    echo json_encode([
        "status" => "success",
        "message" => "Login Successful!",
        "redirect" => "buyer.html" // Change this based on role if needed
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid username or password."
    ]);
}

exit;
?>
