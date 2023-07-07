import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
export interface QuesHtml{
    postId?:number,
    id?:number,
    name:string,
    body:string
}

@Injectable()
export class QuestionsService {
constructor(private http:HttpClient){}
   getParams1():Observable<QuesHtml[]> {
     return this.http.get<QuesHtml[]>('https://jsonplaceholder.typicode.com/comments?postId=1')
   }
   getParams2():Observable<QuesHtml[]> {
     return this.http.get<QuesHtml[]>('https://jsonplaceholder.typicode.com/comments?postId=2')
  }
  getParams3():Observable<QuesHtml[]> {
     return this.http.get<QuesHtml[]>('https://jsonplaceholder.typicode.com/comments?postId=3')
 }

}