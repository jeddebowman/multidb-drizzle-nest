import {
  bigint,
  int,
  json,
  mysqlTable,
  primaryKey,
  text,
  varchar,
} from 'drizzle-orm/mysql-core';
import { accountLogin } from '../account/schema';

export const sessions = mysqlTable(
  'sessions',
  {
    id: varchar('id', { length: 32 }).notNull(),
    accountLoginId: bigint('account_login_id', {
      mode: 'number',
      unsigned: true,
    })
      .notNull()
      .references(() => accountLogin.userid),
    ts: int('ts', { unsigned: true }),
    uri: varchar('uri', { length: 250 }),
    data: text('data'),
    serverData: json('server_data'),
    loginData: json('login_data'),
  },
  (table) => {
    return {
      sessionsId: primaryKey({ columns: [table.id], name: 'sessions_id' }),
    };
  },
);
