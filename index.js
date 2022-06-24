import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dataRouter from "./routes/dataRoutes";
dotenv.config();

const app = express();

// Middlewares
app.use("/api/v1/data", dataRouter);

// DB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
