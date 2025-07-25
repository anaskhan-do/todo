
   const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mydb");
        console.log(" MongoDB connected successfully");
    } catch (err) {
        console.error(" MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
