import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const PORT = 3000;
const DATA_FILE = 'data.json';

const app = express();
app.use(express.json());

const readDataFile = async () => {
  const data = await fs.readFile(DATA_FILE, 'utf-8');
  if (!data) return [];
  return JSON.parse(data);
};

const writeDataFile = async (data) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

// POST Car
app.post('/api/cars', async (req, res) => {
  const data = await readDataFile();
  const newCar = {
    id: uuidv4(),
    ...req.body,
  };
  data.push(newCar);
  writeDataFile(data);
  res.status(201).json(newCar);
});

// GET Cars
app.get('/api/cars', async (req, res) => {
  const cars = await readDataFile();
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
