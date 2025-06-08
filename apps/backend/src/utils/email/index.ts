import * as dotenv from 'dotenv';
dotenv.config();

import { Resend } from 'resend';

type MailOptions = {
  to: string;
  subject: string;
  html: string;
};

const resend = new Resend(process.env.RESEND_SECRET!);

export async function sendEmail({ to, subject, html }: MailOptions) {
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_EMAIL!,
    to,
    subject,
    html,
  });

  if (error) {
    console.error({ error });
  }

  console.log({ data });
}
