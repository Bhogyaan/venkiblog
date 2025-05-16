import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/BLOG');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to mongoDB", error);
  }
};

export default connectDB;
