import { createConnection } from 'mysql2';

export const databases = ['account', 'system'] as const;

export type Database = (typeof databases)[number];
export type Connection = ReturnType<typeof createConnection>;

const dbConnections = new Map<Database, Connection>();

export function getConnection(database: Database) {
  const cachedConnection = dbConnections.get(database);
  if (cachedConnection) {
    return cachedConnection;
  }

  const newConnection = createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT),
    database,
  });

  dbConnections.set(database, newConnection);
  return newConnection;
}
