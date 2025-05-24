import express, { request, response } from 'express';
import mongoose from 'mongoose';
import { User } from '../models/user.models.js';

export const userRouter = express.Router();

//create user post
userRouter.post('/', async (request, response) => {
    const { name, email, age } = request.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });

        response.status(201).json(userAdded);
    } catch (error) {
        response.status(400).json({ error: error.message })
    }
});

//get all users data
userRouter.get('/', async (request, response) => {
    try {
        const getData = await User.find();

        response.status(201).json(getData);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
});

//get single user
userRouter.get('/:id', async (request, response) => {

    const {id}  = request.params;

    try {
        const getSingleUser = await User.findById(id);

        response.status(201).json(getSingleUser);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
});


//delete user
userRouter.delete('/:id', async (request, response) => {
    const {id} = request.params;

    try{
        const deleteUser = await User.findByIdAndDelete(id);
        response.status(201).json(deleteUser);
    }catch(error){
        response.status(500).json({error:  error.message});
    }
});

//update user details
userRouter.patch('/:id', async (request, response) => {
    const {id} = request.params;
    const {name,email,age} = request.body;

    try{
        const updateUser = await User.findByIdAndUpdate(id, request.body, {
            new: true,
        })
        response.status(201).json(updateUser);
    }catch(error){
        response.status(500).json({error:  error.message});
    }
})