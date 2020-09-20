--
-- Table structure for table `TB_INFORMATION`
--
USE `PBL`;

DROP TABLE IF EXISTS `TB_INFORMATION`;

CREATE TABLE `TB_INFORMATION` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(50) NOT NULL,
  `Category` varchar(10) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `From` datetime NOT NULL,
  `To` datetime NOT NULL,
  PRIMARY KEY (`ID`)
);
