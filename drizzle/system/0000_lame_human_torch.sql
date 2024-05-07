CREATE TABLE `sessions` (
	`id` varchar(32) NOT NULL,
	`account_login_id` bigint unsigned NOT NULL,
	`ts` int unsigned,
	`uri` varchar(250),
	`data` text,
	`server_data` json,
	`login_data` json,
	CONSTRAINT `sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_account_login_id_account_login_userid_fk` FOREIGN KEY (`account_login_id`) REFERENCES `account_login`(`userid`) ON DELETE no action ON UPDATE no action;