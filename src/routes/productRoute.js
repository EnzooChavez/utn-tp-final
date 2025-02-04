import { Router } from "express"
import { createProduct, deleteProduct, getProducts, updateProduct,  } from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";


const productRoute = Router();

productRoute.get("/get", verifyTokenMiddleware, getProducts)
productRoute.post("/create", createProduct)
productRoute.delete("/delete/:id", verifyTokenMiddleware, deleteProduct)  //ESTABA PONIENDO /CATEGORY DE MÁS! :((
productRoute.put("/update/:id", verifyTokenMiddleware, updateProduct)       //y aca tambien pero al final si pude je

export default productRoute;



