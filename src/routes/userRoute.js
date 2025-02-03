import { Router } from "express";
import { createUsers, getUsers, validate } from "../controllers/userController.js";

const userRoute = Router();

userRoute.get("/", getUsers);
userRoute.post("/", createUsers);
userRoute.post("/login", validate);

export default userRoute;



