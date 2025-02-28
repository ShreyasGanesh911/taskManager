import { FastifyInstance } from "fastify";
import { GetAllTasks,AddTask,DeleteTask,GetSingleTask,UpdateTask } from "../controller/task.controller";
import auth from "../middleware/auth.js";
const taskSchema = {
    body : {
        type:"object",
        required:["title","description"],
        properties:{
            description:{type:"string"},
            title:{type:"string"},
        }
    }
}
 async function taskRoute(fastify:FastifyInstance,options:any){
    fastify.get("/all",{preHandler:auth},GetAllTasks) // all task
    fastify.post("/add",{schema:taskSchema,preHandler:auth},AddTask) // add task
    fastify.delete("/:id",{preHandler:auth},DeleteTask) // delete task
    fastify.put("/:id",{preHandler:auth},UpdateTask) // update task
    fastify.get("/:id",{preHandler:auth},GetSingleTask) // Single task
    
    
}
export default taskRoute