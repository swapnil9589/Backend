import { Apierror } from "../utils/apierror.js"
import { Apiresponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../DBmodels/user.Model.js"
import { isValid_mobile_number, isValid_username } from "../utils/digitchecker.js"
export const registerUser = asyncHandler(async (req, res) => {

    const { username, mobile_number, fullname, password, email } = req.body;

    // checking req body input is empty or not
    if ([, fullname, password, email].some((e) => e?.trim() === "")) {
        throw new Apierror(406, "please check all field....")
    }

    // checking  including digits or not if not digits throw error
    if (!isValid_username(username)) {
        throw new Apierror(406, "username is not secure please input secure username and add some digits in last")
    }

    // checking password before saving
    if (password.length < 8 || password.length > 20 && password.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
        throw new Apierror(406, "Please fill a strong password (between 8 and 20 characters).");
    }
    //checking email is supprted or not
    if (!email.includes("@gmail.com", "@yahoo.com")) {
        throw new Apierror(406, "Supported only Gmail and Yahoo mail  check your email address...")
    }
    //checking mobile_number length
    if (!isValid_mobile_number(mobile_number)) {
        throw new Apierror(404, "mobile number is not correct")
    }

    // //finding user in database and output will be without selection arrey
    const existing_user = await User.findOne({
        $or: [{ username }, { email }]
    })
    console.log(existing_user, "check here");

    // checking user is already exist in database or not 
    if (existing_user) {
        throw new Apierror(400, "user already exist please Login")
    }

    //storing registered user in database
    const createduser = await User.create({
        username,
        fullname: fullname || "",
        email,
        mobile_number,
        password
    })

    const data = [createduser.username, createduser.fullname]
    res.status(201)
        .json(new Apiresponse(201, data, "user created successfully"))
})

