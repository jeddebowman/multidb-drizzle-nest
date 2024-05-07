import { getConnection } from '@/db/connection';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schema';

export const getDb = () =>
  drizzle(getConnection('system'), {
    schema,
    mode: 'default',
  });
