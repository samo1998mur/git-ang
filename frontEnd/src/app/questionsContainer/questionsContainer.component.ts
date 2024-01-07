import { Component,ComponentFactoryResolver,Input,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Ref2Directive } from './ref2.directive';
import { Ref1Directive } from './ref1.directive';
import { Modal2Component } from '../modal2/modal2.component';
import { TimeDirective } from './time.directive';
import { TimeModalComponent } from '../time-modal/time-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { CacheService } from '../cache/cache.service';


@Component({
  selector: 'app-questionsContainer',
  templateUrl: './questionsContainer.component.html',
  styleUrls: ['./questionsContainer.component.css']
})
export class QuestionsContainerComponent{


  // formCheck :any  = ''
  isChkBoxShown:boolean = false
  ischkBoxHiden1:boolean = false 
  ischkBoxHiden2:boolean = true
  ischkBoxHiden3:boolean = true
  ischkBoxHtml:boolean = false
  @ViewChild(Ref2Directive)
  refDir2!: Ref2Directive;
  @ViewChild(Ref1Directive)
  refDir1!: Ref1Directive;
  @ViewChild(TimeDirective)
  appTime!: TimeDirective;
  

  constructor(private activerouter:ActivatedRoute,
    private resolver2: ComponentFactoryResolver,
    private router: Router,
    private readonly cache: CacheService
  
                 ) {
              
             }
   
             
  toggle(){
    this.isChkBoxShown = !this.isChkBoxShown;
    
  }
  ischkBox1(newItem:boolean){
    this.ischkBoxHtml = newItem
  }
  togglehtml1(){
    const modalFactory = this.resolver2.resolveComponentFactory(Modal2Component)
    this.refDir2.containerRef2.clear()
    const component = this.refDir2.containerRef2.createComponent(modalFactory)
    component.instance.close.subscribe(() => {
      this.refDir2.containerRef2.clear()
       })
    component.instance.ok.subscribe(() => {
      this.refDir2.containerRef2.clear()
      this.ischkBoxHtml===false?this.ischkBoxHtml=!this.ischkBoxHtml:this.ischkBoxHtml=true
    })
  }
  togglehtml2(){
    this.ischkBoxHtml===false?this.ischkBoxHtml=!this.ischkBoxHtml:this.ischkBoxHtml=true
  }
  isCorrect(correct:number){
    const modalFactory = this.resolver2.resolveComponentFactory(ModalComponent)
    this.refDir1.containerRef1.clear()
    const component = this.refDir1.containerRef1.createComponent(modalFactory)
    component.instance.correct = correct
    component.instance.wrong = 5-component.instance.correct 
    component.instance.close.subscribe(() => {
        this.refDir1.containerRef1.clear()
    })
    component.instance.toCheck.subscribe(() => {
      this.router.navigate(['/questions/tochect']);
      })
    correct >= 4 ? this.ischkBoxHiden2 = false:this.ischkBoxHiden2 = true
  }
  
  timCounter(newItem:string){
    if(newItem==="null"){
        this.ischkBoxHtml=!this.ischkBoxHtml  
        const modalFactory = this.resolver2.resolveComponentFactory(TimeModalComponent)
        this.appTime.containerTime.clear()
        const component = this.appTime.containerTime.createComponent(modalFactory)
        component.instance.ok.subscribe(() =>{
          this.appTime.containerTime.clear()
           
        })  
      }
       
  }
}
