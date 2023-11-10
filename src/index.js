import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { userRouter } from "./routes/users.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 3001;

const upload = multer({ dest: "uploads/" });

app.use("/auth", userRouter);
app.use("/api", userRouter);

mongoose
  .connect(
    "mongodb://localhost:27017/" &&
      "mongodb+srv://sofiamoreta:Joselyn2011@cluster0.vmn1ct2.mongodb.net/Cluster0?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
