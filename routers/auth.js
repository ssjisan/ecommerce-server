import express from "express";
const router = express.Router();

// import controller
import { registerUser,loginUser, privateRoute } from "../controller/auth.js";

// import middleware
import { requiredSignIn,isAdmin } from "../middlewares/auth.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/private", requiredSignIn, isAdmin, privateRoute)

export default router;
