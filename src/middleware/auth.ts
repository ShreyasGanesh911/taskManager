import { FastifyReply, FastifyRequest } from "fastify";
import jwt,{ JsonWebTokenError } from "jsonwebtoken";
import User from "../models/User.js";
type UserPayload = {
    _id:string
    name: string
    email: string

}

const auth = async(req:FastifyRequest ,reply:FastifyReply)=>{
    try {
        const {auth} = req.cookies
        if(!auth){
            return reply.code(401).send({error:"Unauthorized"})
        }
        await jwt.verify(auth,"SOME KEY",async(err:JsonWebTokenError | null,user:any)=>{
            if(err){
                reply.clearCookie('auth')
                return reply.code(401).send({error:"Unauthorized"})
            }
            const value = user as UserPayload
            const check = await User.findById(value._id).select("-password") as UserPayload
            if(!check){
                reply.clearCookie('auth')
                return reply.code(401).send({error:"Unauthorized"})
                }
            req.user = check
           
        })

        
    } catch (error) {
        console.log(error)
    }

}
export default auth
/*
    import { FastifyRequest, FastifyReply } from 'fastify';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import User from '../models/User';
type UserPayload = {
    _id:string
    name: string
    email: string

}

const auth = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { auth } = req.cookies;
    if (!auth) {
      return reply.code(401).send({ error: 'Unauthorized' });
    }

    const user = await new Promise<UserPayload | null>((resolve, reject) => {
      jwt.verify(auth, 'SOME KEY', async (err: JsonWebTokenError | null, decoded: any) => {
        if (err) {
          reply.clearCookie('auth');
          return reject('Unauthorized');
        }
        // Resolve with the decoded user
        resolve(decoded);
      });
    });

    if (!user) {
      return reply.code(401).send({ error: 'Unauthorized' });
    }

    // Check the user in the database
    const foundUser = await User.findById(user._id) as UserPayload;
    if (!foundUser) {
      reply.clearCookie('auth');
      return reply.code(401).send({ error: 'Unauthorized' });
    }

    // Attach the user to the request object
    req.user = foundUser;
    // console.log('Authenticated user:', req.user); // Check if req.user is set correctly

    // Continue to the next handler
  } catch (error) {
    console.log(error);
    reply.code(401).send({ error: 'Unauthorized' });
  }
};

export default auth;

*/