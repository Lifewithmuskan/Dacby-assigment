import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import scrapeStories from "./scraper/scrapeStories.js";
import Story from "./models/Story.js";

dotenv.config();
connectDB();

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API RUNNING!!")
})

app.get("/api/stories", async (req, res) => {
  try {
    const stories = await Story.find().limit(10);

    res.json(stories);
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/allstories", async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

const PORT=process.env.PORT|| "5000";
app.listen(PORT,async()=>{
 console.log(`server running on Port ${PORT}`)
 await scrapeStories();
})


