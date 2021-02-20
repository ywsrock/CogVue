-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: pbl
-- ------------------------------------------------------
-- Server version	5.6.48

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_blog`
--

DROP TABLE IF EXISTS `tb_blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Title` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `BlogImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Timestamp` datetime NOT NULL,
  `UserActionID` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `CategoryID` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_blog`
--

LOCK TABLES `tb_blog` WRITE;
/*!40000 ALTER TABLE `tb_blog` DISABLE KEYS */;
INSERT INTO `tb_blog` VALUES (15,'183','ふぁｓ','ｆさｄ','','2020-12-30 07:45:43',NULL,NULL),(16,'183','さｆ','ｆｓだ','','2020-12-30 07:56:23','6',NULL),(17,'183','ふぁｓｄ','ふぁｓｄふぁｄｓ','','2020-12-30 07:59:54','6',NULL),(18,'183','ふぁｓｄふぁ','ふぁｓｄ','','2020-12-30 08:05:28','3,7,6',NULL),(19,'183','ふぁ','ふぁｓ','','2021-01-03 04:44:55','4,5,4',NULL),(20,'183','あ','あ','','2021-01-03 05:02:27','4,8,9',NULL),(21,'183','ふぁｓ','ｆｓ','','2021-01-04 03:14:33','undefined,9,8',NULL),(22,'183','ふぁｓｄ','ｆさｄ','','2021-01-04 03:15:13','undefined,8,9',NULL),(23,'183','ふぁｓｄ','ふぁｓ','','2021-01-04 03:29:46',',9,8',NULL),(24,'183','ｆさ','ｆさｄ','','2021-01-04 03:58:18','8,9',NULL),(25,'183','ふぁｓｄ','ｆｓだ','','2021-01-04 03:59:23','9,8',NULL),(26,'183','ふぁｓｄ','ｆさ','','2021-01-04 04:00:29','8,9',NULL),(27,'183','ふぁｓｄ','ふぁｄｓ','','2021-01-04 04:04:40','9,8,7',NULL),(28,'183','ふぁｓｄ','ふぁｓｄ','','2021-01-04 04:05:11','9',NULL),(29,'183','ふぁｓｄ','ふぁｓｄ','','2021-01-04 04:05:34','9,8,7,6,5,4,3,2',NULL),(30,'183','ふぁｓｄ','ｆさｄ','','2021-01-04 04:11:21','9,8',NULL),(31,'183','ｆさｄ','ふぁｄｓ','','2021-01-04 05:49:54','9','1'),(32,'183','ふぁｓｄ','ふぁｓｄ','','2021-01-04 05:55:30','9,8,7,6,5,4,2,3','6'),(33,'185','ｇｓｄｆ','ふぁｓｄ','','2021-01-05 15:35:01','10','1'),(34,'185','fasdfa','<p><u>fasdfasdffsadfjas;oifjioadf</u></p><blockquote><em><u>fadsfasdfadfadf</u>sadfasdf</em></blockquote>','','2021-01-06 03:12:11','','1'),(35,'185','あｓｄ','<p>あああ<strong>あああああああああああああああああああああｆさｄ</strong></p>','','2021-01-06 10:18:26','','1'),(36,'185','ふぁｓｄ','<p><strong>fasdふぁｄさｓｄ</strong></p>','','2021-01-06 11:53:26','','1'),(37,'185','あああああああああ','<h1>あああああああ</h1><p><br></p><p><strong>あああああああ</strong></p><ul><li><em>あああああああ</em></li></ul><p><strong><em><u>あああああああ</u></em></strong></p><p><a href=\"www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\">www.google.com</a></p><p><br></p>','','2021-01-06 12:01:45','','1'),(38,'185','ｆさｄ','<p>ふぁｗｄ</p>','','2021-01-09 02:35:18','10','1'),(39,'185','あああ','<p><strong>あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</strong></p>','','2021-01-10 04:58:00','','1'),(40,'185','タイトル','<p>改行</p><p>改行</p><p>改行</p>','','2021-01-10 05:00:07','','1'),(41,'185','テスト','<p>てすと</p>','','2021-01-10 06:25:47','11,10','2'),(42,'184','test','<p>ete</p>','','2021-01-16 09:04:22','14','1'),(43,'184','たえ','<p>ふぁ</p>','','2021-01-16 14:38:15','','1'),(44,'184','ふぁｓｄふぁ','<p>ふぁｄ</p>','','2021-01-16 14:38:50','','4'),(45,'184','fあ','<p>ふぁｄｓ</p>','','2021-01-16 14:51:45','','7'),(46,'184','fads','<p>fasd</p>','','2021-01-16 15:29:51','13','2'),(47,'184','aaaaaa','<p>aaaa</p>','','2021-01-16 15:34:52','13','5'),(51,'184','vvv','<p>vvv</p>','','2021-01-16 16:12:08','','6'),(52,'184','rqwe','<p>rwer</p>','','2021-01-16 16:14:05','13,14','3'),(53,'184','as','<p>asss</p>','','2021-01-16 16:14:40','13','7'),(54,'184','rere','<p>rere</p>','','2021-01-16 16:30:16','13,14','7'),(55,'184','ｍｍ','<p>ｍｍｍｍ</p>','','2021-01-17 04:02:50','13','7'),(56,'184','ん','<p>んｍｍ</p>','','2021-01-17 04:11:00','14,13','5'),(57,'184','dd','<p>dd</p>','','2021-01-19 02:56:16','13','5'),(58,'184','aa','<p>aa</p>','','2021-01-19 03:16:17','14,13','5'),(59,'184','あ','<p>あ</p>','','2021-01-19 03:54:49','14,13','7'),(60,'184','ｄ','<p>ｄ</p>','','2021-01-19 03:55:07','13','4'),(61,'184','サプリAあ','<p>サプリA&amp;セミナーあ</p>','','2021-01-19 11:54:55','15,13,14','7'),(69,'184','写真','<p>写真あ</p>','','2021-01-21 03:05:26','15','1'),(70,'184','写真なし・行動なし','<p>写真なし・行動なしああ</p>','9ljjpy6v_184.jpg','2021-01-22 03:35:17','15,14','1'),(71,'184','a','<p>a</p>','','2021-01-23 00:53:47','','1'),(73,'184','a','<p>a</p>','','2021-01-23 00:57:37','14','5'),(74,'184','fasd','<p>fasd</p><p>ああああ</p><p>ああああああああ;</p><p>dddd</p>','hf1qixb9_184.jpg','2021-01-23 03:55:13','14,13','6'),(75,'184','saaaaddd','<p><br></p><ul><li>BBBBBBBB</li><li>CBBBBBBB</li><li>DBBBBBBB</li><li>FBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li><li>BBBBBBBB</li></ul><h3><br></h3>','uph8tvwr_184.jpg','2021-01-23 05:36:13','13','2');
/*!40000 ALTER TABLE `tb_blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_categorymaster`
--

DROP TABLE IF EXISTS `tb_categorymaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_categorymaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `order` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_categorymaster`
--

LOCK TABLES `tb_categorymaster` WRITE;
/*!40000 ALTER TABLE `tb_categorymaster` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_categorymaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_comment`
--

DROP TABLE IF EXISTS `tb_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_comment` (
  `CommentID` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Comment1` text COLLATE utf8_unicode_ci,
  `CommentName` text COLLATE utf8_unicode_ci,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`CommentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comment`
--

LOCK TABLES `tb_comment` WRITE;
/*!40000 ALTER TABLE `tb_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_function`
--

DROP TABLE IF EXISTS `tb_function`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_function` (
  `FunctionID` varchar(6) NOT NULL,
  `FunctionName` varchar(50) NOT NULL,
  `LogFlag` char(1) NOT NULL DEFAULT '1',
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`FunctionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_function`
--

LOCK TABLES `tb_function` WRITE;
/*!40000 ALTER TABLE `tb_function` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_function` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_functionrankdefault`
--

DROP TABLE IF EXISTS `tb_functionrankdefault`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_functionrankdefault` (
  `RankCode` varchar(10) NOT NULL,
  `FunctionID` varchar(6) NOT NULL,
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`RankCode`,`FunctionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_functionrankdefault`
--

LOCK TABLES `tb_functionrankdefault` WRITE;
/*!40000 ALTER TABLE `tb_functionrankdefault` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_functionrankdefault` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_information`
--

DROP TABLE IF EXISTS `tb_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_information` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `Title` varchar(255) NOT NULL COMMENT 'Title',
  `Category` varchar(255) NOT NULL COMMENT 'Category',
  `Content` varchar(255) NOT NULL COMMENT 'Content',
  `From` datetime NOT NULL COMMENT 'From',
  `To` datetime NOT NULL COMMENT 'To',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_information`
--

LOCK TABLES `tb_information` WRITE;
/*!40000 ALTER TABLE `tb_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_like`
--

DROP TABLE IF EXISTS `tb_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_like` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `blogID` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_like`
--

LOCK TABLES `tb_like` WRITE;
/*!40000 ALTER TABLE `tb_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_oreproperty`
--

DROP TABLE IF EXISTS `tb_oreproperty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_oreproperty` (
  `SectionID` smallint(6) NOT NULL,
  `KeyName` varchar(50) NOT NULL,
  `Value` varchar(255) NOT NULL,
  `SortOrder` smallint(6) NOT NULL,
  `Memo` varchar(1000) NOT NULL,
  `DisableFlag` char(1) NOT NULL DEFAULT '0',
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`SectionID`,`KeyName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_oreproperty`
--

LOCK TABLES `tb_oreproperty` WRITE;
/*!40000 ALTER TABLE `tb_oreproperty` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_oreproperty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_oresection`
--

DROP TABLE IF EXISTS `tb_oresection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_oresection` (
  `SectionID` smallint(6) NOT NULL,
  `SectionName` varchar(50) NOT NULL,
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`SectionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_oresection`
--

LOCK TABLES `tb_oresection` WRITE;
/*!40000 ALTER TABLE `tb_oresection` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_oresection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_rank`
--

DROP TABLE IF EXISTS `tb_rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_rank` (
  `RankCode` varchar(10) NOT NULL,
  `RankName` varchar(20) NOT NULL,
  `RankPassword` varchar(10) NOT NULL,
  `RankPasswordSetDate` varchar(10) NOT NULL,
  `RankPassTerm` smallint(6) NOT NULL DEFAULT '0',
  `PersonPassTerm` smallint(6) NOT NULL DEFAULT '0',
  `SVFlag` char(1) NOT NULL DEFAULT '0',
  `Memo` varchar(1000) NOT NULL,
  `DisableFlag` char(1) NOT NULL DEFAULT '0',
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`RankCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_rank`
--

LOCK TABLES `tb_rank` WRITE;
/*!40000 ALTER TABLE `tb_rank` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_restinfo`
--

DROP TABLE IF EXISTS `tb_restinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_restinfo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` varchar(11) DEFAULT NULL,
  `Timestamp` varchar(255) DEFAULT NULL,
  `RandomKey` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='パスワードリセット情報を格納';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_restinfo`
--

LOCK TABLES `tb_restinfo` WRITE;
/*!40000 ALTER TABLE `tb_restinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_restinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_sequence`
--

DROP TABLE IF EXISTS `tb_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_sequence` (
  `Code` int(11) NOT NULL,
  `InitialValue` int(11) NOT NULL DEFAULT '0',
  `MaxVal` int(11) NOT NULL DEFAULT '99999999',
  `CurrentValue` int(11) NOT NULL DEFAULT '0',
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_sequence`
--

LOCK TABLES `tb_sequence` WRITE;
/*!40000 ALTER TABLE `tb_sequence` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT COMMENT '繝ｦ繝ｼ繧ｶID',
  `UserName` varchar(50) NOT NULL COMMENT '繝ｦ繝ｼ繧ｶ蜷',
  `Email` varchar(50) DEFAULT NULL,
  `RankCode` varchar(50) NOT NULL COMMENT 'TB_RANK.RankCode',
  `Password` varchar(255) NOT NULL,
  `PasswordDate` varchar(50) DEFAULT NULL COMMENT 'YYYY/MM/DD',
  `PhoneNo` varchar(50) DEFAULT NULL,
  `JoinDate` varchar(50) DEFAULT NULL COMMENT 'YYYY/MM/DD	',
  `LeaveDate` varchar(50) DEFAULT NULL COMMENT 'YYYY/MM/DD	',
  `Token` varchar(255) DEFAULT NULL,
  `Memo1` varchar(50) DEFAULT NULL,
  `Memo2` varchar(50) DEFAULT NULL,
  `Memo3` varchar(50) DEFAULT NULL,
  `DisableFlag` varchar(50) DEFAULT '0' COMMENT '0?壽怏蜉ｹ縲?1?夂┌蜉ｹ',
  `UpdUserID` varchar(50) DEFAULT NULL,
  `Timestamp` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'11@gmai.com','11@gmai.com','1','$2a$10$3kIQtB.g77tALmifbJF2IOT7gx97D7nPHAGG79vKJywiJXJppu29q','2020-06-06 15:25:10',NULL,'2020-06-06 15:25:10',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(181,'222@222.com','222@222.com','1','$2a$10$mRgX51pkqoA/nlIdjmaYuO/slooJCY2wWg.uCzmrr9lUo1XDehLqO',NULL,NULL,'2020-12-12 05:56:09',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-12 05:56:09'),(182,'123@123.com','123@123.com','1','$2a$10$nZUyAr0iLavVxMdO0Iw36uZH0sJUHPPXtN2v2C1rKbFIBnUn0oekK',NULL,NULL,'2020-12-18 08:38:45',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-18 08:38:45'),(183,'test@test.com','test@test.com','1','$2a$10$q0GK8oCBzo2CQJnJnZ2lJ.BRRdmHxwTdfQ.Nt1Mo.9z5bdEwHmIA2',NULL,NULL,'2020-12-21 02:53:24',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-21 02:53:24'),(184,'test1@test1.com','test1@test1.com','1','$2a$10$gajlQ9jCwHZtSYTPGF4l9Og1H/u04KThk/gKYI4RiWeWEn3yYRgoy',NULL,NULL,'2020-12-27 03:21:04',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-27 03:21:04'),(185,'Asd@123.com','Asd@123.com','1','$2a$10$yYZp6LWmFHs9IBteChLNieTV/vY6oDhscWqxG5uvgXgHQSrUOEFvi',NULL,NULL,'2021-01-05 15:29:15',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2021-01-05 15:29:15');
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_useraccesslog`
--

DROP TABLE IF EXISTS `tb_useraccesslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_useraccesslog` (
  `LogDate` varchar(10) NOT NULL,
  `LogTime` varchar(8) NOT NULL,
  `UserID` varchar(15) NOT NULL,
  `FunctionID` varchar(6) NOT NULL,
  `Memo` varchar(20) NOT NULL,
  `ActionFlag` char(1) NOT NULL DEFAULT '0',
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`LogDate`,`LogTime`,`UserID`,`FunctionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_useraccesslog`
--

LOCK TABLES `tb_useraccesslog` WRITE;
/*!40000 ALTER TABLE `tb_useraccesslog` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_useraccesslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_useraction`
--

DROP TABLE IF EXISTS `tb_useraction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_useraction` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'アクションID',
  `userID` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `endDate` varchar(255) DEFAULT NULL,
  `memo` varchar(255) DEFAULT '',
  `deleteFlg` int(11) NOT NULL DEFAULT '0' COMMENT '0:表示　1:論理削除',
  `displayFlg` int(11) NOT NULL DEFAULT '0' COMMENT '0:表示　1:非表示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_useraction`
--

LOCK TABLES `tb_useraction` WRITE;
/*!40000 ALTER TABLE `tb_useraction` DISABLE KEYS */;
INSERT INTO `tb_useraction` VALUES (1,'182','ランニング','2020-12-01 01:50:01','2020-12-01 01:50:59','Test',0,0),(2,'183','ランニング','2020-12-21 01:32:01','2020-12-21 01:32:59','',0,0),(3,'183','ランニング','2020-12-30 11:50:01','2020-12-30 11:50:59','',0,0),(4,'183','サンマ','2020-12-31 03:55:01','2020-12-31 03:55:59','',0,0),(5,'183','TEST','2020-12-08 03:01:01','2020-12-08 03:01:59','',0,0),(6,'183','テスト','2020-12-08 03:45:01','2020-12-08 03:45:59','',0,0),(7,'183','行動タグ','2020-12-29 08:30:01','2020-12-29 08:30:59','',0,0),(8,'183','えび','2021-01-19 04:32:01','2021-01-19 04:32:59','',0,0),(9,'183','うどん','2021-01-20 06:03:01','2021-01-20 06:03:59','',0,0),(10,'185','ランニング','2021-01-01 02:55:01','2021-01-01 02:55:30','',0,0),(11,'185','えび','2021-01-20 05:33:01','2021-01-20 05:33:30','',0,0),(13,'184','セミナー','2021-01-07 02:23:01','2021-01-07 02:23:30','',0,0),(14,'184','ジョギング','2021-01-06 02:51:01','2021-01-06 02:51:30','',0,0),(15,'184','サプリA','2021-01-22 02:58:01','2021-01-22 02:58:30','',0,0);
/*!40000 ALTER TABLE `tb_useraction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_useractionmaster`
--

DROP TABLE IF EXISTS `tb_useractionmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_useractionmaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'アクションID',
  `name` varchar(255) DEFAULT NULL,
  `memo` varchar(255) DEFAULT '',
  `deleteFlg` int(11) NOT NULL DEFAULT '0' COMMENT '0:表示　1:論理削除',
  `displayFlg` int(11) NOT NULL DEFAULT '0' COMMENT '0:表示　1:非表示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_useractionmaster`
--

LOCK TABLES `tb_useractionmaster` WRITE;
/*!40000 ALTER TABLE `tb_useractionmaster` DISABLE KEYS */;
INSERT INTO `tb_useractionmaster` VALUES (1,'食事','',0,0),(2,'サプリ','',0,0),(3,'運動','',0,0),(4,'脳トレ','',0,0),(5,'音楽','',0,0),(6,'社会参加','',0,0),(7,'その他','',0,0);
/*!40000 ALTER TABLE `tb_useractionmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userfunctionpower`
--

DROP TABLE IF EXISTS `tb_userfunctionpower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_userfunctionpower` (
  `UserID` varchar(15) NOT NULL,
  `FunctionID` varchar(6) NOT NULL,
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`UserID`,`FunctionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userfunctionpower`
--

LOCK TABLES `tb_userfunctionpower` WRITE;
/*!40000 ALTER TABLE `tb_userfunctionpower` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_userfunctionpower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userpower`
--

DROP TABLE IF EXISTS `tb_userpower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_userpower` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `UserID` int(11) NOT NULL COMMENT 'ユーザID',
  `showProfile` int(11) NOT NULL,
  `showCogEvo` int(11) NOT NULL,
  `showAction` int(11) NOT NULL,
  `showBlog` int(11) NOT NULL,
  `showBlogComment` int(11) NOT NULL,
  `showBlogCogEvo` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userpower`
--

LOCK TABLES `tb_userpower` WRITE;
/*!40000 ALTER TABLE `tb_userpower` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_userpower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userprofile`
--

DROP TABLE IF EXISTS `tb_userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_userprofile` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Sex` varchar(2) DEFAULT NULL,
  `Birthday` varchar(10) DEFAULT NULL,
  `Phone1` varchar(30) DEFAULT NULL,
  `Phone2` varchar(30) DEFAULT NULL,
  `Avatar` varchar(255) DEFAULT NULL,
  `sns_facebook` varchar(100) DEFAULT NULL,
  `sns_twitter` varchar(100) DEFAULT NULL,
  `sns_instagram` varchar(100) DEFAULT NULL,
  `sns_other` varchar(100) DEFAULT NULL,
  `State` varchar(100) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `streat` varchar(100) DEFAULT NULL,
  `houseNumber` varchar(100) DEFAULT NULL,
  `postNumber` varchar(50) DEFAULT NULL,
  `Aboutme` varchar(255) DEFAULT NULL,
  `Memo1` varchar(1000) DEFAULT NULL,
  `Memo2` varchar(1000) DEFAULT NULL,
  `Memo3` varchar(1000) DEFAULT NULL,
  `DisableFlag` char(1) DEFAULT '0',
  `UpdUserID` varchar(15) DEFAULT NULL,
  `Timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`,`UserID`),
  KEY `UserId_idx` (`UserID`),
  CONSTRAINT `UserId` FOREIGN KEY (`UserID`) REFERENCES `tb_user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userprofile`
--

LOCK TABLES `tb_userprofile` WRITE;
/*!40000 ALTER TABLE `tb_userprofile` DISABLE KEYS */;
INSERT INTO `tb_userprofile` VALUES (1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:47:45'),(41,181,'Cog',NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-12 05:56:09'),(42,182,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-18 08:38:45'),(43,183,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-21 02:53:24'),(44,184,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-12-27 03:21:04'),(45,185,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2021-01-05 15:29:15');
/*!40000 ALTER TABLE `tb_userprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_worktime`
--

DROP TABLE IF EXISTS `tb_worktime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_worktime` (
  `SummaryDate` varchar(10) NOT NULL,
  `UserID` varchar(15) NOT NULL,
  `TotalTime` int(11) NOT NULL DEFAULT '0',
  `UpdUserID` varchar(15) NOT NULL,
  `Timestamp` datetime NOT NULL,
  PRIMARY KEY (`SummaryDate`,`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_worktime`
--

LOCK TABLES `tb_worktime` WRITE;
/*!40000 ALTER TABLE `tb_worktime` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_worktime` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-23 16:14:54
