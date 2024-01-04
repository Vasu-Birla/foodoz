-- MySQL dump 10.13  Distrib 8.0.22, for osx10.16 (x86_64)
--
-- Host: localhost    Database: ecommerce_foodoz
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity_logs`
--

DROP TABLE IF EXISTS `activity_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_logs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `device_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `activity_logs_user_id_foreign` (`user_id`),
  CONSTRAINT `activity_logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_logs`
--

LOCK TABLES `activity_logs` WRITE;
/*!40000 ALTER TABLE `activity_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `formatted_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `latitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `user_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_user_id_foreign` (`user_id`),
  CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `appointee_id` int NOT NULL,
  `appointee_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `appointer_id` int DEFAULT NULL,
  `appointer_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `amount` decimal(9,2) NOT NULL DEFAULT '0.00',
  `amount_meta` json DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_meta` json DEFAULT NULL,
  `longitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `latitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `date` date NOT NULL,
  `time_from` time NOT NULL,
  `time_to` time NOT NULL,
  `is_guest` tinyint(1) NOT NULL DEFAULT '0',
  `customer_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json NOT NULL,
  `meta` json DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'{\"en\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"}','{\"scope\": \"ecommerce\"}',1,'2022-02-05 06:20:51','2022-02-05 06:20:51'),(2,'{\"en\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"}','{\"scope\": \"ecommerce\"}',1,'2022-02-05 06:20:53','2022-02-05 06:20:53'),(3,'{\"en\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"}','{\"scope\": \"ecommerce\"}',1,'2022-02-05 06:20:54','2022-02-05 06:20:54');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blocks`
--

DROP TABLE IF EXISTS `blocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blocks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `blockable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blockable_id` bigint unsigned NOT NULL,
  `blocker_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blocker_id` bigint unsigned NOT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `blocks_blockable_type_blockable_id_index` (`blockable_type`,`blockable_id`),
  KEY `blocks_blocker_type_blocker_id_index` (`blocker_type`,`blocker_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blocks`
--

LOCK TABLES `blocks` WRITE;
/*!40000 ALTER TABLE `blocks` DISABLE KEYS */;
/*!40000 ALTER TABLE `blocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` json NOT NULL,
  `meta` json DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '1',
  `parent_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'seeds','{\"en\": \"Seeds\"}','{\"scope\": \"ecommerce\"}',1,NULL,'2022-02-05 06:20:48','2022-02-05 06:20:48'),(2,'vegetables','{\"en\": \"Vegetables\"}','{\"scope\": \"ecommerce\"}',2,NULL,'2022-02-05 06:20:50','2022-02-05 06:20:50'),(3,'dry-fruits','{\"en\": \"Dry Fruits\"}','{\"scope\": \"ecommerce\"}',3,NULL,'2022-02-05 06:20:51','2022-02-05 06:20:51'),(4,'grains','{\"en\": \"Grains\"}','{\"scope\": \"ecommerce\"}',4,NULL,'2022-02-05 06:20:51','2022-02-05 06:20:51');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_preferences`
--

DROP TABLE IF EXISTS `category_preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_preferences` (
  `category_id` int unsigned DEFAULT NULL,
  `user_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `category_preferences_category_id_foreign` (`category_id`),
  KEY `category_preferences_user_id_foreign` (`user_id`),
  CONSTRAINT `category_preferences_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `category_preferences_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_preferences`
--

LOCK TABLES `category_preferences` WRITE;
/*!40000 ALTER TABLE `category_preferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_addresses`
--

DROP TABLE IF EXISTS `ecommerce_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_addresses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `formatted_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `latitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `user_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_addresses_user_id_foreign` (`user_id`),
  CONSTRAINT `ecommerce_addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_addresses`
--

LOCK TABLES `ecommerce_addresses` WRITE;
/*!40000 ALTER TABLE `ecommerce_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_attribute_terms`
--

DROP TABLE IF EXISTS `ecommerce_attribute_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_attribute_terms` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attribute_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_attribute_terms_attribute_id_foreign` (`attribute_id`),
  CONSTRAINT `ecommerce_attribute_terms_attribute_id_foreign` FOREIGN KEY (`attribute_id`) REFERENCES `ecommerce_attributes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_attribute_terms`
--

LOCK TABLES `ecommerce_attribute_terms` WRITE;
/*!40000 ALTER TABLE `ecommerce_attribute_terms` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_attribute_terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_attributes`
--

DROP TABLE IF EXISTS `ecommerce_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_attributes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_attributes`
--

LOCK TABLES `ecommerce_attributes` WRITE;
/*!40000 ALTER TABLE `ecommerce_attributes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_authentication_delegations`
--

DROP TABLE IF EXISTS `ecommerce_authentication_delegations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_authentication_delegations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `identifier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `vendor_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_authentication_delegations_vendor_id_foreign` (`vendor_id`),
  CONSTRAINT `ecommerce_authentication_delegations_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_authentication_delegations`
--

LOCK TABLES `ecommerce_authentication_delegations` WRITE;
/*!40000 ALTER TABLE `ecommerce_authentication_delegations` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_authentication_delegations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_coupons`
--

DROP TABLE IF EXISTS `ecommerce_coupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_coupons` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json DEFAULT NULL,
  `detail` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `code` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reward` int NOT NULL,
  `type` enum('fixed','percent') COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires_at` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ecommerce_coupons_code_unique` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_coupons`
--

LOCK TABLES `ecommerce_coupons` WRITE;
/*!40000 ALTER TABLE `ecommerce_coupons` DISABLE KEYS */;
INSERT INTO `ecommerce_coupons` VALUES (1,'{\"en\": \"Test Coupon\"}','{\"en\": \"Test Coupon Details\"}',NULL,'TEST100',10,'percent','2020-12-31','2022-02-05 06:20:51','2022-02-05 06:20:51'),(2,'{\"en\": \"Test Coupon 2\"}','{\"en\": \"Test Coupon 2 Details\"}',NULL,'TEST200',20,'percent','2020-12-31','2022-02-05 06:20:51','2022-02-05 06:20:51'),(3,'{\"en\": \"Test Coupon 3\"}','{\"en\": \"Test Coupon 3 Details\"}',NULL,'TEST300',30,'percent','2020-12-31','2022-02-05 06:20:51','2022-02-05 06:20:51');
/*!40000 ALTER TABLE `ecommerce_coupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_coupons_users`
--

DROP TABLE IF EXISTS `ecommerce_coupons_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_coupons_users` (
  `user_id` int unsigned NOT NULL,
  `coupon_id` int unsigned NOT NULL,
  `used_at` timestamp NOT NULL,
  PRIMARY KEY (`user_id`,`coupon_id`),
  KEY `ecommerce_coupons_users_coupon_id_foreign` (`coupon_id`),
  CONSTRAINT `ecommerce_coupons_users_coupon_id_foreign` FOREIGN KEY (`coupon_id`) REFERENCES `ecommerce_coupons` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_coupons_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_coupons_users`
--

LOCK TABLES `ecommerce_coupons_users` WRITE;
/*!40000 ALTER TABLE `ecommerce_coupons_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_coupons_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_customers`
--

DROP TABLE IF EXISTS `ecommerce_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_customers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `vendor_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_customers_vendor_id_foreign` (`vendor_id`),
  CONSTRAINT `ecommerce_customers_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_customers`
--

LOCK TABLES `ecommerce_customers` WRITE;
/*!40000 ALTER TABLE `ecommerce_customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_delivery_modes`
--

DROP TABLE IF EXISTS `ecommerce_delivery_modes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_delivery_modes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json NOT NULL,
  `detail` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_delivery_modes`
--

LOCK TABLES `ecommerce_delivery_modes` WRITE;
/*!40000 ALTER TABLE `ecommerce_delivery_modes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_delivery_modes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_delivery_order_requests`
--

DROP TABLE IF EXISTS `ecommerce_delivery_order_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_delivery_order_requests` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `meta` json DEFAULT NULL,
  `delivery_profile_id` int unsigned NOT NULL,
  `order_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_delivery_profile_order` (`delivery_profile_id`,`order_id`),
  KEY `ecommerce_delivery_order_requests_order_id_foreign` (`order_id`),
  CONSTRAINT `ecommerce_delivery_order_requests_delivery_profile_id_foreign` FOREIGN KEY (`delivery_profile_id`) REFERENCES `ecommerce_delivery_profiles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_delivery_order_requests_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_delivery_order_requests`
--

LOCK TABLES `ecommerce_delivery_order_requests` WRITE;
/*!40000 ALTER TABLE `ecommerce_delivery_order_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_delivery_order_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_delivery_profiles`
--

DROP TABLE IF EXISTS `ecommerce_delivery_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_delivery_profiles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `meta` json DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT '1',
  `is_online` tinyint(1) NOT NULL DEFAULT '0',
  `assigned` tinyint(1) NOT NULL DEFAULT '0',
  `longitude` decimal(15,7) DEFAULT NULL,
  `latitude` decimal(15,7) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_delivery_profiles_user_id_foreign` (`user_id`),
  CONSTRAINT `ecommerce_delivery_profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_delivery_profiles`
--

LOCK TABLES `ecommerce_delivery_profiles` WRITE;
/*!40000 ALTER TABLE `ecommerce_delivery_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_delivery_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_feedback_options`
--

DROP TABLE IF EXISTS `ecommerce_feedback_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_feedback_options` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rank` int unsigned NOT NULL,
  `title` json DEFAULT NULL,
  `vendor_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_feedback_options_vendor_id_foreign` (`vendor_id`),
  CONSTRAINT `ecommerce_feedback_options_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_feedback_options`
--

LOCK TABLES `ecommerce_feedback_options` WRITE;
/*!40000 ALTER TABLE `ecommerce_feedback_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_feedback_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_feedback_questions`
--

DROP TABLE IF EXISTS `ecommerce_feedback_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_feedback_questions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `vendor_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_feedback_questions_vendor_id_foreign` (`vendor_id`),
  CONSTRAINT `ecommerce_feedback_questions_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_feedback_questions`
--

LOCK TABLES `ecommerce_feedback_questions` WRITE;
/*!40000 ALTER TABLE `ecommerce_feedback_questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_feedback_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_feedback_results`
--

DROP TABLE IF EXISTS `ecommerce_feedback_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_feedback_results` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rank` int unsigned NOT NULL,
  `feedback_question_id` int unsigned DEFAULT NULL,
  `vendor_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_feedback_results_feedback_question_id_foreign` (`feedback_question_id`),
  KEY `ecommerce_feedback_results_vendor_id_foreign` (`vendor_id`),
  CONSTRAINT `ecommerce_feedback_results_feedback_question_id_foreign` FOREIGN KEY (`feedback_question_id`) REFERENCES `ecommerce_feedback_questions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_feedback_results_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_feedback_results`
--

LOCK TABLES `ecommerce_feedback_results` WRITE;
/*!40000 ALTER TABLE `ecommerce_feedback_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_feedback_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_multi_order_payment_orders`
--

DROP TABLE IF EXISTS `ecommerce_multi_order_payment_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_multi_order_payment_orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `multi_order_payment_id` int unsigned NOT NULL,
  `order_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `multi_order_payments` (`multi_order_payment_id`),
  KEY `ecommerce_multi_order_payment_orders_order_id_foreign` (`order_id`),
  CONSTRAINT `ecommerce_multi_order_payment_orders_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `multi_order_payments` FOREIGN KEY (`multi_order_payment_id`) REFERENCES `ecommerce_multi_order_payments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_multi_order_payment_orders`
--

LOCK TABLES `ecommerce_multi_order_payment_orders` WRITE;
/*!40000 ALTER TABLE `ecommerce_multi_order_payment_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_multi_order_payment_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_multi_order_payments`
--

DROP TABLE IF EXISTS `ecommerce_multi_order_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_multi_order_payments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `total` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_multi_order_payments`
--

LOCK TABLES `ecommerce_multi_order_payments` WRITE;
/*!40000 ALTER TABLE `ecommerce_multi_order_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_multi_order_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_order_addresses`
--

DROP TABLE IF EXISTS `ecommerce_order_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_order_addresses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formatted_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` decimal(15,7) NOT NULL,
  `latitude` decimal(15,7) NOT NULL,
  `type` enum('source','destination') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'destination',
  `order_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_addresses_order_id_foreign` (`order_id`),
  CONSTRAINT `ecommerce_order_addresses_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_order_addresses`
--

LOCK TABLES `ecommerce_order_addresses` WRITE;
/*!40000 ALTER TABLE `ecommerce_order_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_order_conditions`
--

DROP TABLE IF EXISTS `ecommerce_order_conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_order_conditions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operator` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_order_conditions`
--

LOCK TABLES `ecommerce_order_conditions` WRITE;
/*!40000 ALTER TABLE `ecommerce_order_conditions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_order_deliveries`
--

DROP TABLE IF EXISTS `ecommerce_order_deliveries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_order_deliveries` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int unsigned NOT NULL,
  `delivery_profile_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_deliveries_order_id_foreign` (`order_id`),
  KEY `ecommerce_order_deliveries_delivery_profile_id_foreign` (`delivery_profile_id`),
  CONSTRAINT `ecommerce_order_deliveries_delivery_profile_id_foreign` FOREIGN KEY (`delivery_profile_id`) REFERENCES `ecommerce_delivery_profiles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_order_deliveries_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_order_deliveries`
--

LOCK TABLES `ecommerce_order_deliveries` WRITE;
/*!40000 ALTER TABLE `ecommerce_order_deliveries` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_deliveries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_order_product_addons`
--

DROP TABLE IF EXISTS `ecommerce_order_product_addons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_order_product_addons` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `total` decimal(8,2) NOT NULL,
  `product_addon_choice_id` int unsigned NOT NULL,
  `order_product_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_product_addons_product_addon_choice_id_foreign` (`product_addon_choice_id`),
  KEY `ecommerce_order_product_addons_order_product_id_foreign` (`order_product_id`),
  CONSTRAINT `ecommerce_order_product_addons_order_product_id_foreign` FOREIGN KEY (`order_product_id`) REFERENCES `ecommerce_order_products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_order_product_addons_product_addon_choice_id_foreign` FOREIGN KEY (`product_addon_choice_id`) REFERENCES `ecommerce_product_addon_choices` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_order_product_addons`
--

LOCK TABLES `ecommerce_order_product_addons` WRITE;
/*!40000 ALTER TABLE `ecommerce_order_product_addons` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_product_addons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_order_products`
--

DROP TABLE IF EXISTS `ecommerce_order_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_order_products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `total` decimal(8,2) NOT NULL,
  `order_id` int unsigned NOT NULL,
  `vendor_product_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_products_order_id_foreign` (`order_id`),
  KEY `ecommerce_order_products_vendor_product_id_foreign` (`vendor_product_id`),
  CONSTRAINT `ecommerce_order_products_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_order_products_vendor_product_id_foreign` FOREIGN KEY (`vendor_product_id`) REFERENCES `ecommerce_vendor_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_order_products`
--

LOCK TABLES `ecommerce_order_products` WRITE;
/*!40000 ALTER TABLE `ecommerce_order_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_orders`
--

DROP TABLE IF EXISTS `ecommerce_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `notes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `is_guest` tinyint(1) NOT NULL DEFAULT '0',
  `customer_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtotal` double(8,2) NOT NULL,
  `taxes` double(8,2) NOT NULL,
  `delivery_fee` double(8,2) NOT NULL,
  `total` double(8,2) NOT NULL,
  `discount` double(8,2) NOT NULL,
  `order_type` enum('CUSTOM','NORMAL','TAKEAWAY','DINEIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NORMAL',
  `type` enum('ASAP','LATER') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ASAP',
  `scheduled_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vendor_id` int unsigned DEFAULT NULL,
  `user_id` int unsigned DEFAULT NULL,
  `delivery_mode_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `distance_travelled` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `ecommerce_orders_vendor_id_foreign` (`vendor_id`),
  KEY `ecommerce_orders_user_id_foreign` (`user_id`),
  KEY `ecommerce_orders_delivery_mode_id_foreign` (`delivery_mode_id`),
  CONSTRAINT `ecommerce_orders_delivery_mode_id_foreign` FOREIGN KEY (`delivery_mode_id`) REFERENCES `ecommerce_delivery_modes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_orders_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_orders`
--

LOCK TABLES `ecommerce_orders` WRITE;
/*!40000 ALTER TABLE `ecommerce_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_product_addon_choices`
--

DROP TABLE IF EXISTS `ecommerce_product_addon_choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_product_addon_choices` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json NOT NULL,
  `price` double(8,2) NOT NULL,
  `product_addon_group_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_product_addon_choices_product_addon_group_id_foreign` (`product_addon_group_id`),
  CONSTRAINT `ecommerce_product_addon_choices_product_addon_group_id_foreign` FOREIGN KEY (`product_addon_group_id`) REFERENCES `ecommerce_product_addon_groups` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_product_addon_choices`
--

LOCK TABLES `ecommerce_product_addon_choices` WRITE;
/*!40000 ALTER TABLE `ecommerce_product_addon_choices` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_product_addon_choices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_product_addon_groups`
--

DROP TABLE IF EXISTS `ecommerce_product_addon_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_product_addon_groups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json NOT NULL,
  `max_choices` int unsigned NOT NULL,
  `min_choices` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_product_addon_groups_product_id_foreign` (`product_id`),
  CONSTRAINT `ecommerce_product_addon_groups_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `ecommerce_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_product_addon_groups`
--

LOCK TABLES `ecommerce_product_addon_groups` WRITE;
/*!40000 ALTER TABLE `ecommerce_product_addon_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_product_addon_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_product_categories`
--

DROP TABLE IF EXISTS `ecommerce_product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_product_categories` (
  `product_id` int unsigned NOT NULL,
  `category_id` int unsigned NOT NULL,
  UNIQUE KEY `ecommerce_product_categories_product_id_category_id_unique` (`product_id`,`category_id`),
  KEY `ecommerce_product_categories_category_id_foreign` (`category_id`),
  CONSTRAINT `ecommerce_product_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_product_categories_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `ecommerce_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_product_categories`
--

LOCK TABLES `ecommerce_product_categories` WRITE;
/*!40000 ALTER TABLE `ecommerce_product_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_products`
--

DROP TABLE IF EXISTS `ecommerce_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` json DEFAULT NULL,
  `detail` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `owner` enum('admin','vendor') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'vendor',
  `parent_id` int unsigned DEFAULT NULL,
  `attribute_term_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sells_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `ecommerce_products_attribute_term_id_foreign` (`attribute_term_id`),
  CONSTRAINT `ecommerce_products_attribute_term_id_foreign` FOREIGN KEY (`attribute_term_id`) REFERENCES `ecommerce_attribute_terms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_products`
--

LOCK TABLES `ecommerce_products` WRITE;
/*!40000 ALTER TABLE `ecommerce_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_vendor_availabilities`
--

DROP TABLE IF EXISTS `ecommerce_vendor_availabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_vendor_availabilities` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `days` enum('sun','mon','tue','wed','thu','fri','sat') COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` time NOT NULL,
  `to` time NOT NULL,
  `vendor_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_vendor_availabilities_vendor_id_foreign` (`vendor_id`),
  CONSTRAINT `ecommerce_vendor_availabilities_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_vendor_availabilities`
--

LOCK TABLES `ecommerce_vendor_availabilities` WRITE;
/*!40000 ALTER TABLE `ecommerce_vendor_availabilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_vendor_availabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_vendor_categories`
--

DROP TABLE IF EXISTS `ecommerce_vendor_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_vendor_categories` (
  `vendor_id` int unsigned NOT NULL,
  `category_id` int unsigned NOT NULL,
  KEY `ecommerce_vendor_categories_vendor_id_foreign` (`vendor_id`),
  KEY `ecommerce_vendor_categories_category_id_foreign` (`category_id`),
  CONSTRAINT `ecommerce_vendor_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_vendor_categories_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_vendor_categories`
--

LOCK TABLES `ecommerce_vendor_categories` WRITE;
/*!40000 ALTER TABLE `ecommerce_vendor_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_vendor_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_vendor_product_categories`
--

DROP TABLE IF EXISTS `ecommerce_vendor_product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_vendor_product_categories` (
  `vendor_id` int unsigned NOT NULL,
  `category_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  KEY `ecommerce_vendor_product_categories_vendor_id_foreign` (`vendor_id`),
  KEY `ecommerce_vendor_product_categories_category_id_foreign` (`category_id`),
  KEY `ecommerce_vendor_product_categories_product_id_foreign` (`product_id`),
  CONSTRAINT `ecommerce_vendor_product_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_vendor_product_categories_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `ecommerce_products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_vendor_product_categories_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_vendor_product_categories`
--

LOCK TABLES `ecommerce_vendor_product_categories` WRITE;
/*!40000 ALTER TABLE `ecommerce_vendor_product_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_vendor_product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_vendor_products`
--

DROP TABLE IF EXISTS `ecommerce_vendor_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_vendor_products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `price` double(8,2) NOT NULL,
  `sale_price` double(8,2) DEFAULT NULL,
  `sale_price_from` date DEFAULT NULL,
  `sale_price_to` date DEFAULT NULL,
  `stock_quantity` int NOT NULL DEFAULT '-1',
  `stock_low_threshold` int NOT NULL DEFAULT '0',
  `vendor_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sells_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `ecommerce_vendor_products_vendor_id_foreign` (`vendor_id`),
  KEY `ecommerce_vendor_products_product_id_foreign` (`product_id`),
  CONSTRAINT `ecommerce_vendor_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `ecommerce_products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_vendor_products_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_vendor_products`
--

LOCK TABLES `ecommerce_vendor_products` WRITE;
/*!40000 ALTER TABLE `ecommerce_vendor_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_vendor_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecommerce_vendors`
--

DROP TABLE IF EXISTS `ecommerce_vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_vendors` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` json DEFAULT NULL,
  `tagline` json DEFAULT NULL,
  `details` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `minimum_order` int unsigned NOT NULL DEFAULT '0',
  `delivery_fee` int unsigned NOT NULL DEFAULT '0',
  `area` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `latitude` decimal(15,7) NOT NULL DEFAULT '0.0000000',
  `is_verified` tinyint(1) NOT NULL DEFAULT '1',
  `user_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `orders_count` int unsigned NOT NULL DEFAULT '0',
  `average_ratings` double(8,2) NOT NULL DEFAULT '0.00',
  `plan_sort_order` int unsigned NOT NULL DEFAULT '100',
  PRIMARY KEY (`id`),
  KEY `ecommerce_vendors_user_id_foreign` (`user_id`),
  CONSTRAINT `ecommerce_vendors_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecommerce_vendors`
--

LOCK TABLES `ecommerce_vendors` WRITE;
/*!40000 ALTER TABLE `ecommerce_vendors` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_vendors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faqs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faqs`
--

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;
INSERT INTO `faqs` VALUES (1,'Lorem ipsum','Lorem ipsum dolor sit amet.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',NULL,'2022-02-05 06:20:51','2022-02-05 06:20:51'),(2,'Lorem dolor','Lorem dolor ipsum dolor sit amet.','Lorem dolor ipsum sit amet, consectetur adipiscing elit.',NULL,'2022-02-05 06:20:51','2022-02-05 06:20:51');
/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `user_id` int unsigned NOT NULL,
  `favoriteable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `favoriteable_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`,`favoriteable_id`,`favoriteable_type`),
  KEY `favorites_favoriteable_type_favoriteable_id_index` (`favoriteable_type`,`favoriteable_id`),
  KEY `favorites_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:1;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061850,1644061850),(2,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:2;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061851,1644061851),(3,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:3;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061851,1644061851),(4,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:4;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061851,1644061851),(5,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:5;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061853,1644061853),(6,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:6;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061854,1644061854),(7,'default','{\"displayName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\",\"command\":\"O:43:\\\"Spatie\\\\MediaLibrary\\\\Jobs\\\\PerformConversions\\\":11:{s:14:\\\"\\u0000*\\u0000conversions\\\";O:51:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\ConversionCollection\\\":2:{s:8:\\\"\\u0000*\\u0000media\\\";N;s:8:\\\"\\u0000*\\u0000items\\\";a:1:{i:0;O:41:\\\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\\\":7:{s:7:\\\"\\u0000*\\u0000name\\\";s:5:\\\"thumb\\\";s:28:\\\"\\u0000*\\u0000extractVideoFrameAtSecond\\\";i:0;s:16:\\\"\\u0000*\\u0000manipulations\\\";O:26:\\\"Spatie\\\\Image\\\\Manipulations\\\":1:{s:23:\\\"\\u0000*\\u0000manipulationSequence\\\";O:33:\\\"Spatie\\\\Image\\\\ManipulationSequence\\\":1:{s:9:\\\"\\u0000*\\u0000groups\\\";a:1:{i:0;a:3:{s:8:\\\"optimize\\\";s:341:\\\"{\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Jpegoptim\\\":[\\\"--strip-all\\\",\\\"--all-progressive\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Pngquant\\\":[\\\"--force\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Optipng\\\":[\\\"-i0\\\",\\\"-o2\\\",\\\"-quiet\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Svgo\\\":[\\\"--disable=cleanupIDs\\\"],\\\"Spatie\\\\\\\\ImageOptimizer\\\\\\\\Optimizers\\\\\\\\Gifsicle\\\":[\\\"-b\\\",\\\"-O3\\\"]}\\\";s:6:\\\"format\\\";s:3:\\\"jpg\\\";s:5:\\\"width\\\";s:2:\\\"50\\\";}}}}s:23:\\\"\\u0000*\\u0000performOnCollections\\\";a:0:{}s:17:\\\"\\u0000*\\u0000performOnQueue\\\";b:1;s:26:\\\"\\u0000*\\u0000keepOriginalImageFormat\\\";b:0;s:27:\\\"\\u0000*\\u0000generateResponsiveImages\\\";b:0;}}}s:8:\\\"\\u0000*\\u0000media\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:32:\\\"Spatie\\\\MediaLibrary\\\\Models\\\\Media\\\";s:2:\\\"id\\\";i:7;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:14:\\\"\\u0000*\\u0000onlyMissing\\\";b:0;s:6:\\\"\\u0000*\\u0000job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}',0,NULL,1644061854,1644061854);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL COMMENT 'user_id',
  `likeable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likeable_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `likes_likeable_type_likeable_id_index` (`likeable_type`,`likeable_id`),
  KEY `likes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ltm_translations`
--

DROP TABLE IF EXISTS `ltm_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ltm_translations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `status` int NOT NULL DEFAULT '0',
  `locale` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `group` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `key` text COLLATE utf8mb4_bin NOT NULL,
  `value` text COLLATE utf8mb4_bin,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ltm_translations`
--

LOCK TABLES `ltm_translations` WRITE;
/*!40000 ALTER TABLE `ltm_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `ltm_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  `collection_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` bigint unsigned NOT NULL,
  `manipulations` json NOT NULL,
  `custom_properties` json NOT NULL,
  `responsive_images` json NOT NULL,
  `order_column` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `media_model_type_model_id_index` (`model_type`,`model_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,'Vtlabs\\Category\\Models\\Category',1,'images','seeds','seeds.png','image/png','public',149277,'[]','[]','[]',1,'2022-02-05 06:20:50','2022-02-05 06:20:50'),(2,'Vtlabs\\Category\\Models\\Category',2,'images','veg','veg.png','image/png','public',145831,'[]','[]','[]',2,'2022-02-05 06:20:51','2022-02-05 06:20:51'),(3,'Vtlabs\\Category\\Models\\Category',3,'images','dryfruits','dryfruits.png','image/png','public',179235,'[]','[]','[]',3,'2022-02-05 06:20:51','2022-02-05 06:20:51'),(4,'Vtlabs\\Category\\Models\\Category',4,'images','grains','grains.png','image/png','public',136655,'[]','[]','[]',4,'2022-02-05 06:20:51','2022-02-05 06:20:51'),(5,'Vtlabs\\Banner\\Models\\Banner',1,'images','Banner0','Banner0.png','image/png','public',852053,'[]','[]','[]',5,'2022-02-05 06:20:53','2022-02-05 06:20:53'),(6,'Vtlabs\\Banner\\Models\\Banner',2,'images','Banner1','Banner1.png','image/png','public',812353,'[]','[]','[]',6,'2022-02-05 06:20:54','2022-02-05 06:20:54'),(7,'Vtlabs\\Banner\\Models\\Banner',3,'images','Banner2','Banner2.png','image/png','public',776779,'[]','[]','[]',7,'2022-02-05 06:20:54','2022-02-05 06:20:54');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_04_02_193005_create_translations_table',1),(2,'2016_06_01_000001_create_oauth_auth_codes_table',1),(3,'2016_06_01_000002_create_oauth_access_tokens_table',1),(4,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(5,'2016_06_01_000004_create_oauth_clients_table',1),(6,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(7,'2018_06_07_123211_plans',1),(8,'2018_07_14_183253_create_table_appointments',1),(9,'2018_07_14_183253_payment_methods',1),(10,'2018_07_14_183253_payments',1),(11,'2018_07_14_183253_ratings',1),(12,'2018_07_14_183254_alter_payment_methods',1),(13,'2018_08_08_100000_create_telescope_entries_table',1),(14,'2018_12_14_000000_create_likes_table',1),(15,'2019_06_07_123211_plans_metadata',1),(16,'2020_04_04_000000_create_user_follower_table',1),(17,'2020_05_02_000545_create_permission_tables',1),(18,'2020_05_05_002400_create_statuses_table',1),(19,'2020_05_05_122859_create_media_table',1),(20,'2020_07_04_142129_create_favorites_table',1),(21,'2020_07_09_150356_create_banners_table',1),(22,'2020_07_09_150356_create_blocks_table',1),(23,'2020_07_09_150356_create_faqs_table',1),(24,'2020_07_09_150356_create_reports_table',1),(25,'2020_07_09_150356_create_supports_table',1),(26,'2020_08_27_115615_create_jobs_table',1),(27,'2050_01_01_000005_create_users_table',1),(28,'2050_01_01_000010_create_password_resets_table',1),(29,'2050_01_01_000015_create_settings_table',1),(30,'2050_01_01_000020_create_activity_logs_table',1),(31,'2050_01_01_000025_create_notifications_table',1),(32,'2050_01_01_000030_create_user_addresses_table',1),(33,'2051_01_01_000010_create_addresses_table',1),(34,'2051_01_01_000012_create_delivery_modes_table',1),(35,'2051_01_01_000020_create_categories_table',1),(36,'2051_01_01_000030_create_vendors_table',1),(37,'2051_01_01_000035_create_delivery_profiles_table',1),(38,'2051_01_01_000038_create_attributes_table',1),(39,'2051_01_01_000040_create_products_table',1),(40,'2051_01_01_000042_create_vendor_products_table',1),(41,'2051_01_01_000044_create_vendor_product_categories_table',1),(42,'2051_01_01_000050_create_order_conditions_table',1),(43,'2051_01_01_000060_create_orders_table',1),(44,'2051_01_01_000070_create_order_deliveries_table',1),(45,'2051_01_01_000080_create_order_addresses_table',1),(46,'2051_01_01_000100_create_order_products_table',1),(47,'2051_01_01_000110_create_order_product_addons_table',1),(48,'2051_01_01_000120_create_coupons_table',1),(49,'2051_01_01_000130_create_delivery_order_requests_table',1),(50,'2051_01_01_000140_create_customers_table',1),(51,'2051_01_01_000140_create_multi_order_payments_table',1),(52,'2051_01_01_000150_create_authentication_delegations_table',1),(53,'2051_01_01_000150_create_multi_order_payment_orders_table',1),(54,'2051_01_01_000160_create_feedbacks_table',1),(55,'2051_01_01_000170_create_vendor_availabilities_table',1),(56,'2051_01_01_000200_create_category_preferences_table',1),(57,'2051_01_01_000200_create_mobile_languages_table',1),(58,'2051_01_01_000201_alter_mobile_languages_table',1),(59,'2051_01_01_000510_alter_orders_add_distance_travelled_table',1),(60,'2051_01_01_000510_alter_vendors_add_stats_table',1),(61,'2051_01_01_000550_alter_products_add_sells_count',1),(62,'2051_01_01_000560_alter_vendor_products_add_sells_count',1),(63,'2051_01_01_000570_alter_add_v3_columns_table',1),(64,'2051_01_01_000580_alter_vendors_add_plan_sortorder_table',1),(65,'2052_02_20_113000_create_wallets_table',1),(66,'2052_02_20_113500_create_wallet_transactions_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobile_languages`
--

DROP TABLE IF EXISTS `mobile_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobile_languages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `language_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language_title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobile_languages`
--

LOCK TABLES `mobile_languages` WRITE;
/*!40000 ALTER TABLE `mobile_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `mobile_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
INSERT INTO `model_has_roles` VALUES (1,'Vtlabs\\Core\\Models\\User\\User',1);
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` text COLLATE utf8mb4_unicode_ci,
  `meta` json DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int unsigned DEFAULT NULL,
  `from_user_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_user_id_foreign` (`user_id`),
  KEY `notifications_from_user_id_foreign` (`from_user_id`),
  CONSTRAINT `notifications_from_user_id_foreign` FOREIGN KEY (`from_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `client_id` bigint unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Foodoz Personal Access Client','QXIIcfikq4qEHtI0aa7XWjWrWaEb2dOahYEUbY5r','http://localhost',1,0,0,'2022-02-05 06:20:55','2022-02-05 06:20:55'),(2,NULL,'Foodoz Password Grant Client','zqg53ZVsbQIYecw1DuKDECTj5DYiQubD5kxenscP','http://localhost',0,1,0,'2022-02-05 06:20:55','2022-02-05 06:20:55');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2022-02-05 06:20:55','2022-02-05 06:20:55');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` json NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `type` enum('prepaid','postpaid') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payment_methods_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES (1,'cod','{\"en\": \"Cash On Delivery\"}',1,'postpaid','2022-02-05 06:20:51','2022-02-05 06:20:51',NULL),(2,'wallet','{\"en\": \"Wallet\"}',1,'prepaid','2022-02-05 06:20:51','2022-02-05 06:20:51',NULL);
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `payable_id` int NOT NULL,
  `payable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payer_id` int DEFAULT NULL,
  `payer_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` decimal(9,2) NOT NULL,
  `payment_method_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payments_payment_method_id_foreign` (`payment_method_id`),
  CONSTRAINT `payments_payment_method_id_foreign` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `price` double(8,2) NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int NOT NULL DEFAULT '30',
  `metadata` mediumtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans`
--

LOCK TABLES `plans` WRITE;
/*!40000 ALTER TABLE `plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans_features`
--

DROP TABLE IF EXISTS `plans_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans_features` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `plan_id` int NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `type` enum('feature','limit') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'feature',
  `limit` int NOT NULL DEFAULT '0',
  `metadata` mediumtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans_features`
--

LOCK TABLES `plans_features` WRITE;
/*!40000 ALTER TABLE `plans_features` DISABLE KEYS */;
/*!40000 ALTER TABLE `plans_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans_subscriptions`
--

DROP TABLE IF EXISTS `plans_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans_subscriptions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `plan_id` int NOT NULL,
  `model_id` int NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_method` enum('stripe') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_paid` tinyint(1) NOT NULL DEFAULT '0',
  `charging_price` double(8,2) DEFAULT NULL,
  `charging_currency` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_recurring` tinyint(1) NOT NULL DEFAULT '1',
  `recurring_each_days` int NOT NULL DEFAULT '30',
  `starts_on` timestamp NULL DEFAULT NULL,
  `expires_on` timestamp NULL DEFAULT NULL,
  `cancelled_on` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans_subscriptions`
--

LOCK TABLES `plans_subscriptions` WRITE;
/*!40000 ALTER TABLE `plans_subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `plans_subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans_usages`
--

DROP TABLE IF EXISTS `plans_usages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans_usages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `subscription_id` int NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `used` double(9,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans_usages`
--

LOCK TABLES `plans_usages` WRITE;
/*!40000 ALTER TABLE `plans_usages` DISABLE KEYS */;
/*!40000 ALTER TABLE `plans_usages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `review` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rateable_id` int NOT NULL,
  `rateable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rater_id` int DEFAULT NULL,
  `rater_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` double(9,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `reportable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reportable_id` bigint unsigned NOT NULL,
  `reporter_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reporter_id` bigint unsigned NOT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reports_reportable_type_reportable_id_index` (`reportable_type`,`reportable_id`),
  KEY `reports_reporter_type_reporter_id_index` (`reporter_type`,`reporter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','api','2022-02-05 06:20:48','2022-02-05 06:20:48'),(2,'customer','api','2022-02-05 06:20:48','2022-02-05 06:20:48'),(3,'vendor','api','2022-02-05 06:20:48','2022-02-05 06:20:48'),(4,'delivery','api','2022-02-05 06:20:48','2022-02-05 06:20:48');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settings` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('string','text','json','numeric','boolean') COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_key_unique` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (1,'currency_code','USD','string'),(2,'currency_icon','$','string'),(3,'tax_in_percent','10','string'),(4,'support_email','admin@example.com','string'),(5,'support_phone','8181818118','string'),(6,'delivery_fee','25','string'),(7,'delivery_fee_set_by','admin','string'),(8,'delivery_fee_per_km_base','5','string'),(9,'delivery_fee_per_km_base_distance','5','string'),(10,'delivery_fee_per_km_charge','5','string'),(11,'distance_metric','KM','string'),(12,'refer_amount','50','string'),(13,'delivery_distance','8000','string'),(14,'privacy_policy','Demo privacy policy','string'),(15,'about_us','Demo privacy policy','string'),(16,'terms','Demo Terms and Condition','string'),(17,'admin_commision_type','percent','string'),(18,'admin_commision_value','10','string');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `statuses_model_type_model_id_index` (`model_type`,`model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stripe_customers`
--

DROP TABLE IF EXISTS `stripe_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stripe_customers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `model_id` int NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stripe_customers`
--

LOCK TABLES `stripe_customers` WRITE;
/*!40000 ALTER TABLE `stripe_customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `stripe_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supports`
--

DROP TABLE IF EXISTS `supports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supports` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supports`
--

LOCK TABLES `supports` WRITE;
/*!40000 ALTER TABLE `supports` DISABLE KEYS */;
/*!40000 ALTER TABLE `supports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telescope_entries`
--

DROP TABLE IF EXISTS `telescope_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telescope_entries` (
  `sequence` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `family_hash` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `should_display_on_index` tinyint(1) NOT NULL DEFAULT '1',
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`sequence`),
  UNIQUE KEY `telescope_entries_uuid_unique` (`uuid`),
  KEY `telescope_entries_batch_id_index` (`batch_id`),
  KEY `telescope_entries_family_hash_index` (`family_hash`),
  KEY `telescope_entries_created_at_index` (`created_at`),
  KEY `telescope_entries_type_should_display_on_index_index` (`type`,`should_display_on_index`)
) ENGINE=InnoDB AUTO_INCREMENT=336 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telescope_entries`
--

LOCK TABLES `telescope_entries` WRITE;
/*!40000 ALTER TABLE `telescope_entries` DISABLE KEYS */;
INSERT INTO `telescope_entries` VALUES (1,'9586cc3c-3b92-44b5-b09d-918e68f26665','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"SHOW FULL TABLES WHERE table_type = \'BASE TABLE\'\",\"time\":\"2.93\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"6f829d6126b80ce8ebe0bf8bda994397\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(2,'9586cc3c-3cbe-41c6-af17-0f2ba5236938','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"SET FOREIGN_KEY_CHECKS=0;\",\"time\":\"0.40\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"9c5164ece4bf39898f83f37fb558d94e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(3,'9586cc3c-a390-4076-83b7-146f336988e3','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"drop table `activity_logs`,`addresses`,`appointments`,`banners`,`blocks`,`categories`,`category_preferences`,`ecommerce_addresses`,`ecommerce_attribute_terms`,`ecommerce_attributes`,`ecommerce_authentication_delegations`,`ecommerce_coupons`,`ecommerce_coupons_users`,`ecommerce_customers`,`ecommerce_delivery_modes`,`ecommerce_delivery_order_requests`,`ecommerce_delivery_profiles`,`ecommerce_feedback_options`,`ecommerce_feedback_questions`,`ecommerce_feedback_results`,`ecommerce_multi_order_payment_orders`,`ecommerce_multi_order_payments`,`ecommerce_order_addresses`,`ecommerce_order_conditions`,`ecommerce_order_deliveries`,`ecommerce_order_product_addons`,`ecommerce_order_products`,`ecommerce_orders`,`ecommerce_product_addon_choices`,`ecommerce_product_addon_groups`,`ecommerce_product_categories`,`ecommerce_products`,`ecommerce_vendor_availabilities`,`ecommerce_vendor_categories`,`ecommerce_vendor_product_categories`,`ecommerce_vendor_products`,`ecommerce_vendors`,`faqs`,`favorites`,`jobs`,`likes`,`ltm_translations`,`media`,`migrations`,`mobile_languages`,`model_has_permissions`,`model_has_roles`,`notifications`,`oauth_access_tokens`,`oauth_auth_codes`,`oauth_clients`,`oauth_personal_access_clients`,`oauth_refresh_tokens`,`password_resets`,`payment_methods`,`payments`,`permissions`,`plans`,`plans_features`,`plans_subscriptions`,`plans_usages`,`ratings`,`reports`,`role_has_permissions`,`roles`,`settings`,`statuses`,`stripe_customers`,`supports`,`telescope_entries`,`telescope_entries_tags`,`telescope_monitoring`,`user_follower`,`users`,`wallet_transactions`,`wallets`\",\"time\":\"262.53\",\"slow\":true,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"d4d03092137820aaa96c2e3ca89c3dc5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(4,'9586cc3c-a3b2-483f-bdc7-2f5b75201c6a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"SET FOREIGN_KEY_CHECKS=1;\",\"time\":\"0.14\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ff8d2195509c14c72a84fc4ea05c636c\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(5,'9586cc3c-a44e-4de3-913f-4eac38406a6f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from information_schema.tables where table_schema = \'ecommerce_foodoz\' and table_name = \'migrations\' and table_type = \'BASE TABLE\'\",\"time\":\"1.02\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ad7d07e5104cadcc6e9623dfc5fefdd8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(6,'9586cc3c-a6af-4a5e-bcd7-05adb70d0604','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `migrations` (`id` int unsigned not null auto_increment primary key, `migration` varchar(191) not null, `batch` int not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.57\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"dca3ddae9e8bbcd341293787e8610ea0\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(7,'9586cc3c-a7bc-4eed-ac8c-6be458783c49','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select `migration` from `migrations` order by `batch` asc, `migration` asc\",\"time\":\"0.78\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ed08a59c7f0b8851f0fd2291ca94d5c7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(8,'9586cc3c-aa48-47af-9a5e-26c7335c4801','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`batch`) as aggregate from `migrations`\",\"time\":\"0.34\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"06e60d7b3d1a0c2de504de4e6f27735e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(9,'9586cc3c-acaa-4148-9451-d1567a8a0b42','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ltm_translations` (`id` bigint unsigned not null auto_increment primary key, `status` int not null default \'0\', `locale` varchar(191) not null, `group` varchar(191) not null, `key` text not null, `value` text null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_bin\'\",\"time\":\"5.26\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2014_04_02_193005_create_translations_table.php\",\"line\":25,\"hash\":\"cfea85ef3381b8874207e9e9e5b9c13a\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(10,'9586cc3c-ad0e-4f5c-9991-02896bf78de5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2014_04_02_193005_create_translations_table\', 1)\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(11,'9586cc3c-af1c-47b1-b24e-c98ef347c694','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `oauth_auth_codes` (`id` varchar(100) not null, `user_id` bigint unsigned not null, `client_id` bigint unsigned not null, `scopes` text null, `revoked` tinyint(1) not null, `expires_at` datetime null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.79\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000001_create_oauth_auth_codes_table.php\",\"line\":23,\"hash\":\"6aa061f0fc61b1fd026b5d2bebdf3449\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(12,'9586cc3c-b24a-4e87-a693-0455a9ab18a0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `oauth_auth_codes` add primary key `oauth_auth_codes_id_primary`(`id`)\",\"time\":\"7.95\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000001_create_oauth_auth_codes_table.php\",\"line\":23,\"hash\":\"1adb39f917be92744b1c913f3c50cc25\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(13,'9586cc3c-b418-4d30-a543-a4a0bd8f3ad8','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `oauth_auth_codes` add index `oauth_auth_codes_user_id_index`(`user_id`)\",\"time\":\"4.42\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000001_create_oauth_auth_codes_table.php\",\"line\":23,\"hash\":\"672329a8ecc84bf315ed3624dd041214\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(14,'9586cc3c-b476-43a0-9c7e-f504af1fdf93','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2016_06_01_000001_create_oauth_auth_codes_table\', 1)\",\"time\":\"0.65\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(15,'9586cc3c-b6c4-447a-b60d-15697ac0ea90','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `oauth_access_tokens` (`id` varchar(100) not null, `user_id` bigint unsigned null, `client_id` bigint unsigned not null, `name` varchar(191) null, `scopes` text null, `revoked` tinyint(1) not null, `created_at` timestamp null, `updated_at` timestamp null, `expires_at` datetime null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.44\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000002_create_oauth_access_tokens_table.php\",\"line\":25,\"hash\":\"944d905f87d4be029af74c95415d0273\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(16,'9586cc3c-b9db-4180-8f03-82f7b929da13','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `oauth_access_tokens` add primary key `oauth_access_tokens_id_primary`(`id`)\",\"time\":\"7.74\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000002_create_oauth_access_tokens_table.php\",\"line\":25,\"hash\":\"6b7c78e2920404ce91d36f8d8c8307ba\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(17,'9586cc3c-bbc6-4e90-8fe1-be8eb14c5cb5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `oauth_access_tokens` add index `oauth_access_tokens_user_id_index`(`user_id`)\",\"time\":\"4.71\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000002_create_oauth_access_tokens_table.php\",\"line\":25,\"hash\":\"c1b15baef8790b12f521213dbe280686\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(18,'9586cc3c-bc16-4e46-80aa-16c2317a263d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2016_06_01_000002_create_oauth_access_tokens_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(19,'9586cc3c-be70-41bd-907f-7d0b0150d5e5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `oauth_refresh_tokens` (`id` varchar(100) not null, `access_token_id` varchar(100) not null, `revoked` tinyint(1) not null, `expires_at` datetime null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000003_create_oauth_refresh_tokens_table.php\",\"line\":21,\"hash\":\"ac33fb223db31a26b02fb622cf82ca04\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(20,'9586cc3c-c2c7-4b4b-9223-337bda727ffc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `oauth_refresh_tokens` add primary key `oauth_refresh_tokens_id_primary`(`id`)\",\"time\":\"10.84\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000003_create_oauth_refresh_tokens_table.php\",\"line\":21,\"hash\":\"ee33f1fe3e4cecba8aef8bd5cad6b706\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(21,'9586cc3c-c338-4d00-ae11-eacc94c1bdbd','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2016_06_01_000003_create_oauth_refresh_tokens_table\', 1)\",\"time\":\"0.76\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(22,'9586cc3c-c5c2-47cf-9238-5a6f414caf25','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `oauth_clients` (`id` bigint unsigned not null auto_increment primary key, `user_id` bigint unsigned null, `name` varchar(191) not null, `secret` varchar(100) null, `redirect` text not null, `personal_access_client` tinyint(1) not null, `password_client` tinyint(1) not null, `revoked` tinyint(1) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.93\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000004_create_oauth_clients_table.php\",\"line\":26,\"hash\":\"d65cf8b670d3f295b884c5f1a0c2f214\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(23,'9586cc3c-c84f-4933-afd8-b171075e945f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `oauth_clients` add index `oauth_clients_user_id_index`(`user_id`)\",\"time\":\"6.27\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000004_create_oauth_clients_table.php\",\"line\":26,\"hash\":\"d80805c01983b9f1402e5c83cc8fca13\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(24,'9586cc3c-c8ac-430b-861f-3284302cd40d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2016_06_01_000004_create_oauth_clients_table\', 1)\",\"time\":\"0.66\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(25,'9586cc3c-ca84-44aa-acc2-fbc073a61575','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `oauth_personal_access_clients` (`id` bigint unsigned not null auto_increment primary key, `client_id` bigint unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.35\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2016_06_01_000005_create_oauth_personal_access_clients_table.php\",\"line\":20,\"hash\":\"e0d623a5cea9359b37b49a3525a26391\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(26,'9586cc3c-cad5-4f81-8827-4c422dde9f93','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2016_06_01_000005_create_oauth_personal_access_clients_table\', 1)\",\"time\":\"0.53\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(27,'9586cc3c-d06d-495a-8b3b-b751b366bedc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `plans` (`id` int unsigned not null auto_increment primary key, `name` varchar(191) not null, `description` text null, `price` double(8, 2) not null, `currency` varchar(191) not null, `duration` int not null default \'30\', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"13.89\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_06_07_123211_plans.php\",\"line\":28,\"hash\":\"b6dbce85daee2ab58c42b66691142812\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(28,'9586cc3c-d309-42c0-9aed-5c6edb141af2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `plans_features` (`id` int unsigned not null auto_increment primary key, `plan_id` int not null, `name` varchar(191) not null, `code` varchar(191) not null, `description` text null, `type` enum(\'feature\', \'limit\') not null default \'feature\', `limit` int not null default \'0\', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.23\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_06_07_123211_plans.php\",\"line\":42,\"hash\":\"26a9fc2ede795a997bbb1a1cd3ecd7a5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(29,'9586cc3c-d5f3-460c-8c41-587d3c9074bc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `plans_subscriptions` (`id` int unsigned not null auto_increment primary key, `plan_id` int not null, `model_id` int not null, `model_type` varchar(191) not null, `payment_method` enum(\'stripe\') null, `is_paid` tinyint(1) not null default \'0\', `charging_price` double(8, 2) null, `charging_currency` varchar(191) null, `is_recurring` tinyint(1) not null default \'1\', `recurring_each_days` int not null default \'30\', `starts_on` timestamp null, `expires_on` timestamp null, `cancelled_on` timestamp null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.90\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_06_07_123211_plans.php\",\"line\":65,\"hash\":\"05222e9410114be1afb2582386da29e8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(30,'9586cc3c-d8df-40f0-82d8-a2bb3bc55619','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `plans_usages` (`id` int unsigned not null auto_increment primary key, `subscription_id` int not null, `code` varchar(191) not null, `used` double(9, 2) not null default \'0\', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.05\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_06_07_123211_plans.php\",\"line\":75,\"hash\":\"028bf5f94bfcdc4553952ac8c8defd2b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(31,'9586cc3c-db32-40c3-9c39-07d3d9dd9701','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `stripe_customers` (`id` int unsigned not null auto_increment primary key, `model_id` int not null, `model_type` varchar(191) not null, `customer_id` varchar(191) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.47\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_06_07_123211_plans.php\",\"line\":86,\"hash\":\"6ff134b3c20dc849a078cc806772398d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(32,'9586cc3c-dbaf-4294-96ca-0d19262695a8','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_06_07_123211_plans\', 1)\",\"time\":\"0.90\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(33,'9586cc3c-de6a-4a80-b157-cc99518baf8a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `appointments` (`id` int unsigned not null auto_increment primary key, `appointee_id` int not null, `appointee_type` varchar(191) not null, `appointer_id` int null, `appointer_type` varchar(191) null, `meta` json null, `amount` decimal(9, 2) not null default \'0\', `amount_meta` json null, `address` varchar(191) null, `address_meta` json null, `longitude` decimal(15, 7) not null default \'0\', `latitude` decimal(15, 7) not null default \'0\', `date` date not null, `time_from` time not null, `time_to` time not null, `is_guest` tinyint(1) not null default \'0\', `customer_name` varchar(191) null, `customer_email` varchar(191) null, `customer_mobile` varchar(191) null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.08\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f76ef30d08913020b0be5d85f9482b8b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(34,'9586cc3c-debc-41d5-9c7d-61329605d190','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_07_14_183253_create_table_appointments\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(35,'9586cc3c-e0ed-4070-9b32-02cdb8934968','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `payment_methods` (`id` int unsigned not null auto_increment primary key, `slug` varchar(191) not null, `title` json not null, `enabled` tinyint(1) not null default \'1\', `type` enum(\'prepaid\', \'postpaid\') not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.14\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"a36f5b37388f51896aeb863633053876\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(36,'9586cc3c-e312-4c24-a6f2-fbd8a29fcb2c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `payment_methods` add unique `payment_methods_slug_unique`(`slug`)\",\"time\":\"5.25\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"683e74b74429c21834d0db32d95d5750\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(37,'9586cc3c-e368-41f7-8f61-0e651b71f69b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_07_14_183253_payment_methods\', 1)\",\"time\":\"0.56\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(38,'9586cc3c-e5f2-4582-9bf8-e9c047f738a7','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `payments` (`id` int unsigned not null auto_increment primary key, `payable_id` int not null, `payable_type` varchar(191) not null, `payer_id` int null, `payer_type` varchar(191) null, `amount` decimal(9, 2) not null, `payment_method_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.87\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f54c995eea65fe27c804212e5480e44a\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:46'),(39,'9586cc3c-edb6-4175-b3a2-9e618993e06a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `payments` add constraint `payments_payment_method_id_foreign` foreign key (`payment_method_id`) references `payment_methods` (`id`) on delete set null\",\"time\":\"19.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ea4a6e83722f4ba5ef63b8dacf07eb9c\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(40,'9586cc3c-ee1a-48c2-bdc7-b4de12ba3762','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_07_14_183253_payments\', 1)\",\"time\":\"0.71\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(41,'9586cc3c-f046-4c8d-9508-a31c12e11f37','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ratings` (`id` int unsigned not null auto_increment primary key, `review` text not null, `rateable_id` int not null, `rateable_type` varchar(191) not null, `rater_id` int null, `rater_type` varchar(191) null, `rating` double(9, 2) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.08\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_07_14_183253_ratings.php\",\"line\":30,\"hash\":\"d8c6b73d3b7052cfa848508de8dc8410\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(42,'9586cc3c-f096-4087-9d3a-059490867a5e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_07_14_183253_ratings\', 1)\",\"time\":\"0.53\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(43,'9586cc3c-f3ad-4de7-8abe-5c5dc407ff8d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `payment_methods` add `meta` json null\",\"time\":\"7.53\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"99c85767e528efd6949c2418a12fcc6b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(44,'9586cc3c-f3f8-4bf0-bef8-cd3593936c51','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_07_14_183254_alter_payment_methods\', 1)\",\"time\":\"0.50\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(45,'9586cc3c-f6fc-4c44-b720-046e32bcd5a9','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `telescope_entries` (`sequence` bigint unsigned not null auto_increment primary key, `uuid` char(36) not null, `batch_id` char(36) not null, `family_hash` varchar(191) null, `should_display_on_index` tinyint(1) not null default \'1\', `type` varchar(20) not null, `content` longtext not null, `created_at` datetime null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.20\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":58,\"hash\":\"8d1ffbefc0996658c0af05e275ad250b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(46,'9586cc3c-f9ee-4c0d-901c-3b02c8542a66','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries` add unique `telescope_entries_uuid_unique`(`uuid`)\",\"time\":\"7.30\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":58,\"hash\":\"9fb859ae1faff74c6b9e0b70dfd8eea9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(47,'9586cc3c-fd17-473f-93d0-d186be96a8c0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries` add index `telescope_entries_batch_id_index`(`batch_id`)\",\"time\":\"7.73\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":58,\"hash\":\"2b075509a9242d6e3f622536c5ccca07\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(48,'9586cc3d-0074-420a-a406-9ad3597b6b42','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries` add index `telescope_entries_family_hash_index`(`family_hash`)\",\"time\":\"8.27\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":58,\"hash\":\"3d25a2a244bd2028dfa0326d3dbf7f4c\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(49,'9586cc3d-0366-4a42-a64c-4e740ba9861e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries` add index `telescope_entries_created_at_index`(`created_at`)\",\"time\":\"7.27\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":58,\"hash\":\"7352e7f84460fb7ffc450e7ea4de9dc7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(50,'9586cc3d-05fd-4122-8927-cdb2d707dc2e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries` add index `telescope_entries_type_should_display_on_index_index`(`type`, `should_display_on_index`)\",\"time\":\"6.40\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":58,\"hash\":\"7317a4cad2dfa1a5167548a6acd0b6a5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(51,'9586cc3d-07ea-4d90-9d50-375ecbd91ab5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `telescope_entries_tags` (`entry_uuid` char(36) not null, `tag` varchar(191) not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.59\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":71,\"hash\":\"49a385485c9ea77ced1287c810e06704\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(52,'9586cc3d-09df-46ee-af00-0cc5dd7ea7dc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries_tags` add index `telescope_entries_tags_entry_uuid_tag_index`(`entry_uuid`, `tag`)\",\"time\":\"4.79\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":71,\"hash\":\"d77cdf5585b51f60954d40e76786e20f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(53,'9586cc3d-0bc1-467b-bccf-9caeff2fdd9b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries_tags` add index `telescope_entries_tags_tag_index`(`tag`)\",\"time\":\"4.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":71,\"hash\":\"0bdb35d17e876d6225a7774a2c17647d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(54,'9586cc3d-14b2-46ba-b6a9-ff3414799c8b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `telescope_entries_tags` add constraint `telescope_entries_tags_entry_uuid_foreign` foreign key (`entry_uuid`) references `telescope_entries` (`uuid`) on delete cascade\",\"time\":\"22.61\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":71,\"hash\":\"662a818f80a3a9ba2570081fd7a6af2f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(55,'9586cc3d-1712-4003-a6e9-3b5f6b433976','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `telescope_monitoring` (`tag` varchar(191) not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.75\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2018_08_08_100000_create_telescope_entries_table.php\",\"line\":75,\"hash\":\"88f0c31d036f95c144b2633daa82c5dd\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(56,'9586cc3d-1778-4e57-8844-a554bf0de3f7','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_08_08_100000_create_telescope_entries_table\', 1)\",\"time\":\"0.69\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(57,'9586cc3d-19df-4701-9c7b-4d3f2fecaf07','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `likes` (`id` bigint unsigned not null auto_increment primary key, `user_id` bigint unsigned not null comment \'user_id\', `likeable_type` varchar(191) not null, `likeable_id` bigint unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.59\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"880cd0689f32a0d180a6804eec134990\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(58,'9586cc3d-1c06-481c-8aef-89c22f265b1d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `likes` add index `likes_likeable_type_likeable_id_index`(`likeable_type`, `likeable_id`)\",\"time\":\"5.25\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"328443a41d311ae3484041ff982dd46f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(59,'9586cc3d-1de4-4355-97ac-9eaea76ba619','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `likes` add index `likes_user_id_index`(`user_id`)\",\"time\":\"4.53\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"abe28084c4952e7d9a5aebf215ed8307\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(60,'9586cc3d-1e37-449c-ad35-13c989cf6d57','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2018_12_14_000000_create_likes_table\', 1)\",\"time\":\"0.56\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(61,'9586cc3d-2331-4a80-8e44-cf0185e04db8','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `plans` add `metadata` mediumtext null after `duration`\",\"time\":\"12.27\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2019_06_07_123211_plans_metadata.php\",\"line\":18,\"hash\":\"6d85f09f6ccb2e515282e827533da796\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(62,'9586cc3d-2886-497a-a4ae-108a2d186a47','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `plans_features` add `metadata` mediumtext null after `limit`\",\"time\":\"13.21\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2019_06_07_123211_plans_metadata.php\",\"line\":22,\"hash\":\"ebe5bfed4e2826b2bcdbe7c4c0953a58\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(63,'9586cc3d-28eb-4af6-940f-bc35645b5379','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2019_06_07_123211_plans_metadata\', 1)\",\"time\":\"0.71\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(64,'9586cc3d-2b13-43d4-b8a1-cddd88f0a8c6','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `user_follower` (`id` int unsigned not null auto_increment primary key, `following_id` bigint unsigned not null, `follower_id` bigint unsigned not null, `accepted_at` timestamp null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.07\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_04_04_000000_create_user_follower_table.php\",\"line\":29,\"hash\":\"9079a00a5ecf955e531e75dd4c0a4ff8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(65,'9586cc3d-2d04-4a8c-8948-def7441cd04b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `user_follower` add index `user_follower_following_id_index`(`following_id`)\",\"time\":\"4.80\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_04_04_000000_create_user_follower_table.php\",\"line\":29,\"hash\":\"ecfe502d2f5796fcede2410d93199838\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(66,'9586cc3d-2eb8-4531-b733-c6d409c710a8','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `user_follower` add index `user_follower_follower_id_index`(`follower_id`)\",\"time\":\"4.19\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_04_04_000000_create_user_follower_table.php\",\"line\":29,\"hash\":\"44117eede74b2d4792654ec9a1a4837e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(67,'9586cc3d-30b1-4f3d-b09d-8dff88322fc7','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `user_follower` add index `user_follower_accepted_at_index`(`accepted_at`)\",\"time\":\"4.87\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_04_04_000000_create_user_follower_table.php\",\"line\":29,\"hash\":\"17ad061ab277ccdc9a7e9e9d25f3e0c8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(68,'9586cc3d-3103-4d21-aefc-cd7a9d44ac1d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_04_04_000000_create_user_follower_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(69,'9586cc3d-3313-4bf8-95d9-4f494379d987','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `permissions` (`id` bigint unsigned not null auto_increment primary key, `name` varchar(191) not null, `guard_name` varchar(191) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.80\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":28,\"hash\":\"943d0cba252f3c1eb856b525af7aa8c2\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(70,'9586cc3d-35fd-4002-9e6b-c8611e412b29','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `roles` (`id` bigint unsigned not null auto_increment primary key, `name` varchar(191) not null, `guard_name` varchar(191) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.90\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":35,\"hash\":\"7f53347312ebbe4f1fe0f45eb6c72d29\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(71,'9586cc3d-38e5-4b42-9157-4293f70d56f2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `model_has_permissions` (`permission_id` bigint unsigned not null, `model_type` varchar(191) not null, `model_id` bigint unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.84\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":51,\"hash\":\"109a9980cbdfab75641897282fe657f6\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(72,'9586cc3d-3bab-48b8-8c2d-29a53a1b88fd','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `model_has_permissions` add index `model_has_permissions_model_id_model_type_index`(`model_id`, `model_type`)\",\"time\":\"6.82\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":51,\"hash\":\"799c3262f33663c6bf50078fe1c8ce02\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(73,'9586cc3d-4148-44f6-b7f1-061637f36346','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `model_has_permissions` add constraint `model_has_permissions_permission_id_foreign` foreign key (`permission_id`) references `permissions` (`id`) on delete cascade\",\"time\":\"14.12\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":51,\"hash\":\"2c922be382fed48d8023537e84ccdd66\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(74,'9586cc3d-44b8-4113-8048-b074796b1390','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `model_has_permissions` add primary key `model_has_permissions_permission_model_type_primary`(`permission_id`, `model_id`, `model_type`)\",\"time\":\"8.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":51,\"hash\":\"49037d8660ba17245bd921fd2a2cc676\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(75,'9586cc3d-46ae-452c-b804-f24d6711bc04','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `model_has_roles` (`role_id` bigint unsigned not null, `model_type` varchar(191) not null, `model_id` bigint unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.63\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":67,\"hash\":\"9f4e3403d563a9303f83b365753c89de\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(76,'9586cc3d-49fd-4bed-91fa-b7c42c483dd3','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `model_has_roles` add index `model_has_roles_model_id_model_type_index`(`model_id`, `model_type`)\",\"time\":\"8.13\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":67,\"hash\":\"b5fc483eb06997eadd0a189cdb6820fd\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(77,'9586cc3d-5150-4f5b-98f4-eda511cdebcb','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `model_has_roles` add constraint `model_has_roles_role_id_foreign` foreign key (`role_id`) references `roles` (`id`) on delete cascade\",\"time\":\"18.47\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":67,\"hash\":\"13a9f5419fe9cfd65c84f44a9af8aebe\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(78,'9586cc3d-564e-4e93-b7fb-8f9a2951f037','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `model_has_roles` add primary key `model_has_roles_role_model_type_primary`(`role_id`, `model_id`, `model_type`)\",\"time\":\"12.55\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":67,\"hash\":\"1f469fb7744bab9d57e2a117ea8e85e9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(79,'9586cc3d-5827-44f4-b080-4526aac83bc9','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `role_has_permissions` (`permission_id` bigint unsigned not null, `role_id` bigint unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.36\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":84,\"hash\":\"6d68419d82530d4983920098d7b350e2\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(80,'9586cc3d-5e12-4439-af62-b6b3d16b8ce6','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `role_has_permissions` add constraint `role_has_permissions_permission_id_foreign` foreign key (`permission_id`) references `permissions` (`id`) on delete cascade\",\"time\":\"14.91\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":84,\"hash\":\"09327a2ff7df4421191b9fdf2a1cce9e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(81,'9586cc3d-6525-4788-accf-64fefff9aa2f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `role_has_permissions` add constraint `role_has_permissions_role_id_foreign` foreign key (`role_id`) references `roles` (`id`) on delete cascade\",\"time\":\"17.86\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":84,\"hash\":\"4ad12bf8366b7b214265d1ff60544e17\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(82,'9586cc3d-6891-4123-a2ad-2ce8eb291bf6','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `role_has_permissions` add primary key `role_has_permissions_permission_id_role_id_primary`(`permission_id`, `role_id`)\",\"time\":\"8.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_02_000545_create_permission_tables.php\",\"line\":84,\"hash\":\"81edd4146b829a569e123fa43e8c9f01\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(83,'9586cc3d-68e9-472a-98a5-6b4430a56b70','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_05_02_000545_create_permission_tables\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(84,'9586cc3d-6af9-4837-8952-8e3a35d2feb4','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `statuses` (`id` int unsigned not null auto_increment primary key, `name` varchar(191) not null, `reason` text null, `model_type` varchar(191) not null, `model_id` bigint unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.81\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_05_002400_create_statuses_table.php\",\"line\":17,\"hash\":\"01fafb9f2b78fa36d96d6979dc4f7be7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(85,'9586cc3d-6d21-48a2-bcaf-78a2d5a13d76','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `statuses` add index `statuses_model_type_model_id_index`(`model_type`, `model_id`)\",\"time\":\"5.27\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_05_002400_create_statuses_table.php\",\"line\":17,\"hash\":\"d3235d2d588bb9d13bd441a538fbf77a\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(86,'9586cc3d-6dac-457d-b816-9a04a064553e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_05_05_002400_create_statuses_table\', 1)\",\"time\":\"0.95\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(87,'9586cc3d-711d-4b36-a969-1d71b395300a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `media` (`id` bigint unsigned not null auto_increment primary key, `model_type` varchar(191) not null, `model_id` bigint unsigned not null, `collection_name` varchar(191) not null, `name` varchar(191) not null, `file_name` varchar(191) not null, `mime_type` varchar(191) null, `disk` varchar(191) not null, `size` bigint unsigned not null, `manipulations` json not null, `custom_properties` json not null, `responsive_images` json not null, `order_column` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.87\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_05_122859_create_media_table.php\",\"line\":28,\"hash\":\"c8dc909b23ea886cc9dc6ef66525f789\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(88,'9586cc3d-7560-412e-b6d4-6e736e5a6fd6','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `media` add index `media_model_type_model_id_index`(`model_type`, `model_id`)\",\"time\":\"10.59\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_05_05_122859_create_media_table.php\",\"line\":28,\"hash\":\"18aa785eeff7b50b2cd7fd56c897a016\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(89,'9586cc3d-75db-4d7a-af27-3e5b0fb512ff','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_05_05_122859_create_media_table\', 1)\",\"time\":\"0.83\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(90,'9586cc3d-7841-4ffa-9d47-c6d2743ca0f9','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `favorites` (`user_id` int unsigned not null, `favoriteable_type` varchar(191) not null, `favoriteable_id` bigint unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.66\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_07_04_142129_create_favorites_table.php\",\"line\":22,\"hash\":\"e099bb5842405bfa58fd8867d3d0b08f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(91,'9586cc3d-7a4b-407a-ad49-265225766842','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `favorites` add index `favorites_favoriteable_type_favoriteable_id_index`(`favoriteable_type`, `favoriteable_id`)\",\"time\":\"5.02\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_07_04_142129_create_favorites_table.php\",\"line\":22,\"hash\":\"44db824ac82c2875e9eabec08509828c\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(92,'9586cc3d-7d98-4ce4-8dcf-3bfa6a310ec2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `favorites` add primary key `favorites_user_id_favoriteable_id_favoriteable_type_primary`(`user_id`, `favoriteable_id`, `favoriteable_type`)\",\"time\":\"8.22\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_07_04_142129_create_favorites_table.php\",\"line\":22,\"hash\":\"3d0702e4e3e85b42840a6189be0e90a8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(93,'9586cc3d-7f82-4dd5-a91d-7f0df502ff54','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `favorites` add index `favorites_user_id_index`(`user_id`)\",\"time\":\"4.69\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_07_04_142129_create_favorites_table.php\",\"line\":22,\"hash\":\"7d9933a185b1e8004be01cab3cafb4bf\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(94,'9586cc3d-7fdc-4351-89c1-8f8123d3d86e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_07_04_142129_create_favorites_table\', 1)\",\"time\":\"0.63\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(95,'9586cc3d-8295-417b-a3c4-4f62ff09cdaa','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `banners` (`id` int unsigned not null auto_increment primary key, `title` json not null, `meta` json null, `sort_order` int not null default \'1\', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.41\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"b14cbd781a39c03372a7a35c01c48608\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(96,'9586cc3d-8315-4a83-bb0d-1f982083acfc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_07_09_150356_create_banners_table\', 1)\",\"time\":\"0.85\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(97,'9586cc3d-867e-4bf6-8caa-87ef2c03d7bb','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `blocks` (`id` int unsigned not null auto_increment primary key, `blockable_type` varchar(191) not null, `blockable_id` bigint unsigned not null, `blocker_type` varchar(191) not null, `blocker_id` bigint unsigned not null, `reason` text null, `meta` json null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.82\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"612a153771bb25a7761f6a57adb0779a\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(98,'9586cc3d-89bb-4807-9844-9f3e09d6aeaf','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `blocks` add index `blocks_blockable_type_blockable_id_index`(`blockable_type`, `blockable_id`)\",\"time\":\"7.96\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"63e81d01647829cafd30ce785fdab9eb\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(99,'9586cc3d-8c16-4835-8c8c-9886941a4e7f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `blocks` add index `blocks_blocker_type_blocker_id_index`(`blocker_type`, `blocker_id`)\",\"time\":\"5.76\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"052c7935d57bf1ad95cbf62d68aa2d9f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(100,'9586cc3d-8c6e-4541-9752-1e85bb8ede39','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_07_09_150356_create_blocks_table\', 1)\",\"time\":\"0.59\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(101,'9586cc3d-8e4e-4a18-b461-3cf28a95198b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `faqs` (`id` int unsigned not null auto_increment primary key, `title` varchar(191) not null, `short_description` varchar(191) not null, `description` varchar(191) not null, `meta` json null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.33\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"53a1d979c2e8a3bb4b17768f4532f142\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(102,'9586cc3d-8e93-4834-897c-f28bb0f9548c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_07_09_150356_create_faqs_table\', 1)\",\"time\":\"0.46\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(103,'9586cc3d-9079-4db8-ba16-ee9288f379fc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `reports` (`id` int unsigned not null auto_increment primary key, `reportable_type` varchar(191) not null, `reportable_id` bigint unsigned not null, `reporter_type` varchar(191) not null, `reporter_id` bigint unsigned not null, `reason` text null, `meta` json null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.40\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"2a5d5b4ef5e6bae8a3f92142091de7ef\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(104,'9586cc3d-92c0-4c47-9f6d-f5bec4ce8315','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `reports` add index `reports_reportable_type_reportable_id_index`(`reportable_type`, `reportable_id`)\",\"time\":\"5.60\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"7a4ad10bc4e387222fb9020948aaa2ea\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(105,'9586cc3d-9517-4f2e-aa4b-2a48f84869eb','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `reports` add index `reports_reporter_type_reporter_id_index`(`reporter_type`, `reporter_id`)\",\"time\":\"5.65\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"df0b30031d935bf0659d96c57f4f3014\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(106,'9586cc3d-959a-4885-9313-2886e94928d9','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_07_09_150356_create_reports_table\', 1)\",\"time\":\"0.86\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(107,'9586cc3d-98ce-4ef6-ae3e-95f4ab9bcd65','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `supports` (`id` int unsigned not null auto_increment primary key, `name` varchar(191) not null, `email` varchar(191) not null, `message` text not null, `meta` json null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.47\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"1f2d89998789c066250d31e3198a6c2f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(108,'9586cc3d-9955-4513-a2bb-af0067c9dd50','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_07_09_150356_create_supports_table\', 1)\",\"time\":\"0.92\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(109,'9586cc3d-9c43-4d0b-a47f-6cdc55998b85','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `jobs` (`id` bigint unsigned not null auto_increment primary key, `queue` varchar(191) not null, `payload` longtext not null, `attempts` tinyint unsigned not null, `reserved_at` int unsigned null, `available_at` int unsigned not null, `created_at` int unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.88\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_08_27_115615_create_jobs_table.php\",\"line\":24,\"hash\":\"e979ba91e05e85b61b901876ce0321e7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(110,'9586cc3d-9eb8-491b-acc9-264f92a804be','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `jobs` add index `jobs_queue_index`(`queue`)\",\"time\":\"6.04\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2020_08_27_115615_create_jobs_table.php\",\"line\":24,\"hash\":\"0cfaf07533bec3024be637314b74804b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(111,'9586cc3d-9f26-490f-a978-ddf721393bc1','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2020_08_27_115615_create_jobs_table\', 1)\",\"time\":\"0.72\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(112,'9586cc3d-a1f7-4572-b178-af13c6ddd98b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `users` (`id` int unsigned not null auto_increment primary key, `name` varchar(191) not null, `email` varchar(191) not null, `username` varchar(191) null, `password` varchar(191) not null, `mobile_number` varchar(191) not null, `mobile_verified` tinyint(1) not null default \'0\', `is_verified` tinyint(1) not null default \'0\', `active` tinyint unsigned not null default \'1\', `language` varchar(191) not null default \'en\', `notification` json null, `meta` json null, `remember_token` varchar(100) null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.55\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"b3f60eff228c103ae23f40e2bc304dd7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(113,'9586cc3d-a476-499f-8738-72aa8732432d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `users` add unique `users_email_unique`(`email`)\",\"time\":\"6.14\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"0648806a3d18c0f5b81e2257de64675e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(114,'9586cc3d-a6d3-470c-a8ef-e59199eff3d4','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `users` add unique `users_username_unique`(`username`)\",\"time\":\"5.77\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"d9d8675342e514e22d4b25a58193a2f1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(115,'9586cc3d-ab3a-4491-b62a-db82de01f068','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `users` add unique `users_mobile_number_unique`(`mobile_number`)\",\"time\":\"10.90\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ede267dad99cb97da27e7cf8f9d98449\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(116,'9586cc3d-abcc-4bbf-bd91-b3c6307d6d8c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2050_01_01_000005_create_users_table\', 1)\",\"time\":\"0.97\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(117,'9586cc3d-af0c-4944-a4c2-bd5f7940dfe0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `password_resets` (`email` varchar(191) not null, `token` varchar(191) not null, `created_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.64\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"68731db34acd59ac6f47053016159dcb\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(118,'9586cc3d-b148-4a70-b682-eb448e76bb66','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `password_resets` add index `password_resets_email_index`(`email`)\",\"time\":\"5.43\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"e47bfd004ad9142afc1b2460960fbe08\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(119,'9586cc3d-b1aa-4871-8d33-d4ca67990be5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2050_01_01_000010_create_password_resets_table\', 1)\",\"time\":\"0.65\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(120,'9586cc3d-b3df-4e6b-983d-e7ded9b67262','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `settings` (`id` int unsigned not null auto_increment primary key, `key` varchar(191) not null, `value` text not null, `type` enum(\'string\', \'text\', \'json\', \'numeric\', \'boolean\') not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.14\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"fbb96c6ea76bbfa8bd7689232cb16a7d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(121,'9586cc3d-b5ed-4ab2-803d-3f4cf9008881','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `settings` add unique `settings_key_unique`(`key`)\",\"time\":\"5.02\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"341c887377abf0b07bc393a8c80d128b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(122,'9586cc3d-b63d-47d3-a3b3-3c3e5830190e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2050_01_01_000015_create_settings_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(123,'9586cc3d-b816-4c29-a0b6-4a7f8541414d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `activity_logs` (`id` int unsigned not null auto_increment primary key, `device_id` varchar(191) null, `device_type` varchar(191) not null, `user_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.26\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"2db69552d6e0f0e026ebc8ad81f2093f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(124,'9586cc3d-bed7-418b-bd9e-5163934d3f21','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `activity_logs` add constraint `activity_logs_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"16.93\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"b7479993ef8c45e5d19047f88776c925\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(125,'9586cc3d-bf70-4129-acd5-4fb42b6302de','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2050_01_01_000020_create_activity_logs_table\', 1)\",\"time\":\"1.05\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(126,'9586cc3d-c30e-4c73-af36-f0ca2fad582e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `notifications` (`id` int unsigned not null auto_increment primary key, `text` text null, `meta` json null, `type` varchar(191) null, `user_id` int unsigned null, `from_user_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"8.38\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"d431e8d99611ca82254ad510e9d54d2c\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(127,'9586cc3d-c914-429e-a2a9-73bb4d2197b1','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `notifications` add constraint `notifications_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"15.11\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"9f4b08e0dd33de422fc8d11ceaba636e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(128,'9586cc3d-cf81-4945-8433-d75cefdb41b0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `notifications` add constraint `notifications_from_user_id_foreign` foreign key (`from_user_id`) references `users` (`id`) on delete cascade\",\"time\":\"16.05\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"4dcf5127e54835653b873d8ccfaff4f2\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(129,'9586cc3d-d01b-4753-b21b-79ce19f12920','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2050_01_01_000025_create_notifications_table\', 1)\",\"time\":\"0.94\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(130,'9586cc3d-d3d5-4df1-84bb-e779107a9c83','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `addresses` (`id` int unsigned not null auto_increment primary key, `title` varchar(191) not null, `meta` json null, `formatted_address` varchar(191) not null, `address1` varchar(191) null, `address2` varchar(191) null, `country` varchar(191) null, `state` varchar(191) null, `city` varchar(191) null, `postcode` varchar(191) null, `longitude` decimal(15, 7) not null default \'0\', `latitude` decimal(15, 7) not null default \'0\', `user_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"8.55\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"3cc1a1d9000b62f1b67304f42365017e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(131,'9586cc3d-dbc1-4e01-99b8-9bb62e28fba2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `addresses` add constraint `addresses_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"19.97\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"fc2a7d6783e9bbb493f92146cbab2246\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(132,'9586cc3d-dc18-44af-9335-eb98ce040d08','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2050_01_01_000030_create_user_addresses_table\', 1)\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(133,'9586cc3d-de38-47c5-abf3-5db6b7821adc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_addresses` (`id` int unsigned not null auto_increment primary key, `title` varchar(191) not null, `meta` json null, `formatted_address` varchar(191) not null, `address1` varchar(191) null, `address2` varchar(191) null, `country` varchar(191) null, `state` varchar(191) null, `city` varchar(191) null, `postcode` varchar(191) null, `longitude` decimal(15, 7) not null default \'0\', `latitude` decimal(15, 7) not null default \'0\', `user_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.90\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"c1b8b2ca7a17ca02944d5ab3b83fa964\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(134,'9586cc3d-ebcc-411a-b988-53267274ff03','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_addresses` add constraint `ecommerce_addresses_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"34.52\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"482fb482b77e9592783d3bc7f737d12b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(135,'9586cc3d-ec2f-427f-ac0d-b57c3d1aa4c2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000010_create_addresses_table\', 1)\",\"time\":\"0.70\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(136,'9586cc3d-ee5b-453a-ac2c-e510c6defc04','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_delivery_modes` (`id` int unsigned not null auto_increment primary key, `title` json not null, `detail` json null, `meta` json null, `price` double(8, 2) not null, `enabled` tinyint(1) not null default \'1\', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.08\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"1c2e8702dc8747763cb092ee97a6354f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(137,'9586cc3d-eeab-45f0-8344-7427f54bbd95','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000012_create_delivery_modes_table\', 1)\",\"time\":\"0.52\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(138,'9586cc3d-f090-4277-ad69-adbca85f5289','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `categories` (`id` int unsigned not null auto_increment primary key, `slug` varchar(191) not null, `title` json not null, `meta` json null, `sort_order` int not null default \'1\', `parent_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.37\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"128a6d61600ae6f982951e2e5bee42be\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(139,'9586cc3d-f5a2-4e7c-92aa-73221de6204b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `categories` add constraint `categories_parent_id_foreign` foreign key (`parent_id`) references `categories` (`id`) on delete cascade\",\"time\":\"12.73\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"4ccd04b5322d6536aa53f3c1d80ed757\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(140,'9586cc3d-f5ff-490f-903b-e75b623c7f02','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000020_create_categories_table\', 1)\",\"time\":\"0.64\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(141,'9586cc3d-f833-4c4a-9996-2469d03448c1','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_vendors` (`id` int unsigned not null auto_increment primary key, `name` json null, `tagline` json null, `details` json null, `meta` json null, `minimum_order` int unsigned not null default \'0\', `delivery_fee` int unsigned not null default \'0\', `area` varchar(191) null, `address` varchar(191) null, `longitude` decimal(15, 7) not null default \'0\', `latitude` decimal(15, 7) not null default \'0\', `is_verified` tinyint(1) not null default \'1\', `user_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.03\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"1d17b48f46138772daeb2b59e0798350\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(142,'9586cc3e-00d4-424b-820f-19a67c9afd29','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendors` add constraint `ecommerce_vendors_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"21.84\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"5c10ed46446473c0d9c6a16c3dd405f0\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(143,'9586cc3e-02a8-4651-96c8-401d5bab89a4','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_vendor_categories` (`vendor_id` int unsigned not null, `category_id` int unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.30\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"52a3c206d988943739e328dcdd6bcecf\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(144,'9586cc3e-07b3-43d7-9a95-6a251127a43e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_categories` add constraint `ecommerce_vendor_categories_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"12.66\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"974cf6039a5e37f7c1b1855b907861f1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(145,'9586cc3e-0cf3-4f3f-82c3-96406ef58c1a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_categories` add constraint `ecommerce_vendor_categories_category_id_foreign` foreign key (`category_id`) references `categories` (`id`) on delete cascade\",\"time\":\"13.18\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"4285f885bb4932406b1e6a1f4988cb4b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(146,'9586cc3e-0d69-4176-a44b-ad6d583bb6bc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000030_create_vendors_table\', 1)\",\"time\":\"0.79\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(147,'9586cc3e-10d4-4f9e-88fa-0a9654bbaaaf','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_delivery_profiles` (`id` int unsigned not null auto_increment primary key, `meta` json null, `is_verified` tinyint(1) not null default \'1\', `is_online` tinyint(1) not null default \'0\', `assigned` tinyint(1) not null default \'0\', `longitude` decimal(15, 7) null, `latitude` decimal(15, 7) null, `created_at` timestamp null, `updated_at` timestamp null, `user_id` int unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"7.84\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"4ff674bb8286e306f270987252d6bf0d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(148,'9586cc3e-1784-4708-a2d6-8703a936aa8a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_delivery_profiles` add constraint `ecommerce_delivery_profiles_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"16.80\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2bee5b2593de0438dc85bdfa7988ed2\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(149,'9586cc3e-17da-4a16-867b-8c3f11e84617','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000035_create_delivery_profiles_table\', 1)\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(150,'9586cc3e-19b1-452d-8c0c-36c73767e2db','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_attributes` (`id` int unsigned not null auto_increment primary key, `title` json not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.29\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"b15a08ddba56457e2c89693fa8a53fb5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(151,'9586cc3e-1b9d-4c6f-ae12-4168e3088d0a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_attribute_terms` (`id` int unsigned not null auto_increment primary key, `title` varchar(191) not null, `attribute_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"8528a927eb7ccb4e9f3203ca17183dd8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(152,'9586cc3e-20d4-401e-8998-78a8ecfc7224','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_attribute_terms` add constraint `ecommerce_attribute_terms_attribute_id_foreign` foreign key (`attribute_id`) references `ecommerce_attributes` (`id`) on delete cascade\",\"time\":\"13.02\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"8b73e71678d06c4e02ddee15020744f9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(153,'9586cc3e-2157-4993-90ce-cdd9f2dd3fec','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000038_create_attributes_table\', 1)\",\"time\":\"0.86\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(154,'9586cc3e-24ea-4f41-ba4c-6882a6f293ca','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_products` (`id` int unsigned not null auto_increment primary key, `title` json null, `detail` json null, `meta` json null, `price` double(8, 2) not null, `owner` enum(\'admin\', \'vendor\') not null default \'vendor\', `parent_id` int unsigned null, `attribute_term_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"8.21\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"85417132cd29604a1a1be2046c99ae61\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(155,'9586cc3e-2b1a-4991-baf0-a99c651ceab7','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_products` add constraint `ecommerce_products_attribute_term_id_foreign` foreign key (`attribute_term_id`) references `ecommerce_attribute_terms` (`id`) on delete cascade\",\"time\":\"15.51\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"5e0f66cc945c2cf47729542f43c44ee0\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(156,'9586cc3e-2d07-469f-92b1-b578a5472b77','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_product_addon_groups` (`id` int unsigned not null auto_increment primary key, `title` json not null, `max_choices` int unsigned not null, `min_choices` int unsigned not null, `product_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.51\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"becc007f88705b37288afe7071230735\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(157,'9586cc3e-31a8-4f96-95ee-13edc0b17832','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_product_addon_groups` add constraint `ecommerce_product_addon_groups_product_id_foreign` foreign key (`product_id`) references `ecommerce_products` (`id`) on delete cascade\",\"time\":\"11.62\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"e906823e872c8e751581731a63e3b0ef\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(158,'9586cc3e-3341-4f1d-a74e-14659b015ca1','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_product_addon_choices` (`id` int unsigned not null auto_increment primary key, `title` json not null, `price` double(8, 2) not null, `product_addon_group_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"3.74\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"28a09181cb6c8db9321064d81a51cb6d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(159,'9586cc3e-3a7a-40f5-a115-87b92bff968c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_product_addon_choices` add constraint `ecommerce_product_addon_choices_product_addon_group_id_foreign` foreign key (`product_addon_group_id`) references `ecommerce_product_addon_groups` (`id`) on delete cascade\",\"time\":\"18.25\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"bf19add3ad48846da5ea8e153a0c8017\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(160,'9586cc3e-3c84-4299-ba18-b5769b888d7a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_product_categories` (`product_id` int unsigned not null, `category_id` int unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.78\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"61d31ff93e6fed8118899fe571f3cfb0\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(161,'9586cc3e-417e-4477-8530-58a036798d95','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_product_categories` add constraint `ecommerce_product_categories_product_id_foreign` foreign key (`product_id`) references `ecommerce_products` (`id`) on delete cascade\",\"time\":\"12.49\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"c9b84ef51e5a7cd7f29dec26b17541d8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(162,'9586cc3e-46e2-4f09-8f08-3b2c54ef932c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_product_categories` add constraint `ecommerce_product_categories_category_id_foreign` foreign key (`category_id`) references `categories` (`id`) on delete cascade\",\"time\":\"13.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"60e11f618d5ce8534b91b19a771bd4df\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(163,'9586cc3e-4e80-46dd-9b6f-1d81fe3b71ce','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_product_categories` add unique `ecommerce_product_categories_product_id_category_id_unique`(`product_id`, `category_id`)\",\"time\":\"19.21\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"204c717fd2d2c0b304b3a9954aa418e1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(164,'9586cc3e-4edd-4d13-8bda-dc66dd887432','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000040_create_products_table\', 1)\",\"time\":\"0.65\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(165,'9586cc3e-50f3-41c8-a6e8-44ae3a98ae20','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_vendor_products` (`id` int unsigned not null auto_increment primary key, `price` double(8, 2) not null, `sale_price` double(8, 2) null, `sale_price_from` date null, `sale_price_to` date null, `stock_quantity` int not null default \'-1\', `stock_low_threshold` int not null default \'0\', `vendor_id` int unsigned not null, `product_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.82\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"98a5f4c18cf2408ee3d4c637e5a84f7b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(166,'9586cc3e-5608-4e12-bfdb-b03920527efa','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_products` add constraint `ecommerce_vendor_products_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"12.78\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ef46e7b0a8b69d15dfaf02bed474937d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(167,'9586cc3e-5b01-426f-8233-bce97036f5c2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_products` add constraint `ecommerce_vendor_products_product_id_foreign` foreign key (`product_id`) references `ecommerce_products` (`id`) on delete cascade\",\"time\":\"12.49\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"3fcb888abb013d14fc57da3746051552\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(168,'9586cc3e-5b78-432b-bb5a-61edff8a8224','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000042_create_vendor_products_table\', 1)\",\"time\":\"0.86\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(169,'9586cc3e-5e47-4b02-898d-3920668e7a8a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_vendor_product_categories` (`vendor_id` int unsigned not null, `category_id` int unsigned not null, `product_id` int unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.44\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"4ef8b3c765fe4500750ab6b09dcf5305\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(170,'9586cc3e-6496-4fff-a58e-91929e7fa173','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_product_categories` add constraint `ecommerce_vendor_product_categories_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"15.82\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"256304cd734a366ec705fac063e2daaa\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(171,'9586cc3e-69fa-4d61-a590-5ef23635eb40','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_product_categories` add constraint `ecommerce_vendor_product_categories_category_id_foreign` foreign key (`category_id`) references `categories` (`id`) on delete cascade\",\"time\":\"13.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"0e44330d24ce1581c245457985acacce\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:47'),(172,'9586cc3e-7455-455a-907a-b0e092e3022b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_product_categories` add constraint `ecommerce_vendor_product_categories_product_id_foreign` foreign key (`product_id`) references `ecommerce_products` (`id`) on delete cascade\",\"time\":\"26.23\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ea41f326940da5e9d3fe4c8380a50a8f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(173,'9586cc3e-74d8-4117-8867-69ca0c50c161','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000044_create_vendor_product_categories_table\', 1)\",\"time\":\"0.95\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(174,'9586cc3e-774b-40eb-99b6-dfb8f69e228d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_order_conditions` (`id` int unsigned not null auto_increment primary key, `title` varchar(191) not null, `type` varchar(191) not null, `operator` varchar(191) not null, `value` varchar(191) not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.78\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"2dadc5906c21675027270a14cb7b3b6d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(175,'9586cc3e-77a3-4882-8fbf-51c3e3c3194c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000050_create_order_conditions_table\', 1)\",\"time\":\"0.57\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(176,'9586cc3e-7ac3-49bd-9927-752d32d2e6b4','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_orders` (`id` int unsigned not null auto_increment primary key, `notes` varchar(255) null, `meta` json null, `is_guest` tinyint(1) not null default \'0\', `customer_name` varchar(191) null, `customer_email` varchar(191) null, `customer_mobile` varchar(191) null, `subtotal` double(8, 2) not null, `taxes` double(8, 2) not null, `delivery_fee` double(8, 2) not null, `total` double(8, 2) not null, `discount` double(8, 2) not null, `order_type` enum(\'CUSTOM\', \'NORMAL\', \'TAKEAWAY\', \'DINEIN\') not null default \'NORMAL\', `type` enum(\'ASAP\', \'LATER\') not null default \'ASAP\', `scheduled_on` datetime not null default CURRENT_TIMESTAMP, `vendor_id` int unsigned null, `user_id` int unsigned null, `delivery_mode_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.40\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"3b59e0d37367365c67e67b07b7ee6e5e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(177,'9586cc3e-813e-4fb6-bf82-768f824e5e6e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_orders` add constraint `ecommerce_orders_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"16.28\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"0a21db818b728d6fddc26fef4dbd41de\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(178,'9586cc3e-8dad-4ce9-acd5-e41ca4a621dc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_orders` add constraint `ecommerce_orders_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"31.56\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"a87fd79ef272c5508c4b456fcb9baa7e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(179,'9586cc3e-9ba6-4a1c-bc48-11b68940e29b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_orders` add constraint `ecommerce_orders_delivery_mode_id_foreign` foreign key (`delivery_mode_id`) references `ecommerce_delivery_modes` (`id`) on delete cascade\",\"time\":\"35.47\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"d7e8ebd7503743deaba56a72205fea30\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(180,'9586cc3e-9c0d-4f43-bd36-0056f15324d0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000060_create_orders_table\', 1)\",\"time\":\"0.73\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(181,'9586cc3e-9e07-476b-8c31-d7bbaba80cf4','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_order_deliveries` (`id` int unsigned not null auto_increment primary key, `order_id` int unsigned not null, `delivery_profile_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.61\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"c22b7f3651b272ab5b0ef0b1f89930a5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(182,'9586cc3e-a505-4334-bd4a-9935d631da85','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_deliveries` add constraint `ecommerce_order_deliveries_order_id_foreign` foreign key (`order_id`) references `ecommerce_orders` (`id`) on delete cascade\",\"time\":\"17.65\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ac0d27ab952f5f43709070b164015977\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(183,'9586cc3e-af14-4317-b823-d78d21f89a73','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_deliveries` add constraint `ecommerce_order_deliveries_delivery_profile_id_foreign` foreign key (`delivery_profile_id`) references `ecommerce_delivery_profiles` (`id`) on delete cascade\",\"time\":\"25.48\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f93dd3b9d57196686b83e273d8328e3b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(184,'9586cc3e-af7d-455b-9576-57a7a199e31b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000070_create_order_deliveries_table\', 1)\",\"time\":\"0.68\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(185,'9586cc3e-b22f-4832-9a57-f19b16e35d39','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_order_addresses` (`id` int unsigned not null auto_increment primary key, `name` varchar(191) null, `email` varchar(191) null, `mobile` varchar(191) null, `formatted_address` varchar(191) not null, `address1` varchar(191) null, `address2` varchar(191) null, `country` varchar(191) null, `state` varchar(191) null, `city` varchar(191) null, `postcode` varchar(191) null, `longitude` decimal(15, 7) not null, `latitude` decimal(15, 7) not null, `type` enum(\'source\', \'destination\') not null default \'destination\', `order_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.25\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"2adbd4cd3d39d4a195fb023d7f9c03e5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(186,'9586cc3e-b826-46ed-b47e-fdbe77cf8613','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_addresses` add constraint `ecommerce_order_addresses_order_id_foreign` foreign key (`order_id`) references `ecommerce_orders` (`id`) on delete cascade\",\"time\":\"15.01\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"c6fccc675256187fe418f350d71764c5\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(187,'9586cc3e-b877-4455-8353-1bb81152292b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000080_create_order_addresses_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(188,'9586cc3e-ba7a-4074-a741-e82ad1f32808','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_order_products` (`id` int unsigned not null auto_increment primary key, `quantity` int not null, `total` decimal(8, 2) not null, `order_id` int unsigned not null, `vendor_product_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.68\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"7e3839bdd0f772381001a5951e9103c3\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(189,'9586cc3e-c2b2-4016-b091-2169bd8b6950','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_products` add constraint `ecommerce_order_products_order_id_foreign` foreign key (`order_id`) references `ecommerce_orders` (`id`) on delete cascade\",\"time\":\"20.75\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"99fd43c3be16f295e1c2b8afcbd8790f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(190,'9586cc3e-c9f8-424e-8a89-dfb9096c1747','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_products` add constraint `ecommerce_order_products_vendor_product_id_foreign` foreign key (`vendor_product_id`) references `ecommerce_vendor_products` (`id`) on delete cascade\",\"time\":\"18.34\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"dd6279b0dcab3a86a77c758e74a96fd3\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(191,'9586cc3e-ca4e-4b90-b255-908f8033d22a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000100_create_order_products_table\', 1)\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(192,'9586cc3e-cc3c-4f9a-8c62-8875af41507c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_order_product_addons` (`id` int unsigned not null auto_increment primary key, `total` decimal(8, 2) not null, `product_addon_choice_id` int unsigned not null, `order_product_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.46\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"58d6da4e8f0a24f0e43acfb7a0f10d83\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(193,'9586cc3e-d0f4-49fe-82bc-e7c094de4ffc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_product_addons` add constraint `ecommerce_order_product_addons_product_addon_choice_id_foreign` foreign key (`product_addon_choice_id`) references `ecommerce_product_addon_choices` (`id`) on delete cascade\",\"time\":\"11.77\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"12fb8e7d49d60321c1d97fa46204bfbe\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(194,'9586cc3e-daa5-4ad4-bd7e-9fc666348988','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_order_product_addons` add constraint `ecommerce_order_product_addons_order_product_id_foreign` foreign key (`order_product_id`) references `ecommerce_order_products` (`id`) on delete cascade\",\"time\":\"24.49\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f405547c888277b4b3dcebc19821cb4d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(195,'9586cc3e-dafc-4259-b01d-a3109b75ce16','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000110_create_order_product_addons_table\', 1)\",\"time\":\"0.59\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(196,'9586cc3e-dd29-40d4-b80f-708020b3fb98','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_coupons` (`id` int unsigned not null auto_increment primary key, `title` json null, `detail` json null, `meta` json null, `code` varchar(32) not null, `reward` int not null, `type` enum(\'fixed\', \'percent\') not null, `expires_at` date null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"5.03\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f9889cd203437cfdfdbe6b7e1ff852dd\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(197,'9586cc3e-dfc9-4cbd-b91e-c569824da73e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_coupons` add unique `ecommerce_coupons_code_unique`(`code`)\",\"time\":\"6.48\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"d435fe75be93a52df12d8d78c438ede2\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(198,'9586cc3e-e171-4abc-9289-f2537ee6b212','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_coupons_users` (`user_id` int unsigned not null, `coupon_id` int unsigned not null, `used_at` timestamp not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"3.88\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"628e0c3b043ec99d67bbcf89edd53d51\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(199,'9586cc3e-e8df-4226-b4fe-604309fac816','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_coupons_users` add primary key `ecommerce_coupons_users_user_id_coupon_id_primary`(`user_id`, `coupon_id`)\",\"time\":\"18.77\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"d925cca230135aeeecdc8577ae9fd8b9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(200,'9586cc3e-ee2d-4882-9145-2d6a8f2a0450','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_coupons_users` add constraint `ecommerce_coupons_users_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"13.30\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"0a9c1a834b107f1ec0d8b5d6584e97b9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(201,'9586cc3e-f2ed-4b1f-9987-80c528983016','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_coupons_users` add constraint `ecommerce_coupons_users_coupon_id_foreign` foreign key (`coupon_id`) references `ecommerce_coupons` (`id`) on delete cascade\",\"time\":\"11.89\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"491640cadd3cbfee75241552efc14d16\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(202,'9586cc3e-f33b-4c08-aad6-c2d4c6d1974a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000120_create_coupons_table\', 1)\",\"time\":\"0.53\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(203,'9586cc3e-f4de-46fe-bdb7-72dac21f7d56','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_delivery_order_requests` (`id` int unsigned not null auto_increment primary key, `meta` json null, `delivery_profile_id` int unsigned not null, `order_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"3.76\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ef104f7eb8af4b78ffeed44676d2a715\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(204,'9586cc3e-fd2a-41df-a485-6f205c2c56a2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_delivery_order_requests` add constraint `ecommerce_delivery_order_requests_delivery_profile_id_foreign` foreign key (`delivery_profile_id`) references `ecommerce_delivery_profiles` (`id`) on delete cascade\",\"time\":\"21.00\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"3c679a1f137a71d1e117f7e6a1f74093\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(205,'9586cc3f-0397-466c-8889-a05644d67ccc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_delivery_order_requests` add constraint `ecommerce_delivery_order_requests_order_id_foreign` foreign key (`order_id`) references `ecommerce_orders` (`id`) on delete cascade\",\"time\":\"16.17\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"bb670c1e6e310f0c3c5974fd54deca6e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(206,'9586cc3f-064e-4f9e-b47c-04e9ee369fb1','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_delivery_order_requests` add unique `unique_delivery_profile_order`(`delivery_profile_id`, `order_id`)\",\"time\":\"6.68\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ee65bcfe42da33bec840541c9a1beaf4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(207,'9586cc3f-06a0-4f5a-93dc-a8b5a1fea534','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000130_create_delivery_order_requests_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(208,'9586cc3f-089b-4ccc-a2ea-ffbdd31f8905','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_customers` (`id` int unsigned not null auto_increment primary key, `customer_name` varchar(191) null, `customer_email` varchar(191) null, `customer_mobile` varchar(191) null, `meta` json null, `vendor_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.60\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"a9fe728a6e7bad8ef9215a801d613a93\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(209,'9586cc3f-10d2-4ea4-9dd6-ffc75c74ccfe','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_customers` add constraint `ecommerce_customers_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"20.80\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ba650b680f47fa71e127cedcbd12d9b9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(210,'9586cc3f-1130-404b-8b6b-3219a25eaa6b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000140_create_customers_table\', 1)\",\"time\":\"0.64\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(211,'9586cc3f-1333-444f-9536-8b037d6edd66','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_multi_order_payments` (`id` int unsigned not null auto_increment primary key, `total` double(8, 2) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.69\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"96841d770887d44e01d5d87275d2e71e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(212,'9586cc3f-1380-4237-a524-3f7136a8ce96','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000140_create_multi_order_payments_table\', 1)\",\"time\":\"0.50\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(213,'9586cc3f-1572-4217-adbd-51efb6e19812','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_authentication_delegations` (`id` int unsigned not null auto_increment primary key, `identifier` varchar(191) not null, `type` varchar(191) not null, `meta` json null, `vendor_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.52\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"71eaf261afccb0cfdc830003b019cf90\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(214,'9586cc3f-1ae4-4ad1-b1bd-602794379c08','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_authentication_delegations` add constraint `ecommerce_authentication_delegations_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"13.69\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"11926ed726c3159acd9a41374d802cf1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(215,'9586cc3f-1b33-47d7-a5ad-72c4c742ed89','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000150_create_authentication_delegations_table\', 1)\",\"time\":\"0.52\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(216,'9586cc3f-1d09-4a8d-9c3f-de2de389bd47','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_multi_order_payment_orders` (`id` int unsigned not null auto_increment primary key, `multi_order_payment_id` int unsigned not null, `order_id` int unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.24\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"adfe420d84db8e354f20dabafad1274a\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(217,'9586cc3f-24a5-47ef-8d52-cdbca344cf63','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_multi_order_payment_orders` add constraint `multi_order_payments` foreign key (`multi_order_payment_id`) references `ecommerce_multi_order_payments` (`id`) on delete cascade\",\"time\":\"19.21\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"699041447c499746898660cc2d0033fe\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(218,'9586cc3f-2b14-4b82-90db-1fb3159db704','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_multi_order_payment_orders` add constraint `ecommerce_multi_order_payment_orders_order_id_foreign` foreign key (`order_id`) references `ecommerce_orders` (`id`) on delete cascade\",\"time\":\"16.17\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f36695768c362543fddf9f5aacc07728\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(219,'9586cc3f-2b6e-475e-89bf-0a28c29943d0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000150_create_multi_order_payment_orders_table\', 1)\",\"time\":\"0.60\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(220,'9586cc3f-2d6e-41b9-99a9-d4c46babb630','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_feedback_questions` (`id` int unsigned not null auto_increment primary key, `title` json null, `meta` json null, `vendor_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.62\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"5d611f1b76a70ffe1a9e9a93c862e4cf\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(221,'9586cc3f-3767-4697-b57d-c78f5d64ff4c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_feedback_questions` add constraint `ecommerce_feedback_questions_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"25.24\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"c4232bb4d0357344a6f3c982e15b0395\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(222,'9586cc3f-3981-42a1-8dfb-06262f4aa69e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_feedback_options` (`id` int unsigned not null auto_increment primary key, `rank` int unsigned not null, `title` json null, `vendor_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.95\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"b62cdd346f757fca3b9f7bad9118782f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(223,'9586cc3f-3eed-492e-a648-ef54fe3566dc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_feedback_options` add constraint `ecommerce_feedback_options_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"13.62\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"00c9ce6f093ac3f7b5b5d32c83fb54d8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(224,'9586cc3f-40d2-4745-be55-207aecb909c7','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_feedback_results` (`id` int unsigned not null auto_increment primary key, `rank` int unsigned not null, `feedback_question_id` int unsigned null, `vendor_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.42\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"1fe07b1426190c15be889959d5f117c3\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(225,'9586cc3f-45c3-472e-977f-5715246faba2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_feedback_results` add constraint `ecommerce_feedback_results_feedback_question_id_foreign` foreign key (`feedback_question_id`) references `ecommerce_feedback_questions` (`id`) on delete cascade\",\"time\":\"12.30\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"8bf04e28e191c334f684fd9b88ce1d58\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(226,'9586cc3f-4ea3-4ca3-b238-aa2f2697870f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_feedback_results` add constraint `ecommerce_feedback_results_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"22.41\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"8815402dcb5df9ba1bde89afa2a745c1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(227,'9586cc3f-4ef8-41a1-bcf6-420e556bcf37','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000160_create_feedbacks_table\', 1)\",\"time\":\"0.56\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(228,'9586cc3f-50c8-4686-bb9e-0ba1d8ef6c30','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `ecommerce_vendor_availabilities` (`id` int unsigned not null auto_increment primary key, `days` enum(\'sun\', \'mon\', \'tue\', \'wed\', \'thu\', \'fri\', \'sat\') not null, `from` time not null, `to` time not null, `vendor_id` int unsigned not null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.22\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"7cacb6a5b9c768321336799ff015e1e0\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(229,'9586cc3f-560a-457e-9fe4-3452f628494c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_availabilities` add constraint `ecommerce_vendor_availabilities_vendor_id_foreign` foreign key (`vendor_id`) references `ecommerce_vendors` (`id`) on delete cascade\",\"time\":\"13.23\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"e53d699eddf6267801be0402ae75b92e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(230,'9586cc3f-565b-465f-b2fd-0b6ec4525808','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000170_create_vendor_availabilities_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(231,'9586cc3f-5816-466b-b964-d103ddebc692','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `category_preferences` (`category_id` int unsigned null, `user_id` int unsigned null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.01\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"70a3667ee6676c92bd5b805d08be7312\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(232,'9586cc3f-5f50-4546-840b-11232f6573ff','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `category_preferences` add constraint `category_preferences_category_id_foreign` foreign key (`category_id`) references `categories` (`id`) on delete cascade\",\"time\":\"18.26\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"79a6401245cff7b84aca5745f5dca665\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(233,'9586cc3f-6561-4de9-8f6b-ea3b5395281a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `category_preferences` add constraint `category_preferences_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade\",\"time\":\"15.25\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"79629ca78a168c0c3971e40ec8cd4d37\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(234,'9586cc3f-65b4-4ad6-b119-cc28da646b9f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000200_create_category_preferences_table\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(235,'9586cc3f-67a5-42dc-b820-e56a7a2fe1fc','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `mobile_languages` (`id` int unsigned not null auto_increment primary key, `language_code` varchar(191) not null, `language_title` varchar(191) not null, `content` json not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.51\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"7ee537c2d7160b32f6d8dbea8f595304\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(236,'9586cc3f-67f3-4a57-a21d-d68c0cf9723d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000200_create_mobile_languages_table\', 1)\",\"time\":\"0.50\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(237,'9586cc3f-69cf-4a52-9b65-7a57fdc58bae','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `mobile_languages` add `type` varchar(191) not null\",\"time\":\"4.41\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"26ee19edc21ec2a098022cebfb614055\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(238,'9586cc3f-6a20-4ca2-8c64-b67b7a7cf889','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000201_alter_mobile_languages_table\', 1)\",\"time\":\"0.57\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(239,'9586cc3f-7348-4349-8c02-b766db967a86','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_orders` add `distance_travelled` int unsigned not null default \'0\'\",\"time\":\"23.03\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"b55fa73e0ccd59cedac0de5554a88340\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(240,'9586cc3f-73a2-410d-ab57-78e089ef003b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000510_alter_orders_add_distance_travelled_table\', 1)\",\"time\":\"0.61\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(241,'9586cc3f-7c7e-486f-8005-addf4a702123','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendors` add `orders_count` int unsigned not null default \'0\', add `average_ratings` double(8, 2) not null default \'0\'\",\"time\":\"22.25\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2dbb636611b89a4bbcd20e82089fc09\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(242,'9586cc3f-7cdd-46d3-881f-f4a917c307b3','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000510_alter_vendors_add_stats_table\', 1)\",\"time\":\"0.70\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(243,'9586cc3f-826b-49b2-8d8a-0b84ebc35a89','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_products` add `sells_count` int unsigned not null default \'0\'\",\"time\":\"13.72\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"352f0aba305852cf21e53f414817399e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(244,'9586cc3f-830b-4a84-b11c-f9a9395df7a9','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000550_alter_products_add_sells_count\', 1)\",\"time\":\"1.12\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(245,'9586cc3f-87df-472f-88c6-79b54dad76a8','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendor_products` add `sells_count` int unsigned not null default \'0\'\",\"time\":\"11.79\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"e4dfb77926df05f503077f909735d3a2\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(246,'9586cc3f-8834-4f34-85e8-3ceb494fb57e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000560_alter_vendor_products_add_sells_count\', 1)\",\"time\":\"0.57\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(247,'9586cc3f-88aa-47d8-a6d4-3f5d3609f38a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select column_name as `column_name` from information_schema.columns where table_schema = \'ecommerce_foodoz\' and table_name = \'ecommerce_orders\'\",\"time\":\"0.88\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"a191748092b529b62dfa35879193e5b1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(248,'9586cc3f-8904-413f-855c-0de84ba1b300','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select column_name as `column_name` from information_schema.columns where table_schema = \'ecommerce_foodoz\' and table_name = \'ecommerce_orders\'\",\"time\":\"0.70\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"a191748092b529b62dfa35879193e5b1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(249,'9586cc3f-895e-42d5-9cab-0a3f5f4b43d1','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select column_name as `column_name` from information_schema.columns where table_schema = \'ecommerce_foodoz\' and table_name = \'ecommerce_order_addresses\'\",\"time\":\"0.70\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"a191748092b529b62dfa35879193e5b1\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(250,'9586cc3f-89a3-4197-80c5-1b202aacd833','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000570_alter_add_v3_columns_table\', 1)\",\"time\":\"0.47\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(251,'9586cc3f-9258-4404-a2e0-e4d9b53b7810','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `ecommerce_vendors` add `plan_sort_order` int unsigned not null default \'100\'\",\"time\":\"21.93\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ff304d158abd71b4d28247a604e9dbac\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(252,'9586cc3f-92a5-4ffb-b985-ba183f58bfed','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2051_01_01_000580_alter_vendors_add_plan_sortorder_table\', 1)\",\"time\":\"0.55\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(253,'9586cc3f-97cd-40f8-b87e-5b03dc4022d3','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `wallets` (`id` int unsigned not null auto_increment primary key, `user_id` int unsigned null, `balance` bigint not null default \'0\', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"6.88\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2052_02_20_113000_create_wallets_table.php\",\"line\":30,\"hash\":\"cff46513f16ee90983764d7f84a9b55c\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(254,'9586cc3f-9ddb-4d1e-a9d2-5b48ce89f7ea','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `wallets` add constraint `wallets_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete set null\",\"time\":\"15.22\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2052_02_20_113000_create_wallets_table.php\",\"line\":30,\"hash\":\"2f9da7e4d06ecd8aaa1642043f062fb7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(255,'9586cc3f-9e35-4cac-91e4-851094091fc5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2052_02_20_113000_create_wallets_table\', 1)\",\"time\":\"0.62\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(256,'9586cc3f-a020-4948-bd12-ffd535513f55','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"create table `wallet_transactions` (`id` int unsigned not null auto_increment primary key, `wallet_id` int unsigned not null, `amount` int not null, `hash` varchar(60) not null, `type` varchar(30) not null, `accepted` tinyint(1) not null, `meta` json null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate \'utf8mb4_unicode_ci\'\",\"time\":\"4.48\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2052_02_20_113500_create_wallet_transactions_table.php\",\"line\":29,\"hash\":\"60357801ce99be07bf0fff18a00dcbf8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(257,'9586cc3f-a557-47b3-8ae5-9780202848c8','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"alter table `wallet_transactions` add constraint `wallet_transactions_wallet_id_foreign` foreign key (`wallet_id`) references `wallets` (`id`) on delete cascade\",\"time\":\"13.15\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/migrations\\/2052_02_20_113500_create_wallet_transactions_table.php\",\"line\":29,\"hash\":\"b0299888ca646c5db65fe7b2b50b5ee9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(258,'9586cc3f-a5a8-4990-a78c-d1b53de45b90','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `migrations` (`migration`, `batch`) values (\'2052_02_20_113500_create_wallet_transactions_table\', 1)\",\"time\":\"0.51\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"f2b8e8e4266db16aec6db940c643eb68\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(259,'9586cc3f-bdb1-4fd1-88b3-103bbfbb7c3e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `users` (`active`, `created_at`, `email`, `mobile_number`, `mobile_verified`, `name`, `password`, `updated_at`) values (1, \'2022-02-05 11:50:48\', \'admin@example.com\', \'8888888888\', 1, \'Admin\', \'y$EK\\/AqvxJzlu4Qwy4.ZiIkO7uK\\/4\\/HRIXP.OYu72inY0W\\/ihiZnEky\', \'2022-02-05 11:50:48\')\",\"time\":\"2.93\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":33,\"hash\":\"e748379f562b94becb4e10588106a72e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(260,'9586cc3f-bf23-4b0d-b65b-6fbe1582115f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `roles` where `name` = \'admin\' and `guard_name` = \'api\' limit 1\",\"time\":\"0.92\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":36,\"hash\":\"de1bc7a62331e87ecc91f3ab3855091f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(261,'9586cc3f-bfee-4179-bb7d-9a5ddf733b7d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `roles` (`name`, `guard_name`, `updated_at`, `created_at`) values (\'admin\', \'api\', \'2022-02-05 11:50:48\', \'2022-02-05 11:50:48\')\",\"time\":\"0.77\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":36,\"hash\":\"2ff04aa60d5cad24fd0a1fad61c9656d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(262,'9586cc3f-c029-44c3-80c8-a94fbd21d003','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `roles` where `name` = \'customer\' and `guard_name` = \'api\' limit 1\",\"time\":\"0.28\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":37,\"hash\":\"de1bc7a62331e87ecc91f3ab3855091f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(263,'9586cc3f-c079-4373-88cc-794874962b0d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `roles` (`name`, `guard_name`, `updated_at`, `created_at`) values (\'customer\', \'api\', \'2022-02-05 11:50:48\', \'2022-02-05 11:50:48\')\",\"time\":\"0.50\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":37,\"hash\":\"2ff04aa60d5cad24fd0a1fad61c9656d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(264,'9586cc3f-c0a8-4bde-90b6-62ae29ca8c39','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `roles` where `name` = \'vendor\' and `guard_name` = \'api\' limit 1\",\"time\":\"0.21\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":38,\"hash\":\"de1bc7a62331e87ecc91f3ab3855091f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(265,'9586cc3f-c0fa-41f1-a9e2-2464b2a05a00','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `roles` (`name`, `guard_name`, `updated_at`, `created_at`) values (\'vendor\', \'api\', \'2022-02-05 11:50:48\', \'2022-02-05 11:50:48\')\",\"time\":\"0.49\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":38,\"hash\":\"2ff04aa60d5cad24fd0a1fad61c9656d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(266,'9586cc3f-c129-4a73-989e-c3711ea7fdea','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `roles` where `name` = \'delivery\' and `guard_name` = \'api\' limit 1\",\"time\":\"0.22\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":39,\"hash\":\"de1bc7a62331e87ecc91f3ab3855091f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(267,'9586cc3f-c174-4ec1-af47-209839a8a409','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `roles` (`name`, `guard_name`, `updated_at`, `created_at`) values (\'delivery\', \'api\', \'2022-02-05 11:50:48\', \'2022-02-05 11:50:48\')\",\"time\":\"0.45\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":39,\"hash\":\"2ff04aa60d5cad24fd0a1fad61c9656d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(268,'9586cc3f-c1a4-4b5d-a365-b9d53329af31','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `users` where `email` = \'admin@example.com\' limit 1\",\"time\":\"0.22\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":47,\"hash\":\"747ef04de752900539e8a3a1aee036ac\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(269,'9586cc3f-c1e8-4abd-9989-5e1d5d66080e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `roles` where `name` = \'admin\' and `guard_name` = \'api\' limit 1\",\"time\":\"0.22\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":53,\"hash\":\"de1bc7a62331e87ecc91f3ab3855091f\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(270,'9586cc3f-c2c1-4085-ab3f-b049afddbdde','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from `model_has_roles` where `model_has_roles`.`model_id` = 1 and `model_type` = \'Vtlabs\\\\Core\\\\Models\\\\User\\\\User\'\",\"time\":\"0.24\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":53,\"hash\":\"71574635b55b4486e52de86ec188b5a7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(271,'9586cc3f-c308-4605-a616-bd9fb9141403','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `model_has_roles` (`model_id`, `model_type`, `role_id`) values (1, \'Vtlabs\\\\Core\\\\Models\\\\User\\\\User\', 1)\",\"time\":\"0.54\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":53,\"hash\":\"b40636c8a9886b7fb107e3eb7dd2c0eb\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(272,'9586cc3f-c349-483f-9cf3-67d5b1b2fd73','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select `roles`.*, `model_has_roles`.`model_id` as `pivot_model_id`, `model_has_roles`.`role_id` as `pivot_role_id`, `model_has_roles`.`model_type` as `pivot_model_type` from `roles` inner join `model_has_roles` on `roles`.`id` = `model_has_roles`.`role_id` where `model_has_roles`.`model_id` in (1) and `model_has_roles`.`model_type` = \'Vtlabs\\\\Core\\\\Models\\\\User\\\\User\'\",\"time\":\"0.24\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/UsersTableSeeder.php\",\"line\":53,\"hash\":\"30e651e0e2d06e58b62d2416b9bec300\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(273,'9586cc3f-c3f4-4d98-b392-462a4b93be41','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `settings` (`key`, `value`) values (\'currency_code\', \'USD\'), (\'currency_icon\', \'$\'), (\'tax_in_percent\', \'10\'), (\'support_email\', \'admin@example.com\'), (\'support_phone\', \'8181818118\'), (\'delivery_fee\', \'25\'), (\'delivery_fee_set_by\', \'admin\'), (\'delivery_fee_per_km_base\', \'5\'), (\'delivery_fee_per_km_base_distance\', \'5\'), (\'delivery_fee_per_km_charge\', \'5\'), (\'distance_metric\', \'KM\'), (\'refer_amount\', \'50\'), (\'delivery_distance\', \'8000\'), (\'privacy_policy\', \'Demo privacy policy\'), (\'about_us\', \'Demo privacy policy\'), (\'terms\', \'Demo Terms and Condition\'), (\'admin_commision_type\', \'percent\'), (\'admin_commision_value\', \'10\')\",\"time\":\"0.72\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/SettingTableSeeder.php\",\"line\":17,\"hash\":\"be89fe60e12fe6386c2656ccfb1c3f60\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(274,'9586cc3f-c6b5-49b0-87b0-e2d17eebc299','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Category\\\\Models\\\\Category:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Seeds\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(275,'9586cc3f-c745-4211-b77a-918b9372def0','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `categories` (`slug`, `title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'seeds\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Seeds\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 1, \'2022-02-05 11:50:48\', \'2022-02-05 11:50:48\')\",\"time\":\"0.96\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":50,\"hash\":\"505f8c20c7ae9efcefa357431ea038c8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:48'),(276,'9586cc42-226c-45d9-b69b-7bbbb8662e4a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.37\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:50'),(277,'9586cc42-22d9-4278-9e23-5773d86b1906','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'seeds\', \'seeds.png\', \'public\', \'images\', \'image\\/png\', 149277, \'[]\', \'[]\', \'[]\', 1, \'Vtlabs\\\\Category\\\\Models\\\\Category\', 1, \'2022-02-05 11:50:50\', \'2022-02-05 11:50:50\')\",\"time\":\"0.75\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:50'),(278,'9586cc42-2466-4d46-819c-b121259bb67a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:1\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:50'),(279,'9586cc42-2614-4bf7-81c5-366bf129e9a3','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061850, 1644061850, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:1;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"0.80\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:50'),(280,'9586cc42-2668-4435-b004-32ad5c831c9d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Category\\\\Models\\\\Category:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Vegetables\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:50'),(281,'9586cc42-26c5-47fb-9e3d-8a69d7941511','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `categories` (`slug`, `title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'vegetables\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Vegetables\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 2, \'2022-02-05 11:50:50\', \'2022-02-05 11:50:50\')\",\"time\":\"0.61\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":50,\"hash\":\"505f8c20c7ae9efcefa357431ea038c8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:50'),(282,'9586cc43-08f2-4cfd-a7e2-0d0fc30d3809','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(283,'9586cc43-099b-427e-aa30-a60dd25f6a57','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'veg\', \'veg.png\', \'public\', \'images\', \'image\\/png\', 145831, \'[]\', \'[]\', \'[]\', 2, \'Vtlabs\\\\Category\\\\Models\\\\Category\', 2, \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"1.14\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(284,'9586cc43-0a16-4bca-8a20-00568fd8459f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:2\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(285,'9586cc43-0ab6-49e4-bbb4-a468f5381dbe','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061851, 1644061851, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:2;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"1.02\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(286,'9586cc43-0add-4ebc-a3fc-2a57e86f3b8a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Category\\\\Models\\\\Category:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Dry Fruits\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(287,'9586cc43-0b48-453c-ba68-b8839bf7e907','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `categories` (`slug`, `title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'dry-fruits\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Dry Fruits\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 3, \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.73\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":50,\"hash\":\"505f8c20c7ae9efcefa357431ea038c8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(288,'9586cc43-c866-43aa-acc6-3e343bd68be7','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(289,'9586cc43-c910-4fe9-8c5a-ea0992e29d18','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'dryfruits\', \'dryfruits.png\', \'public\', \'images\', \'image\\/png\', 179235, \'[]\', \'[]\', \'[]\', 3, \'Vtlabs\\\\Category\\\\Models\\\\Category\', 3, \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"1.11\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(290,'9586cc43-c9b4-42c3-a19b-ac8132b23eff','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:3\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(291,'9586cc43-ca79-400b-b6f8-74a8f54cdf96','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061851, 1644061851, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:3;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"1.16\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(292,'9586cc43-caaf-4e68-8dfc-0ed62d28e5fb','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Category\\\\Models\\\\Category:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Grains\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(293,'9586cc43-cb2e-4706-8273-f1f7d0931708','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `categories` (`slug`, `title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'grains\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Grains\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 4, \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.84\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":50,\"hash\":\"505f8c20c7ae9efcefa357431ea038c8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(294,'9586cc44-82b1-4b0a-b7f6-70d6d85c30e9','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.52\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(295,'9586cc44-8343-471e-ac36-fe12672e4dfe','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'grains\', \'grains.png\', \'public\', \'images\', \'image\\/png\', 136655, \'[]\', \'[]\', \'[]\', 4, \'Vtlabs\\\\Category\\\\Models\\\\Category\', 4, \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"1.04\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(296,'9586cc44-83c6-4eee-aeb3-82244cbdc244','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:4\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(297,'9586cc44-845a-428d-acb4-fff03da3767c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061851, 1644061851, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:4;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"0.82\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CategoryTableSeeder.php\",\"line\":54,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(298,'9586cc44-84b9-4f4e-823a-06b6c84170d3','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Payment\\\\Models\\\\PaymentMethod:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Cash On Delivery\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(299,'9586cc44-8514-4d05-b3fc-44146430787d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `payment_methods` (`slug`, `title`, `enabled`, `type`, `updated_at`, `created_at`) values (\'cod\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Cash On Delivery\\\\\\\"}\', 1, \'postpaid\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.58\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/PaymentMethodTableSeeder.php\",\"line\":29,\"hash\":\"db23f33fd19440cd530773c51f78f60e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(300,'9586cc44-852b-448b-865f-d67d9e398a1c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Payment\\\\Models\\\\PaymentMethod:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Wallet\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(301,'9586cc44-8588-4216-8867-469046828f6e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `payment_methods` (`slug`, `title`, `enabled`, `type`, `updated_at`, `created_at`) values (\'wallet\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Wallet\\\\\\\"}\', 1, \'prepaid\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.63\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/PaymentMethodTableSeeder.php\",\"line\":29,\"hash\":\"db23f33fd19440cd530773c51f78f60e\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(302,'9586cc44-85d3-48b1-97af-3bb404d32f8d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Ecommerce\\\\Models\\\\Coupon:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Test Coupon\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(303,'9586cc44-85e4-40d9-9a0b-d36406b4c220','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Ecommerce\\\\Models\\\\Coupon:\",\"key\":\"detail\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Test Coupon Details\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(304,'9586cc44-8692-4826-b2f6-f1bd8de268a5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `ecommerce_coupons` (`title`, `detail`, `code`, `reward`, `type`, `expires_at`, `updated_at`, `created_at`) values (\'{\\\\\\\"en\\\\\\\":\\\\\\\"Test Coupon\\\\\\\"}\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Test Coupon Details\\\\\\\"}\', \'TEST100\', 10, \'percent\', \'2020-12-31\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"1.39\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CouponTableSeeder.php\",\"line\":41,\"hash\":\"bbd756391c4a95f5b4632e697f9e3d34\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(305,'9586cc44-86a8-4b38-a76c-c782edfe39d5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Ecommerce\\\\Models\\\\Coupon:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Test Coupon 2\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(306,'9586cc44-86b7-4b9e-a029-03e370d1d7c6','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Ecommerce\\\\Models\\\\Coupon:\",\"key\":\"detail\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Test Coupon 2 Details\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(307,'9586cc44-870f-4155-997f-b28d4a9b98f6','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `ecommerce_coupons` (`title`, `detail`, `code`, `reward`, `type`, `expires_at`, `updated_at`, `created_at`) values (\'{\\\\\\\"en\\\\\\\":\\\\\\\"Test Coupon 2\\\\\\\"}\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Test Coupon 2 Details\\\\\\\"}\', \'TEST200\', 20, \'percent\', \'2020-12-31\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.56\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CouponTableSeeder.php\",\"line\":41,\"hash\":\"bbd756391c4a95f5b4632e697f9e3d34\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(308,'9586cc44-8726-493b-a814-549aba9edc66','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Ecommerce\\\\Models\\\\Coupon:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Test Coupon 3\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(309,'9586cc44-8737-4338-b2a2-2923e5f0b437','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Ecommerce\\\\Models\\\\Coupon:\",\"key\":\"detail\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Test Coupon 3 Details\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(310,'9586cc44-8797-4d25-a049-93d9617d7bec','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `ecommerce_coupons` (`title`, `detail`, `code`, `reward`, `type`, `expires_at`, `updated_at`, `created_at`) values (\'{\\\\\\\"en\\\\\\\":\\\\\\\"Test Coupon 3\\\\\\\"}\', \'{\\\\\\\"en\\\\\\\":\\\\\\\"Test Coupon 3 Details\\\\\\\"}\', \'TEST300\', 30, \'percent\', \'2020-12-31\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.64\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/CouponTableSeeder.php\",\"line\":41,\"hash\":\"bbd756391c4a95f5b4632e697f9e3d34\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(311,'9586cc44-884f-4871-bcb8-ed2e4f29e22c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `faqs` (`title`, `short_description`, `description`, `updated_at`, `created_at`) values (\'Lorem ipsum\', \'Lorem ipsum dolor sit amet.\', \'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"1.04\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/FaqTableSeeder.php\",\"line\":29,\"hash\":\"1155d5a654286fcedefebe1653aa3c98\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(312,'9586cc44-88af-4928-86a2-dae2e3306015','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `faqs` (`title`, `short_description`, `description`, `updated_at`, `created_at`) values (\'Lorem dolor\', \'Lorem dolor ipsum dolor sit amet.\', \'Lorem dolor ipsum sit amet, consectetur adipiscing elit.\', \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"0.60\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/FaqTableSeeder.php\",\"line\":29,\"hash\":\"1155d5a654286fcedefebe1653aa3c98\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(313,'9586cc44-88fc-4639-bd5c-b8fa7bfa13ae','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Banner\\\\Models\\\\Banner:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:51'),(314,'9586cc44-89df-4916-a939-7ccbe865298f','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `banners` (`title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'{\\\\\\\"en\\\\\\\":\\\\\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 1, \'2022-02-05 11:50:51\', \'2022-02-05 11:50:51\')\",\"time\":\"1.78\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":37,\"hash\":\"96ad107124f9feb780ddbe354a4e1c9d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:52'),(315,'9586cc46-29b5-49e2-89d6-7595a7d7ec70','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.45\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:53'),(316,'9586cc46-2a44-487b-8090-80d5adb5be75','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'Banner0\', \'Banner0.png\', \'public\', \'images\', \'image\\/png\', 852053, \'[]\', \'[]\', \'[]\', 1, \'Vtlabs\\\\Banner\\\\Models\\\\Banner\', 5, \'2022-02-05 11:50:53\', \'2022-02-05 11:50:53\')\",\"time\":\"1.04\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:53'),(317,'9586cc46-2afa-4b96-a793-43d9b4da576e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:5\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:53'),(318,'9586cc46-2b73-43d0-8308-b989a95f9270','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061853, 1644061853, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:5;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"0.67\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:53'),(319,'9586cc46-2b9a-4cd1-a082-6b0c944b04af','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Banner\\\\Models\\\\Banner:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:53'),(320,'9586cc46-2c0b-4a23-af74-1768535ec02e','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `banners` (`title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'{\\\\\\\"en\\\\\\\":\\\\\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 1, \'2022-02-05 11:50:53\', \'2022-02-05 11:50:53\')\",\"time\":\"0.79\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":37,\"hash\":\"96ad107124f9feb780ddbe354a4e1c9d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:53'),(321,'9586cc47-afa8-4249-9927-8a56ff162f3d','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.43\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(322,'9586cc47-b025-4ea4-ba5c-f6de1603fc8a','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'Banner1\', \'Banner1.png\', \'public\', \'images\', \'image\\/png\', 812353, \'[]\', \'[]\', \'[]\', 2, \'Vtlabs\\\\Banner\\\\Models\\\\Banner\', 6, \'2022-02-05 11:50:54\', \'2022-02-05 11:50:54\')\",\"time\":\"0.88\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(323,'9586cc47-b146-478e-b0ed-1b270d5df15c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:6\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(324,'9586cc47-b1d3-434e-9d9c-c291dc1910be','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061854, 1644061854, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:6;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"0.82\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(325,'9586cc47-b1fb-41e4-9f3d-c89dca48cf2c','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\Translatable\\\\Events\\\\TranslationHasBeenSet\",\"payload\":{\"model\":\"Vtlabs\\\\Banner\\\\Models\\\\Banner:\",\"key\":\"title\",\"locale\":\"en\",\"oldValue\":\"\",\"newValue\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(326,'9586cc47-b25f-411e-b425-3c357dceafeb','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `banners` (`title`, `meta`, `sort_order`, `updated_at`, `created_at`) values (\'{\\\\\\\"en\\\\\\\":\\\\\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\\\\\\"}\', \'{\\\\\\\"scope\\\\\\\":\\\\\\\"ecommerce\\\\\\\"}\', 1, \'2022-02-05 11:50:54\', \'2022-02-05 11:50:54\')\",\"time\":\"0.66\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":37,\"hash\":\"96ad107124f9feb780ddbe354a4e1c9d\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(327,'9586cc49-1992-4180-811b-f6d933869bcd','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select max(`order_column`) as aggregate from `media`\",\"time\":\"0.49\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"7ca353d7601202740301a9e22a2ef124\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(328,'9586cc49-1a14-4f53-8552-e90afd5eaca4','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `media` (`name`, `file_name`, `disk`, `collection_name`, `mime_type`, `size`, `custom_properties`, `responsive_images`, `manipulations`, `model_id`, `model_type`, `order_column`, `updated_at`, `created_at`) values (\'Banner2\', \'Banner2.png\', \'public\', \'images\', \'image\\/png\', 776779, \'[]\', \'[]\', \'[]\', 3, \'Vtlabs\\\\Banner\\\\Models\\\\Banner\', 7, \'2022-02-05 11:50:54\', \'2022-02-05 11:50:54\')\",\"time\":\"0.91\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"7aea3bdb29139fee47ead42f0844d7b4\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(329,'9586cc49-1abf-4a88-9e3f-e70e3cd057b2','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:7\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(330,'9586cc49-1b4c-4808-b783-2fa466902f5b','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `jobs` (`queue`, `attempts`, `reserved_at`, `available_at`, `created_at`, `payload`) values (\'default\', 0, null, 1644061854, 1644061854, \'{\\\\\\\"displayName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"job\\\\\\\":\\\\\\\"Illuminate\\\\\\\\Queue\\\\\\\\CallQueuedHandler@call\\\\\\\",\\\\\\\"maxTries\\\\\\\":null,\\\\\\\"delay\\\\\\\":null,\\\\\\\"timeout\\\\\\\":null,\\\\\\\"timeoutAt\\\\\\\":null,\\\\\\\"data\\\\\\\":{\\\\\\\"commandName\\\\\\\":\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\",\\\\\\\"command\\\\\\\":\\\\\\\"O:43:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Jobs\\\\\\\\PerformConversions\\\\\\\\\\\":11:{s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000conversions\\\\\\\\\\\";O:51:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\ConversionCollection\\\\\\\\\\\":2:{s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";N;s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000items\\\\\\\\\\\";a:1:{i:0;O:41:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Conversion\\\\\\\\Conversion\\\\\\\\\\\":7:{s:7:\\\\\\\\\\\"\\\\u0000*\\\\u0000name\\\\\\\\\\\";s:5:\\\\\\\\\\\"thumb\\\\\\\\\\\";s:28:\\\\\\\\\\\"\\\\u0000*\\\\u0000extractVideoFrameAtSecond\\\\\\\\\\\";i:0;s:16:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulations\\\\\\\\\\\";O:26:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\Manipulations\\\\\\\\\\\":1:{s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000manipulationSequence\\\\\\\\\\\";O:33:\\\\\\\\\\\"Spatie\\\\\\\\Image\\\\\\\\ManipulationSequence\\\\\\\\\\\":1:{s:9:\\\\\\\\\\\"\\\\u0000*\\\\u0000groups\\\\\\\\\\\";a:1:{i:0;a:3:{s:8:\\\\\\\\\\\"optimize\\\\\\\\\\\";s:341:\\\\\\\\\\\"{\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Jpegoptim\\\\\\\\\\\":[\\\\\\\\\\\"--strip-all\\\\\\\\\\\",\\\\\\\\\\\"--all-progressive\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Pngquant\\\\\\\\\\\":[\\\\\\\\\\\"--force\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Optipng\\\\\\\\\\\":[\\\\\\\\\\\"-i0\\\\\\\\\\\",\\\\\\\\\\\"-o2\\\\\\\\\\\",\\\\\\\\\\\"-quiet\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Svgo\\\\\\\\\\\":[\\\\\\\\\\\"--disable=cleanupIDs\\\\\\\\\\\"],\\\\\\\\\\\"Spatie\\\\\\\\\\\\\\\\ImageOptimizer\\\\\\\\\\\\\\\\Optimizers\\\\\\\\\\\\\\\\Gifsicle\\\\\\\\\\\":[\\\\\\\\\\\"-b\\\\\\\\\\\",\\\\\\\\\\\"-O3\\\\\\\\\\\"]}\\\\\\\\\\\";s:6:\\\\\\\\\\\"format\\\\\\\\\\\";s:3:\\\\\\\\\\\"jpg\\\\\\\\\\\";s:5:\\\\\\\\\\\"width\\\\\\\\\\\";s:2:\\\\\\\\\\\"50\\\\\\\\\\\";}}}}s:23:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnCollections\\\\\\\\\\\";a:0:{}s:17:\\\\\\\\\\\"\\\\u0000*\\\\u0000performOnQueue\\\\\\\\\\\";b:1;s:26:\\\\\\\\\\\"\\\\u0000*\\\\u0000keepOriginalImageFormat\\\\\\\\\\\";b:0;s:27:\\\\\\\\\\\"\\\\u0000*\\\\u0000generateResponsiveImages\\\\\\\\\\\";b:0;}}}s:8:\\\\\\\\\\\"\\\\u0000*\\\\u0000media\\\\\\\\\\\";O:45:\\\\\\\\\\\"Illuminate\\\\\\\\Contracts\\\\\\\\Database\\\\\\\\ModelIdentifier\\\\\\\\\\\":4:{s:5:\\\\\\\\\\\"class\\\\\\\\\\\";s:32:\\\\\\\\\\\"Spatie\\\\\\\\MediaLibrary\\\\\\\\Models\\\\\\\\Media\\\\\\\\\\\";s:2:\\\\\\\\\\\"id\\\\\\\\\\\";i:7;s:9:\\\\\\\\\\\"relations\\\\\\\\\\\";a:0:{}s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";s:5:\\\\\\\\\\\"mysql\\\\\\\\\\\";}s:14:\\\\\\\\\\\"\\\\u0000*\\\\u0000onlyMissing\\\\\\\\\\\";b:0;s:6:\\\\\\\\\\\"\\\\u0000*\\\\u0000job\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"connection\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"queue\\\\\\\\\\\";N;s:15:\\\\\\\\\\\"chainConnection\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"chainQueue\\\\\\\\\\\";N;s:5:\\\\\\\\\\\"delay\\\\\\\\\\\";N;s:10:\\\\\\\\\\\"middleware\\\\\\\\\\\";a:0:{}s:7:\\\\\\\\\\\"chained\\\\\\\\\\\";a:0:{}}\\\\\\\"}}\')\",\"time\":\"0.86\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/database\\/seeds\\/BannerTableSeeder.php\",\"line\":41,\"hash\":\"dcb5bc575158ce02a6c28ed0691de7a9\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:54'),(331,'9586cc49-20ab-4e35-93c3-9dbeb1e9b6b5','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `oauth_clients` (`user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `updated_at`, `created_at`) values (null, \'Foodoz Personal Access Client\', \'QXIIcfikq4qEHtI0aa7XWjWrWaEb2dOahYEUbY5r\', \'http:\\/\\/localhost\', 1, 0, 0, \'2022-02-05 11:50:55\', \'2022-02-05 11:50:55\')\",\"time\":\"1.26\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"bc77ccc261b03668020fd7c60ae5eebc\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:55'),(332,'9586cc49-21f4-4ec1-b0fe-8783cc1160ef','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `oauth_personal_access_clients` (`client_id`, `updated_at`, `created_at`) values (1, \'2022-02-05 11:50:55\', \'2022-02-05 11:50:55\')\",\"time\":\"2.21\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ebe2f9b5834a09d9cc954abb8c72b92b\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:55'),(333,'9586cc49-2290-4c65-b646-e458d8687c46','9586cc49-22cf-4269-8ac9-ffa15c16a2bf',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"insert into `oauth_clients` (`user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `updated_at`, `created_at`) values (null, \'Foodoz Password Grant Client\', \'zqg53ZVsbQIYecw1DuKDECTj5DYiQubD5kxenscP\', \'http:\\/\\/localhost\', 0, 1, 0, \'2022-02-05 11:50:55\', \'2022-02-05 11:50:55\')\",\"time\":\"0.78\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"bc77ccc261b03668020fd7c60ae5eebc\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:50:55'),(334,'9586cc57-f542-450c-8884-bcff4fa6f6d1','9586cc57-f694-4b79-8f70-d0bd8e34cb01',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select * from information_schema.tables where table_schema = \'ecommerce_foodoz\' and table_name = \'migrations\' and table_type = \'BASE TABLE\'\",\"time\":\"2.00\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ad7d07e5104cadcc6e9623dfc5fefdd8\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:51:04'),(335,'9586cc57-f626-452a-8cfb-4e302c3c02f5','9586cc57-f694-4b79-8f70-d0bd8e34cb01',NULL,1,'query','{\"connection\":\"mysql\",\"bindings\":[],\"sql\":\"select `migration` from `migrations` order by `batch` asc, `migration` asc\",\"time\":\"0.61\",\"slow\":false,\"file\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/ecommerce\\/foodoz\\/dist\\/foodoz\\/artisan\",\"line\":35,\"hash\":\"ed08a59c7f0b8851f0fd2291ca94d5c7\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2022-02-05 11:51:04');
/*!40000 ALTER TABLE `telescope_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telescope_entries_tags`
--

DROP TABLE IF EXISTS `telescope_entries_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telescope_entries_tags` (
  `entry_uuid` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tag` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  KEY `telescope_entries_tags_entry_uuid_tag_index` (`entry_uuid`,`tag`),
  KEY `telescope_entries_tags_tag_index` (`tag`),
  CONSTRAINT `telescope_entries_tags_entry_uuid_foreign` FOREIGN KEY (`entry_uuid`) REFERENCES `telescope_entries` (`uuid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telescope_entries_tags`
--

LOCK TABLES `telescope_entries_tags` WRITE;
/*!40000 ALTER TABLE `telescope_entries_tags` DISABLE KEYS */;
INSERT INTO `telescope_entries_tags` VALUES ('9586cc3c-a390-4076-83b7-146f336988e3','slow'),('9586cc3f-c6b5-49b0-87b0-e2d17eebc299','Vtlabs\\Category\\Models\\Category:'),('9586cc42-2466-4d46-819c-b121259bb67a','Spatie\\MediaLibrary\\Models\\Media:1'),('9586cc42-2668-4435-b004-32ad5c831c9d','Vtlabs\\Category\\Models\\Category:'),('9586cc43-0a16-4bca-8a20-00568fd8459f','Spatie\\MediaLibrary\\Models\\Media:2'),('9586cc43-0add-4ebc-a3fc-2a57e86f3b8a','Vtlabs\\Category\\Models\\Category:'),('9586cc43-c9b4-42c3-a19b-ac8132b23eff','Spatie\\MediaLibrary\\Models\\Media:3'),('9586cc43-caaf-4e68-8dfc-0ed62d28e5fb','Vtlabs\\Category\\Models\\Category:'),('9586cc44-83c6-4eee-aeb3-82244cbdc244','Spatie\\MediaLibrary\\Models\\Media:4'),('9586cc44-84b9-4f4e-823a-06b6c84170d3','Vtlabs\\Payment\\Models\\PaymentMethod:'),('9586cc44-852b-448b-865f-d67d9e398a1c','Vtlabs\\Payment\\Models\\PaymentMethod:'),('9586cc44-85d3-48b1-97af-3bb404d32f8d','Vtlabs\\Ecommerce\\Models\\Coupon:'),('9586cc44-85e4-40d9-9a0b-d36406b4c220','Vtlabs\\Ecommerce\\Models\\Coupon:'),('9586cc44-86a8-4b38-a76c-c782edfe39d5','Vtlabs\\Ecommerce\\Models\\Coupon:'),('9586cc44-86b7-4b9e-a029-03e370d1d7c6','Vtlabs\\Ecommerce\\Models\\Coupon:'),('9586cc44-8726-493b-a814-549aba9edc66','Vtlabs\\Ecommerce\\Models\\Coupon:'),('9586cc44-8737-4338-b2a2-2923e5f0b437','Vtlabs\\Ecommerce\\Models\\Coupon:'),('9586cc44-88fc-4639-bd5c-b8fa7bfa13ae','Vtlabs\\Banner\\Models\\Banner:'),('9586cc46-2afa-4b96-a793-43d9b4da576e','Spatie\\MediaLibrary\\Models\\Media:5'),('9586cc46-2b9a-4cd1-a082-6b0c944b04af','Vtlabs\\Banner\\Models\\Banner:'),('9586cc47-b146-478e-b0ed-1b270d5df15c','Spatie\\MediaLibrary\\Models\\Media:6'),('9586cc47-b1fb-41e4-9f3d-c89dca48cf2c','Vtlabs\\Banner\\Models\\Banner:'),('9586cc49-1abf-4a88-9e3f-e70e3cd057b2','Spatie\\MediaLibrary\\Models\\Media:7');
/*!40000 ALTER TABLE `telescope_entries_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telescope_monitoring`
--

DROP TABLE IF EXISTS `telescope_monitoring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telescope_monitoring` (
  `tag` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telescope_monitoring`
--

LOCK TABLES `telescope_monitoring` WRITE;
/*!40000 ALTER TABLE `telescope_monitoring` DISABLE KEYS */;
/*!40000 ALTER TABLE `telescope_monitoring` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_follower`
--

DROP TABLE IF EXISTS `user_follower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_follower` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `following_id` bigint unsigned NOT NULL,
  `follower_id` bigint unsigned NOT NULL,
  `accepted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_follower_following_id_index` (`following_id`),
  KEY `user_follower_follower_id_index` (`follower_id`),
  KEY `user_follower_accepted_at_index` (`accepted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_follower`
--

LOCK TABLES `user_follower` WRITE;
/*!40000 ALTER TABLE `user_follower` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_follower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_verified` tinyint(1) NOT NULL DEFAULT '0',
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint unsigned NOT NULL DEFAULT '1',
  `language` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `notification` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_mobile_number_unique` (`mobile_number`),
  UNIQUE KEY `users_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@example.com',NULL,'$2y$10$EK/AqvxJzlu4Qwy4.ZiIkO7uK/4/HRIXP.OYu72inY0W/ihiZnEky','8888888888',1,0,1,'en',NULL,NULL,NULL,'2022-02-05 06:20:48','2022-02-05 06:20:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet_transactions`
--

DROP TABLE IF EXISTS `wallet_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet_transactions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `wallet_id` int unsigned NOT NULL,
  `amount` int NOT NULL,
  `hash` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accepted` tinyint(1) NOT NULL,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wallet_transactions_wallet_id_foreign` (`wallet_id`),
  CONSTRAINT `wallet_transactions_wallet_id_foreign` FOREIGN KEY (`wallet_id`) REFERENCES `wallets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet_transactions`
--

LOCK TABLES `wallet_transactions` WRITE;
/*!40000 ALTER TABLE `wallet_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `wallet_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallets`
--

DROP TABLE IF EXISTS `wallets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallets` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `balance` bigint NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wallets_user_id_foreign` (`user_id`),
  CONSTRAINT `wallets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallets`
--

LOCK TABLES `wallets` WRITE;
/*!40000 ALTER TABLE `wallets` DISABLE KEYS */;
/*!40000 ALTER TABLE `wallets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-05 17:21:27
