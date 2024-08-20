import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import productRoute from './routes/productRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/products',productRoute);
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running ${PORT}`);
})