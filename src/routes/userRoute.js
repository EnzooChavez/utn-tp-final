import { Router } from "express";
import { createUsers, getUsers, validate } from "../controllers/userController.js";

const userRoute = Router();

userRoute.get("/get", getUsers);
userRoute.post("/create", createUsers);
userRoute.post("/login", validate);

export default userRoute;



