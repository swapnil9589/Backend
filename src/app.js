console.clear()
import express from "express"
import cors from "cors"
import { userrouters } from "./Routes/user.routes.js";
import { logfiles } from "./middleware/log.js";

const app = express();

app.use(express.json({ "limit": "64kb" }))
app.use(express.urlencoded({ "limit": "64kb" }))
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))
app.use("/", logfiles, userrouters)

export { app }




