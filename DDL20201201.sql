-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pbl
-- ------------------------------------------------------
-- Server version	5.7.31-log

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

CREATE DATABASE `pbl`;
USE `pbl`;

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='パスワードリセット情報を格納';
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'11@gmai.com','11@gmai.com','1','$2a$10$3kIQtB.g77tALmifbJF2IOT7gx97D7nPHAGG79vKJywiJXJppu29q','2020-06-06 15:25:10',NULL,'2020-06-06 15:25:10',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `tb_userprofile` WRITE;
/*!40000 ALTER TABLE `tb_userprofile` DISABLE KEYS */;
INSERT INTO `tb_userprofile` VALUES (1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:47:45');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS `tb_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_like` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `blogID` int(11) NOT NULL, 
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
