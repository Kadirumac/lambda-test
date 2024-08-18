import express, { json } from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./routes.js";

const app = express();

app.use(cors());
// Middleware to parse JSON bodies
app.use(json());
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const __dirname = path.resolve();

app.use("/api", Routes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

export const handler = serverless(app);
