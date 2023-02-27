import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import faqRoutes from "./api/routes/faq.js";

import dotenv from "dotenv";
import db from "./api/utils/db.js"

const app = express();
db.on("error", console.error.bind(console, "connection error:"));

dotenv.config();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/faqs", faqRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });