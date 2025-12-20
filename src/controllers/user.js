import { Apierror } from "../utils/apierror.js"
import { Apiresponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../DBmodels/user.Model.js"
import { checkerDigit } from "../utils/digitchecker.js"
export const SignIn = asyncHandler(async (req, res) => {

    const { username, mobile_number, fullname, Password, Email } = req.body;

    //checking req body input
    if ([username, fullname, Password, Email].some((e) => e?.trim() === "")) {
        throw new Apierror(401, "please check all field....")
    }

    // checking Username secure or not
    if (checkerDigit(username)[1] == false) {
        throw new Apierror((409, checkerDigit[1]))
    }
    if (!Email.includes("@gmail.com", "@yahoo.com")) {
        throw new Apierror(401, "Supported only Gmail and Yahoo mail please check your Email address...")
    }
    //checking mobile_Number length
    let num = Number(mobile_number[0])
    if (!(num >= 6 && num <= 9 && mobile_number.length === 10)) {
        throw new Apierror(500, "mobile number is greater than 10 digit or less than 10 or mobile number wrong")
    }
    const existing_user = await User.findOne({ username })
    //checking user is already exist in database or not 
    if (existing_user) {
        throw new Apierror(404, "user already exist please Login")
    }
    //checking password before saving
    if (Password.length < 8 || Password.length > 20 && Password.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
        throw new Apierror(401, "Please fill a strong password (between 8 and 20 characters).");
    }
    const createduser = await User.create({
        userName: username,
        fullName: fullname,
        email: Email,
        mobile_Number: mobile_number,
        password: Password
    })

    const data = [createduser.userName, createduser.fullName]
    res.json(new Apiresponse("user", data, "user created successfully"))
})

