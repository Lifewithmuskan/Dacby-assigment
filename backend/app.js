import express from "express";
import cors from "cors";

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API RUNNING!!")
})


const PORT="3000"
app.listen(PORT,()=>{
 console.log(`server running on Port ${PORT}`)
})


