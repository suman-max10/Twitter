/** @format */

import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
app.use("/api/auth", router);
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(PORT, () => {
  console.log("Server is running on :", + PORT);
});
