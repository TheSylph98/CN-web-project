-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: ewallet
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chuyentien`
--

DROP TABLE IF EXISTS `chuyentien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chuyentien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sotien` int(11) NOT NULL,
  `noidung` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_chuyen` int(11) NOT NULL,
  `id_nhan` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `chuyentien_users` (`id_nhan`),
  KEY `chuyentien_users1` (`id_chuyen`),
  CONSTRAINT `chuyentien_users` FOREIGN KEY (`id_nhan`) REFERENCES `users` (`id`),
  CONSTRAINT `chuyentien_users1` FOREIGN KEY (`id_chuyen`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuyentien`
--

LOCK TABLES `chuyentien` WRITE;
/*!40000 ALTER TABLE `chuyentien` DISABLE KEYS */;
INSERT INTO `chuyentien` VALUES (1,123,'nothing','2019-05-18 15:56:10',5,1,'2019-05-18 08:56:10','2019-05-18 08:56:10'),(2,300,'chuyen','2019-05-18 16:08:15',5,1,'2019-05-18 09:08:15','2019-05-18 09:08:15'),(3,300,'chuyen','2019-05-18 16:08:43',5,1,'2019-05-18 09:08:43','2019-05-18 09:08:43'),(4,1234,'chuyen tien','2019-05-18 16:28:06',5,1,'2019-05-18 09:28:06','2019-05-18 09:28:06'),(5,1234,'chuyen tien','2019-05-18 16:35:15',5,1,'2019-05-18 09:35:15','2019-05-18 09:35:15'),(6,1234,'chuyen tien','2019-05-18 16:36:10',5,1,'2019-05-18 09:36:10','2019-05-18 09:36:10'),(7,1234,'chuyen tien','2019-05-18 16:38:00',5,1,'2019-05-18 09:38:00','2019-05-18 09:38:00'),(8,2,'chuyen tien','2019-05-19 08:55:07',5,1,'2019-05-19 01:55:07','2019-05-19 01:55:07'),(9,2,'chuyen tien','2019-05-19 08:55:41',5,1,'2019-05-19 01:55:41','2019-05-19 01:55:41'),(10,2,'chuyen tien','2019-05-19 08:56:56',5,1,'2019-05-19 01:56:56','2019-05-19 01:56:56'),(11,2,'chuyen tien','2019-05-19 09:00:56',5,1,'2019-05-19 02:00:56','2019-05-19 02:00:56'),(12,2,'chuyen tien','2019-05-19 09:10:42',5,1,'2019-05-19 02:10:42','2019-05-19 02:10:42'),(13,2,'chuyen tien','2019-05-19 09:11:14',5,1,'2019-05-19 02:11:14','2019-05-19 02:11:14'),(14,2,'chuyen tien','2019-05-19 09:11:40',5,1,'2019-05-19 02:11:40','2019-05-19 02:11:40'),(15,3,'chuyen tien','2019-05-19 09:52:49',5,1,'2019-05-19 02:52:49','2019-05-19 02:52:49'),(16,3,'chuyen tien','2019-05-19 09:53:47',5,1,'2019-05-19 02:53:47','2019-05-19 02:53:47');
/*!40000 ALTER TABLE `chuyentien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danhba`
--

DROP TABLE IF EXISTS `danhba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `danhba` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `danhba_users` (`friend_id`),
  KEY `danhba_users1` (`users_id`),
  CONSTRAINT `danhba_users` FOREIGN KEY (`friend_id`) REFERENCES `users` (`id`),
  CONSTRAINT `danhba_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhba`
--

LOCK TABLES `danhba` WRITE;
/*!40000 ALTER TABLE `danhba` DISABLE KEYS */;
INSERT INTO `danhba` VALUES (1,1,3,'2019-05-18 08:10:38',NULL),(2,1,3,'2019-05-18 08:10:38',NULL);
/*!40000 ALTER TABLE `danhba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaihoadon`
--

DROP TABLE IF EXISTS `loaihoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loaihoadon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenloai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaihoadon`
--

LOCK TABLES `loaihoadon` WRITE;
/*!40000 ALTER TABLE `loaihoadon` DISABLE KEYS */;
INSERT INTO `loaihoadon` VALUES (1,'Tien dien'),(2,'Tien Nuoc'),(3,'Tien Nha'),(4,'Tien Mang');
/*!40000 ALTER TABLE `loaihoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `napthe`
--

DROP TABLE IF EXISTS `napthe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `napthe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sotien` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `nhamang_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `napthe_nhamang` (`nhamang_id`),
  KEY `napthe_users` (`users_id`),
  CONSTRAINT `napthe_nhamang` FOREIGN KEY (`nhamang_id`) REFERENCES `nhamang` (`id`),
  CONSTRAINT `napthe_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `napthe`
--

LOCK TABLES `napthe` WRITE;
/*!40000 ALTER TABLE `napthe` DISABLE KEYS */;
INSERT INTO `napthe` VALUES (1,5000,1,1,NULL,NULL),(2,100000,1,1,'2019-05-17 07:39:44','2019-05-17 07:39:44'),(3,100000,1,1,'2019-05-17 07:40:05','2019-05-17 07:40:05'),(4,200000,1,2,'2019-05-17 07:44:45','2019-05-17 07:44:45');
/*!40000 ALTER TABLE `napthe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `naptien`
--

DROP TABLE IF EXISTS `naptien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `naptien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sotien` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`time`),
  KEY `naptien_users` (`users_id`),
  CONSTRAINT `naptien_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `naptien`
--

LOCK TABLES `naptien` WRITE;
/*!40000 ALTER TABLE `naptien` DISABLE KEYS */;
/*!40000 ALTER TABLE `naptien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nganhang`
--

DROP TABLE IF EXISTS `nganhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nganhang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten_nganhang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nganhang`
--

LOCK TABLES `nganhang` WRITE;
/*!40000 ALTER TABLE `nganhang` DISABLE KEYS */;
INSERT INTO `nganhang` VALUES (1,'ViettinBank'),(2,'BIDV'),(3,'ACB'),(4,'DongABank'),(5,'Vietcombank'),(6,'SCBBank'),(7,'HSBC'),(8,'Agribank'),(9,'Eximbank'),(10,'Sacombank'),(11,'Techcombank'),(12,'VPBank'),(13,'MBBank');
/*!40000 ALTER TABLE `nganhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhamang`
--

DROP TABLE IF EXISTS `nhamang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nhamang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tennhamang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhamang`
--

LOCK TABLES `nhamang` WRITE;
/*!40000 ALTER TABLE `nhamang` DISABLE KEYS */;
INSERT INTO `nhamang` VALUES (1,'Vietel'),(2,'Garena'),(3,'VinaPhone'),(4,'MobilePhone');
/*!40000 ALTER TABLE `nhamang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruttien`
--

DROP TABLE IF EXISTS `ruttien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruttien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sotien` int(11) NOT NULL,
  `time` timestamp NULL DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ruttien_users` (`users_id`),
  CONSTRAINT `ruttien_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruttien`
--

LOCK TABLES `ruttien` WRITE;
/*!40000 ALTER TABLE `ruttien` DISABLE KEYS */;
/*!40000 ALTER TABLE `ruttien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taikhoan` (
  `sotaikhoan` char(20) NOT NULL,
  `sotien` int(11) DEFAULT '5000000',
  `nganhang_id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`sotaikhoan`),
  KEY `taikhoan_nganhang` (`nganhang_id`),
  KEY `taikhoan_users` (`users_id`),
  CONSTRAINT `taikhoan_nganhang` FOREIGN KEY (`nganhang_id`) REFERENCES `nganhang` (`id`),
  CONSTRAINT `taikhoan_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES ('189283412839',500000,5,5,NULL,NULL),('1900018645',5000000,2,1,NULL,NULL),('190001864525',5000000,1,1,NULL,NULL),('1984135535',5000000,3,4,NULL,NULL);
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanhtoan`
--

DROP TABLE IF EXISTS `thanhtoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thanhtoan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT NULL,
  `sotien` int(11) NOT NULL,
  `loaihoadon_id` int(11) NOT NULL,
  `noidung` text,
  `trangthai` tinyint(1) DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `thanhtoan_loaihoadon` (`loaihoadon_id`),
  KEY `thanhtoan_users` (`users_id`),
  CONSTRAINT `thanhtoan_loaihoadon` FOREIGN KEY (`loaihoadon_id`) REFERENCES `loaihoadon` (`id`),
  CONSTRAINT `thanhtoan_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhtoan`
--

LOCK TABLES `thanhtoan` WRITE;
/*!40000 ALTER TABLE `thanhtoan` DISABLE KEYS */;
INSERT INTO `thanhtoan` VALUES (1,'2019-05-17 13:56:49',5000,1,'123',0,1,NULL,NULL);
/*!40000 ALTER TABLE `thanhtoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thongbao`
--

DROP TABLE IF EXISTS `thongbao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thongbao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tieude` text CHARACTER SET utf8 NOT NULL,
  `noidung` text CHARACTER SET utf8 NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `daxem` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thongbao`
--

LOCK TABLES `thongbao` WRITE;
/*!40000 ALTER TABLE `thongbao` DISABLE KEYS */;
INSERT INTO `thongbao` VALUES (1,'Thông báo chuyển tiền','Bạn đã chuyển thành công 2đ cho tài khoản có email  1234@gmail.com','2019-05-19 09:11:40','2019-05-19 02:11:40','2019-05-19 02:11:40',5,'0',NULL),(2,'Thông báo nhận  tiền','Bạn đã nhận thành công 2đ từ  tài khoản có emailnghia@gmail.com','2019-05-19 09:11:40','2019-05-19 02:11:40','2019-05-19 02:11:40',1,NULL,NULL),(3,'Thông báo chuyển tiền thành công','Bạn vừa chuyển thành công 3đ cho chủ tài khoàn có email 1234@gmail.com','2019-05-19 09:53:47','2019-05-19 02:53:47','2019-05-19 02:53:47',5,'0',NULL),(4,'Thông báo nhận tiền thành công','Tài khoản của bạn  nhận thành công 3đ  từ chủ tài khoàn có email nghia@gmail.com','2019-05-19 09:53:47','2019-05-19 02:53:47','2019-05-19 02:53:47',5,'0',NULL);
/*!40000 ALTER TABLE `thongbao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `diachi` varchar(200) DEFAULT NULL,
  `sodienthoai` int(11) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `sotien` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sylph','1234@gmail.com','$2y$10$OFW1QC91LLt2//pp.uOEhubivtgFG4vfR/rRb.Htnhhyz78GOhGWu','Ha Noi - Viet Nam',19008198,NULL,4601254,'2019-05-17 06:54:17','2019-05-19 02:53:47'),(2,'sylph1','1234d@gmail.com','$2y$10$MqIS8YDDbb7giDcwVXpe0.eoPMSUuuXqSIxZkJyIAxaLjcTPxRgti','Ha Noi - Viet Nam',19008190,NULL,0,'2019-05-17 06:54:40','2019-05-17 06:54:40'),(3,'sylph12','123sa4d@gmail.com','$2y$10$UMn3AvZz9VgCimywtdDs8OqFW0pzno6fpOj/C0HAAVsnTEsuG3W5i','Ha Noi - Viet Nam',19008199,NULL,0,'2019-05-17 06:55:00','2019-05-17 06:55:00'),(4,'Tung Tran Thanh','tung@mail','$2y$10$vvtXf7/oMn/qvUsGwRsq4e7I3RkdWTyvHUrmBzGGw6vG061Nczw5y','Hanoi, Vietnam, Minh Khai',555555555,NULL,0,'2019-05-18 07:28:04','2019-05-18 07:35:41'),(5,'nghia','nghia@gmail.com','$2y$10$aeqYNLiXxSltJLOOpEOMEe8y7tzdzUEFI3WxlFDYNj8F8T6TPsZB2',NULL,1234567,NULL,5044,'2019-05-18 08:39:13','2019-05-19 02:53:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-19 18:13:49
