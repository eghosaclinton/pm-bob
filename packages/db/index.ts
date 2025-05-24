import 'dotenv/config';
import * as schemaa from './schema'
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!, {schema: schemaa});

export { account } from "./schema/account";
export { session } from "./schema/sessions";
export { verification } from "./schema/verification";
export { user } from "./schema/users";