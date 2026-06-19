// import path from 'path';
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//Confifure env
dotenv.config();

//Database Config
connectDB();

//Rest Object
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// //Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
// app.use(express.static(path.join(__dirname,'./client/build')));

//Rest Api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce App backend live</h1>");
});

// app.use('*',function(req,res){
//     res.sendFile(path.join(__dirname,'./client/build/index.html'));
// })
//PORT
const PORT = process.env.PORT || 8050;

//Run Listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} Mode on Port ${PORT}`.bgCyan
      .white
  );
});
