import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouters from "./routers/auth.js";
import categoryRouters from "./routers/categoryRoute.js";
import productsRouters from "./routers/productsRoute.js";
import morgan from "morgan";
dotenv.config();

const app = express();

// connect database //
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// middelwares
app.use(morgan("dev"));
app.use(express.json());

// router middelware //
app.use("/api", authRouters);
app.use("/api", categoryRouters);
app.use("/api", productsRouters);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`This is running ${port}`);
});
