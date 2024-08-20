import mongoose from "mongoose";

import Product from '../models/productModel.js';

export const createProduct = async(req,res)=>{
    const product = req.body;
    if(!product.name||!product.price||!product.image){
        return res.status(400).json({success:false,message:"Please input all fields"});
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        return res.status(201).json({success:true,data:newProduct});
    } catch (error) {
        console.log("Error in creating product",error.message);
        res.status(500).json({success:false,message:"Internal Server error"});
    }
}

export const getProduct = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    } catch (error) {
        console.log("Error in fetching product",error.message);
        res.status(500).json({success:false,message:"Internal Server error"});
    }
}


