const fs = require("fs");

const filePathlevelhtml1 = "questionlevelhtml1.json";
const filePathlevelhtml2 = "questionlevelhtml2.json";
const filePathlevelhtml3 = "questionlevelhtml3.json";
class AnswerConntrollers {
  


    static getAnswerHtml1 = async (_,res) => {
       const content = fs.readFileSync(filePathlevelhtml1,"utf8");
       const question = JSON.parse(content);
       res.send(question);
    }
    static getAnswerHtml2 = async (_,res) => {
        const content = fs.readFileSync(filePathlevelhtml2,"utf8");
        const question = JSON.parse(content);
        res.send(question);
     }
     static getAnswerHtml3 = async (_,res) => {
        const content = fs.readFileSync(filePathlevelhtml3,"utf8");
        const question = JSON.parse(content);
        res.send(question);
     }
     static putAnswerHtml1 = async (req,res) => {
        console.log(req)
        if(!req.body) return res.sendStatus(400);
            // const bodyData = req.body.formdata;
            const content = fs.readFileSync(filePathlevelhtml1,"utf8");
            const question = JSON.parse(content);
            const isCorrectArray = [];
            let quantityTrue = 0;
            let quantityFalse = 0;
            for(let i=0; i<question.length; i++){
                const findAnswer = question[i].answers.findIndex(answers => answers.isCorrect===true)   
                    if(req.body.formdata[i]==findAnswer){
                        isCorrectArray.push({id:i,isCorrect:true,correct:findAnswer,shipped:req.body.formdata[i]})
                        quantityTrue += 1
                    }else{
                        isCorrectArray.push({id:i,isCorrect:false,correct:findAnswer,shipped:req.body.formdata[i]})
                        quantityFalse +=1
                    }        
            }
            res.send(isCorrectArray);
            
     }
}
module.exports = AnswerConntrollers