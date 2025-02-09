import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"


dotenv.config();
const app=express();
connectDB();

const port=process.env.PORT || 8080;
app.listen(port,()=>{
  console.log(`the web is connected to the port ${port}`)
});