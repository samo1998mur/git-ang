import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, Input, OnDestroy } from '@angular/core';
import { QuestionsArray, QuestionsService } from './questions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatestorageService } from '../datestorage.service';




export interface ParamsAsMap {
  params: [{
    level: string
  }]
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit,OnDestroy {
  // subscription: Subscription | undefined
 
  levelid: string | null | undefined;
  questionsArray: QuestionsArray[] = [];
  @Output() ischkBox = new EventEmitter<any>()
  @Output() correct = new EventEmitter<number>()
  
  form = new FormGroup({
    0: new FormControl('', Validators.required),
    1: new FormControl('', Validators.required),
    2: new FormControl('', Validators.required),
    3: new FormControl('', Validators.required),
    4: new FormControl('', Validators.required)
  });

  constructor(private service: QuestionsService,
    private activatedRoute: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private router: Router,
    private readonly datestorageService:DatestorageService
    ) {
  }
  

  ngOnInit() {

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.levelid = params.get('level')
    })
    if (!!this.levelid) {
      // this.subscription = 
      this.service.getQuestions(this.levelid).
        subscribe((html_questions: QuestionsArray[]) => {
          this.questionsArray = html_questions;
        })
    }
  }
  public submit() {
    let resQuestions: any = [];
    let wrong: number = 0;
    let correct: number = 0
    if(this.datestorageService.levelId)this.datestorageService.chengelevelId(this.levelid)
    if (this.form.valid) {
      this.router.navigate(['/questions']);
      const formDataQuestions = { ...this.form.value}
      this.service.putQuestions(formDataQuestions, this.levelid).subscribe(dataRes => {
        resQuestions = dataRes; 
       for (let i = 0; i < resQuestions.length; i++) {
          resQuestions[i].isCorrect ? correct += 1 : wrong += 1
        }
        if(this.datestorageService.levelId)this.datestorageService.chengeArrey(resQuestions)
         
        
        
        this.correct.emit(correct)
        this.ischkBox.emit(false)
      })
      
      this.correct.emit(correct)
      this.form.reset()

    }

  }
  ngOnDestroy(): void {
    this.datestorageService.levelId.next()
    // this.datestorageService.levelId.unsubscribe()
  }

}







