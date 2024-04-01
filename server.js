import express from 'express';
import { sampleData } from './data.js';
import { getAllUsers } from './controllers/userController.js';
import userRouter from './routes/api/users.js';

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.post('/', (req, res) => {
  const { body } = req;
  sampleData.push(body);
  console.log(body)
  return res.status(201).json(sampleData)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})

app.use('/api/users', userRouter)