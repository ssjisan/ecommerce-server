import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouters from "./routers/authRouter.js";
import categoryRouters from "./routers/categoryRoute.js";
import productsRouters from "./routers/productsRoute.js";
import morgan from "morgan";
import cors from "cors"

dotenv.config();

const app = express();

// connect database //
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// middelwares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// router middelware //
app.use(authRouters);
// app.use(categoryRouters);
// app.use(productsRouters);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`This is running ${port}`);
});
