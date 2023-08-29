const express = require('express');
const router = express.Router();
const jsonParser = express.json();
const AnswerConntrollers = require("../controllers/AnswerConntrollers")



router.get("/rest_api/questionlevelhtml1",AnswerConntrollers.getAnswerHtml1)
router.get("/rest_api/questionlevelhtml2",AnswerConntrollers.getAnswerHtml2)
router.get("/rest_api/questionlevelhtml3",AnswerConntrollers.getAnswerHtml3)
router.put("/rest_api/questionlevelhtml1",jsonParser,AnswerConntrollers.putAnswerHtml1)



module.exports = router;
