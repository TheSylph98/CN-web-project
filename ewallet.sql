-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 21, 2019 at 08:49 AM
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
  `sotien` int(11) NOT NULL,
  `noidung` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_chuyen` int(11) DEFAULT NULL,
  `id_nhan` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chuyentien`
--

INSERT INTO `chuyentien` (`sotien`, `noidung`, `time`, `id_chuyen`, `id_nhan`, `created_at`, `updated_at`, `id`) VALUES
(7000, 'chuyen tien', '2019-05-20 15:44:45', 1, 2, '2019-05-20 08:44:45', '2019-05-20 08:44:45', 1),
(2000, 'aaa', '2019-05-20 15:46:52', 1, 2, '2019-05-20 08:46:52', '2019-05-20 08:46:52', 2),
(6000, 'aaa', '2019-05-20 15:48:29', 1, 2, '2019-05-20 08:48:29', '2019-05-20 08:48:29', 3),
(5000, 'affdfd', '2019-05-20 15:48:54', 1, 2, '2019-05-20 08:48:54', '2019-05-20 08:48:54', 4),
(3000, 'sdads', '2019-05-20 15:49:42', 1, 2, '2019-05-20 08:49:42', '2019-05-20 08:49:42', 5),
(3000, 'sdads', '2019-05-20 15:51:41', 1, 2, '2019-05-20 08:51:41', '2019-05-20 08:51:41', 6),
(20000, 'chuyen tien', '2019-05-20 16:41:04', 1, 2, '2019-05-20 09:41:04', '2019-05-20 09:41:04', 7),
(4000, 'tien nha', '2019-05-20 16:49:32', 1, 3, '2019-05-20 09:49:32', '2019-05-20 09:49:32', 8),
(2000, 'asfdfd', '2019-05-20 16:50:06', 1, 3, '2019-05-20 09:50:06', '2019-05-20 09:50:06', 9),
(2000, 'asfdfd', '2019-05-20 16:51:54', 1, 3, '2019-05-20 09:51:54', '2019-05-20 09:51:54', 10),
(2000, 'asfdfd', '2019-05-20 16:53:16', 1, 3, '2019-05-20 09:53:16', '2019-05-20 09:53:16', 11),
(4000, 'jjhj', '2019-05-20 17:02:28', 1, 2, '2019-05-20 10:02:28', '2019-05-20 10:02:28', 12),
(5000, 'chuyen tien', '2019-05-21 06:34:18', 3, 1, '2019-05-20 23:34:18', '2019-05-20 23:34:18', 13);

-- --------------------------------------------------------

--
-- Table structure for table `danhba`
--

CREATE TABLE `danhba` (
  `users_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `danhba`
--

INSERT INTO `danhba` (`users_id`, `friend_id`, `created_at`, `updated_at`, `id`) VALUES
(1, 2, '2019-05-20 07:55:01', '2019-05-20 07:55:01', 10),
(1, 3, '2019-05-20 09:46:39', '2019-05-20 09:46:39', 12);

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `id` int(11) NOT NULL,
  `mahoadon` varchar(20) NOT NULL,
  `sotien` int(11) NOT NULL,
  `ten_nhacungcap` varchar(255) NOT NULL,
  `loaihoadon_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `loaihoadon`
--

CREATE TABLE `loaihoadon` (
  `tenloai` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `napthe`
--

CREATE TABLE `napthe` (
  `sotien` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `nhamang_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `napthe`
--

INSERT INTO `napthe` (`sotien`, `users_id`, `nhamang_id`, `created_at`, `updated_at`, `id`) VALUES
(50000, 1, 1, '2019-05-20 09:01:12', '2019-05-20 09:01:12', 1),
(10000, 1, 2, '2019-05-20 09:40:34', '2019-05-20 09:40:34', 2),
(50000, 2, 2, '2019-05-20 21:30:54', '2019-05-20 21:30:54', 3),
(20000, 1, 2, '2019-05-20 21:38:50', '2019-05-20 21:38:50', 4),
(20000, 1, 2, '2019-05-20 21:39:04', '2019-05-20 21:39:04', 5),
(20000, 1, 2, '2019-05-20 21:39:27', '2019-05-20 21:39:27', 6);

-- --------------------------------------------------------

--
-- Table structure for table `naptien`
--

CREATE TABLE `naptien` (
  `sotien` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL,
  `id_taikhoan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `naptien`
--

INSERT INTO `naptien` (`sotien`, `time`, `users_id`, `created_at`, `updated_at`, `id`, `id_taikhoan`) VALUES
(10000, '2019-05-21 06:28:05', 1, '2019-05-20 23:28:05', '2019-05-20 23:28:05', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `nganhang`
--

CREATE TABLE `nganhang` (
  `ten_nganhang` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nganhang`
--

INSERT INTO `nganhang` (`ten_nganhang`, `id`) VALUES
('Vietinbank', 1),
('ACB', 2),
('MBBank', 3),
('DongABank', 4),
('SCBBank', 5),
('Techcombank', 6),
('Vietcombank', 7),
('Eximbank', 8),
('Sacombank', 9),
('Agribank', 10),
('HSBC', 11),
('BIDV', 12),
('VPBank', 13);

-- --------------------------------------------------------

--
-- Table structure for table `nhamang`
--

CREATE TABLE `nhamang` (
  `tennhamang` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nhamang`
--

INSERT INTO `nhamang` (`tennhamang`, `id`) VALUES
('Viettel', 1),
('Vinaphone', 2),
('Mobifone', 3),
('Vietnamobile', 4),
('Garena', 5);

-- --------------------------------------------------------

--
-- Table structure for table `ruttien`
--

CREATE TABLE `ruttien` (
  `sotien` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `sotaikhoan` char(20) NOT NULL,
  `sotien` int(11) NOT NULL DEFAULT '5000000',
  `nganhang_id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`sotaikhoan`, `sotien`, `nganhang_id`, `users_id`, `created_at`, `updated_at`, `id`) VALUES
('11111111111', 5000000, 2, 1, '2019-05-20 10:41:15', '2019-05-20 03:43:32', 1),
('2222222222', 4970000, 10, 1, '2019-05-20 10:41:28', '2019-05-20 09:33:07', 2),
('3333333333', 4970000, 6, 1, '2019-05-20 10:41:45', NULL, 3);

-- --------------------------------------------------------

--
-- Table structure for table `thanhtoan`
--

CREATE TABLE `thanhtoan` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `users_id` int(11) NOT NULL,
  `hoadon_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thongbao`
--

CREATE TABLE `thongbao` (
  `id` int(11) NOT NULL,
  `tieude` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `noidung` text CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `daxem` varchar(45) DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thongbao`
--

INSERT INTO `thongbao` (`id`, `tieude`, `noidung`, `time`, `created_at`, `updated_at`, `daxem`, `type`, `users_id`) VALUES
(1, 'Thông báo chuyển tiền thành công', 'Bạn vừa chuyển thành công 2000đ cho chủ tài khoàn có email a@1', '2019-05-20 16:53:30', '2019-05-20 09:53:17', '2019-05-20 09:53:17', '1', 'chuyentien_11', 1),
(2, 'Thông báo nhận tiền thành công', 'Tài khoản của bạn  nhận thành công 2000đ  từ chủ tài khoàn có email thanhtung29497@gmail.com', '2019-05-20 17:04:10', '2019-05-20 09:53:17', '2019-05-20 09:53:17', '1', 'nhantien_11', 3),
(3, 'Thông báo chuyển tiền thành công', 'Bạn vừa chuyển thành công 4000đ cho chủ tài khoàn có email tung@mail', '2019-05-20 17:02:35', '2019-05-20 10:02:28', '2019-05-20 10:02:28', '1', 'chuyentien_12', 1),
(4, 'Thông báo nhận tiền thành công', 'Tài khoản của bạn  nhận thành công 4000đ  từ chủ tài khoàn có email thanhtung29497@gmail.com', '2019-05-20 17:05:02', '2019-05-20 10:02:28', '2019-05-20 10:02:28', '1', 'nhantien_12', 2),
(5, 'Buy Mobile card successfully', 'You bought a mobile card of Vinaphone with denomination of 20000đ', '2019-05-21 04:39:37', '2019-05-20 21:39:27', '2019-05-20 21:39:27', '1', 'napthe_6', 1),
(7, 'Deposit successfully', 'You deposited successfully 10000đ from your bank account to your wallet', '2019-05-21 06:28:08', '2019-05-20 23:28:05', '2019-05-20 23:28:05', '1', 'naptien_4', 1),
(8, 'Thông báo chuyển tiền thành công', 'Bạn vừa chuyển thành công 5000đ cho chủ tài khoàn có email thanhtung29497@gmail.com', '2019-05-21 06:36:46', '2019-05-20 23:34:18', '2019-05-20 23:34:18', '1', 'chuyentien_13', 3),
(9, 'Thông báo nhận tiền thành công', 'Tài khoản của bạn  nhận thành công 5000đ  từ chủ tài khoàn có email a@1', '2019-05-21 06:37:02', '2019-05-20 23:34:18', '2019-05-20 23:34:18', '1', 'nhantien_13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `diachi` varchar(200) DEFAULT NULL,
  `sodienthoai` int(11) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `sotien` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ten`, `email`, `password`, `diachi`, `sodienthoai`, `remember_token`, `sotien`, `created_at`, `updated_at`, `id`) VALUES
('Tung Tran Thanh', 'thanhtung29497@gmail.com', '$2y$10$9UYpBew3.OshoJp3Wq3sOOBy6dtYqOtvV8BDQEg.l0.r.zHeHg5A.', 'Hanoi, Vietnam, Minh Khai', 555555555, NULL, 325000, '2019-05-20 03:37:45', '2019-05-20 23:34:18', 1),
('Tung', 'tung@mail', '$2y$10$/Tkl83pd9FWPEX3bSTai3OovTxxAI80GSpncmoINibHy7JJ9mPygy', NULL, NULL, NULL, 0, '2019-05-20 04:03:00', '2019-05-20 21:30:55', 2),
('Tung Tran', 'a@1', '$2y$10$So6cXqy494cCdJHLTPq64.JB2NsgJq0gjmNcBGdA8F4bUB.0v/p/6', NULL, NULL, NULL, 5000, '2019-05-20 09:20:34', '2019-05-20 23:34:18', 3);

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
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hoadon_loaihoadon` (`loaihoadon_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `naptien_users` (`users_id`),
  ADD KEY `sotaikhoan` (`id_taikhoan`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `taikhoan_nganhang` (`nganhang_id`),
  ADD KEY `taikhoan_users` (`users_id`);

--
-- Indexes for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `thanhtoan_hoadon` (`hoadon_id`),
  ADD KEY `thanhtoan_users` (`users_id`);

--
-- Indexes for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `thongbao_users` (`users_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `danhba`
--
ALTER TABLE `danhba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loaihoadon`
--
ALTER TABLE `loaihoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `napthe`
--
ALTER TABLE `napthe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `naptien`
--
ALTER TABLE `naptien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nganhang`
--
ALTER TABLE `nganhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `nhamang`
--
ALTER TABLE `nhamang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ruttien`
--
ALTER TABLE `ruttien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thongbao`
--
ALTER TABLE `thongbao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_loaihoadon` FOREIGN KEY (`loaihoadon_id`) REFERENCES `loaihoadon` (`id`);

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
  ADD CONSTRAINT `naptien_ibfk_1` FOREIGN KEY (`id_taikhoan`) REFERENCES `taikhoan` (`id`),
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
  ADD CONSTRAINT `thanhtoan_hoadon` FOREIGN KEY (`hoadon_id`) REFERENCES `hoadon` (`id`),
  ADD CONSTRAINT `thanhtoan_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD CONSTRAINT `thongbao_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
