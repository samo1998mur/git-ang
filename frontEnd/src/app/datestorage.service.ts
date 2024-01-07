import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject, Subject } from "rxjs";

@Injectable(

)
export class DatestorageService implements OnDestroy  {
    public levelId = new ReplaySubject<string | null | undefined>()
    public answerAry = new ReplaySubject<any>()
    public levId:string | null | undefined;
    constructor() { }
   
    
    public chengelevelId(Id:string | null | undefined){
        this.levelId.next(Id)
        
    }
    public chengeArrey(ary:any){
        this.answerAry.next(ary)
        
    }
    ngOnDestroy(): void {
         this.levelId.next()
         this.answerAry.next()
    }   
  }