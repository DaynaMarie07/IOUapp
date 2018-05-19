CREATE DATABASE IOUapp_db;
USE DATABASE IOUapp_db;

CREATE TABLE `login` (
`id` int( 11 ) NOT NULL AUTO_INCREMENT ,
`username` varchar( 30 ) NOT NULL ,
`email` varchar( 50 ) NOT NULL ,
`password` varchar( 128 ) NOT NULL ,
PRIMARY KEY ( `id` ) ,
UNIQUE KEY `username` ( `username` )
) ENGINE = MYISAM DEFAULT CHARSET = utf8;

INSERT INTO `login`(`username`, `email`, `password`) VALUES ('myuser','myemail@domain.com','mypassword');

