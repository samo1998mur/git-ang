import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-time-modal',
  templateUrl: './time-modal.component.html',
  styleUrls: ['./time-modal.component.css']
})
export class TimeModalComponent implements OnInit {
  @Output() ok = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

}
