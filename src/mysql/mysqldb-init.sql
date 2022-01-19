# Initialize a mysql db with a 'test' db and be able test productpage with it.
# mysql -h 127.0.0.1 -ppassword < mysqldb-init.sql

CREATE DATABASE test;
USE test;


CREATE TABLE `filmssystem`.`films` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT(255) NOT NULL,
  `type` TEXT(255) NOT NULL,
  `year` INT NOT NULL,
  `country` TEXT(255) NOT NULL,
  PRIMARY KEY (`id`));

-- INSERT INTO ratings (ReviewID, Rating) VALUES (1, 5);
-- INSERT INTO ratings (ReviewID, Rating) VALUES (2, 4);