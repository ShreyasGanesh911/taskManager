import { FastifyReply, FastifyRequest } from "fastify";
import AsyncHandler from "../utils/asynchandler.js";
import Task from "../models/task.js";
interface CustomRequest<T = any> extends FastifyRequest{
    user:{
        name:string,email:string,_id:string
    };
    body:T

}
const set = ["low","medium","high"]
interface CustomRequestWithQuery<T = any> extends FastifyRequest{
    user:{
        name:string,email:string,_id:string
    };
    query:T

}
const success = true
export const GetAllTasks = AsyncHandler(async(req:CustomRequestWithQuery<{priority:string}>,reply:FastifyReply)=>{
    const {priority} = req.query
    const id = req.user._id
    let tasks
    if(priority && set.includes(priority))
        tasks = await Task.find({$and:[{user:id },{priority}]})
    else  tasks = await Task.find({user:id})
     
    reply.status(200).send({
        success,
        tasks,
        message:"Tasks fetched!"
    })
})
export const GetSingleTask= AsyncHandler(async(req:FastifyRequest<{ Params: { id: string } }>,reply:FastifyReply)=>{
    const {id} = req.params
    const task = await Task.findById({_id:id})
    if(!task)
        return reply.status(404).send({message:"Task not found"})
    reply.status(200).send({
        success,
        task,
        message:"Task"
    })
})
export const DeleteTask = AsyncHandler(async(req:FastifyRequest<{Params:{id:string}}>,reply:FastifyReply)=>{
    const {id} = req.params
    const task = await Task.findByIdAndDelete({_id:id})
    if(!task)
        return reply.status(404).send({message:"Task not found"})
    reply.status(200).send({
        message:`Task: ${task.title} is deleted `
    })
})
export const UpdateTask = AsyncHandler(async(req:FastifyRequest<{Params:{id:string},Body:{title:string,description:string,priority:string}}>,reply:FastifyReply)=>{
    const {id} = req.params
    const {title,description,priority} = req.body
    const task = await Task.findByIdAndUpdate({_id:id},{title,description,priority},{new:true})
    if(!task)
        return reply.status(404).send({message:"Task not found"})
    reply.status(200).send({
        message:`Task updated`,
        title:task.title
        
    })
})
export const AddTask = AsyncHandler(async(req:CustomRequest<{title:string,description:string,priority:string}>,reply:FastifyReply)=>{
    const {description,priority,title} = req.body
    await Task.create({description,priority,title,user:req.user._id})
    reply.status(200).send({
        
        message:"Task created"
    })
}) 