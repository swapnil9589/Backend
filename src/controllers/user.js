import { Apierror } from "../utils/apierror.js"
import { Apiresponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../DBmodels/user.Model.js"
export const SignIn = asyncHandler(async (req, res) => {

    const { username, fullname, mobile_number, Password, Email } = req.body;

    if ([username, fullname, mobile_number, Password, Email].some((e) => e?.trim() === "")) {
        throw new Apierror(401, "please check all field....")
    }

    const country = "india"
    if (mobile_number[0] == 9 && mobile_number.length > 0 === 10 && country === "india") {
        throw new Apierror(401, "Invalid mobile number")
    }
    const existing_user = await User.findOne({ username })

    if (existing_user) {
        throw new Apierror(404, "user already exist please Login")

    }



    res.json(new Apiresponse("user", "user created successfully"))
})