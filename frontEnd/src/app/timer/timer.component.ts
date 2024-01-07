import { Component, EventEmitter, OnInit, Output,OnDestroy, Input} from '@angular/core';
import { calculateRemainingTime, dateCreator } from './../utils/utils';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy{
 
  private expireDate:Date =  dateCreator({ mins:1,seconds: 50 });
  public remainingTime!: string;
  private timerId!: ReturnType<typeof setInterval>;
  @Output() Counter = new EventEmitter();
  ngOnInit(): void {
   
    if (this.expireDate) {
   
      this.timerTickFn();
      if (this.remainingTime) {
        this.timerId = setInterval(this.timerTickFn, 1000);
        
      }
    }
  }

  private timerTickFn = () => {
    this.remainingTime = calculateRemainingTime(this.expireDate);
    this.Counter.emit(this.remainingTime )
    if (!this.remainingTime) {
      clearInterval(this.timerId);
      

    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }
}



