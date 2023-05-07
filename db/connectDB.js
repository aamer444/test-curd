import mongoose from "mongoose";


export const connectDB = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/newSchool").then(() => {
        console.log("successfully database connected")
    }).catch((err) => {
        console.log("error in dataBase")
    })
}


export default connectDB