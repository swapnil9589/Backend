import { Router } from "express";
import { registerUser } from "../controllers/userregister.js";
import { Login } from "../controllers/userLogin.js";
import { upload } from "../utils/multer.js";

const userrouters = Router();
userrouters.post(
  "/registerUser",
  registerUser,
  upload.fields(
    {
      name: "Profile_Image",
      Max: 1,
    },
    {
      name: "coverImage",
      max: 1,
    },
    { type: "auto" }
  )
);
userrouters.route("/Login").get(Login);
export { userrouters };
