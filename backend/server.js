/** @format */

import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import connectMongodb from "./db/connectMongodb.js";
const app = express();
dotenv.config();

console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 8000;

app.use(express.json());// to pass req.body

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(PORT, () => {
  console.log("Server is running on : ", + PORT);
  connectMongodb();
});
