import { Component, OnInit, Output ,EventEmitter, OnDestroy} from '@angular/core';
import { FormData } from '../questions/questions.service';
import { filter } from 'rxjs/operators';
// import { FormData, QuestionsArray,QuestionsService } from './questions/q;



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
  @Output() close = new EventEmitter<void>()
  @Output() toCheck = new EventEmitter<void>()
  ansver = []
  title:string = ''
  wrong:number = 0
  correct:number = 0

  constructor() { }



}
