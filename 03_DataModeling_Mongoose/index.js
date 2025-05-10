import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready...");
})

const port = 3000;

app.listen(port, ( )=> {
    console.log(`Server is running on port number ${port}`);
})