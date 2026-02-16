<?php
include '../config.php';
header('Content-Type: application/json'); // Ensure correct response type
ob_start(); // Start output buffering

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Debugging: Log all received POST data
    error_log(print_r($_POST, true));

    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $role = $_POST['role'];

    $stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $role);

    if ($stmt->execute()) {
        $user_id = $stmt->insert_id;
        $success = false;

        if ($role === 'buyer') {
            $stmt = $conn->prepare("INSERT INTO buyer_info (user_id, full_name, email, phone, address) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("issss", $user_id, $_POST['full_name'], $_POST['email'], $_POST['phone'], $_POST['address']);
            $success = $stmt->execute();
        } elseif ($role === 'seller') {
            $stmt = $conn->prepare("INSERT INTO seller_info (user_id, shop_name, email, phone, business_address) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("issss", $user_id, $_POST['shop_name'], $_POST['email'], $_POST['phone'], $_POST['business_address']);
            $success = $stmt->execute();
        }

        if ($success) {
            echo json_encode(["status" => "success", "message" => "Registration successful"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error saving user details"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Error creating user"]);
    }
}

ob_end_flush(); // Flush output buffer
?>
