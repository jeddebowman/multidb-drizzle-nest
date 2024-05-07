import { $ } from 'bun';
import { runForAllOrFilterByArg } from './util';

const checkDatabase = async (database: string) => {
  console.log(`Checking database ${database}`);
  await $`drizzle-kit check:mysql --config .drizzle-kit/${database}/drizzle.config.ts`;
};

await runForAllOrFilterByArg(checkDatabase);
