import { FastifyReply,FastifyRequest } from "fastify"
const AsyncHandler = (fn: Function)=>async(req:FastifyRequest,reply:FastifyReply)=>{
    try {
        await fn(req,reply)
        
    } catch (error) {
        reply.send(error)
    }
}

export default AsyncHandler