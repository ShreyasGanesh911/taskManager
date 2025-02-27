import { FastifyInstance } from "fastify";
import { GetAllTasks,AddTask,DeleteTask,GetSingleTask,UpdateTask } from "../controller/task.controller";
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
    fastify.get("/all",GetAllTasks) // all task
    fastify.post("/add",{schema:taskSchema},AddTask) // add task
    fastify.delete("/:id",DeleteTask) // delete task
    fastify.put("/:id",UpdateTask) // update task
    fastify.get("/:id",GetSingleTask) // Single task
    
}
export default taskRoute