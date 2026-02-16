-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2025 at 03:14 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_access`
--

CREATE TABLE `admin_access` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL DEFAULT 'admin',
  `password` varchar(255) NOT NULL DEFAULT '$2y$10$e0NC7U6ds9u2.4PKD8xFjOTUoGboOQzR.a5Rx9Gr8ed8Z8iHR.BNi'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `buyer_info`
--

CREATE TABLE `buyer_info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer_info`
--

INSERT INTO `buyer_info` (`id`, `user_id`, `full_name`, `email`, `phone`, `address`) VALUES
(5, 115, 'Pamela Eduarte', 'pam@gmail.com', '09502445798', 'Las Vegas, NV'),
(8, 138, 'Harry Potter', '', '', 'Los Angeles, CA');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_type` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `seller_id` int(11) NOT NULL,
  `seller_name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_type`, `price`, `stock`, `description`, `seller_id`, `seller_name`, `created_at`) VALUES
(32, 'Manure', 'Fertilizers', 45.00, 455, 'Manree', 123, 'farmer_62', '2025-02-05 08:23:58'),
(33, 'Slurry', 'Fertilizers', 65.00, 800, 'aws', 123, 'farmer_62', '2025-02-05 08:25:02'),
(34, 'Granules', 'Fertilizers', 87.00, 80, 'aws', 123, 'farmer_62', '2025-02-05 08:26:11'),
(35, 'Urea', 'Fertilizers', 87.00, 88, 'aws\r\n', 123, 'farmer_62', '2025-02-05 08:27:38'),
(36, 'Cotton', 'Crops', 21.00, 34, 'da', 123, 'farmer_62', '2025-02-05 08:29:34'),
(37, 'Sugarcane', 'Crops', 21.00, 333, 'aws', 123, 'farmer_62', '2025-02-05 08:31:46'),
(38, 'Canola', 'Crops', 34.00, 234, 'aws', 123, 'famer_76', '2025-02-05 08:32:33'),
(39, 'Slurry', 'Fertilizers', 12.00, 500, 'wada', 123, 'famer2', '2025-02-05 13:05:18');

-- --------------------------------------------------------

--
-- Table structure for table `seller_info`
--

CREATE TABLE `seller_info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shop_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `business_address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller_info`
--

INSERT INTO `seller_info` (`id`, `user_id`, `shop_name`, `email`, `phone`, `business_address`) VALUES
(2, 137, 'Miku Farm', 'olsen@gmail.com', '123', 'Los Angeles, CA');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('buyer','seller','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(115, 'pam_68', '$2y$10$9jSvaCXDj.0joi/qexY.1uX.G4hR1USgJCJsmH6F4Me4xdG3HRZiK', 'buyer'),
(116, 'hermesFarm', '$2y$10$ubRaeXexb.ZZHUMtKlEhdOhzQG4ElSXGfjkwP5PThDie/RSuQTiWK', 'buyer'),
(117, 'mikue', '$2y$10$duEXZiry9vcsSj5WWLi79uZf1pA.upGqy7F5D4SNYVNKkl7ztDWnW', 'buyer'),
(137, 'famer2', '$2y$10$O8K6ab5v5AZ7lEQyC80.feGPc.ZjZqxsuBu5XbRAdnY582us4eAGC', 'seller'),
(138, 'famer3', '$2y$10$LIPwDuvrZQTy6RWLax1tkuNblK6iaERQ4VjayE2zoPwAQf9kDvK5S', 'buyer'),
(139, 'granger_farm68', '$2y$10$wNojcpO4iaonB1FlQE7ib.53E3Ktc2DtZcvef7HirWN5CB.d5/3sK', 'buyer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_access`
--
ALTER TABLE `admin_access`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `buyer_info`
--
ALTER TABLE `buyer_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_info`
--
ALTER TABLE `seller_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_access`
--
ALTER TABLE `admin_access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buyer_info`
--
ALTER TABLE `buyer_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `seller_info`
--
ALTER TABLE `seller_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buyer_info`
--
ALTER TABLE `buyer_info`
  ADD CONSTRAINT `buyer_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `seller_info`
--
ALTER TABLE `seller_info`
  ADD CONSTRAINT `seller_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
