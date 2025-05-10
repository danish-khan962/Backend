import mongoose from 'mongoose';

//creating a schema
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String, //type of username
            required: true, //field is required or not
            unique: true, //field is unique or nor
            lowercase: true, //into lowercase
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Please enter password.."] //custom validation
        }
    } , 

    {timestamps: true}
);

//creating model & exporting it is necessary
export const User = mongoose.model("User", UserSchema);