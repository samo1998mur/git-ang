
import { Component, OnInit, Output ,EventEmitter, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
})
export class Modal2Component implements OnInit {
  @Output() close = new EventEmitter<void>()
  @Output() ok = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

}
