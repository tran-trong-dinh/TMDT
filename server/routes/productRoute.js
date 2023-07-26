import express from "express";
import {
  createProduct,
  deleteProduct,
  getDetailProduct,
  getProducts,
  getProductsFromCategory,
  getRelatedProducts,
  updateProduct,
} from "../controller/product.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-products", getProducts);
router.post("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/get-products-from-category/:id", getProductsFromCategory);
router.get("/get-detail-product/:id", getDetailProduct);
router.get("/get-related-products/:category_id/:id", getRelatedProducts);

export default router;
