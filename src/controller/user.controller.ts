import { FastifyReply, FastifyRequest } from "fastify";
import AsyncHandler from "../utils/asynchandler.js";

export const UserLogin = AsyncHandler(async(req:FastifyRequest,reply:FastifyReply)=>[
    reply.status(200).send({
        message:"Working fine"
    })
])
export const UserRegister = AsyncHandler(async(req:FastifyRequest,reply:FastifyReply)=>[
    reply.status(200).send({
        message:"Working fine"
    })
])
