import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import { env } from 'src/env';

dotenv.config();

export default {
  schema: './src/db/schema.ts',
  out: './.migrations/',
  driver: 'turso',
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
