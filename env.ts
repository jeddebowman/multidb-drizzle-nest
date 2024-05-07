/* eslint-disable @typescript-eslint/no-namespace */
import { z } from 'zod';

const envVariables = z.object({
  DATABASE_HOST: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PORT: z.string().regex(/^\d+$/),
  DATABASE_PASSWORD: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
