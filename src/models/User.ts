import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name not provided"]
    },
    email:{
        type:String,
        trim:true,
        unique:[true,"Email must be unique"]
    },
    password:{
        type:String,
        required:[true,"Name not provided"]
    },
})
const User = mongoose.model("User",userSchema)
export default User