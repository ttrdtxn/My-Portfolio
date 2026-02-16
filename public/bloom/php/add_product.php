<?php
include '../config.php';
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);


ob_start(); // Start output buffering

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $type = $_POST['type'];
    $price = $_POST['price'];
    $stock = $_POST['stock'];
    $description = $_POST['description'];
    $seller_id = $_POST['seller_id'];
    $seller_name = $_POST['seller_name'];

    $stmt = $conn->prepare("INSERT INTO products (product_name, product_type, price, stock, description, seller_id, seller_name) VALUES (?, ?, ?, ?, ?, ?, ?)");
    
    if (!$stmt) {
        die(json_encode(["status" => "error", "message" => "SQL Error: " . $conn->error]));
    }

    $stmt->bind_param("ssdisis", $name, $type, $price, $stock, $description, $seller_id, $seller_name);

    if ($stmt->execute()) {
        ob_clean(); // Clear any unwanted output before JSON response
        echo json_encode(["status" => "success", "message" => "Product added successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to add product: " . $stmt->error]);
    }
    
    $stmt->close();
    $conn->close();
}
?>
