import express from 'express';
import { sampleData } from './data.js';

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  return res.status(200).json(sampleData)
});

app.post('/', (req, res) => {
  const { body } = req;
  sampleData.push(body);
  console.log(body)
  return res.status(201).json(sampleData)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})