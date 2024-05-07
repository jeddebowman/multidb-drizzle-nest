import {
  bigint,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  text,
  unique,
  varchar,
} from 'drizzle-orm/mysql-core';

export const accountLogin = mysqlTable(
  'account_login',
  {
    userid: bigint('userid', { mode: 'number', unsigned: true })
      .autoincrement()
      .notNull(),
    email: varchar('email', { length: 320 }).notNull(),
    password: varchar('password', { length: 250 }).notNull(),
    accesslevel: text('accesslevel'),
    initials: varchar('initials', { length: 3 }),
    blocked: mysqlEnum('blocked', ['yes', 'no']).notNull(),
    verified: mysqlEnum('verified', ['yes', 'no']).notNull(),
    resetTime: bigint('reset_time', { mode: 'number' }),
    resetKey: varchar('reset_key', { length: 250 }),
    firstname: varchar('firstname', { length: 64 }),
    lastname: varchar('lastname', { length: 64 }),
  },
  (table) => {
    return {
      accountLoginUserid: primaryKey({
        columns: [table.userid],
        name: 'account_login_userid',
      }),
      email: unique('email').on(table.email),
    };
  },
);
