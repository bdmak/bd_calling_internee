import Product from '../models/product.model.js';

const CreateProduct = async (req, res) => {
    const data = req.body;
    const product = await Product.create(data);

    console.log("Product Data Created", data)
   
    res.json({
        message: "Create Product Successfully",
        data: product
    })
}


const GetProduct = async (req, res) => {

   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit) || 10;
   const skip = (page - 1) * limit;

   const products = await Product.find().skip(skip).limit(limit);
   const totalProducts = await Product.countDocuments();

    res.json({
        message: "Get All Products Successfully",
        currentPage: page,
        totalPages: Math.ceil(totalProducts / limit),
        totalProducts: totalProducts,
        data: products
    });

}


const UpdateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.quantity = req.body.quantity;

    await product.save();

     res.json({
        message: "Update Product Successfully",
        data: product
    })
}

const DeleteProduct = async (req, res) => {
     await Product.findByIdAndDelete(req.params.id);

    res.json({
        message: "Delete Product Successfully"
    })
}

export default {
 CreateProduct,
 GetProduct,
 UpdateProduct,
 DeleteProduct
}