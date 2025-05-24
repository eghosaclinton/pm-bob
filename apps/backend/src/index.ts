import express from 'express';
import cookieParser from 'cookie-parser'
import userRouter from './routes/user';
// import {db} from "@db"
import { checkIfAuthorized } from './utils/middleware/checkIfAuthorized';
import { userControllers } from './routes/user';
declare module 'express' {
    interface Request {
      user?: any;
    }
}

const app = express();

console.log( userControllers.isUser())
app.use(cookieParser())
app.use(express.json())


// app.use('api/v1/', checkIfAuthorized);

app.get('/api/v1/', (req, res) => {
  res.send('Hello, world');
});

app.use('/api/v1/user/', userRouter)

app.listen(3001, () => {
  console.log(`app listening on port 3001`);
});
