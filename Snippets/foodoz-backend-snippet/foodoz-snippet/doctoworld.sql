-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: doctoworld
-- ------------------------------------------------------
-- Server version	8.0.19

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'personal-care','{\"en\": \"Personal Care\"}',NULL,1,NULL,'2020-07-04 12:30:58','2020-07-04 12:30:58'),(2,'skin-care','{\"en\": \"Skin Care\"}',NULL,1,1,'2020-07-04 12:30:59','2020-07-04 12:30:59'),(3,'baby-care','{\"en\": \"Baby Care\"}',NULL,2,1,'2020-07-04 12:30:59','2020-07-04 12:30:59'),(4,'hair-care','{\"en\": \"Hair Care\"}',NULL,3,1,'2020-07-04 12:30:59','2020-07-04 12:30:59'),(5,'otc-medicines','{\"en\": \"OTC Medicines\"}',NULL,1,NULL,'2020-07-04 12:30:59','2020-07-04 12:30:59'),(6,'first-aid','{\"en\": \"First Aid\"}',NULL,1,5,'2020-07-04 12:31:01','2020-07-04 12:31:01'),(7,'fever','{\"en\": \"Fever\"}',NULL,2,5,'2020-07-04 12:31:01','2020-07-04 12:31:01'),(8,'pain','{\"en\": \"Pain\"}',NULL,3,5,'2020-07-04 12:31:01','2020-07-04 12:31:01');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
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
  `meta` json NOT NULL,
  `formatted_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postcode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
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
-- Table structure for table `ecommerce_order_addresses`
--

DROP TABLE IF EXISTS `ecommerce_order_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecommerce_order_addresses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `formatted_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` decimal(15,7) NOT NULL,
  `latitude` decimal(15,7) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `delivery_status` tinyint unsigned NOT NULL DEFAULT '5',
  `order_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_deliveries_order_id_foreign` (`order_id`),
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
  `order_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_product_addons_product_addon_choice_id_foreign` (`product_addon_choice_id`),
  KEY `ecommerce_order_product_addons_order_id_foreign` (`order_id`),
  KEY `ecommerce_order_product_addons_product_id_foreign` (`product_id`),
  CONSTRAINT `ecommerce_order_product_addons_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_order_product_addons_product_addon_choice_id_foreign` FOREIGN KEY (`product_addon_choice_id`) REFERENCES `ecommerce_product_addon_choices` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_order_product_addons_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `ecommerce_products` (`id`) ON DELETE CASCADE
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
  `product_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_order_products_order_id_foreign` (`order_id`),
  KEY `ecommerce_order_products_product_id_foreign` (`product_id`),
  CONSTRAINT `ecommerce_order_products_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `ecommerce_orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_order_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `ecommerce_products` (`id`) ON DELETE CASCADE
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
  `type` tinyint unsigned NOT NULL DEFAULT '5',
  `scheduled_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vendor_id` int unsigned DEFAULT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ecommerce_orders_vendor_id_foreign` (`vendor_id`),
  KEY `ecommerce_orders_user_id_foreign` (`user_id`),
  CONSTRAINT `ecommerce_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ecommerce_orders_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `ecommerce_vendors` (`id`) ON DELETE SET NULL
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
  `user_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,'Vtlabs\\Category\\Models\\Category',1,'images','200','200.png','image/png','public',781,'[]','{\"generated_conversions\": {\"thumb\": true}}','[]',1,'2020-07-04 12:30:59','2020-07-04 12:30:59'),(2,'Vtlabs\\Category\\Models\\Category',5,'images','200','200.png','image/png','public',781,'[]','{\"generated_conversions\": {\"thumb\": true}}','[]',2,'2020-07-04 12:31:01','2020-07-04 12:31:01');
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_04_02_193005_create_translations_table',1),(2,'2016_06_01_000001_create_oauth_auth_codes_table',1),(3,'2016_06_01_000002_create_oauth_access_tokens_table',1),(4,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(5,'2016_06_01_000004_create_oauth_clients_table',1),(6,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(7,'2018_07_14_183253_payment_methods',1),(8,'2018_07_14_183253_payments',1),(9,'2018_07_14_183253_ratings',1),(10,'2018_08_08_100000_create_telescope_entries_table',1),(11,'2020_05_02_000545_create_permission_tables',1),(12,'2020_05_05_002400_create_statuses_table',1),(13,'2020_05_05_122859_create_media_table',1),(14,'2020_07_04_142129_create_favorites_table',1),(15,'2050_01_01_000005_create_users_table',1),(16,'2050_01_01_000010_create_password_resets_table',1),(17,'2051_01_01_000010_create_addresses_table',1),(18,'2051_01_01_000020_create_categories_table',1),(19,'2051_01_01_000030_create_vendors_table',1),(20,'2051_01_01_000038_create_attributes_table',1),(21,'2051_01_01_000040_create_products_table',1),(22,'2051_01_01_000042_create_vendor_products_table',1),(23,'2051_01_01_000050_create_order_conditions_table',1),(24,'2051_01_01_000060_create_orders_table',1),(25,'2051_01_01_000070_create_order_deliveries_table',1),(26,'2051_01_01_000080_create_order_addresses_table',1),(27,'2051_01_01_000100_create_order_products_table',1),(28,'2051_01_01_000110_create_order_product_addons_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
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
INSERT INTO `oauth_clients` VALUES (1,NULL,'Doctoworld Personal Access Client','ynMdmCWN9WB25Qz60EhLFZMrd7Jvpz77IxMIRaWV','http://localhost',1,0,0,'2020-07-04 12:31:01','2020-07-04 12:31:01'),(2,NULL,'Doctoworld Password Grant Client','wSi7bZ9mefVP968uakQmW0qdgRahDFsYm0PxHN5d','http://localhost',0,1,0,'2020-07-04 12:31:01','2020-07-04 12:31:01');
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
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2020-07-04 12:31:01','2020-07-04 12:31:01');
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
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payment_methods_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
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
  `status` tinyint unsigned NOT NULL DEFAULT '5',
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
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'administrator','api','2020-07-04 12:30:58','2020-07-04 12:30:58'),(2,'customer','api','2020-07-04 12:30:58','2020-07-04 12:30:58'),(3,'vendor','api','2020-07-04 12:30:58','2020-07-04 12:30:58');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telescope_entries`
--

LOCK TABLES `telescope_entries` WRITE;
/*!40000 ALTER TABLE `telescope_entries` DISABLE KEYS */;
INSERT INTO `telescope_entries` VALUES (1,'90f68adb-7517-4215-9fff-f8f671703ed2','90f68add-d36a-4f3b-b658-b8be507b32ee',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:1\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:00:59'),(2,'90f68adb-7918-48c8-88f0-ab8595a39209','90f68add-d36a-4f3b-b658-b8be507b32ee',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\ConversionWillStart\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:1\",\"conversion\":{\"class\":\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\",\"properties\":[]},\"copiedOriginalFile\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/doctoworld\\/storage\\/medialibrary\\/temp\\/DZ6h3GQLEV5yVR0KpESuknSCG34mVbzz\\/pk0JGRySMoKMLxFO.png\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:00:59'),(3,'90f68adb-8425-4d0b-b39c-28d97c7f313a','90f68add-d36a-4f3b-b658-b8be507b32ee',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\ConversionHasBeenCompleted\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:1\",\"conversion\":{\"class\":\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\",\"properties\":[]}},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:00:59'),(4,'90f68add-c659-4a15-aa5a-faef51990a55','90f68add-d36a-4f3b-b658-b8be507b32ee',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\MediaHasBeenAdded\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:2\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:01:01'),(5,'90f68add-c76e-44b7-9c89-467ef90a94cd','90f68add-d36a-4f3b-b658-b8be507b32ee',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\ConversionWillStart\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:2\",\"conversion\":{\"class\":\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\",\"properties\":[]},\"copiedOriginalFile\":\"\\/Applications\\/XAMPP\\/xamppfiles\\/htdocs\\/doctoworld\\/storage\\/medialibrary\\/temp\\/l9HlHAPNIiBHUr94u8YewyxW4DtqoQKl\\/FsnjugunvjUFedDJ.png\"},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:01:01'),(6,'90f68add-cc80-45ad-8fbe-79029a3adb79','90f68add-d36a-4f3b-b658-b8be507b32ee',NULL,1,'event','{\"name\":\"Spatie\\\\MediaLibrary\\\\Events\\\\ConversionHasBeenCompleted\",\"payload\":{\"media\":\"Spatie\\\\MediaLibrary\\\\Models\\\\Media:2\",\"conversion\":{\"class\":\"Spatie\\\\MediaLibrary\\\\Conversion\\\\Conversion\",\"properties\":[]}},\"listeners\":[],\"broadcast\":false,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:01:01'),(7,'90f68af9-964f-44e0-a803-c450a44d597c','90f68af9-97c3-4ad9-b79a-d23c33310db2',NULL,1,'debugbar','{\"requestId\":\"Xbbad413b4bc2254a3c3f0f8e28a09d86\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:01:19'),(8,'90f68af9-978e-41b6-995c-9746c5b4a520','90f68af9-97c3-4ad9-b79a-d23c33310db2',NULL,1,'request','{\"ip_address\":\"::1\",\"uri\":\"\\/api\\/categories?parent=1\",\"method\":\"GET\",\"controller_action\":\"Vtlabs\\\\Category\\\\Http\\\\Controllers\\\\Api\\\\CategoryController@index\",\"middleware\":[\"api\"],\"headers\":{\"accept\":\"application\\/json\",\"x-localization\":\"es\",\"user-agent\":\"PostmanRuntime\\/7.25.0\",\"cache-control\":\"no-cache\",\"postman-token\":\"cdd551c1-6887-40ac-b25b-02c0caa224cf\",\"host\":\"localhost\",\"accept-encoding\":\"gzip, deflate, br\",\"connection\":\"keep-alive\"},\"payload\":{\"parent\":\"1\"},\"session\":[],\"response_status\":200,\"response\":{\"data\":[{\"id\":1,\"slug\":\"personal-care\",\"title\":\"Personal Care\",\"meta\":null,\"sort_order\":1,\"mediaurls\":{\"images\":[{\"default\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/storage\\/1\\/200.png\",\"thumb\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/storage\\/1\\/conversions\\/200-thumb.jpg\"}]},\"parent_id\":null},{\"id\":5,\"slug\":\"otc-medicines\",\"title\":\"OTC Medicines\",\"meta\":null,\"sort_order\":1,\"mediaurls\":{\"images\":[{\"default\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/storage\\/2\\/200.png\",\"thumb\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/storage\\/2\\/conversions\\/200-thumb.jpg\"}]},\"parent_id\":null}],\"links\":{\"first\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/api\\/categories?page=1\",\"last\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/api\\/categories?page=1\",\"prev\":null,\"next\":null},\"meta\":{\"current_page\":1,\"from\":1,\"last_page\":1,\"path\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/api\\/categories\",\"per_page\":15,\"to\":2,\"total\":2}},\"duration\":237,\"memory\":20,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:01:19'),(9,'90f68b63-e612-498c-94c6-82a635f01418','90f68b63-e729-444c-b273-8eeb89ad0012',NULL,1,'debugbar','{\"requestId\":\"Xed3afee20a3d597826698253b27f9fdf\",\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:02:29'),(10,'90f68b63-e6f6-4904-a7f4-477925b0572d','90f68b63-e729-444c-b273-8eeb89ad0012',NULL,1,'request','{\"ip_address\":\"::1\",\"uri\":\"\\/api\\/vendors?category=2\",\"method\":\"GET\",\"controller_action\":\"Vtlabs\\\\Ecommerce\\\\Http\\\\Controllers\\\\Api\\\\VendorController@index\",\"middleware\":[\"api\"],\"headers\":{\"accept\":\"application\\/json\",\"x-localization\":\"es\",\"user-agent\":\"PostmanRuntime\\/7.25.0\",\"cache-control\":\"no-cache\",\"postman-token\":\"9a2a5c6a-8885-4894-a18d-1de2364f3e28\",\"host\":\"localhost\",\"accept-encoding\":\"gzip, deflate, br\",\"connection\":\"keep-alive\"},\"payload\":{\"category\":\"2\"},\"session\":[],\"response_status\":200,\"response\":{\"data\":[],\"links\":{\"first\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/api\\/vendors?page=1\",\"last\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/api\\/vendors?page=1\",\"prev\":null,\"next\":null},\"meta\":{\"current_page\":1,\"from\":null,\"last_page\":1,\"path\":\"http:\\/\\/localhost\\/doctoworld\\/public\\/api\\/vendors\",\"per_page\":15,\"to\":null,\"total\":0}},\"duration\":224,\"memory\":20,\"hostname\":\"ujjwals-MacBook-Pro.local\"}','2020-07-04 18:02:29');
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
INSERT INTO `telescope_entries_tags` VALUES ('90f68adb-7517-4215-9fff-f8f671703ed2','Spatie\\MediaLibrary\\Models\\Media:1'),('90f68adb-7918-48c8-88f0-ab8595a39209','Spatie\\MediaLibrary\\Models\\Media:1'),('90f68adb-8425-4d0b-b39c-28d97c7f313a','Spatie\\MediaLibrary\\Models\\Media:1'),('90f68add-c659-4a15-aa5a-faef51990a55','Spatie\\MediaLibrary\\Models\\Media:2'),('90f68add-c76e-44b7-9c89-467ef90a94cd','Spatie\\MediaLibrary\\Models\\Media:2'),('90f68add-cc80-45ad-8fbe-79029a3adb79','Spatie\\MediaLibrary\\Models\\Media:2');
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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_verified` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint unsigned NOT NULL DEFAULT '1',
  `language` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `notification` json DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_mobile_number_unique` (`mobile_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@example.com','$2y$10$9W8hLFxX0Hs5w0R3jpPXTevzJrf9pxgWSTaEtYiDqLbpejhISWp.y','8888888888',1,1,'en',NULL,NULL,NULL,'2020-07-04 12:30:58','2020-07-04 12:30:58');
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

-- Dump completed on 2020-07-05  7:20:11
