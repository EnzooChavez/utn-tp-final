import express from 'express'
import cors from 'cors'
import productRoute from './src/routes/productRoute.js'
import { connectDB } from './src/db.js'
import userRoute from './src/routes/userRoute.js'
import dotenv from "dotenv";
import { PORT } from './src/config.js'
import categoryRoute from './src/routes/categoryRoute.js'

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
app.use("/api/category", categoryRoute);

app.listen(PORT, () => {
    console.log('Server running on port 3007.')
});