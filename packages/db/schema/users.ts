import { pgTable, text, timestamp, boolean, uuid, varchar } from 'drizzle-orm/pg-core';


export const user = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', {length: 255}).notNull(),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('email_verified').defaultNow(),
  image: text('image'),
  createdAt: timestamp('created_at')
    // .$defaultFn(() => /* @__PURE__ */ new Date())
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at')
    // .$defaultFn(() => /* @__PURE__ */ new Date())
    .defaultNow()
    .notNull(),
});

