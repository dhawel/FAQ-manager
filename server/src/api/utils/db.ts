import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI, MONGO_DB_NAME } = process.env;

mongoose.connect(MONGO_URI!)
  .then(() => {
    console.log('MongoDB connection established successfully');
  })
  .catch((e) => {
    console.log('MongoDB connection error:', e);
  });

const db = mongoose.connection;

export default db;
