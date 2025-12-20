import fs from "fs"

let id = 1;
export const logfiles = (req, res, next) => {
    const dateandtime = id +"  Time is-->" + new Date().toString()+"\n";
    fs.appendFile("./src/text.txt", dateandtime, "utf-8", () => {
        console.log(dateandtime);
    })

    id++
    next()
}
