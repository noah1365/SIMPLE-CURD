import express from "express";
import { createProduct, getProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post('/',createProduct);
router.get('/',getProduct);
router.put('/:id',updateProduct);

export default router;
