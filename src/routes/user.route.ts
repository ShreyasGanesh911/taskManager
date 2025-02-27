import { FastifyInstance } from "fastify";
import { UserLogin,UserRegister } from "../controller/user.controller";

async function userRoute(fastify:FastifyInstance,options:any){
    fastify.post('/login',UserLogin)
    fastify.post('/register',UserRegister)
    
}

export default userRoute