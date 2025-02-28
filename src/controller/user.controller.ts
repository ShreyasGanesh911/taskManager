import { FastifyReply, FastifyRequest } from "fastify";
import AsyncHandler from "../utils/asynchandler.js";
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const UserLogin = AsyncHandler(async(req:FastifyRequest<{Body:{email:string,password:string}}>,reply:FastifyReply)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return reply.code(401).send({message:"Invalid email or password"})
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch)
        return reply.code(401).send({message:"Invalid email or password"})
    const cred = await User.findOne({email}).select("-password")
    if(cred){
    const token = await jwt.sign(cred.toObject(),"SOME KEY",{expiresIn:"1d"})
    reply.setCookie("auth",token,{path:'/'}).status(200).send({ 
        message:"Logged in successfully",
        cred
    })
    }
})
export const UserRegister = AsyncHandler(async(req:FastifyRequest<{Body:{email:string,password:string,name:string}}>,reply:FastifyReply)=>{
    const {email,password,name} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    await User.create({email,password:hashedPassword,name});

    reply.status(200).send({
        message:"User created!"
    })
})
