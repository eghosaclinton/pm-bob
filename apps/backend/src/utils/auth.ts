import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { magicLink } from 'better-auth/plugins';
import { sendEmail } from './email';
import { db } from '../db/connect';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  trustedOrigins: ['http://localhost:3000'],
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url, token }, request) => {
        await sendEmail({
          to: email,
          subject: 'Log in',
          text: `Click onthe link to log in: ${url}`,
        });
      },
    }),
  ],
});
