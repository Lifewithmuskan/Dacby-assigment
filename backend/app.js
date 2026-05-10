import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import scrapeStories from "./scraper/scrapeStories.js";

dotenv.config();
connectDB();

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API RUNNING!!")
})


const PORT=process.env.PORT|| "5000";
app.listen(PORT,async()=>{
 console.log(`server running on Port ${PORT}`)
 await scrapeStories();
})


