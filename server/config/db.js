import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connectedto mongoDB :)`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
  }
};
export default connectDB;
