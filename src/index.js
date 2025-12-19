import env from "dotenv"
env.config({ path: "./.env" })
import { app } from "./app.js";
import {port2} from "./contraint.js"
import {dbConnect} from "./DBconnection/dbConnection.js"
const port =process.env.PORT||port2
dbConnect(process.env.MONGOOSE_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
        
    })
})

