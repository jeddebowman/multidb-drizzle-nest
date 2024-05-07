import { $ } from 'bun';
import { runForAllOrFilterByArg } from './util';

const pushDatabase = async (database: string) => {
  console.log(`Pushing database ${database}`);
  await $`drizzle-kit push:mysql --config .drizzle-kit/${database}/drizzle.config.ts`;
};

await runForAllOrFilterByArg(pushDatabase);
