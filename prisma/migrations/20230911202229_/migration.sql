-- CreateTable
CREATE TABLE `test1` (
    `car_id` INTEGER NOT NULL AUTO_INCREMENT,
    `car_name` VARCHAR(100) NULL,
    `car_createdby` DATE NULL,
    `car_updatedby` DATE NULL,
    `car_price` VARCHAR(200) NULL,
    `car_image` VARCHAR(100) NULL,

    PRIMARY KEY (`car_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test2` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cust_car_id` INTEGER NULL,
    `customer_name` VARCHAR(100) NULL,
    `customer_address` VARCHAR(100) NULL,
    `customer_createdby` DATETIME(0) NULL,
    `customer_updatedby` DATETIME(0) NULL,

    INDEX `test2_FK`(`cust_car_id`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testing3` (
    `testcar_id` INTEGER NOT NULL AUTO_INCREMENT,
    `testcar_img` VARCHAR(500) NULL,
    `testcar_createdby` DATETIME(0) NULL,
    `testcar_updatedy` DATETIME(0) NULL,

    PRIMARY KEY (`testcar_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `test2` ADD CONSTRAINT `test2_FK` FOREIGN KEY (`cust_car_id`) REFERENCES `test1`(`car_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
