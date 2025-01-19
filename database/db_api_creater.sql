-- MySQL Workbench Synchronization
-- Generated: 2025-01-19 14:14
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Administrator

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `test01` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

CREATE TABLE IF NOT EXISTS `test01`.`Categories` (
  `id_category` INT(11) NOT NULL AUTO_INCREMENT,
  `name_category` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_category`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `test01`.`Products` (
  `id_product` INT(11) NOT NULL AUTO_INCREMENT,
  `id_category` INT(11) NOT NULL,
  `name_product` VARCHAR(140) NOT NULL,
  `price_product` DECIMAL(7,2) NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  INDEX `fk_Products_Categories_idx` (`id_category` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Categories`
    FOREIGN KEY (`id_category`)
    REFERENCES `test01`.`Categories` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `test01`.`Images` (
  `id_image` INT(11) NOT NULL AUTO_INCREMENT,
  `id_product` INT(11) NOT NULL,
  `path_image` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id_image`),
  INDEX `fk_Images_Products1_idx` (`id_product` ASC) VISIBLE,
  CONSTRAINT `fk_Images_Products1`
    FOREIGN KEY (`id_product`)
    REFERENCES `test01`.`Products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `test01`.`Costumers` (
  `id_costumer` INT(11) NOT NULL AUTO_INCREMENT,
  `name_costumer` VARCHAR(150) NULL DEFAULT NULL,
  `email_costumer` VARCHAR(80) NOT NULL,
  `password_costumer` VARCHAR(180) NOT NULL,
  PRIMARY KEY (`id_costumer`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `test01`.`Orders` (
  `id_order` INT(11) NOT NULL AUTO_INCREMENT,
  `id_costumer` INT(11) NOT NULL,
  `id_product` INT(11) NOT NULL,
  `quantity` DECIMAL NOT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `fk_Orders_Costumers1_idx` (`id_costumer` ASC) VISIBLE,
  INDEX `fk_Orders_Products1_idx` (`id_product` ASC) VISIBLE,
  CONSTRAINT `fk_Orders_Costumers1`
    FOREIGN KEY (`id_costumer`)
    REFERENCES `test01`.`Costumers` (`id_costumer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Orders_Products1`
    FOREIGN KEY (`id_product`)
    REFERENCES `test01`.`Products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
