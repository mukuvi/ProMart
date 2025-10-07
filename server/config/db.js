import mongoose, { modelNames } from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
  }
};
