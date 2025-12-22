import env from "dotenv";
import {v2 as cloudinary } from "cloudinary";
env.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_SECRETE_KEY,
});


import { app } from "./app.js";
import { port2 } from "./contraint.js";
import { dbConnect } from "./DBconnection/dbConnection.js";
const port = process.env.PORT || port2;
dbConnect(process.env.MONGOOSE_URL).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
