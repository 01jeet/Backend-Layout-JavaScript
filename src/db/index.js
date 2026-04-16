import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        // console.debug(`MongoDB connection instance:${connectionInstance}`)
        console.log(`MongoDB connected successfully to ${DB_NAME} with Host: ${connectionInstance.connection.host} and Port: ${connectionInstance.connection.port}`);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
        process.exit(1);
    }
}

export default connectDB;