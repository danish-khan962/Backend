import express, { request, response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/user.routes.js'

const app = express();

dotenv.config();

app.use(cors({
    origin: 'https://crud-backend-jet-ten.vercel.app', // replace with your Vercel domain
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}));

//body-parsing
app.use(express.json());

const port = process.env.PORT || 3000;

//connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on Port: ${port}`);
        })
        console.log("Connection to MongoDB is successfull.... ✅");
    })
    .catch((error) => {
        console.log(error.message);
    })

app.use(userRouter);