import express from "express";
const router = express.Router();
// import controller
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory
} from "../controller/categoryController.js";

// import middleware
import { requiredSignIn, isAdmin } from "../middlewares/auth.js";

router.post("/category", requiredSignIn, isAdmin, createCategory);
router.put("/category/:categoryId", requiredSignIn, isAdmin, updateCategory);
router.delete("/category/:categoryId", requiredSignIn, isAdmin, removeCategory);
router.get("/category", listCategory);
router.get("/category/:slug", readCategory);

export default router;
