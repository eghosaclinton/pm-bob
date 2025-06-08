import { Router } from 'express';
import { Users } from '../controllers/user';

export const userControllers = new Users();
const userRouter = Router();

userRouter.post('/isuser', userControllers.isUser);

export default userRouter;
