const express = require("express");
const fs = require("fs");
const app = express();
// const jsonParser = express.json();
const cors=require('cors');
const router = require("./routes/router")
const filePathlevelhtml1 = "questionlevelhtml1.json";
const filePathlevelhtml2 = "questionlevelhtml2.json";
const filePathlevelhtml3 = "questionlevelhtml3.json";
app.use(cors())
// app.get("/rest_api/questionlevelhtml1", function(req, res){
//     const content = fs.readFileSync(filePathlevelhtml1,"utf8");
//     const question = JSON.parse(content);
//     res.send(question);
// });
// app.get("/rest_api/questionlevelhtml2", function(req, res){
//     const content = fs.readFileSync(filePathlevelhtml2,"utf8");
//     const question = JSON.parse(content);
//     res.send(question);
// });
// app.get("/rest_api/questionlevelhtml3", function(req, res){
//     const content = fs.readFileSync(filePathlevelhtml3,"utf8");
//     const question = JSON.parse(content);
//     res.send(question);
// });
// app.put("/rest_api/questionlevelhtml1", jsonParser, function(req, res){
//     if(!req.body) return res.sendStatus(400);
//     const bodyData = req.body.formdata;
//     const content = fs.readFileSync(filePathlevelhtml1,"utf8");
//     const question = JSON.parse(content);
//     const isCorrectArray = [];
//     let quantityTrue = 0;
//     let quantityFalse = 0;
//     for(let i=0; i<question.length; i++){
//         const findAnswer = question[i].answers.findIndex(answers => answers.isCorrect===true)   
//             if(req.body.formdata[i]==findAnswer){
//                 isCorrectArray.push({id:i,isCorrect:true,correct:findAnswer})
//                 quantityTrue += 1
//             }else{
//                 isCorrectArray.push({id:i,isCorrect:false,correct:findAnswer})
//                 quantityFalse +=1
//             }        
//     }
//     res.send(isCorrectArray);
    
    
// });
// app.listen(8000, function(){
//     console.log("The server is waiting for a connection...");
// });

app.use("/api",router)




app.listen(8000)
