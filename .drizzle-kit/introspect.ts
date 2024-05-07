import { $ } from 'bun';
import { runForAllOrFilterByArg } from './util';

const introspectDatabase = async (database: string) => {
  console.log(`Introspecting database ${database}`);
  await $`drizzle-kit introspect:mysql --config .drizzle-kit/${database}/drizzle.config.ts`;
};

await runForAllOrFilterByArg(introspectDatabase);
