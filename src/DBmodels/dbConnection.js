import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        toLowerCase: true
    },
    fullName: {
        type: String,
        toLowerCase: true
    },
    email: {
        type: String,
        toLowerCase: true,
        unique: true
    },
    mobile_Number: {
        type: Number,
        unique: true,
        required: true
    }

}, { timestamps })


export const User = mongoose.models("user", userSchema)