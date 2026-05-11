import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import scrapeStories from "./scraper/scrapeStories.js";
import Story from "./models/Story.js";
import bcrypt from "bcryptjs";
import User from "./models/User.js";


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

app.post("/api/signup", async (req, res) => {

  try {
    const {
      name,
      email,
      password
    } = req.body;
    const existingUser =
      await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({
        message: "User already exists"
      });

    }
    const hashedPassword =
      await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,

    });
    res.status(201).json({
      message: "Signup successful",
      user,
    });

  } catch(error){
    console.log(error);
    res.status(500).json({
      message: error.message
    });

  }

});

app.post("/api/login", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await User.findOne({
      email
    });
    if(!user){
      return res.status(400).json({
        message: "User not found"
      });

    }
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );
    if(!isMatch){
      return res.status(400).json({
        message: "Invalid password"
      });

    }
    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch(error){
    console.log(error);
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


