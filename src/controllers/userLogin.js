import { User } from "../DBmodels/user.Model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/apierror.js";
import { Apiresponse } from "../utils/apiResponse.js";

export const Login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("body:");

  if ([username, password, email].some((e) => e.trim() == "")) {
    throw new Apierror(
      401,
      "please check login details username or password Empty"
    );
  }
  const user = await User.findOne({
    $or: [{ username }, { email }],
  }).select([
    "-mobile_number",
    "-createdAt",
    "-updatedAt",
    "-fullname",
    "-_id",
  ]);

  console.log("DATA:",user);

  const decodedpassword = async (password) => {
    const correct_password = await user.isPasswordCorrect(password);
    if (!correct_password) {
      throw new Apierror(404, "password invalid please check password");
    }
    if (correct_password) user.password = password;
    return correct_password;
  };
  // decodedpassword(password);

  if (!user) {
    throw new Apierror(409, "please SignUp you are new user");
  }

  return res.status(200).json(new Apiresponse(200, user, "login successfully"));
});
