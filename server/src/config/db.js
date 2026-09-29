const mongoose=require("mongoose");  //imports the mongoose library for MongoDB interactions
const dotenv=require("dotenv");  //imports the dotenv library for loading environment variables

const connectDB=async()=>{
    try{
        dotenv.config();
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");  //logs a success message if the connection is successful
    } catch(err){
        console.error("MongoDB connection failed:",err.message);  //logs an error message if the connection fails
        process.exit(1);  //exits the process with a failure code
    }
};

module.exports=connectDB;  //exports the connectDB function for use in other files

