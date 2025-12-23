import { User } from "../DBmodels/user.Model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/apierror.js";
import { Apiresponse } from "../utils/apiResponse.js";

export const Login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  if (!password || (!username && !email)) {
    throw new Apierror(406, "please check password username/email ");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new Apierror(404, "User not found please SignUp");
  }
  //comparing user given password with hashing password in database

  const verified_password = await user.isPasswordCorrect(password);

  //checking user password correct or not
  if (!verified_password) {
    throw new Apierror(404, "Invalid password");
  }

  const data = await user
    .findById(user._id)
    .select([
      "password",
      "-mobile_number",
      "-createdAt",
      "-updatedAt",
      "-fullname",
      "-_id",
    ]);

  return res.status(200).json(new Apiresponse(200, data, "login successfully"));
});
