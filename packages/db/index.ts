import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + "/.env" });

import {Pool} from 'pg'
import * as schema from './schema'
import { drizzle } from 'drizzle-orm/node-postgres';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

export { account } from "./schema/account";
export { session } from "./schema/sessions";
export { verification } from "./schema/verification";
export { user } from "./schema/users";