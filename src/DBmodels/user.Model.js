import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import brycpt from "bcrypt"
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
    password: {
        type: String,
        toLowerCase: true,
        min: 8
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
}, { timestamps: true })

userSchema.methods.generateAccessToken = function async() {
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
        fullName: this.fullName
    }, process.env.SECRET_KEY,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRED })
}
userSchema.methods.generateRefreshToken = function async() {
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
    }, process.env.SECRET_KEY,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRED })
}
userSchema.pre("save", async function (password) {
    if (!this.isModified(password)) {
        return
    }
    const hashedPassword = await brycpt.hash(password, this.password)
})

export const User = mongoose.model("user", userSchema)

