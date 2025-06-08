import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user';
import { toNodeHandler } from 'better-auth/node';
import cors from 'cors';
import { auth } from './utils/auth';
declare module 'express' {
  interface Request {
    user?: any;
  }
}

const app = express();

app.use(
  cors({
    origin:
      // process.env.NODE_ENV == 'production' ? process.env.FRONTEND_URL :
      'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(cookieParser());
app.use(express.json());

app.get('/api/v1/', (req, res) => {
  res.send('Hello, world');
});

app.use('/api/v1/user/', userRouter);

app.listen(3005, () => {
  console.log(`app listening on port 3005`);
});
