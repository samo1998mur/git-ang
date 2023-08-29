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
export interface FormData{
  0:string,
  1:string,
  2:string,
  3:string,
  4:string
 }
@Injectable()
export class QuestionsService {
constructor(private http:HttpClient) { }
  getQuestions(id: string | null | undefined):Observable<QuestionsArray[]> {
    return this.http.get<QuestionsArray[]>('http://localhost:8000/api/rest_api/questionlevelhtml'+id)
    
  }
  putQuestions(formdata:FormData | null | undefined,id:string | null | undefined):Observable<FormData[]>{
    return this.http.put<FormData[]>('http://localhost:8000/api/rest_api/questionlevelhtml'+id,{formdata})
  }
}
