import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestionsArray,QuestionsService } from './questions.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
// import { EventEmitter } from 'stream';
 export interface ParamsAsMap{
  params:[{
    level: string
  }]
 }
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  levelid:string | null | undefined;
  questionsArray:QuestionsArray[]=[]
  form = new FormGroup({
    answer1: new FormControl('', Validators.required),
    answer2: new FormControl('', Validators.required),
    answer3: new FormControl('', Validators.required),
    answer4: new FormControl('', Validators.required),
    answer5: new FormControl('', Validators.required)
  });
  
  constructor(private service:QuestionsService,
              private activatedRoute: ActivatedRoute) {
              }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.levelid = params.get('level')
      if(!!this.levelid){
      this.service.getQuestions(this.levelid)
      .subscribe((html_questions:QuestionsArray[]) => {
        this.questionsArray = html_questions;
        
      })
    }
    })
    }

  submit(){
     if(this.form.valid){
      console.log(this.form)
       const formData = {...this.form.value}
       console.log(formData)
      this.form.reset()
     }
  } 
}


