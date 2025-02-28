// custom.d.ts
import { FastifyRequest } from 'fastify';
type UserPayload = {
    _id:string
    name: string
    email: string

}
declare module 'fastify' {
  interface FastifyRequest {
    user?: UserPayload;  // Optional user property, adjust based on your needs
  }
}
