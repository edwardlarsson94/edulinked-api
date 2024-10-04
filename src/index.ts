
import express from 'express';
import authRouter from './routes/authRouter';
import postRouter from './routes/postRouter';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the auth router
app.use('/auth', authRouter);
app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})

