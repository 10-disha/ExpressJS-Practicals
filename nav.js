const express = require('express');
const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.write("<h1>welcome to home</h1>");
    res.write("<h1>welcome to home123</h1>");
    res.send();
});


app.get("/about", (req, res) => {
    res.status(200).send("welcome to home about page");
});


app.get("/contact", (req, res) => {
    res.send("welcome to home contact page");
});

app.get("/temp", (req, res) => {
    res.json([{
            id: 1,
            name: "vinod1",
        },

        {
            id: 2,
            name: "vinod2 ",
        },
        {
            id: 3,
            name: "vinod",
        },

        {
            id: 4,
            name: "vinod",
        },

    ]);
});


//listening to the port
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});