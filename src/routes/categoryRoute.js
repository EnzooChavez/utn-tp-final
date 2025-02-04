import { Router } from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router()

categoryRoute.get("/get", getCategories)
categoryRoute.post("/create", createCategory)
categoryRoute.delete("/:id", verifyTokenMiddleware, deleteCategory)
categoryRoute.put("/:id", verifyTokenMiddleware, updateCategory)

export default categoryRoute;