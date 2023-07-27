import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-questionsContainer',
  templateUrl: './questionsContainer.component.html',
  styleUrls: ['./questionsContainer.component.css']
})
export class QuestionsContainerComponent implements OnInit {
  formCheck :any  = ''
  isChkBoxShown = false
  ischkBoxHiden1 = false 
  ischkBoxHiden2 = false
  ischkBoxHiden3 = false


  constructor(private activerouter:ActivatedRoute,
              
             ) {}
  ngOnInit(): void {
  }
  toggle(){
    this.isChkBoxShown = !this.isChkBoxShown;
  }
  
 
}
