const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("MongoDB connected");
  }).catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

  const productSchema = new mongoose.Schema({
    product_name: String,
    price: Number,
    description: String,
    qty: Number
  });

const Product = mongoose.model("Product", productSchema);


app.post("/api/v1/product/create", async (req, res) => {
    const userReq = req.body;
    const product = await Product.create(userReq);

    console.log("Product req to me", userReq);
   
    res.json({
        message: "Create Product",
        data: product
    })
    
});

app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find();

    res.json({
        message: "Get product",
        data: products
    })
});


app.put("/api/v1/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    product.product_name = req.body.product_name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.qty = req.body.qty;

    await product.save();

     res.json({
        message: "Update Product",
        data: product
    })
});


app.delete("/api/v1/product/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
        message: "Product Delete"
    })
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});