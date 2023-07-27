import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export interface QuestionsArray{
  id:number,
  question:string,
  answers:[{
    id:number,
    answer:string
  }]
}

@Injectable()
export class QuestionsService {
constructor(private http:HttpClient) { }
  getQuestions(id: string | null | undefined):Observable<QuestionsArray[]> {
    return this.http.get<QuestionsArray[]>('http://localhost:8000/rest_api/questionlevelhtml'+id)
    
  }
}
