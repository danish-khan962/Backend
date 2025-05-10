import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,// telling mongoose that a reference is coming
            ref: "User" //coming from {user.models.js}
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo" //coming from {sub_todo.models.js}
            },
        ]
    },

    { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);