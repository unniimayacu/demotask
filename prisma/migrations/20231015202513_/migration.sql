/*
  Warnings:

  - You are about to drop the `test1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `test2` DROP FOREIGN KEY `test2_FK`;

-- DropTable
DROP TABLE `test1`;

-- CreateTable
CREATE TABLE `car` (
    `car_id` INTEGER NOT NULL AUTO_INCREMENT,
    `car_name` VARCHAR(100) NULL,
    `car_createdby` INTEGER NULL,
    `car_updatedby` INTEGER NULL,
    `car_price` DOUBLE NULL,
    `car_image` VARCHAR(100) NULL,
    `car_created_at` DATE NULL,
    `car_updated_at` DATE NULL,

    PRIMARY KEY (`car_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_name` VARCHAR(300) NOT NULL,
    `customer_created_by` INTEGER NOT NULL,
    `customer_updated_by` INTEGER NOT NULL,
    `customer_created_at` DATE NOT NULL,
    `customer_updated_at` DATE NOT NULL,
    `customer_car_id` INTEGER NOT NULL,

    INDEX `customer_car_id`(`customer_car_id`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `test2` ADD CONSTRAINT `test2_FK` FOREIGN KEY (`cust_car_id`) REFERENCES `car`(`car_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`customer_car_id`) REFERENCES `car`(`car_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
