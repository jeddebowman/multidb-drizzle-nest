import { $ } from 'bun';
import { runForAllOrFilterByArg } from './util';

const generateDatabase = async (database: string) => {
  console.log(`Generating database ${database}`);
  await $`drizzle-kit generate:mysql --config .drizzle-kit/${database}/drizzle.config.ts`;
};

await runForAllOrFilterByArg(generateDatabase);
