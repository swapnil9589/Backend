import mongoose from "mongoose";

const dbConnect = async (URL) => {
    try {
        const dbInstance = await mongoose.connect(URL)
        console.log(dbInstance.connection.host);

    } catch (err) {
        console.log("check this is Mongo DB error=====>",err);
        mongoose.process.exit(1)
    }
}
export { dbConnect }