import express from "express";
import EmpRoutes from "./routes/empRoutes.js";
import connectDB from "./db/connectDB.js";
const app=express()

connectDB()

app.use("/",EmpRoutes)



app.listen(8000,()=>{
    console.log("server started at 8000")
    console.log("server started at 8000")
})