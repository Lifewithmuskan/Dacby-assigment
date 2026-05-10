import mongoose from "mongoose";

const StorySchema=new mongoose.Schema({
    title:String,
    url:String,
    points:String,
    author:String,
    postedAt:String,
})

const story=mongoose.model("Story",StorySchema);
export default story;
