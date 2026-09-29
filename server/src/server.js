require("dotenv").config();  //loads environment variables from .env file
const connectDB=require("./config/db");

const app=require("./app");  //imports the app instance from app.js
const PORT=process.env.PORT || 5000;  //sets the port to the value in environment variable PORT or defaults to 5000

const startServer=async()=>{
    await connectDB();  //connects to the MongoDB database

app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`
));  //starts the server on the specified port


};

startServer();  //calls the function to start the server
