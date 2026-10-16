import dotenv from 'dotenv';
dotenv.config()
import express from 'express';

import DBConctin from './config/db.config.js';
import route from './routes/product.routes.js';

const app = express()
const PORT = process.env.PORT || 3001

DBConctin();

app.use(express.json())


app.use('/api/v1', route);

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Server started successfully.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

