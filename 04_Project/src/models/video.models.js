import mongoose from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        duration: {
            type: Number,
        },
        views: {
            type: Number,
            required: true,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        }
    },
    
    {timestamps: true}
);


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);