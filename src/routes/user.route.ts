import { FastifyInstance } from "fastify";
import { UserLogin,UserRegister } from "../controller/user.controller";
const userRegisterSchema = {
    body:{
        type:"object",
        required:["email","name","password"],
        properties:{
            email:{type:"string"},
            name:{type:"string"},
            password:{type:"string"},
        }
    }
}
const userLoginSchema = {
    body:{
        type:"object",
        required:["email","password"],
        properties:{
            email:{type:"string"},
            password:{type:"string"},
        }
    }
}
async function userRoute(fastify:FastifyInstance,options:any){
    fastify.post('/login',{schema:userLoginSchema},UserLogin)
    fastify.post('/register',{schema:userRegisterSchema},UserRegister)
    
}

export default userRoute