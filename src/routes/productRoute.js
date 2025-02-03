import { Router } from "express"
import { createProduct, getProducts,  } from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";


const productRoute = Router();

productRoute.get("/get", verifyTokenMiddleware, getProducts)
productRoute.post("/create", createProduct)

export default productRoute;



