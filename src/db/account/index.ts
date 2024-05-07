import { getConnection } from '@/db/connection';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/mysql2';

export default drizzle(getConnection('account'), {
  schema,
  mode: 'default',
});
