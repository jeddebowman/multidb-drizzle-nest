CREATE TABLE `account_login` (
	`userid` bigint unsigned AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`password` varchar(250) NOT NULL,
	`accesslevel` text,
	`initials` varchar(3),
	`blocked` enum('yes','no') NOT NULL,
	`verified` enum('yes','no') NOT NULL,
	`reset_time` bigint,
	`reset_key` varchar(250),
	`firstname` varchar(64),
	`lastname` varchar(64),
	CONSTRAINT `account_login_userid` PRIMARY KEY(`userid`),
	CONSTRAINT `email` UNIQUE(`email`)
);
