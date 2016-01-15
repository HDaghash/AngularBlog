-- MySQL dump 10.13  Distrib 5.7.9, for Win32 (AMD64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.10-log

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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `postId` int(11) NOT NULL AUTO_INCREMENT,
  `postTitle` varchar(255) DEFAULT NULL,
  `postContent` longtext,
  `postAuthor` varchar(255) DEFAULT NULL,
  `postKeyWords` varchar(255) DEFAULT NULL,
  `postImage` varchar(255) DEFAULT NULL,
  `postDate` date DEFAULT NULL,
  PRIMARY KEY (`postId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Making Sense of UX and Design in the Enterprise','Keith Harvey is a Technical Architect and UX Visionary for Intergraph Process Power and Marine. Keith has over 25 years experience designing and developing applications and architectures across all...','Hasan','javascript','assets/images/nice.jpg','1992-11-13'),(2,'Skype Web SDK: Audio, Video, and Conferencing','Skype Web SDK: Audio, Video, and Conferencing','Mohammad','no','assets/images/nice.jpg','1992-11-13'),(3,'Skype Web SDK: Audio, Video, and Conferencing','Skype Web SDK: Audio, Video, and Conferencing','Khaled','automation','assets/images/test.jpg','1992-11-13'),(6,'Making Sense of UX and Design in the Enterprise','Keith Harvey is a Technical Architect and UX Visionary for Intergraph Process Power and Marine. Keith has over 25 years experience designing and developing applications and architectures across all...','Khaled','automation','assets/images/nice.jpg',NULL),(7,'Making Sense of UX and Design in the Enterprise','Making Sense of UX and Design in the EnterpriseKeith Harvey is a Technical Architect and UX Visionary for Intergraph Process Power and Marine. Keith has over 25 years experience designing and developing applications and architectures across all...','Mohammad','automation','assets/images/test.jpg',NULL),(8,'Keith Harvey is a Technical Archite','Keith Harvey is a Technical Architect and UX Visionary for Intergraph Process Power and Marine. Keith has over 25 years experience designing and developing applications and architectures across all...','Hasna','automation','assets/images/nice.jpg',NULL),(14,'wello world !!','<p><br/><br/><!--StartFragment--><span style=\"color: rgb(138, 138, 138);float: none;background-color: rgb(34, 34, 34);\">first post from server side , alhamdolleah :)</span><!--EndFragment--><br/><br/><br/></p>','mosa',NULL,'assets/images/nice.jpg',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-15 22:46:47
