import mongoose from 'mongoose';

// SCHEMA
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number
}
);

// MODEL
const Product = mongoose.model('Product', productSchema);


export default Product;