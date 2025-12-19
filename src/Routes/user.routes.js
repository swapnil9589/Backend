import { Router } from "express"
import { handleGetuser, handlepatchuser, handlepostuser } from "../controllers/user.js"

const userrouters = Router()

userrouters.route("/api/users").get(handleGetuser).post(handlepostuser)
userrouters.route("/:id").patch(handlepatchuser)

export { userrouters }