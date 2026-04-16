import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });


connectDB()


/*
;(async ()   =>  {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    }catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()

*/