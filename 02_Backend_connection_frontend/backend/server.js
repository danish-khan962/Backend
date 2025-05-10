import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send("<h1>Server is ready.... | Search /quotes in url</h1>");
// })

//get the list of jokes
app.get('/api/quotes', (req, res) => {
    const quotes = [ 
        {
            id: 1,
            content: "The mind is a garden—what you plant is what will grow.",
            author: "Lina Ainsworth",
        }, 
        {
            id: 2,
            content: "Innovation begins where certainty ends.",
            author: "Elon Musk",
        }, 
        {
            id: 3,
            content: "Loneliness is not the absence of people, but the absence of connection.",
            author: "Haruki Murakami",
        }, 
        {
            id: 4,
            content: "You don’t find time, you carve it—like marble into purpose",
            author: "James Clear",
        }, 
        {
            id: 5,
            content: "A page turned too quickly is a lesson missed.",
            author: "Aarav Mehta",
        }, 
    ]

    res.send(quotes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is ready at localhost port number ${port}`);
})