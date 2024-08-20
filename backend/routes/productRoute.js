import express from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post('/',createProduct);
router.get('/',getProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;
