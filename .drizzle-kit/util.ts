import type { Config } from 'drizzle-kit';
import '../env';
import { parseArgs } from 'util';
import { exit } from 'process';
import { readdir } from 'fs/promises';

export const createDbCredentials = (database: string) => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database,
});

export const createConfig = (database: string): Config => {
  return {
    dbCredentials: createDbCredentials(database),
    driver: 'mysql2',
    schema: `./src/db/${database}/schema.ts`,
    out: `./drizzle/${database}`,
  };
};

export const runForAllOrFilterByArg = async (
  fn: (database: string) => Promise<void>,
) => {
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      database: {
        type: 'string',
        multiple: true,
        short: 'd',
      },
    },
    allowPositionals: true,
  });

  if (values.database) {
    console.log('Database argument(s) provided:', values.database);
    for (const database of values.database) {
      await fn(database);
    }
    exit(0);
  }

  console.log('No database argument provided. Running for all databases...');
  // list all folders in .drizzle-kit
  const files = await readdir('.drizzle-kit', { withFileTypes: true });
  const folders = files.filter((f) => f.isDirectory());
  for (const folder of folders) {
    await fn(folder.name);
  }
};
