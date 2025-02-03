import express from 'express'
import cors from 'cors'

import productRoute from './src/routes/productRoute.js'
import { connectDB } from './src/db.js'
import userRoute from './src/routes/userRoute.js'
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    origin: '*', // 'http://localhost:5173',
    method: ["GET", "POST", "PUT", "DELETE"]
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


app.use("/api/product", productRoute);
app.use("/api/user", userRoute);

app.listen(3007, () => {
    console.log('Server running on port 3007.')
});