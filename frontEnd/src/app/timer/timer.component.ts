import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {timer} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent  {
  @Output() Counter = new EventEmitter();
  minute=1;
  counter:number = 60;
  
  constructor(){
   
      console.log("klor")
      timer(1000, 1000) //Initial delay 1 seconds and interval countdown also 1 second
        .pipe(
          takeWhile( () => this.counter > 0 ),
          tap(() => this.counter--),
          )
        .subscribe( tim => {
          this.Counter.emit(tim)
        }
          );
  }

}
