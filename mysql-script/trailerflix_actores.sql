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
-- Table structure for table `actores`
--

DROP TABLE IF EXISTS `actores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actor` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actores`
--

LOCK TABLES `actores` WRITE;
/*!40000 ALTER TABLE `actores` DISABLE KEYS */;
INSERT INTO `actores` VALUES (1,'Pedro Pascal'),(2,'Carl Weathers'),(3,'Misty Rosas'),(4,'Chris Bartlett'),(5,'Rio Hackford'),(6,'Giancarlo Esposito'),(7,'Tom Hopper'),(8,'David Castañeda'),(9,'Emmy Raver-Lampman'),(10,'Robert Sheehan'),(11,'Aidan Gallagher'),(12,'Elliot Page'),(13,'Anya Taylor-Joy'),(14,'Thomas Brodie-Sangster'),(15,'Harry Melling'),(16,'Moses Ingram'),(17,'Chloe Pirrie'),(18,'Janina Elkin'),(19,'Lili Reinhart'),(20,'Casey Cott'),(21,'Camila Mendes'),(22,'Marisol Nichols'),(23,'Madelaine Petsch'),(24,'Mädchen Amick'),(25,'Claire Fox'),(26,'Olivia Colman'),(27,'Matt Smith'),(28,'Tobias Menzies'),(29,'Vanesa Kirby'),(30,'Helena Bonham Carter'),(31,'Millie Bobby Brown'),(32,'Henry Cavill'),(33,'Sam Claflin'),(34,'Louis Partridge'),(35,'Adeel Akhtar'),(36,'Joaquin Phoenix'),(37,'Robert De Niro'),(38,'Zazie Beetz'),(39,'Frances Conroy'),(40,'Brett Cullen'),(41,'Shea Whigham'),(42,'Robert Downey Jr.'),(43,'Chris Evans'),(44,'Mark Ruffalo'),(45,'Chris Hemsworth'),(46,'Scarlett Johansson'),(47,'Jeremy Renner'),(48,'Emilia Clarke'),(49,'Lena Headey'),(50,'Sophie Turner'),(51,'Kit Harington'),(52,'Peter Dinklage'),(53,'Nikolaj Coster-Waldau'),(54,'Grant Gustin'),(55,'Carlos Valdes'),(56,'Danielle Panabaker'),(57,'Candice Patton'),(58,'Jesse L. Martin'),(59,'Tom Cavanagh'),(60,'Jim Parsons'),(61,'Johnny Galecki'),(62,'Kaley Cuoco'),(63,'Simon Helberg'),(64,'Kunal Nayyar'),(65,'Melissa Rauch'),(66,'Mayim Bialik'),(67,'Jennifer Aniston'),(68,'Courteney Cox'),(69,'Lisa Kudrow'),(70,'David Schwimmer'),(71,'Matthew Perry'),(72,'Matt LeBlanc'),(73,'Amybeth McNulty'),(74,'Geraldine James'),(75,'R. H. Thomson'),(76,'Corrine Koslo'),(77,'Dalila Bela'),(78,'Lucas Jade Zumann'),(79,'Gillian Anderson'),(80,'David Duchovny'),(81,'Mitch Pileggi'),(82,'Robert Patrick'),(83,'Tom Braidwood'),(84,'Bruce Harwood'),(85,'Jared Harris'),(86,'Stellan Skarsgård'),(87,'Emily Watson'),(88,'Paul Ritter'),(89,'Jessie Buckley'),(90,'Adam Nagaitis'),(91,'Evan Rachel Wood'),(92,'Thandie Newton'),(93,'Jeffrey Wright'),(94,'Tessa Thompson'),(95,'Ed Harris'),(96,'Luke Hemsworth'),(97,'Lee Pace'),(98,'Scoot McNairy'),(99,'Mackenzie Davis'),(100,'Kerry Bishé'),(101,'Toby Huss'),(102,'Alana Cavanaugh'),(103,'Jessica Chastain'),(104,'John Malkovich'),(105,'Colin Farrell'),(106,'Common'),(107,'Geena Davis'),(108,'Ioan Gruffudd'),(109,'Margot Robbie'),(110,'Ewan McGregor'),(111,'Mary Elizabeth Winstead'),(112,'Jurnee Smollett'),(113,'Rosie Perez'),(114,'Chris Messina'),(115,'Stacy Martin'),(116,'Rhona Mitra'),(117,'Theo James'),(118,'Peter Ferdinando'),(119,'Lia Williams'),(120,'Toby Jones'),(121,'Dwayne Johnson'),(122,'Kevin Hart'),(123,'Jack Black'),(124,'Karen Gillan'),(125,'Awkwafina'),(126,'Nick Jonas'),(127,'Miranda Cosgrove'),(128,'Kate Walsh'),(129,'Omar Epps'),(130,'Angus Macfadyen'),(131,'Jorja Fox'),(132,'Enver Gjokaj'),(133,'Bill Skarsgård'),(134,'Bill Hader'),(135,'James McAvoy'),(136,'Isaiah Mustafa'),(137,'Jay Ryan'),(138,'Chadwick Boseman'),(139,'Michael B. Jordan'),(140,'Lupita Nyong\'o'),(141,'Danai Gurira'),(142,'Martin Freeman'),(143,'Daniel Kaluuya'),(144,'Christian Bale'),(145,'Matt Damon'),(146,'Caitriona Balfe'),(147,'Josh Lucas'),(148,'Noah Jupe'),(149,'Jon Bernthal'),(150,'Génesis Rodríguez'),(151,'Vincent Piazza'),(152,'Benjamin Sokolow'),(153,'Emily Bayiokos'),(154,'Amy Manson'),(155,'Luke Allen-Gale'),(156,'Nina Bergman'),(157,'Dominic Mafham'),(158,'James Weber Brown'),(159,'Lorina Kamburova'),(160,'Marion Cotillard'),(161,'Laurence Fishburne'),(162,'Jude Law'),(163,'Kate Winslet'),(164,'Jennifer Ehle'),(165,'Gwyneth Paltrow'),(166,'Florence Pugh'),(167,'David Harbour'),(168,'O.T. Fagbenle'),(169,'Rachel Weisz'),(170,'William Hurt'),(171,'Ray Winstone'),(172,'Kristen Wiig'),(173,'Jeff Daniels'),(174,'Michael Peña'),(175,'Sean Bean'),(176,'Kate Mara'),(177,'Alicia Vikander'),(178,'Domhnall Gleeson'),(179,'Oscar Isaac'),(180,'Sonoya Mizuno'),(181,'Corey Johnson'),(182,'Claire Selby'),(183,'Gana Bayarsaikhan'),(184,'Bryce Dallas Howard'),(185,'Chris Pratt'),(186,'Irrfan Khan'),(187,'Vincent D\'Onofrio'),(188,'Omar Sy'),(189,'Nick Robinson'),(190,'Judy Greer'),(191,'Will Smith'),(192,'Alice Braga'),(193,'Charlie Tahan'),(194,'Dash Mihok'),(195,'Salli Richardson-Whitfield'),(196,'Willow Smith'),(197,'Emma Thompson'),(198,'Ryan Gosling'),(199,'Claire Foy'),(200,'Jason Clarke'),(201,'Kyle Chandler'),(202,'Corey Stoll'),(203,'Patrick Fugit'),(204,'John Boyega'),(205,'Scott Eastwood'),(206,'Cailee Spaeny'),(207,'Jing Tian'),(208,'Rinko Kikuchi'),(209,'Burn Gorman');
/*!40000 ALTER TABLE `actores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-30 14:47:08
