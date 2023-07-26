import express from "express";
import authRouter from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import productRouter from "./routes/productRoute.js";
import promotionRouter from "./routes/promotionRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import cors from "cors";

// import uploadCloud from "./config/cloudinary.config.js";
const app = express();

dotenv.config();
// const __filename = fileURLToPath(import.meta.url);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

// app.post("/upload", uploadCloud.single("photo"), (req, res, next) => {
//   if (!req.file) {
//     next(new Error("No file uploaded!"));
//     return;
//   }

//   res.json({ secure_url: req.file.path });
// });

app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/promotion", promotionRouter);
app.use("/review", reviewRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
