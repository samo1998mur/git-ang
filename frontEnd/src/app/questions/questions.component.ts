import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild,Input, OnDestroy } from '@angular/core';
import { QuestionsArray,QuestionsService } from './questions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { ModalComponent } from '../modal/modal.component';
import { RefDirective } from './ref.directive';
import { Subscription } from 'rxjs';
import { Modal2Component } from '../modal2/modal2.component';

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
export class QuestionsComponent implements OnInit{
  @ViewChild(RefDirective)
  refDir!: RefDirective;
  subscription:Subscription | undefined
  levelid:string | null | undefined;
  questionsArray:QuestionsArray[]=[];
  @Output() ischkBox = new EventEmitter<any>()
  @Output() correct = new EventEmitter<number>()
  
  form = new FormGroup({
    0: new FormControl('', Validators.required),
    1: new FormControl('', Validators.required),
    2: new FormControl('', Validators.required),
    3: new FormControl('', Validators.required),
    4: new FormControl('', Validators.required)
  });
  
  constructor(private service:QuestionsService,
              private activatedRoute: ActivatedRoute,
              private resolver: ComponentFactoryResolver) {
              }

  ngOnInit() {
    // this.activatedRoute.queryParamMap.subscribe((params) => {
    //   this.levelid = params.get('level')
    //   if(!!this.levelid){
    //     this.subscription = this.service.getQuestions(this.levelid)
    //     .subscribe((html_questions:QuestionsArray[]) => {
    //       this.questionsArray = html_questions;
        
    //     })
    //   }
    // })
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.levelid = params.get('level')
    })
    if(!!this.levelid){
      this.subscription = this.service.getQuestions(this.levelid).
      subscribe((html_questions:QuestionsArray[]) => {
        this.questionsArray = html_questions;
      })
    }
  }
  submit(){
    let resQuestions:any = [];
    let wrong:number = 0;
    let correct:number = 0 
    if(this.form.valid){
      const formDataQuestions = {...this.form.value}
      this.service.putQuestions(formDataQuestions,this.levelid).subscribe(dataRes => {
         resQuestions = dataRes;
         const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
         this.refDir.containerRef.clear()
         const component = this.refDir.containerRef.createComponent(modalFactory)
         for(let i=0; i<resQuestions.length; i++){
          resQuestions[i].isCorrect?correct += 1: wrong += 1
         }
         component.instance.ansver = resQuestions
         component.instance.correct = correct
         component.instance.wrong = wrong  
         component.instance.close.subscribe(() => {
                this.refDir.containerRef.clear()
                this.ischkBox.emit(false)
                
              })
          component.instance.toCheck.subscribe(() => {
          
          })
          })
          
      this.correct.emit(correct)
      this.form.reset()
    } 
   
    }
      
  }
 






