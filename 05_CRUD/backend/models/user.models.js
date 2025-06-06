import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    
    {timestamps: true}
);

export const User = mongoose.model("User", userSchema);