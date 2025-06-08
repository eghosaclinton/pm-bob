import * as dotenv from 'dotenv';
dotenv.config();

import { Resend } from 'resend';

type MailOptions = {
  to: string;
  subject: string;
  text: string;
};

const resend = new Resend(process.env.RESEND_SECRET!);

export async function sendEmail({ to, subject, text }: MailOptions) {
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_EMAIL!,
    to,
    subject,
    html: `<strong>${text}</strong>`,
  });

  if (error) {
    console.error({ error });
  }

  console.log({ data });
}
