/** @format */

import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes.js";
import connectMongodb from "./db/connectMongodb.js";
const app = express();
dotenv.config();

console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 8000;
app.use("/api/auth", router);
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(PORT, () => {
  console.log("Server is running on :", + PORT);
  connectMongodb();
});
