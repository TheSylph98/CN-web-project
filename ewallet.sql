-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2019 at 05:06 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ewallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `chuyentien`
--

CREATE TABLE `chuyentien` (
  `id` int(11) NOT NULL,
  `sotien` int(11) NOT NULL,
  `noidung` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_chuyen` int(11) NOT NULL,
  `id_nhan` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `danhba`
--

CREATE TABLE `danhba` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `danhba`
--

INSERT INTO `danhba` (`id`, `users_id`, `friend_id`, `created_at`, `updated_at`) VALUES
(1, 1, 3, '2019-05-18 08:10:38', NULL),
(2, 1, 3, '2019-05-18 08:10:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loaihoadon`
--

CREATE TABLE `loaihoadon` (
  `id` int(11) NOT NULL,
  `tenloai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loaihoadon`
--

INSERT INTO `loaihoadon` (`id`, `tenloai`) VALUES
(1, 'Tien dien'),
(2, 'Tien Nuoc'),
(3, 'Tien Nha'),
(4, 'Tien Mang');

-- --------------------------------------------------------

--
-- Table structure for table `napthe`
--

CREATE TABLE `napthe` (
  `id` int(11) NOT NULL,
  `sotien` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `nhamang_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `napthe`
--

INSERT INTO `napthe` (`id`, `sotien`, `users_id`, `nhamang_id`, `created_at`, `updated_at`) VALUES
(1, 5000, 1, 1, NULL, NULL),
(2, 100000, 1, 1, '2019-05-17 07:39:44', '2019-05-17 07:39:44'),
(3, 100000, 1, 1, '2019-05-17 07:40:05', '2019-05-17 07:40:05'),
(4, 200000, 1, 2, '2019-05-17 07:44:45', '2019-05-17 07:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `naptien`
--

CREATE TABLE `naptien` (
  `id` int(11) NOT NULL,
  `sotien` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `nganhang`
--

CREATE TABLE `nganhang` (
  `id` int(11) NOT NULL,
  `ten_nganhang` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nganhang`
--

INSERT INTO `nganhang` (`id`, `ten_nganhang`) VALUES
(1, 'ViettinBank'),
(2, 'BIDV'),
(3, 'ACB'),
(4, 'DongABank'),
(5, 'Vietcombank'),
(6, 'SCBBank'),
(7, 'HSBC'),
(8, 'Agribank'),
(9, 'Eximbank'),
(10, 'Sacombank'),
(11, 'Techcombank'),
(12, 'VPBank'),
(13, 'MBBank');

-- --------------------------------------------------------

--
-- Table structure for table `nhamang`
--

CREATE TABLE `nhamang` (
  `id` int(11) NOT NULL,
  `tennhamang` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nhamang`
--

INSERT INTO `nhamang` (`id`, `tennhamang`) VALUES
(1, 'Vietel'),
(2, 'Garena'),
(3, 'VinaPhone'),
(4, 'MobilePhone');

-- --------------------------------------------------------

--
-- Table structure for table `ruttien`
--

CREATE TABLE `ruttien` (
  `id` int(11) NOT NULL,
  `sotien` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `sotaikhoan` char(20) NOT NULL,
  `sotien` int(11) DEFAULT '5000000',
  `nganhang_id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`sotaikhoan`, `sotien`, `nganhang_id`, `users_id`, `created_at`, `updated_at`) VALUES
('1900018645', 5000000, 2, NULL, NULL, NULL),
('190001864525', 5000000, 1, NULL, NULL, NULL),
('1984135535', 5000000, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `thanhtoan`
--

CREATE TABLE `thanhtoan` (
  `id` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT NULL,
  `sotien` int(11) NOT NULL,
  `loaihoadon_id` int(11) NOT NULL,
  `noidung` text,
  `trangthai` tinyint(1) DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thanhtoan`
--

INSERT INTO `thanhtoan` (`id`, `time`, `sotien`, `loaihoadon_id`, `noidung`, `trangthai`, `users_id`, `created_at`, `updated_at`) VALUES
(1, '2019-05-17 13:56:49', 5000, 1, '123', 0, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `thongbao`
--

CREATE TABLE `thongbao` (
  `id` int(11) NOT NULL,
  `tieude` varchar(255) NOT NULL,
  `noidung` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `diachi` varchar(200) DEFAULT NULL,
  `sodienthoai` int(11) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `sotien` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `ten`, `email`, `password`, `diachi`, `sodienthoai`, `remember_token`, `sotien`, `created_at`, `updated_at`) VALUES
(1, 'sylph', '1234@gmail.com', '$2y$10$OFW1QC91LLt2//pp.uOEhubivtgFG4vfR/rRb.Htnhhyz78GOhGWu', 'Ha Noi - Viet Nam', 19008198, NULL, 4600000, '2019-05-17 06:54:17', '2019-05-17 07:44:45'),
(2, 'sylph1', '1234d@gmail.com', '$2y$10$MqIS8YDDbb7giDcwVXpe0.eoPMSUuuXqSIxZkJyIAxaLjcTPxRgti', 'Ha Noi - Viet Nam', 19008190, NULL, 0, '2019-05-17 06:54:40', '2019-05-17 06:54:40'),
(3, 'sylph12', '123sa4d@gmail.com', '$2y$10$UMn3AvZz9VgCimywtdDs8OqFW0pzno6fpOj/C0HAAVsnTEsuG3W5i', 'Ha Noi - Viet Nam', 19008199, NULL, 0, '2019-05-17 06:55:00', '2019-05-17 06:55:00'),
(4, 'Tung Tran Thanh', 'tung@mail', '$2y$10$vvtXf7/oMn/qvUsGwRsq4e7I3RkdWTyvHUrmBzGGw6vG061Nczw5y', 'Hanoi, Vietnam, Minh Khai', 555555555, NULL, 0, '2019-05-18 07:28:04', '2019-05-18 07:35:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chuyentien`
--
ALTER TABLE `chuyentien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chuyentien_users` (`id_nhan`),
  ADD KEY `chuyentien_users1` (`id_chuyen`);

--
-- Indexes for table `danhba`
--
ALTER TABLE `danhba`
  ADD PRIMARY KEY (`id`),
  ADD KEY `danhba_users` (`friend_id`),
  ADD KEY `danhba_users1` (`users_id`);

--
-- Indexes for table `loaihoadon`
--
ALTER TABLE `loaihoadon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `napthe`
--
ALTER TABLE `napthe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `napthe_nhamang` (`nhamang_id`),
  ADD KEY `napthe_users` (`users_id`);

--
-- Indexes for table `naptien`
--
ALTER TABLE `naptien`
  ADD PRIMARY KEY (`id`,`time`),
  ADD KEY `naptien_users` (`users_id`);

--
-- Indexes for table `nganhang`
--
ALTER TABLE `nganhang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nhamang`
--
ALTER TABLE `nhamang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ruttien`
--
ALTER TABLE `ruttien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruttien_users` (`users_id`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`sotaikhoan`),
  ADD KEY `taikhoan_nganhang` (`nganhang_id`),
  ADD KEY `taikhoan_users` (`users_id`);

--
-- Indexes for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `thanhtoan_loaihoadon` (`loaihoadon_id`),
  ADD KEY `thanhtoan_users` (`users_id`);

--
-- Indexes for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chuyentien`
--
ALTER TABLE `chuyentien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danhba`
--
ALTER TABLE `danhba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `loaihoadon`
--
ALTER TABLE `loaihoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `napthe`
--
ALTER TABLE `napthe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `naptien`
--
ALTER TABLE `naptien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nganhang`
--
ALTER TABLE `nganhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `nhamang`
--
ALTER TABLE `nhamang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ruttien`
--
ALTER TABLE `ruttien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `thongbao`
--
ALTER TABLE `thongbao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chuyentien`
--
ALTER TABLE `chuyentien`
  ADD CONSTRAINT `chuyentien_users` FOREIGN KEY (`id_nhan`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `chuyentien_users1` FOREIGN KEY (`id_chuyen`) REFERENCES `users` (`id`);

--
-- Constraints for table `danhba`
--
ALTER TABLE `danhba`
  ADD CONSTRAINT `danhba_users` FOREIGN KEY (`friend_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `danhba_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `napthe`
--
ALTER TABLE `napthe`
  ADD CONSTRAINT `napthe_nhamang` FOREIGN KEY (`nhamang_id`) REFERENCES `nhamang` (`id`),
  ADD CONSTRAINT `napthe_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `naptien`
--
ALTER TABLE `naptien`
  ADD CONSTRAINT `naptien_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `ruttien`
--
ALTER TABLE `ruttien`
  ADD CONSTRAINT `ruttien_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD CONSTRAINT `taikhoan_nganhang` FOREIGN KEY (`nganhang_id`) REFERENCES `nganhang` (`id`),
  ADD CONSTRAINT `taikhoan_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD CONSTRAINT `thanhtoan_loaihoadon` FOREIGN KEY (`loaihoadon_id`) REFERENCES `loaihoadon` (`id`),
  ADD CONSTRAINT `thanhtoan_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
