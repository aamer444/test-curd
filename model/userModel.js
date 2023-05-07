import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true},
    email:{type:String},
})

const userModel = mongoose.model('userData',schema)

export default userModel