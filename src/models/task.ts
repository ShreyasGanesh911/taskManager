import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title must be provided"]
    },
    description:{
        type:String,
        required:[true,"Description must be provided"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    date:{
        type: Date,
        default:Date.now()
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"low"
    }
},
{
    timestamps:true
})

const Task = mongoose.model("Task",taskSchema)
export default Task