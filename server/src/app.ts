import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import questionRoutes from "./api/routes/question.js";

import dotenv from "dotenv";


const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/questions", questionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });