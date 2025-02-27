import { FastifyReply, FastifyRequest } from "fastify";
import AsyncHandler from "../utils/asynchandler.js";
import Task from "../models/task.js";
interface CustomRequest extends FastifyRequest{
    user:{
        name:string,email:string,_id:string
    }
}
const success = true
export const GetAllTasks = AsyncHandler(async(req:CustomRequest,reply:FastifyReply)=>{
    const id = req.user._id
    const tasks = await Task.find({user:id})
    reply.status(200).send({
        success,
        tasks,
        message:"Tasks fetched!"
    })
})
export const GetSingleTask= AsyncHandler(async(req:FastifyRequest<{ Params: { id: string } }>,reply:FastifyReply)=>{
    const {id} = req.params
    const task = await Task.findById({_id:id})
    reply.status(200).send({
        success,
        task,
        message:"Task"
    })
})
export const DeleteTask = AsyncHandler(async(req:FastifyRequest,reply:FastifyReply)=>{
    reply.status(200).send({
        message:"Test"
    })
})
export const UpdateTask = AsyncHandler(async(req:FastifyRequest,reply:FastifyReply)=>{
    reply.status(200).send({
        message:"Test"
    })
})
export const AddTask = AsyncHandler(async(req:FastifyRequest,reply:FastifyReply)=>{
    reply.status(200).send({
        message:"Test"
    })
})