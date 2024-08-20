import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.listen(3001,()=>{
    connectDB();
    console.log(`Server is running`)
})