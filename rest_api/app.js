const express = require("express");
const fs = require("fs");
const app = express();
const cors=require('cors');
const filePathlevelhtml1 = "questionlevelhtml1.json";
const filePathlevelhtml2 = "questionlevelhtml2.json";
const filePathlevelhtml3 = "questionlevelhtml3.json";
app.use(cors())
app.get("/rest_api/questionlevelhtml1", function(req, res){
    const content = fs.readFileSync(filePathlevelhtml1,"utf8");
    const question = JSON.parse(content);
    res.send(question);
});
app.get("/rest_api/questionlevelhtml2", function(req, res){
    const content = fs.readFileSync(filePathlevelhtml2,"utf8");
    const question = JSON.parse(content);
    res.send(question);
});
app.get("/rest_api/questionlevelhtml3", function(req, res){
    const content = fs.readFileSync(filePathlevelhtml3,"utf8");
    const question = JSON.parse(content);
    res.send(question);
});
app.listen(8000, function(){
    console.log("The server is waiting for a connection...");
});


