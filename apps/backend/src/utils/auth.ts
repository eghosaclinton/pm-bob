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
          subject: 'Tap to log in — no password needed',
          html: `
            <p>Hi ${email},</p>
            <p>Click the magic link below to log in to your account:</p>
            <p>
              <a href="${url}" style="display:inline-block;padding:10px 20px;background-color:#000;color:#fff;text-decoration:none;border-radius:6px;">
                Log In Now
              </a>
            </p>
            <p>This link will expire in 10 minutes.</p>
            <p>
              If you didn’t request this login, you can safely ignore this email.
            </p>
            <p>– The PM Bob Team</p>
          `,
        });
      },
    }),
  ],
});
