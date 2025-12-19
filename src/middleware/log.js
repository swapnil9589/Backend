import { error } from "console";
import fs from "fs"

export const logfiles = (req, res, next) => {
    let id =0;
    const dateandtime = (req.headers["user-agent"] +
        " request time==> " + new Date().toLocaleDateString() +
        " " + new Date().toTimeString()).toString() + "\n"
    fs.appendFile("./src/text.txt", (id) + " " + dateandtime, "utf-8", () => {
        console.log("done");
        console.log(id);
    })
    id++
    next()
}