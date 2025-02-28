import Fastify from "fastify";
import "dotenv/config"
import cookie from "fastify-cookie";
import connection from "./db/db.js";
import taskRoute from "./routes/task.route.js";
import userRoute from "./routes/user.route.js";
const port = process.env.PORT ? parseInt(process.env.PORT,10) : 8000
const fastify = Fastify({
    logger:true
})
fastify.register(cookie)
fastify.register(taskRoute,{prefix:"/api/v1/task"})
fastify.register(userRoute,{prefix:"/api/v1/user"})

fastify.listen({port},(err)=>{
    connection().then(()=>console.log("Connected to db")).catch(e=>console.log("Error connecting to db",e))
    if(err){
        console.log(err)
        process.exit(1)
    }
    console.log("Listening to port",port)
})