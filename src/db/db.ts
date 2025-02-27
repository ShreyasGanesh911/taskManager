import mongoose from "mongoose";
const uri = process.env.MONGO_URI || ""
const connection =()=> mongoose.connect(uri)
export default connection