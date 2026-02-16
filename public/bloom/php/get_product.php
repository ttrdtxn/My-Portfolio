<?php
include '../config.php';

header('Content-Type: application/json');

$result = $conn->query("SELECT id, product_name, product_type, price, stock, description, seller_id, seller_name, created_at FROM products ORDER BY created_at DESC");

$products = [];

while ($row = $result->fetch_assoc()) {
    // Set a default image based on product name
    $row['image_url'] = "img/products/" . strtolower(str_replace(' ', '_', $row['product_name'])) . ".jpg";
    
    $products[] = $row;
}

echo json_encode($products);
$conn->close();
?>
