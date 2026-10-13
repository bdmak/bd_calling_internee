import { Router } from "express";
import productController from "../controllers/product.controller.js";

const route = Router()

route.post("/product/create", productController.CreateProduct);
route.get("/product/get", productController.GetProduct);
route.patch("/product/update/:id", productController.UpdateProduct);
route.delete("/product/delete/:id", productController.DeleteProduct);

export default route;