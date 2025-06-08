import { type Request, type Response } from 'express';
import { db } from '../db/connect';
import { user } from '../db/schema';
import { eq } from 'drizzle-orm';
export class Users {
  constructor() {}

  async isUser(req: Request, res: Response) {
    const id = req.body.id;
    const checkUser = await db.select().from(user).where(eq(user.id, id));

    if (checkUser) {
      res.status(200).json({
        isUser: true,
      });
    } else {
      res.status(400).json({
        isUser: false,
      });
    }
  }
}
