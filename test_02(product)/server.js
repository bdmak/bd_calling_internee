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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

