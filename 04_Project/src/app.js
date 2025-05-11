import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();


// {use} is used when middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//configuring express.js
app.use(express.json({limit: "16kb"}))  //means we are accepting data in json format upto 16kb
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//using cookie-parser
app.use(cookieParser());


export default app