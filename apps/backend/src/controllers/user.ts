import {type Request, type Response} from 'express'
import { db, user } from '@db';
import { eq } from 'drizzle-orm'
export class Users {
  constructor() {}

  async isUser(){
    // const id = req.body.id
    const checkUser = await db.select().from(user).where(
      eq(user.id, "1ad117d9-3235-4b86-b38e-a2510f6adac5")
    )

    return checkUser

    // if (checkUser){
    //   res.status(200).json({
    //     isUser: true
    //   })
    // }else{
    //   res.status(400).json({
    //     isUser:false
    //   })
    // }
  }
}
