import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { QuestionsService,QuesHtml } from './questions.service';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  isChkBoxShown = false
  quesHtml:QuesHtml[]=[]
  ischkBoxHiden1 = false 
  ischkBoxHiden2 = false
  ischkBoxHiden3 = false


  constructor(private activerouter:ActivatedRoute,
              private service:QuestionsService,
             ) {}
  ngOnInit(): void {
  }
  togle(){
    this.isChkBoxShown = !this.isChkBoxShown;
  }
  levalHtml1(){
    this.activerouter.queryParams.subscribe(routParams => {
      if(routParams.level === 'levelHtml1'){
        this.service.getParams1()
            .subscribe((ques:QuesHtml[]) => {
               this.quesHtml = ques
               console.log(this.quesHtml)
               this.ischkBoxHiden1 = true;
              
            })
      }
    
    })
    
   }

   levalHtml2(){
    this.activerouter.queryParams.subscribe(routParams => {
      if(routParams.level === 'levelHtml2'){
        this.service.getParams2()
            .subscribe((ques:QuesHtml[]) => {
               this.quesHtml = ques
               console.log(this.quesHtml)
               this.ischkBoxHiden2 = true;
              
            })
      }
    
    })
   }
   levalHtml3(){
    this.activerouter.queryParams.subscribe(routParams => {
      if(routParams.level === 'levelHtml2'){
        this.service.getParams3()
            .subscribe((ques:QuesHtml[]) => {
               this.quesHtml = ques
               console.log(this.quesHtml)
               this.ischkBoxHiden3 = true;
              
            })
      }
    
    })
   }
 

}
