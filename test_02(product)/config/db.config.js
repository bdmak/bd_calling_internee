import mongoose from 'mongoose';

const DBConctin = () => {
    mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err.message);
  });
}

export default DBConctin;

