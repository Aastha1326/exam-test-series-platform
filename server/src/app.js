const express=require("express");  //its used for creating the server and handling requests and responses
const app=express();  
const cors=require("cors");  //used for enabling cross-origin resource sharing
const helmet=require("helmet");    //used for securing the app by setting various HTTP headers

app.use(cors());  //enables CORS for all routes
app.use(helmet());  //adds security headers to the responses

app.use(express.json());  //parses incoming JSON requests and puts the parsed data in req.body

app.get("/api/health",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Exam Test Series Api is running"
    })
});

module.exports=app;  //exports the app instance for use in other files