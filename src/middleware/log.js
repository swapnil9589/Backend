import fs from "fs"
export const logfiles = (req, res, next) => {
    console.log(req.headers["user-agent"]);
    const dateandtime = (req.headers["user-agent"] + " request time==> " + new Date().toLocaleDateString() + " " + new Date().toTimeString()).toString()
    fs.appendFileSync("./src/text.txt", dateandtime + "\n")
    next()
}