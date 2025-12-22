import { v2 } from "cloudinary";

export const cloudinary = async function (localpath) {
  try {
    const cloudinary = await v2.uploader.upload(localpath, { resource_type: "auto" });
    console.log(cloudinary);
    const response = cloudinary.url;
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
