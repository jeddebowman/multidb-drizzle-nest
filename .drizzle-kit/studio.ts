import { $ } from 'bun';
import { runForAllOrFilterByArg } from './util';
import { parseArgs } from 'util';
import { exit } from 'process';

const openStudioForDatabase = async (database: string) => {
  console.log(`Opening studio for database ${database}`);
  await $`drizzle-kit studio --config .drizzle-kit/${database}/drizzle.config.ts`;
};

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    database: {
      type: 'string',
      short: 'd',
    },
  },
  allowPositionals: true,
  strict: true,
});

if (!values.database) {
  console.error('Exactly one database argument is required');
  exit(1);
}

openStudioForDatabase(values.database);
