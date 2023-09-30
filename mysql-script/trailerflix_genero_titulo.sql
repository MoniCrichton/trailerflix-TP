CREATE DATABASE  IF NOT EXISTS `trailerflix` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `trailerflix`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: trailerflix
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `genero_titulo`
--

DROP TABLE IF EXISTS `genero_titulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero_titulo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idTitulo` int DEFAULT '0',
  `idGenero` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero_titulo`
--

LOCK TABLES `genero_titulo` WRITE;
/*!40000 ALTER TABLE `genero_titulo` DISABLE KEYS */;
INSERT INTO `genero_titulo` VALUES (1,3,1),(2,3,2),(3,4,1),(4,4,2),(5,5,3),(6,5,4),(7,5,5),(8,2,3),(9,2,6),(10,2,4),(11,1,3),(12,1,7),(13,6,4),(14,6,3),(15,6,6),(16,7,8),(17,7,9),(18,7,3),(19,8,10),(20,8,11),(21,8,12),(22,9,10),(23,9,2),(24,9,3),(25,10,1),(26,10,2),(27,11,13),(28,11,2),(29,11,4),(30,12,13),(31,12,14),(32,12,3),(33,13,3),(34,13,14),(35,13,15),(36,14,3),(37,14,1),(38,15,3),(39,15,7),(40,16,15),(41,16,1),(42,17,4),(43,17,3),(44,17,16),(45,18,12),(46,18,3),(47,18,9),(48,19,12),(49,19,4),(50,19,13),(51,20,12),(52,20,11),(53,20,9),(54,21,13),(55,21,4),(56,21,10),(57,22,1),(58,22,9),(59,23,17),(60,23,9),(61,23,2),(62,24,12),(63,24,10),(64,24,2),(65,25,3),(66,25,18),(67,25,10),(68,26,3),(69,26,9),(70,26,19),(71,27,12),(72,27,11),(73,27,17),(74,28,3),(75,28,9),(76,28,20),(77,29,3),(78,29,12),(79,29,10),(80,30,3),(81,30,11),(82,30,10),(83,31,3),(84,31,11),(85,31,9),(86,32,9),(87,32,10),(88,32,4),(89,33,3),(90,33,17),(91,33,4),(92,34,3),(93,34,21),(94,35,12),(95,35,2),(96,35,11);
/*!40000 ALTER TABLE `genero_titulo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-30 14:47:07
