console.clear()
import express from "express"
import cors from "cors"
import { userrouters } from "./Routes/user.routes.js";
import { logfiles } from "./middleware/log.js";
import { homeRoute } from "./Routes/homeroute.js";

const app = express();

app.use(express.json({ "limit": "64kb" }))
app.use(express.urlencoded({ "limit": "64kb" }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use("/", logfiles, userrouters, (req, res, next) => {
    if (req.headers["user-agent"].includes) { console.log((req.headers["user-agent"].substring(0, 11))) }
    next()
})
app.use("/", homeRoute)
export { app }




