import { Apiresponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const getrequestHomepage = asyncHandler(async (req, res) => {
    const name = "swapnil"
    res.status(200)
    .json(new Apiresponse(200,name, "success"))
})