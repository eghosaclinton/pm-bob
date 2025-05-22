import express from 'express';

const app = express();

app.use(express.json())

app.get('api/v1/', (req, res) => {
  res.send('Hello, world');
});

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
