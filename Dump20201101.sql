CREATE DATABASE  IF NOT EXISTS `pbl` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pbl`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: pbl
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_blog`
--

LOCK TABLES `tb_blog` WRITE;
/*!40000 ALTER TABLE `tb_blog` DISABLE KEYS */;
INSERT INTO `tb_blog` VALUES (1,'49','tttt','ccccc'),(2,'49','tttt666','66677ufgsdfg'),(3,'49','tttt666','66677ufgsdfg'),(4,'49','tttt666asdfasd','66677ufgsdfgasdfasdf'),(5,'49','adsfasdf','asdfasdfasdf'),(6,'49','adsfasdf','asdfasdfasdf'),(7,'49','adsfasdf','asdfasdfasdf'),(8,'49','111asdfas','2222asdfas'),(9,'49','yyyy','mmmm'),(10,'49','afasf','asdfasdfasd'),(11,'49','fgasdf','asdfasdff'),(12,'49','0000','Hello'),(13,'49','gsdfgsdfg','khgjhgjhgpl;l\'\';l\';l\';ljkjhkjhkjhuyu'),(14,'49','123','ccccc');
/*!40000 ALTER TABLE `tb_blog` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_information`
--

LOCK TABLES `tb_information` WRITE;
/*!40000 ALTER TABLE `tb_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_information` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (44,'11@gmai.com','11@gmai.com','1','$2a$10$3kIQtB.g77tALmifbJF2IOT7gx97D7nPHAGG79vKJywiJXJppu29q','2020-06-06 15:25:10',NULL,'2020-06-06 15:25:10',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(45,'aa@gmail.com','aa@gmail.com','1','$2a$10$XMGMHMKLF7npawGd0JUZnu8WCLbfKHXnBFbT64c0fywPFuvYAn9GS','2020-06-06 15:25:41',NULL,'2020-06-06 15:25:41',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(46,'bb@gmail.com','bb@gmail.com','1','$2a$10$82SdZ2EklEhSl51SXuKsl.aSv/l1gLGig0GiCXy6pkUhGVKPWqFMq','2020-06-06 15:27:50',NULL,'2020-06-06 15:27:50',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(47,'yws','y@11.com','2','yws123','2020/06/01',NULL,'2020/06/02',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(48,'a@1.com','a@1.com','1','$2a$10$d5HGbrLEp.rBVQvzWKIn..nhbKQSdPGbAMix.sKbasbc2aXI0Hx22','2020-06-09 02:08:01',NULL,'2020-06-09 02:08:01',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(49,'1@1.com','1@2.com','1','$2a$10$tIkSRbKzoJ8pldfWRFt8Qe3w3KBVNg/dOzZivRyHSPd4b8U27f57C','2020-06-09 02:14:12',NULL,'2020-06-09 02:14:12',NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(70,'2@1.com','2@1.com','1','$2a$10$YFgD1jI2qu.BQDKwAYb6eu1U9RlUCMzUftUVn4P/3zGrF2fchzcAe',NULL,NULL,'2020-06-09 16:25:07',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-09 16:25:07'),(77,'2@3.com','2@3.com','1','$2a$10$.qia0BOH9.6dD72FWkdPqefIjN/OAWMsvW5nwh37cisEb1nRgYiI.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(78,'3@3.com','3@3.com','1','$2a$10$O5ox87PHG.b/31DTAOlooevBilU9Z.hXeUDptIsgB654co9oRfD0S',NULL,NULL,'[object Object]',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','[object Object]'),(79,'4@4.com','4@4.com','1','$2a$10$kaj9e9Zci2XAuHzi0j5KIe5M06HoV6lJ0JM..YCQYCSuppLGZA/Xe',NULL,NULL,'2020-06-10',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10'),(80,'4@5.com','4@5.com','1','$2a$10$5GO28PA50Szln5MGkrnFT.E8RRTMtEz.HLEEoHbWf9JT8pnvPo9eW',NULL,NULL,'2020-06-10 07:01:06',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:01:06'),(81,'5@5.com','5@5.com','1','$2a$10$V/VQZwTSVJjxyzjPWRsx5.sBKs6x2c3.EM2qRIlbv7V34XFni/j.e',NULL,NULL,'2020-06-10 07:02:37',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:02:37'),(84,'6@5.com','6@5.com','1','$2a$10$3Y4LzE7d/Xf.KwX/ePbRh.Y2/R56bRuxbxLcqX3ZFKaIr3ciKeM6G',NULL,NULL,'2020-06-10 07:06:59',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:06:59'),(86,'6@6.com','6@6.com','1','$2a$10$ugn76keZKpVdLSov99HaQudF/MG7igjKqrUNN1SwJoMD9CkRs2ehO',NULL,NULL,'2020-06-10 07:09:28',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:09:28'),(87,'6@7.com','6@7.com','1','$2a$10$MhdzAwPEMR.Tsvu96XaIlecOUZq1U0jvAuU.9gWBbqBtyAAstwp6e',NULL,NULL,'2020-06-10 07:10:44',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:10:44'),(91,'7@7.com','7@7.com','1','$2a$10$ejfHLXeRkqjEjDswH3Woeuxd5sg.aRxYSrt9mXByLFEkRF0k76jaG',NULL,NULL,'2020-06-10 07:14:04',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:14:04'),(93,'8@7.com','8@7.com','1','$2a$10$tLVpypqyNi2ateoD/BMExeBYYAnrDJsAvgQ1mkg/swOEuTQTcBIJy',NULL,NULL,'2020-06-10 07:14:58',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:14:58'),(96,'8@8.com','8@8.com','1','$2a$10$i6AH66OUEYF7oFnuxxJDMOfKTGXoUwu.pZrudQ28rm7SoQw2/jAzm',NULL,NULL,'2020-06-10 07:17:32',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:17:32'),(97,'9@8.com','9@8.com','1','$2a$10$PcvpJL5Ul1b0NSahOoaRx.9PonDko6zBZLy3SGi70dBz50ybt37t2',NULL,NULL,'2020-06-10 07:18:00',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:18:00'),(99,'9@10.com','9@10.com','1','$2a$10$xMoqkvarajjhER2d56duoeHBjU7z81FijrFgCFvBd0PdxwTdva9mC',NULL,NULL,'2020-06-10 07:18:50',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:18:50'),(101,'10@1.com','10@1.com','1','$2a$10$9HUDPQAlLIhTl2iz1nHUYekF1hncalof2ZHKqRZa.lOYBbDLecFxe',NULL,NULL,'2020-06-10 07:21:14',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 07:21:14'),(109,'10@2.com','10@2.com','1','$2a$10$1XmTWgIRN9nWWwrNEK1FkOwi4oTuGlAMLOWwn//JiTut3B/6ST.Ki',NULL,NULL,'2020-06-10 10:57:30',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 10:57:30'),(111,'10@3.com','10@3.com','1','$2a$10$YXAtwRY/t9NA9iUJzrMVpOVGI6ZevXUMGvo2AZWg87lEt3KME4xKG',NULL,NULL,'2020-06-10 11:02:09',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 11:02:09'),(112,'11@2.com','11@2.com','1','$2a$10$/KZTUF2zRP3wmuMo/g02yelmdwxigNmwDJ15cJXZ/BEutzm400XUK',NULL,NULL,'2020-06-10 11:17:34',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-10 11:17:34'),(113,'y@y.com','y@y.com','1','$2a$10$zMkg0CgyR39K2s8hKGPU6OPTG5dKSNVPc6AMHF4iA4PqxI6iZw4ie',NULL,NULL,'2020-06-15 14:14:48',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:14:48'),(114,'s@s.com','s@s.com','1','$2a$10$olv6U5YPjzDhnEh.LDvrBOr6IOXkV/eKMMvpdwqokHBbnIAs2vGqu',NULL,NULL,'2020-06-15 14:19:03',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:19:03'),(115,'i@1.com','i@1.com','1','$2a$10$Ss7ii2szC0bGNZerj/vIruOXBBL8Cp8DlZMG6Hlfp5bd5LjGI66O.',NULL,NULL,'2020-06-15 14:35:05',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:35:05'),(116,'2@u.com','2@u.com','1','$2a$10$yl6PNrJHSMXP.C4LbMAVLeRaLDRFUxFUGeTUjW4Jcj/gbXIccDUnq',NULL,NULL,'2020-06-15 14:37:07',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:37:07'),(117,'2002@1.com','2002@1.com','1','$2a$10$2d.Qkdj/1pCifLC2PXQNa.o6g/gIMgvEFrevboAYAY8vHKmuSaPue',NULL,NULL,'2020-06-15 14:38:07',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:38:07'),(118,'222@1.com','222@1.com','1','$2a$10$E5mdHRDP2sIWy1CcIcNe9.XzqYT.2Q8VrsZ3mG.5qahn7GTYGHPBC',NULL,NULL,'2020-06-15 14:39:42',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:39:42'),(121,'223@1.com','223@1.com','1','$2a$10$OF0CVzc.JxF3bX4.MfsoVOMvYdQZ3lwuWUauQ7is6XoNzGS9kbarW',NULL,NULL,'2020-06-15 14:41:01',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:41:01'),(123,'2233@1.com','2233@1.com','1','$2a$10$MnULNtouJGKFrtPDry7Pg.TGKmaU2eI0eahbUkEipx7d7QkgBtSH2',NULL,NULL,'2020-06-15 14:47:40',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:47:40'),(124,'yws@11.com','yws@11.com','1','$2a$10$cZyKbGdAFYMwTbPY.tFLaOUkRMDbuX6WA7imR7ClpL6tGCV3/oB/.',NULL,NULL,'2020-06-16 13:38:48',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 13:38:48'),(125,'22@11.com','22@11.com','1','$2a$10$zRkCH1wkzDs3k.P360tO.eqgz4rlaAU9JUBg/v..18UgWKtfGbYGm',NULL,NULL,'2020-06-16 13:42:14',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 13:42:14'),(130,'2@11.com','2@11.com','1','$2a$10$6DdMUR.GH4diO4w8O3B1FeydAXVrLZse1jsO4SQTzJvAq7w2PcOcC',NULL,NULL,'2020-06-16 13:55:24',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 13:55:24'),(135,'w@q.com','w@q.com','1','$2a$10$kdyeoUcOFIfNgXqmNy6M0u.sTpn1QKjHIVLps.dFba42AeSQ97TPG',NULL,NULL,'2020-06-16 14:07:20',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:07:20'),(136,'99@99.com','99@99.com','1','$2a$10$JPMVhdAkLhogSjW6HCqQSe2cYmIzyfuIQ0BkgB/T.30Arap.q5fDG',NULL,NULL,'2020-06-16 14:09:07',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:09:07'),(137,'hh@hh.com','hh@hh.com','1','$2a$10$kin.xTEbzXKBp1W9QHXu3Ou2Kt4PgIZdyezV6usYJffsyGb/n1y5C',NULL,NULL,'2020-06-16 14:11:09',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:11:09'),(138,'33@11.com','33@11.com','1','$2a$10$u9/Q9bZkSoc52./SEScZA.FJHZeMleVEqmzct.SRFYSVj9xCfkQpm',NULL,NULL,'2020-06-16 14:14:00',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:14:00'),(139,'yyy@12.com','yyy@12.com','1','$2a$10$sn6lGDMG/zYa3lG4IMURLuEwJ9./FmUtDKn167OylT0lAsz5j.LHC',NULL,NULL,'2020-06-16 14:15:55',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:15:55'),(140,'oo@oo.com','oo@oo.com','1','$2a$10$9HX.pKmh9GH4iPX/QCIjn.GKukTlSAYMKrp8a73kPMjiv2Hso8GZG',NULL,NULL,'2020-06-16 14:17:15',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:17:15'),(141,'lll@ll.com','lll@ll.com','1','$2a$10$ZoHwwGMwVklTLrfEJtbmoOoXM2rUIO6iHRzVsq70pWT.DVb9NHHAu',NULL,NULL,'2020-06-16 14:18:08',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:18:08'),(142,'0000@1.com','0000@1.com','1','$2a$10$K7FOXYDcO0K8q/JMGFRei.LNqMtdGeT7hO7mabZ8D/PgpKuF5tBeO',NULL,NULL,'2020-06-16 14:31:13',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:31:13'),(143,'55@55.com','55@55.com','1','$2a$10$KN8xbu3q6UYU.2JMbh3lNOK3fTV6uU.mg1jinmfJ4.t0kuZyxqFbG',NULL,NULL,'2020-06-16 14:34:21',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:34:21'),(144,'77@77.com','77@77.com','1','$2a$10$v6dDrKu0DDRgk7Tx6l./jOcuGsF056w3AnMtzp3XQE0phOhjpWAQ.',NULL,NULL,'2020-06-16 14:35:08',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:35:08'),(147,'asdf@134.com','asdf@134.com','1','$2a$10$6ck8HhgjpsQ4GMbZIcC2KONkauIC3/u/vJcTnRcKlFWEhZQm149UK',NULL,NULL,'2020-06-16 14:47:31',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:47:31'),(148,'ttt@123.com','ttt@123.com','1','$2a$10$owmwfYuaQex0l19khuX0Req6i9z7LG0hyPLtTbbJCOSg05cton2Ey',NULL,NULL,'2020-06-16 14:49:31',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:49:31'),(149,'a1906wy@a123iit.ac.jp','a1906wy@a123iit.ac.jp','1','$2a$10$4sXUv3bwwvHSf8Q4BlHW6exfDS7/Fv8lk6t.Ywo65rlyw7r1hu10O',NULL,NULL,'2020-06-16 14:51:05',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:51:05'),(150,'123@12312.com','123@12312.com','1','$2a$10$VGxMO1zJW2yx2akSvjRIsuFrSGIaKNFGGHwiVJ.1N9EkT6diXg4se',NULL,NULL,'2020-06-16 14:52:41',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:52:41'),(151,'adfasdf@afdasd.com','adfasdf@afdasd.com','1','$2a$10$tdeOwVQu6D40H92mHQtelue/wMzEdWU0GONTE6NLfWkb1R5CpB5L2',NULL,NULL,'2020-06-16 14:55:18',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:55:18'),(152,'12212@123.com','12212@123.com','1','$2a$10$wXv0AVOjkpD3RuyWqh0Dc.Nr0YCmHtMLT5zffzlkfRuWtGWL.Z8IO',NULL,NULL,'2020-06-16 14:57:02',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:57:02'),(153,'aaa@123.com','aaa@123.com','1','$2a$10$tM6VeFW0FmDvwYV2ST3FA.ATs1nHWwRzIYTXOYjyidpqUTL1Kx0Ty',NULL,NULL,'2020-06-16 14:58:56',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:58:56'),(154,'asdfasdf@123456.cm','asdfasdf@123456.cm','1','$2a$10$H97dzWBVnLefR1Lx65fKp./rwfVaUK1sm0aHwL3vcEnHs3j8LIwqu',NULL,NULL,'2020-06-16 15:02:42',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:02:42'),(155,'asdfasd@123456.com','asdfasd@123456.com','1','$2a$10$s9WClZl.JiCJCi85USr3u.I9GAZ087Hx4lQsar5seWQXqSRXBXeg.',NULL,NULL,'2020-06-16 15:05:17',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:05:17'),(156,'212@123.com','212@123.com','1','$2a$10$k7.eWmVa2Oe9drWBpAYCsuayJ4HgHjMZbHSV.vola46hxfQMeA4Y.',NULL,NULL,'2020-06-16 15:27:58',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:27:58'),(157,'yws@123.com','yws@123.com','1','$2a$10$9XauvnSBzQ/.7xbvq8o1cOrf/n71jRVgI5nBmNZAUweYBhsd3Y3jO',NULL,NULL,'2020-06-16 15:54:34',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:54:34'),(158,'2@123.com','2@123.com','1','$2a$10$m0LGfsHzjkIiC0w7UzaRTemqn7N2pA3tytOj6iPfRNOm3/3/B2aea',NULL,NULL,'2020-06-16 16:01:09',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 16:01:09'),(159,'uu@uu.com','uu@uu.com','1','$2a$10$.JfFWMnAClcEqvYRmhqI2e/JG77MD/UlJQ8qidwlM.PIpo7GuUwBq',NULL,NULL,'2020-06-17 10:43:44',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-17 10:43:44'),(160,'l@l.com','l@l.com','1','$2a$10$Fng7PY9.SXhjLkG73CENU.k0zn.Ly.rh.GjSzY4aEBw/EoT3UM4bm',NULL,NULL,'2020-06-17 15:41:18',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-17 15:41:18'),(161,'liujuan@1.com','liujuan@1.com','1','$2a$10$TUN5HMF8/Ze6rAuO99XSFOpobZnresW38nvyTPLYZOvGVk48ZFDYu',NULL,NULL,'2020-06-17 15:43:18',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-17 15:43:18'),(162,'2016@1.com','2016@1.com','1','$2a$10$DQtcmYAwc89k.cl9mwi0f.F7chKnI9iuQ/fYBDePZXQmPWo8zfm6W',NULL,NULL,'2020-06-20 04:24:21',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-20 04:24:21'),(163,'kuroe@1.com','kuroe@1.com','1','$2a$10$rttRUAO7Xlwjj7d5KVVhjeYX3oX4FJU4RsrjJwUSpWdL9jIA8B0Bu',NULL,NULL,'2020-06-20 06:25:54',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-20 06:25:54'),(166,'asdfas@123.com','asdfas@123.com','1','$2a$10$QNCBvMufuRho9yJo9m.OmOlwaLEmtrGr7MsCfFQcfR/gPwIva6lLy',NULL,NULL,'2020-06-21 08:45:22',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-21 08:45:22'),(174,'1@2222.com','1@2222.com','1','$2a$10$L.g9nOt0rYOz2YAOqr24Lu0wt1vgBtWe.cA9CZnZHFrkQ1XucwUH.',NULL,NULL,'2020-06-28 05:55:55',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-28 05:55:55'),(175,'123@ccc.com','123@ccc.com','1','$2a$10$c4wK.XQKq7u8f2a.555deeopth1vGl99TMTF6voaPEHAgrhrK.Xfi',NULL,NULL,'2020-07-04 11:59:11',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-04 11:59:11'),(176,'2@21.com','2@21.com','1','$2a$10$zrRLWCAGesbJ7sNZ8aCPmeV1eH3/x5.0wFvIhXQpc8MAGv6yr7Wn6',NULL,NULL,'2020-07-11 13:06:28',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-11 13:06:28'),(177,'test@123.com','test@123.com','1','$2a$10$pnni/P.b5OqmA/hN4Dj2mO7I2FbXTWFdZmDlKx57uMZ8ugSCxtXd2',NULL,NULL,'2020-07-13 00:47:06',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-13 00:47:06'),(178,'aa@aa.com','aa@aa.com','1','$2a$10$v8Ix2qZwURi4izT/Q4/v8.fSZvrZdXxt/v9hDj0oPa3QdcmHeweai',NULL,NULL,'2020-07-13 01:06:37',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-13 01:06:37'),(179,'11@11.com','11@11.com','1','$2a$10$z1DGq3l0mbcF56uwfr695.deeCnfiuZYhpPulNIFSnt7qmIsRsoSO',NULL,NULL,'2020-07-13 12:59:46',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-13 12:59:46'),(180,'s@s1.com','s@s1.com','1','$2a$10$zR2JdSDy8hGLkAmrtMK5c.rDtCuRmRky6nYzquFyBXqDfQGNu5dju',NULL,NULL,'2020-10-23 02:22:05',NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-10-23 02:22:05');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_useraction`
--

LOCK TABLES `tb_useraction` WRITE;
/*!40000 ALTER TABLE `tb_useraction` DISABLE KEYS */;
INSERT INTO `tb_useraction` VALUES (1,'180','gg','2020-10-27 00:00:00','2020-10-27 00:00:00','gggg',0,0),(2,'180','ddd','2020-10-27 00:00:00','2020-10-13 00:00:00','sadfasdf',0,0),(3,'180','hhh','2020-10-27 00:00:00','2020-11-24 00:00:00','hhhhh',0,0),(4,'180','hhh','2020-10-13 00:00:00','2020-11-17 00:00:00','hhh',0,0),(5,'180','dfdf','2020-10-14 00:00:00','2020-11-17 00:00:00','asdfasdf',0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_useractionmaster`
--

LOCK TABLES `tb_useractionmaster` WRITE;
/*!40000 ALTER TABLE `tb_useractionmaster` DISABLE KEYS */;
INSERT INTO `tb_useractionmaster` VALUES (1,'焼肉','美味しい',0,0),(2,'味噌汁','塩ぽ',0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userprofile`
--

LOCK TABLES `tb_userprofile` WRITE;
/*!40000 ALTER TABLE `tb_userprofile` DISABLE KEYS */;
INSERT INTO `tb_userprofile` VALUES (2,123,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-15 14:47:45'),(3,124,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 13:38:48'),(4,125,'bunsui','en','2','2020-06-17','11011',NULL,NULL,'www.com.facebook',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 13:42:14'),(5,130,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 13:55:24'),(6,135,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:07:20'),(7,136,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:09:07'),(8,137,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:11:09'),(9,138,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:14:00'),(10,139,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:15:55'),(11,140,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:17:15'),(12,141,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:18:08'),(13,142,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:31:13'),(14,143,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:34:21'),(15,144,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:35:08'),(16,147,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:47:31'),(17,148,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:49:31'),(18,149,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:51:05'),(19,150,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:52:41'),(20,151,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:55:18'),(21,152,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:57:02'),(22,153,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 14:58:56'),(23,154,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:02:42'),(24,155,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:05:17'),(25,156,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:27:58'),(26,157,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 15:54:34'),(27,158,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-16 16:01:09'),(28,159,'teste','testt','2','2020-06-18','0001',NULL,'94sq08mp_159.jpg','http://999','alert(\"test\");','http Test','other','test','teste',NULL,'12312','123123','asdfasdf',NULL,NULL,NULL,'0','SYSTEM','2020-06-17 10:43:44'),(29,160,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-17 15:41:18'),(30,161,'juan','liu','1','2020-06-18',NULL,NULL,'p93cgw2j_161.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-17 15:43:18'),(31,162,NULL,NULL,NULL,NULL,NULL,NULL,'9g1k1bmg_162.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-20 04:24:21'),(32,163,'asdfasd','er',NULL,NULL,NULL,NULL,'9eak8xni_163.jpg','asdfasd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-20 06:25:54'),(33,166,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-21 08:45:22'),(34,174,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-06-28 05:57:06'),(35,175,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-04 11:59:11'),(36,176,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-11 13:06:28'),(37,177,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-13 00:47:06'),(38,178,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-13 01:06:37'),(39,179,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-07-13 12:59:46'),(40,180,NULL,NULL,NULL,NULL,NULL,NULL,'00_00.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','SYSTEM','2020-10-23 02:22:05');
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

-- Dump completed on 2020-10-23 17:52:52


DROP TABLE IF EXISTS `tb_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_comment` (
  `CommentID` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Comment1` text COLLATE utf8_unicode_ci,
  `CommentName` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`CommentID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
