const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB Connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
// jamesboyle171
// xMJPRlhjwatvAaw4

//mongodb+srv://jamesboyle171:xMJPRlhjwatvAaw4@cluster0.jaju5.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
