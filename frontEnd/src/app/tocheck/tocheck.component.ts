import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatestorageService } from '../datestorage.service';
import { QuestionsArray, TocheckService } from './tocheck.service';

@Component({
  selector: 'app-tocheck',
  templateUrl: './tocheck.component.html',
  styleUrls: ['./tocheck.component.css'],
  
})
export class TocheckComponent implements OnInit , OnDestroy {
  questionsArray: QuestionsArray[] = [];
  public answerAry:any=[]
  constructor( 
    private readonly datestorageService:DatestorageService, 
    private  tocheckService:TocheckService,  
    ) { 
    
    }

  ngOnInit(): void {
    this.datestorageService.levelId.subscribe((lid:string | null | undefined)=> this.log(lid))
    this.datestorageService.answerAry.subscribe((lib:any)=> this.answerAry=lib)
   

  }
  private log(levid: string | null | undefined): void {
    if(!!levid){
    this.tocheckService.getQuestions(levid).
    subscribe((html_questions: QuestionsArray[]) => {
      this.questionsArray = html_questions;
    })
  }
    
  }
  ngOnDestroy(): void {
    this.datestorageService.levelId.next()
  }

}
