import { Router } from "express"
import { SignIn } from "../controllers/user.js"

const userrouters = Router()
userrouters.route("/SignUp").post(SignIn)
export { userrouters }