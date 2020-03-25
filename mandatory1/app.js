console.log(1+1); 

const express = require ("express");
const app = express();
const request = require("request");


app.use(express.static('public'));

app.get("/", (req, res)=>{
    return res.sendFile(__dirname + "/public/index.html");
});

app.get("/theory", (req, res) => {
    return res.sendFile(__dirname + "/public/theory.html");
});

app.get("/code", (req, res) => {
    return res.sendFile(__dirname + "/public/code.html");
});

app.get("/code_js", (req, res)=>{
    return res.sendFile(__dirname + "/public/code_js.html");
});

app.get("/code_api", (req, res)=>{
    return res.sendFile(__dirname + "/public/code_api.html");
});

app.get("/code_jquery", (req, res)=>{
    return res.sendFile(__dirname + "/public/code_jquery.html");
});

// app.get("/code_crud", (req, res)=>{
//     return res.sendFile(__dirname + "/public/code_crud.html");
// });

app.get("/commands", (req, res) => {
    return res.sendFile(__dirname + "/public/commands.html");
});

app.get("/tools", (req, res) => {
    return res.sendFile(__dirname + "/public/tools.html");
});



const server = app.listen(3000, error => {
    if (error){
        console.log("Error running the server");
    }
    console.log("Server is running on port " + server.address().port);
});
