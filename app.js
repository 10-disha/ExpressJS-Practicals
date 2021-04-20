const express = require('express');
const app = express();


// get the data from the server
app.get("/", (req, res) => {
    res.send("hello from the express");
});

app.get("/about", (req, res) => {
    res.send("hello from the about page");
})

app.listen(80, () => {
    console.log("listening to the port 80")
});